define(['marionette', 'views/templateView', 'vent'], function(Marionette, TemplateView, vent) {
    'use strict';

    var Controller = {};

    // private module/app router  capture route and call start method of our controller
    Controller.Router = Marionette.AppRouter.extend({
        appRoutes: {
            '': 'showIndex',
            'map': 'showMap',
            'credits': 'showCredits',
            'node/:nodeId': 'showTemplate'
        }
    });

    Controller.showIndex = function() {
        vent.trigger('app:index');
    };

    Controller.showMap = function() {
        vent.trigger('app:index');
    };

    Controller.showCredits = function() {
        vent.trigger('app:index');
    };

    Controller.showTemplate = function(nodeId) {
        vent.trigger('map:clickPoi', nodeId);
    };

    return Controller;
});