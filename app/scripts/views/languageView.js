define(['underscoreM', 'marionette', 'vent', 'i18next'], function(_, Marionette, vent, I18next) {
    'use strict';
    return Marionette.ItemView.extend({
        template: 'lang',
        className: 'lngView',
        initialize: function(opt){
            this.app = opt.app;
        },
        events: {
            'click p.credits':'showCredits',
            'click p.lang':'toggleLanguage'
        },
        zoomIn: function(e){
            e.preventDefault();
            vent.trigger('app:zoomIn');
            if (this.app.map.getZoom()>=this.app.options.maxZoom-1){
                $('a.leaflet-control-zoom-in').addClass('disabled');
            }
        },
        zoomOut: function(e){
            e.preventDefault();
            vent.trigger('app:zoomOut');
            if (this.app.map.getZoom()<=this.app.options.minZoom+1){
                $('a.leaflet-control-zoom-out').addClass('disabled');
            }
        },
        showCredits: function(e){
            e.preventDefault();
            vent.trigger('app:credits', false);
        },
        toggleLanguage: function (e){
            e.preventDefault();
            var newLang = '';
            for(var name in I18next.options.resStore) {
                if (I18next.lng()!==name){
                    newLang = name;
                    break;
                }
            }
            I18next.setLng(newLang);
            if (this.app.currNode){
                vent.trigger('app:changeView');
            }
        }
    });
});