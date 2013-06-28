define(['underscoreM', 'marionette'], function(_, Marionette) {
    'use strict';
    return Marionette.ItemView.extend({
        className: 'fromTemplate',
        template: 'story',
        onShow:function () {
            //do something
        }
    });
});