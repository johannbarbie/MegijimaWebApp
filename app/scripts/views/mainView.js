define(['underscoreM', 'marionette','templates'], function(_, Marionette, templates) {
    'use strict';

    return Marionette.ItemView.extend({
        template: _.template(templates.main),
        initialize: function(){
            //
        }
    });
});