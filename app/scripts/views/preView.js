define(['underscoreM', 'marionette'], function(_, Marionette) {
    'use strict';
    return Marionette.ItemView.extend({
        className: 'fromTemplate',
        render: function(){
            var cont = '<div class="span4"><p>';
            for (var i=0;i<20;i++){
                cont += this.model.get('preview') + ' ';
            }
            cont += '</p></div>';
            this.$el.html(cont);
            return this;
        },
        getTemplate: function(){
            return null;
        },
        onShow:function () {
            //do something
        }
    });
});