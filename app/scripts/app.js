define(['backbone', 'underscoreM', 'marionette', 'vent', 'views/templateView', 'views/navigationView', 'views/compositeView', 'views/mainView', 'models/graph', 'templates', 'bootstrap' ], function(Backbone, _, Marionette, vent, TemplateView, NavigationView, CompositeView, MainView, Graph, templates) {
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
        var appView = new MainView({model: app.graph.getNode(nodeId)});
        app.content.show(appView);
        var compView = new CompositeView({collection: app.graph.getClosest(nodeId,3)});
        app.related.show(compView);
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

        app.header.show(new TemplateView({tmplt:templates.header}));

        app.navigation.show(new NavigationView());

        app.footer.show(new TemplateView({tmplt:templates.footer}));

        new options.pageController.Router({
            controller: options.pageController // wire-up the start method
        });
    });

    // export the app
    return app;
});