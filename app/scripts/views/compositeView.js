define(['underscoreM', 'marionette', 'views/preView', 'bootstrap'], function(_, Marionette, PreView) {
    'use strict';
    return Marionette.CompositeView.extend({
        itemView: PreView,
        className: 'masonry js-masonry',
        itemViewContainer: '#masonry',
        template: 'composite',
        initialize: function() {
			$('.field').remove();
			this.fields = [];

        },
        appendHtml: function(collectionView, itemView, index){
            this.fields[index] = $(itemView.el);
            this.fields[index].appendTo(collectionView.el);
		},
		onShow: function(){
			//this.collection.each(function(element){
				//console.dir(element.get('coordinates'));
			//});
			this.msnry = new window.Masonry( this.el, {
				// options
				columnWidth: 60,
				stamp: '.stamp',
				isOriginLeft: false,
				gutter:3,
				itemSelector: '.item'
			});
		}
    });
});