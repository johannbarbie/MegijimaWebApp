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
        'views/imageView',
        'models/graph',
        'i18next',
        'handlebars',
        'llMarkerClusterer',
        'bootstrap' ], function(Backbone, _, Marionette, vent, ModalRegion, CompositeView, MainView, IntroView, LanguageView, CreditsView, ImageView, Graph, I18next) {
    'use strict';

    var app = new Marionette.Application();

    // these regions correspond to #ID's in the index.html 
    app.addRegions({
        header: '#lngContainer',
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
            //vent.trigger('app:show');
        }else{
            app.related.close();
            app.content.close();
            //vent.trigger('app:show');
        }
        vent.trigger('app:show');
    });

    vent.on('app:show', function() {
        if (!app.currNode){
            return;
        }
        var data = app.graph.getNode(app.currNode);
        if (!app.logo.currentView){
            app.logo.currentView.setColor(data.get('data').logoColor);
        }
        var appView = new MainView({model: data, map: app.map});
        app.content.show(appView);
        var relNodes = app.graph.getClosest(app.currNode,7);
        var compView = new CompositeView({collection: relNodes,vent: vent});
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
        if (!app.logo.currentView){
            app.logo.show(new IntroView());
        }else{
            app.logo.currentView.enlarge();
            app.currNode = undefined;
            app.related.close();
            app.content.close();
            vent.trigger('map:display', function(){
                //do something
            });
        }
    });

    vent.on('app:background', function(){
        if (app.content.currentView && app.content.currentView.enlarged){
            app.content.currentView.shrink();
        }else if (app.content.currentView){
            if (!app.background){
                app.content.currentView.fadeOut(function(){
                    app.modal.show(new ImageView({nodeId: app.currNode, modal: app.modal}));
                });
                app.related.currentView.fadeOut();
                $('#map').animate({'opacity': 0},500);
                app.background=true;
            }else{
                app.content.currentView.fadeIn();
                app.related.currentView.fadeIn();
                $('#map').animate({'opacity': 1},500);
                app.background=false;
            }
        }
    });
    //a state after clicking the logo, to show the map big
    vent.on('app:map', function(){
        if (!app.logo.currentView){
            app.logo.show(new IntroView({renderSmall:true}));
        }
        //disable content, if active before
        app.currNode = undefined;
        app.related.close();
        app.content.close();
        //show map and points
        vent.trigger('map:display', function(e){
            vent.trigger('map:showPOIs', function(){
                console.log(e);
            });
        }, {lat: 34.394987, lng: 134.078989}, 15);
        //crossfade background
        var jCF = $('#crossfade');
        var oldImg = jCF.children(':first').next();
        oldImg.animate({'opacity': 0},100);
    });

    //a point on the map has been clicked
    vent.on('map:clickPoi', function(nodeId){
        //only shrink the main view, if it's enlarged
        if (app.content.currentView && app.content.currentView.enlarged){
            app.content.currentView.shrink();
            return;
        }
        app.currNode = nodeId;
        //display logo small if it didn't exist yet
        if (!app.logo.currentView){
            app.logo.show(new IntroView({renderSmall:true}));
        }else{
            vent.trigger('intro:shrink');
        }
        //display map, then call changeView
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
                app.map.setViewWithOffset(newCenter, 15);
            }
            vent.trigger('app:changeView');
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

    vent.on('map:removePOIs', function(){
        app.markers.clearLayers();
    });

    //put all the pois on the map
    vent.on('map:showPOIs', function(callback){
        if (!app.markers){
            var geoJson = new Graph().getGeoJson();
            console.dir(geoJson);
            var onEachFeature = function(feature, layer) {
                layer.on('click', function(e){
                    var nodeId = e.target.feature.properties.nodeId;
                    window.Backbone.history.navigate('node/'+nodeId,true);
                });
            };
            // var selectedMarkerOptions = {
            //     radius: 18,
            //     fillColor: '#88b440',
            //     color: '#000',
            //     weight: 1,
            //     opacity: 1,
            //     fillOpacity: 0.8
            // };
            // var relatedMarkerOptions = {
            //     radius: 16,
            //     fillColor: '#88b440',
            //     color: '#000',
            //     weight: 1,
            //     opacity: 1,
            //     fillOpacity: 0.8
            // };
            var otherMarkerOptions = {
                radius: 14,
                fillColor: '#88b440',
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            };
            app.map.once('layeradd', function() {
                    callback();
                });
            app.map.on('click', function(e){
                if (!app.background){
                    if (e.latlng.lng < 134.035593){
                        vent.trigger('app:background');
                    }
                }else{
                    vent.trigger('app:background');
                }
            });
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
                    return window.L.circleMarker(latlng, otherMarkerOptions);
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
        if (app.map.getZoom()<app.options.maxZoom){
            app.map.setViewWithOffset(latlng,+1);
        }
    });

    vent.on('app:zoomOut', function(latlng){
        if (app.map.getZoom()>app.options.minZoom){
            app.map.setViewWithOffset(latlng,-1);
        }
    });

    app.addInitializer(function(options) {
        app.options = options;
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
            doubleClickZoom: false,
            scrollWheelZoom: false,
            touchZoom: false,
            boxZoom: false,
            tap: false,
            tapTolerance: 50,
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