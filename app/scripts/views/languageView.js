define(['underscoreM', 'marionette', 'vent', 'i18next'], function(_, Marionette, vent, I18next) {
    'use strict';
    return Marionette.ItemView.extend({
        className: 'lngView',
        render: function(){
            this.$el.html('<p style="position:absolute;">[EN/JP]</p>' +
                '<div style="position: absolute;right:0; top:0;" class="leaflet-control-zoom leaflet-control"><a class="leaflet-control-zoom-in leaflet-bar-part leaflet-bar-part-top" href="#" title="Zoom in">+</a><a class="leaflet-control-zoom-out leaflet-bar-part leaflet-bar-part-bottom" href="#" title="Zoom out">-</a></div>');
            return this;
        },
        events: {
            'click p':'toggleLanguage',
            'click a.leaflet-control-zoom-in':'zoomIn',
            'click a.leaflet-control-zoom-out':'zoomOut'
        },
        zoomIn: function(e){
            e.preventDefault();
            vent.trigger('app:zoomIn', e);
        },
        zoomOut: function(e){
            e.preventDefault();
            vent.trigger('app:zoomOut', e);
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
            vent.trigger('app:setLang', newLang);
        }
    });
});