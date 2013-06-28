define(['underscoreM', 'marionette'], function(_, Marionette) {
    'use strict';
    return Marionette.ItemView.extend({
        className: 'item',
        template: 'portrait',
        onShow:function () {
            $(this.el).addClass(this.model.get('css'));
            //do something
        },
        events: {
            'click':'makeMain'
        },
        makeMain: function (){
            window.location.href = '#node/'+this.model.get('preview');
        }
    });
});