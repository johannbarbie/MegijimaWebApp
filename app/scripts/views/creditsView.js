define(['underscoreM', 'marionette', 'vent'], function(_, Marionette, vent) {
    'use strict';
    var itemView = Marionette.ItemView.extend({
        template: 'credits',
        className: 'creditsView',
        onShow:function () {
            //do something
            vent.on('test:test',function(){
                //aoseut
            });
        },
        events: {
            'click':'handleClick'
        },
        handleClick: function(e){
            e.preventDefault();
            vent.trigger('app:credits',true);
        }
    });

    return itemView;
});