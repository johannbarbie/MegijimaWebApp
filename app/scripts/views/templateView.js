define(['underscoreM', 'marionette'], function(_, Marionette) {
    'use strict';
    return Marionette.ItemView.extend({
        className: 'fromTemplate',
        initialize: function(opt) {
			this.tmplt = opt.tmplt;
        },
        getTemplate: function(){
			return this.tmplt;
        },
        onShow:function () {
            //do something
        }
    });
});