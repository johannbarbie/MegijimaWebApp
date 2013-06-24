define(['underscoreM', 'marionette', 'templates'], function(_, Marionette, templates) {
    'use strict';
    return Marionette.ItemView.extend({
        className: 'field',
        template: _.template(templates.portrait),
        onShow:function () {
            console.log(this.model.get('data'));
            //do something
        }
    });
});