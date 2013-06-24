define(['underscoreM', 'marionette', 'templates', 'views/preView', 'bootstrap'], function(_, Marionette, templates, PreView) {
    'use strict';
    return Marionette.CompositeView.extend({
        itemView: PreView,
        template: _.template(templates.composite),
        initialize: function() {
			$('.field').remove();
			this.fields = [];
        },
        appendHtml: function(collectionView, itemView, index){
            this.fields[index] = $(itemView.el);
            this.fields[index].appendTo(collectionView.el);
		},
		distributeFields: function() {
		    var radius = 200;
		    var container = $('#container'),
		        width = container.width(), height = container.height(),
		        angle = Math.floor(Math.random()*90), step = (2*Math.PI) / this.fields.length;
		    for (var i in this.fields){
		        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this.fields[i]).width()/2);
		        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this.fields[i]).height()/2);
		        $(this.fields[i]).css({
		            left: x + 'px',
		            top: y + 'px'
		        });
		        angle += step;
		    }
		},
		onShow: function(){
			this.distributeFields();
		}
    });
});