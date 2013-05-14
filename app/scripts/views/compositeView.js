define(['underscoreM', 'marionette', 'templates', 'views/preView', 'bootstrap'], function(_, Marionette, templates, PreView) {
    'use strict';
    return Marionette.CompositeView.extend({
        itemView: PreView,
		itemViewContainer: '#compContainer',
        template: _.template(templates.composite),
        initialize: function() {
			//
        }
    });
});