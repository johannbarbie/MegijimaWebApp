define(['underscoreM', 'marionette', 'vent'], function(_, Marionette, vent) {
    'use strict';
    var itemView = Marionette.ItemView.extend({
        className: 'introView',
        initialize: function() {
            //
        },
        render: function(){
            this.$el.html('<img src="images/logo.png" alt="human-nature, megijima"><p><strong>A community mapping project by Suhi, Songe, Patrick, and Johann.</strong></p>');
            return this;
        },
        onShow:function () {
            //do something
        },
        events: {
            'click':'handleClick'
        },
        handleClick: function(){
            console.dir($(this.el));
            $(this.el).toggleClass('small');
            $('.introView p').toggleClass('hidden');
            vent.trigger('app:start');
        }
    });

    vent.on('app:start', function(){
        console.log('start');
    });

    return itemView;
});