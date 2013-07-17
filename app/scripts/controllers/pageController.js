define(['marionette', 'vent'], function(Marionette, vent) {
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
        vent.trigger('app:map');
    };

    Controller.showCredits = function() {
        vent.trigger('app:credits');
    };

    Controller.showTemplate = function(nodeId) {
        vent.trigger('map:clickPoi', nodeId);
    };

    return Controller;
});