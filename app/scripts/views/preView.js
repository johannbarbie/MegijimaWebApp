define(['underscoreM', 'marionette', 'templates'], function(_, Marionette, templates) {
    'use strict';
    return Marionette.ItemView.extend({
        className: 'item',
        template: _.template(templates.portrait),
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