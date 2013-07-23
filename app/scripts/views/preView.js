define(['underscoreM', 'marionette', 'i18next'], function(_, Marionette, I18next) {
    'use strict';
    return Marionette.ItemView.extend({
        className: 'item',
        template: 'portrait',
        initialize: function(){
	    this.model.set('text', I18next.t(this.model.get('preview')+'.text'));
            var crops = I18next.t(this.model.get('preview')+'.crops',{ returnObjectTrees: true });
            var mainCrops = I18next.t(this.model.get('mainId')+'.crops',{ returnObjectTrees: true });
            var intersection = _.intersection(_.toArray(crops),_.toArray(mainCrops));
            if (intersection.length < 1){
                //intersection[0] = 'no common tags';
            }
            var cropText = '';
            _.each(intersection, function(crop){
                if (cropText.length > 1){
                    cropText += ', ';
                }
                cropText += crop;
            });
            this.model.get('data').cropText = cropText;
        },
        fadeIn: function(){
	    this.$el.animate({'opacity': 1});
        },
        fadeOut: function(){
            this.$el.animate({'opacity': 0.0});
        },
        onShow:function () {
	    this.$el.delay(800).animate({'opacity': 1});
            this.$el.addClass(this.model.get('css'));
            //do something
        },
        events: {
            'click':'makeMain',
        },
        makeMain: function (){
            window.Backbone.history.navigate('node/'+this.model.get('preview'),true);
        }
    });
});