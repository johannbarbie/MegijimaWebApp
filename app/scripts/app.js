define(['backbone', 'underscoreM', 'marionette', 'vent', 'views/templateView', 'views/navigationView', 'views/compositeView', 'views/mainView', 'models/graph', 'leaflet', 'bootstrap' ], function(Backbone, _, Marionette, vent, TemplateView, NavigationView, CompositeView, MainView, Graph) {
    'use strict';

    var app = new Marionette.Application();

    // these regions correspond to #ID's in the index.html 
    app.addRegions({
        header: 'header',
        content: '#content',
        navigation: '#navigation',
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
        var compView = new CompositeView({collection: app.graph.getClosest(nodeId,7)});
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

    app.addInitializer(function(options) {
        // configure for loading templates stored externally...
        Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
            // Marionette expects "templateId" to be the ID of a DOM element.
            // But with RequireJS, templateId is actually the full text of the template.
            var template = templateId;

            // Make sure we have a template before trying to compile it
            if (!template || template.length === 0) {
                var msg = 'Could not find template: "' + templateId + '"';
                var err = new Error(msg);
                err.name = 'NoTemplateError';
                throw err;
            }

            return template;
        };

        app.graph = new Graph();

        //app.header.show(new TemplateView({tmplt:templates.header}));

        //render map
        //app.navigation.show(new NavigationView());
        var map = window.L.map('map', {
            dragging: false,
            attributionControl: false
        }).setView([34.39, 134.02], 14);
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