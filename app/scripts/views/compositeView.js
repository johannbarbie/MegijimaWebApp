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
		getEmSize: function(el) {
		    return Number(getComputedStyle(el, '').fontSize.match(/(\d+)px/)[1]);
		},
		onShow: function(){
			//this.collection.each(function(element){
				//console.dir(element.get('coordinates'));
			//});
            var cw = this.getEmSize(this.el) * 6;
			this.msnry = new window.Masonry( this.el, {
				// options
				columnWidth: cw,
				stamp: '.stamp',
				isOriginLeft: false,
				gutter: 6,
				itemSelector: '.item'
			});
		}
    });
});