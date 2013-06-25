require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        underscore: '../components/underscore-amd/underscore', // amd version
        underscoreM: 'libs/underscore/underscore-mustache',  // templating supporting mustache style {{ ... }}
        backbone: '../components/backbone-amd/backbone', // amd version
        'backbone.wreqr': '../components/backbone.wreqr/lib/amd/backbone.wreqr', // amd version
        'backbone.eventbinder': '../components/backbone.eventbinder/lib/amd/backbone.eventbinder', // amd version
        'backbone.babysitter': '../components/backbone.babysitter/lib/amd/backbone.babysitter', // amd version
        marionette: '../components/marionette/lib/core/amd/backbone.marionette',  // amd version
        bootstrap: '../components/sass-bootstrap/docs/assets/js/bootstrap',
        text: '../components/requirejs-text/text',
        jitGraph: 'libs/jitGraph/Graph',
        leaflet: '../components/leaflet/dist/leaflet-src'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        jitGraph: {
            deps: ['jquery']
        }
    }
});

require(['backbone', 'app', 'controllers/pageController'], function(Backbone, App, PageController) {
    'use strict';

    var options = {
            pageController: PageController
        };

    App.start(options);
});
