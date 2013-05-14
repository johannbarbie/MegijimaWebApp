define(['underscoreM', 'marionette'], function(_, Marionette) {
    'use strict';
    return Marionette.ItemView.extend({
        className: 'fromTemplate',
        render: function(){
            var val = this.model.get('preview');
            var cont = '<div class="span4"><p>';
            for (var i=0;i<10;i++){
                cont += val + ' ';
            }
            if (val !== 'empty'){
                cont += '<a href="#node/'+val+'">'+val+'</a> ';
            }
            for (var j=0;j<10;j++){
                cont += val + ' ';
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