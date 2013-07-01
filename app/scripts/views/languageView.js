define(['underscoreM', 'marionette', 'vent', 'i18next'], function(_, Marionette, vent, I18next) {
    'use strict';
    return Marionette.ItemView.extend({
        className: 'lngView',
        render: function(){
            this.$el.html('<p>[EN/JP]</p>');
            return this;
        },
        events: {
            'click':'toggleLanguage'
        },
        toggleLanguage: function (){
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