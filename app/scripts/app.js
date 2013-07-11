define(['backbone',
        'underscoreM',
        'marionette',
        'vent',
        'views/templateView',
        'views/navigationView',
        'views/compositeView',
        'views/mainView',
        'views/storyView',
        'views/introView',
        'views/languageView',
        'models/graph',
        'i18next',
        'handlebars',
        'leaflet',
        'bootstrap' ], function(Backbone, _, Marionette, vent, TemplateView, NavigationView, CompositeView, MainView, StoryView, IntroView, LanguageView, Graph, I18next) {
    'use strict';

    var app = new Marionette.Application();

    // these regions correspond to #ID's in the index.html 
    app.addRegions({
        header: 'header',
        intro: '#intro',
        content: '#content',
        related: '#related',
        footer: 'footer'
    });

    // marionette app events...
    app.on('initialize:after', function() {
        if (Backbone.history){
            Backbone.history.start();
        }
    });

    vent.on('app:show', function(nodeId) {
        var isFirstCall = (app.appView===undefined);
        app.currNode = nodeId;
        app.appView = new MainView({model: app.graph.getNode(nodeId), map: app.map});
        app.content.show(app.appView);
        var compView = new CompositeView({collection: app.graph.getClosest(nodeId,7),vent: vent});
        app.related.show(compView);
        if (isFirstCall){
            var callUpdateLine = function(){
                app.appView.updateLine();
            };
            app.map.on('zoomend', callUpdateLine);
            app.map.on('moveend', callUpdateLine);
        }
    });

    vent.on('app:setLang', function(lng) {
        I18next.setLng(lng);
        if (app.currNode!==undefined){
            vent.trigger('app:show', app.currNode);
        }
    });

    vent.on('app:modal', function(viewName) {
        var view = null;
        if (viewName==='story'){
            view = new StoryView();
        }else{
            view = new IntroView();
        }
        app.modal.show(view);
    });

    vent.on('app:index', function(){
        app.intro.show(new IntroView());
    });

    vent.on('app:start', function(){
        app.map.setView([34.396, 134.050],15);
    });

    vent.on('app:zoomIn', function(){
        var node = app.graph.getNode(app.currNode).get('coordinates');
        app.map.setViewWithOffset([node[1],node[0]],+1);
        //app.map.setViewWithOffset(undefined,+1);
    });

    vent.on('app:zoomOut', function(){
        var node = app.graph.getNode(app.currNode).get('coordinates');
        app.map.setViewWithOffset([node[1],node[0]],-1);
        //app.map.setViewWithOffset(undefined,-1);
    });

    app.addInitializer(function(options) {
        Marionette.Handlebars = {
            path: 'scripts/templates/',
            extension: '.htm'
        };
        Marionette.Region.prototype.open = function(view){
            this.$el.hide();
            this.$el.html(view.el);
            //this.$el.fadeIn();
            this.$el.slideDown('slow');
        };
        Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
            var template, templateUrl;
            if (window.Handlebars.templates && window.Handlebars.templates[templateId]) {
                return '[precompiled]';
            }
            template = Marionette.$(templateId).html();
            if (!template || template.length === 0) {
                template = $('#'+templateId).html();
                if (!template || template.length === 0){
                    throw 'NoTemplateError - Could not find template: \'' + templateUrl + '\'';
                }
            }
            return template;
        };

        Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
            return window.Handlebars.compile(rawTemplate);
        };

        window.Handlebars.registerHelper('t', function(i18nKey) {
            var result = I18next.t(i18nKey);
            return new window.Handlebars.SafeString(result);
        });

        app.graph = new Graph();

        app.header.show(new LanguageView());

        //render map

        var map = window.L.map('map', {
            dragging: false,
            attributionControl: false,
            zoomControl: false,
            mapOffset: options.mapOffset,
            megiCenter: options.megiCenter,
            graph: app.graph
        });
        map.setViewWithOffset = function(targetPoint, targetZoom){
            targetZoom = (targetZoom === undefined)?map.getZoom():
                (targetZoom === -1)?map.getZoom()-1:
                (targetZoom === 1)?map.getZoom()+1:targetZoom;
            targetPoint = (targetPoint === undefined)?map.options.megiCenter:targetPoint;
            targetPoint = map.project(targetPoint, targetZoom).subtract([map.options.mapOffset / 2, 0]);
            var targetLatLng = map.unproject(targetPoint, targetZoom);
            map.setView(targetLatLng,targetZoom);
        };
        map.setViewWithOffset(options.megiCenter, 13);
        app.map = map;
        window.L.Icon.Default.imagePath = 'images/leaflet';
        window.L.tileLayer('images/tiles/{z}/{x}/{y}.png', {
            attribution: 'Map data © OpenStreetMap contributors',
            maxZoom: 16,
            minZoom: 13
        }).addTo(map);
        var geoJson = new Graph().getGeoJson();
        var onEachFeature = function(feature, layer) {
            var onClickFeature = function(e){
                var nodeId = e.target.feature.properties.nodeId;
                var node = map.options.graph.getNode(nodeId).get('coordinates');
                map.setViewWithOffset([node[1],node[0]], 14);
                //map.setViewWithOffset(undefined, 14);
                window.location.href = '#node/'+nodeId;
            };
            layer.on('click', onClickFeature);
        };
        var geojsonMarkerOptions = {
            radius: 8,
            fillColor: '#ff7800',
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        };

        window.L.geoJson(geoJson,{
            onEachFeature: onEachFeature,
            pointToLayer: function (feature, latlng) {
                return window.L.circleMarker(latlng, geojsonMarkerOptions);
            }
        }).addTo(map);

        //app.footer.show(new TemplateView({tmplt:templates.footer}));

        new options.pageController.Router({
            controller: options.pageController // wire-up the start method
        });
    });

    // export the app
    return app;
});