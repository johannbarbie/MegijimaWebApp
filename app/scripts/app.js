define(['backbone',
        'underscoreM',
        'marionette',
        'vent',
        'views/modalRegion',
        'views/compositeView',
        'views/mainView',
        'views/introView',
        'views/languageView',
        'views/creditsView',
        'models/graph',
        'i18next',
        'handlebars',
        'llMarkerClusterer',
        'bootstrap' ], function(Backbone, _, Marionette, vent, ModalRegion, CompositeView, MainView, IntroView, LanguageView, CreditsView, Graph, I18next) {
    'use strict';

    var app = new Marionette.Application();

    // these regions correspond to #ID's in the index.html 
    app.addRegions({
        header: 'header',
        logo: '#logoView',
        content: '#content',
        related: '#related',
        modal: new ModalRegion({el:'#modal'})
    });

    // marionette app events...
    app.on('initialize:after', function() {
        if (Backbone.history){
            Backbone.history.start();
        }
    });

    //prepare fadeout 
    vent.on('app:changeView', function() {
        if (!app.content.currentView){
            vent.trigger('app:show');
        }else{
            app.related.close();
            app.content.close();
        }
    });

    vent.on('app:show', function() {
        if (!app.currNode){
            return;
        }
        var appView = new MainView({model: app.graph.getNode(app.currNode), map: app.map});
        app.content.show(appView);
        var compView = new CompositeView({collection: app.graph.getClosest(app.currNode,7),vent: vent});
        app.related.show(compView);
        app.header.show(new LanguageView({'app':app}));
    });

    //show credits as modal view
    vent.on('app:credits', function(isOpen){
        if (!isOpen){
            app.modal.show(new CreditsView());
        }else{
            app.modal.close();
        }
    });

    //blank index called, fade in logo
    vent.on('app:index', function(){
        app.logo.show(new IntroView());
    });

    //a state after clicking the logo, to show the map big
    vent.on('app:map', function(){
        app.currNode = undefined;
        app.related.close();
        app.content.close();
        if (app.logo.currentView){
            vent.trigger('intro:shrink');
        }else{
            app.logo.show(new IntroView({renderSmall:true}));
        }
        $('img.bg').animate({'opacity': 1},700,function(){
            vent.trigger('map:display', function(e){
                vent.trigger('map:showPOIs', function(){
                    console.log(e);
                });
            }, {lat: 34.394987, lng: 134.078989}, 15);
        });
    });

    //a point on the map has been clicked
    vent.on('map:clickPoi', function(nodeId){
        app.currNode = nodeId;
        if(!app.mapInitialized){
            vent.trigger('map:display', function(){
                vent.trigger('app:changeView');
            });
        }else{
            var newCenter = app.map.options.megiCenter;
            var curCenter = app.map.getCenterWithOffset();
            if (curCenter.lng!==newCenter.lng ||
                curCenter.lat !== newCenter.lat ||
                app.map.getZoom() !==15){
                app.map.once('moveend', function() {
                    vent.trigger('app:changeView');
                });
                app.map.setViewWithOffset(newCenter, 15);
            }else{
                vent.trigger('app:changeView');
            }
        }
    });

    //display the map
    vent.on('map:display', function(callback,center,zoom){
        var newCenter = center||app.map.options.megiCenter;
        var newZoom = zoom||15;
        var setLoc = function(firstZoom){
            var curCenter;
            if (!firstZoom){
                curCenter = app.map.getCenterWithOffset();
            }
            if (firstZoom || curCenter.lng!==newCenter.lng ||
                curCenter.lat !== newCenter.lat ||
                app.map.getZoom() !==newZoom){
                app.map.once('moveend', function(e) {
                    if (callback){
                        callback(e);
                    }
                });
                app.map.setViewWithOffset(newCenter, newZoom);
            }else{
                if (callback){
                    callback();
                }
            }
        };
        if (!app.mapInitialized){
            window.L.Icon.Default.imagePath = 'images/leaflet';
            window.L.tileLayer('images/tiles/{z}/{x}/{y}.png', {
                attribution: 'Map data © OpenStreetMap contributors',
                maxZoom: 17,
                minZoom: 14
            }).addTo(app.map);
            app.mapInitialized = true;
            setLoc(true);
        }else{
            setLoc();
        }
    });

    //put all the pois on the map
    vent.on('map:showPOIs', function(callback){
        if (!app.markers){
            var geoJson = new Graph().getGeoJson();
            var onEachFeature = function(feature, layer) {
                layer.on('click', function(e){
                    var nodeId = e.target.feature.properties.nodeId;
                    window.Backbone.history.navigate('node/'+nodeId,true);
                });
            };
            var geojsonMarkerOptions = {
                radius: 16,
                fillColor: '#88b440',
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            };
            app.map.once('layeradd', function() {
                    callback();
                });
            // app.map.on('click', function(){
            //     vent.trigger('app:zoomOut');
            // });
            var markers = window.L.markerClusterGroup({
                maxClusterRadius: 40,
                animateAddingMarkers: true,
                zoomToBoundsOnClick: false,
                spiderfyDistanceMultiplier: 2
            });
            markers.on('clusterclick', function (a) {
                vent.trigger('app:zoomIn',a.latlng);
                //map.addLayer(new L.Polygon(a.layer.getConvexHull()));
            });
            var geoJsonLayer = window.L.geoJson(geoJson,{
                onEachFeature: onEachFeature,
                pointToLayer: function (feature, latlng) {
                    return window.L.circleMarker(latlng, geojsonMarkerOptions);
                }
            });
            markers.addLayer(geoJsonLayer);
            app.map.addLayer(markers);
            app.markers = markers;
        }else{
            callback();
        }
    });


    vent.on('app:zoomIn', function(latlng){
        //var node = app.graph.getNode(app.currNode).get('coordinates');
        //app.map.setViewWithOffset([node[1],node[0]],+1);
        app.map.setViewWithOffset(latlng,+1);
    });

    vent.on('app:zoomOut', function(latlng){
        //var node = app.graph.getNode(app.currNode).get('coordinates');
        //app.map.setViewWithOffset([node[1],node[0]],-1);
        app.map.setViewWithOffset(latlng,-1);
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
        map.getCenterWithOffset = function(){
            var targetPoint = map.project(map.getCenter(), map.getZoom()).add([map.options.mapOffset / 2, 0]);
            var targetLatLng = map.unproject(targetPoint, map.getZoom());
            targetLatLng.lng = Math.round(targetLatLng.lng * 1000000) / 1000000;
            return targetLatLng;
        };
        app.map = map;

        new options.pageController.Router({
            controller: options.pageController // wire-up the start method
        });
    });

    // export the app
    return app;
});