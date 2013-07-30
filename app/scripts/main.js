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
        leaflet: '../components/leaflet/dist/leaflet',
        llMarkerClusterer: '../components/leaflet.markerclusterer/dist/leaflet.markercluster',
        videojs: '../components/video.js/video',
        handlebars: '../components/handlebars/handlebars',
        i18next: '../components/i18next/release/i18next.amd-1.6.3.min',
        dotdotdot: 'libs/dotdotdot/jquery.dotdotdot-1.5.9'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        jitGraph: {
            deps: ['jquery']
        },
        llMarkerClusterer: {
            deps: ['leaflet']
        },
        dotdotdot: {
            deps: ['jquery']
        }
    }
});

require(['backbone', 'app', 'controllers/pageController', 'i18next', 'models/lngEnglish', 'models/lngJapan'], function(Backbone, App, PageController, I18next, english, japanese) {
    'use strict';

    var options = {
            pageController: PageController,
            megiCenter: {lat: 34.397987, lng: 134.048989},
            mapOffset: 1400,
            minZoom: 14,
            maxZoom: 17
        };
    I18next.init({
        lng: 'dev',
        resStore : {
            en: english,
            dev: japanese
        }
    },function(t) {
        options.t = t;
        App.start(options);
    });

});
