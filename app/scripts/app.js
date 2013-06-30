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
        'models/graph',
        'i18next',
        'handlebars',
        'leaflet',
        'bootstrap' ], function(Backbone, _, Marionette, vent, TemplateView, NavigationView, CompositeView, MainView, StoryView, IntroView, Graph, I18next) {
    'use strict';

    var app = new Marionette.Application();

    // these regions correspond to #ID's in the index.html 
    app.addRegions({
        header: 'header',
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
        app.appView = new MainView({model: app.graph.getNode(nodeId), map: app.map});
        app.content.show(app.appView);
        var compView = new CompositeView({collection: app.graph.getClosest(nodeId,7),vent: vent});
        app.related.show(compView);
        if (isFirstCall){
            console.log('registered events');
            var callUpdateLine = function(){
                app.appView.updateLine();
            };
            app.map.on('zoomend', callUpdateLine);
            app.map.on('moveend', callUpdateLine);
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

    app.addInitializer(function(options) {
        Marionette.Handlebars = {
            path: 'scripts/templates/',
            extension: '.htm'
        };
        Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
            var template, templateUrl;
            if (window.Handlebars.templates && window.Handlebars.templates[templateId]) {
                return '[precompiled]';
            }
            template = Marionette.$(templateId).html();
            if (!template || template.length === 0) {
                templateUrl = Marionette.Handlebars.path + templateId + Marionette.Handlebars.extension;
                Marionette.$.ajax({
                    url: templateUrl,
                    success: function(data) {
                        template = data;
                    },
                    async: false
                });
                if (!template || template.length === 0){
                    throw 'NoTemplateError - Could not find template: \'' + templateUrl + '\'';
                }
            }
            return template;
        };

        Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
            // if (window.Handlebars.templates && window.Handlebars.templates[templateId]) {
            //     return window.Handlebars.templates[templateId];
            // }
            return window.Handlebars.compile(rawTemplate);
        };

        window.Handlebars.registerHelper('t', function(i18nKey) {
            var result = I18next.t(i18nKey);
            return new window.Handlebars.SafeString(result);
        });

        app.graph = new Graph();

        //app.header.show(new TemplateView({tmplt:templates.header}));

        //render map
        //app.navigation.show(new NavigationView());
        var map = window.L.map('map', {
            dragging: false,
            attributionControl: false
        }).setView([34.399, 134.015], 14);
        app.map = map;
        window.L.tileLayer('http://{s}.tile.cloudmade.com/a57b9e7194ea41bba4ed92f6d3022766/99822/256/{z}/{x}/{y}.png', {
            attribution: 'Map data © OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(map);
        var geoJson = new Graph().getGeoJson();
        var onEachFeature = function(feature, layer) {
            var onClickFeature = function(e){
                var nodeId = e.target.feature.properties.nodeId;
                window.location.href = '#node/'+nodeId;
            };
            layer.on('click', onClickFeature);
        };
        window.L.geoJson(geoJson,{onEachFeature: onEachFeature}).addTo(map);

        //app.footer.show(new TemplateView({tmplt:templates.footer}));

        new options.pageController.Router({
            controller: options.pageController // wire-up the start method
        });
    });

    // export the app
    return app;
});