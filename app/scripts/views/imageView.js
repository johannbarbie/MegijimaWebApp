define(['underscoreM', 'marionette', 'vent'], function(_, Marionette, vent) {
    'use strict';
    return Marionette.ItemView.extend({
        className: 'bg',
        initialize: function(opt){
            this.nodeId = opt.nodeId;
            this.modal = opt.modal;
        },
        render: function(){
            this.$el.html('<img style="margin: 0; position:absolute; top:0; left:0; z-index:1500;" class="portrait" src="images/'+this.nodeId+'/background.jpg">');
            $('div.modal-backdrop').css('opacity',0);
        },
        onShow:function () {
            //do something
        },
        events: {
            'click':'closeView',
        },
        closeView: function (){
            vent.trigger('app:background');
            this.modal.close();
        }
    });
});