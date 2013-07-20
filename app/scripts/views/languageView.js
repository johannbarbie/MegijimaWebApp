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
            'click img':'toggleLanguage'
        },
        showCredits: function(e){
            e.preventDefault();
            vent.trigger('app:credits', false);
        },
        onShow: function(){
            $('img#jp').hide();
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
            if (newLang!=='en'){
                $('img#jp').show();
                $('img#en').hide();
            }else{
                $('img#jp').hide();
                $('img#en').show();
            }
            I18next.setLng(newLang);
            if (this.app.currNode){
                vent.trigger('app:changeView');
            }
        }
    });
});