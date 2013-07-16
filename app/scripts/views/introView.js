define(['underscoreM', 'marionette', 'vent'], function(_, Marionette, vent) {
    'use strict';
    var itemView = Marionette.ItemView.extend({
        className: 'introView',
        initialize: function() {
            //
        },
        render: function(){
            this.$el.html('<object type="image/svg+xml" data="images/logo.svg" class="shadow">Your browser does not support SVG</object><p><strong>A community mapping project by Suhi, Songe, Patrick, and Johann.</strong></p>');
            return this;
        },
        onShow:function () {
            //do something
        },
        events: {
            'click':'handleClick'
        },
        handleClick: function(){
            var svgDoc = this.$el.children(':first')[0].contentDocument;
            var styleElement = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'style');
            styleElement.textContent = 'path { fill: #ebebeb }; polygon { fill: #ebebeb };'; // add whatever you need here
            svgDoc.getElementById("Layer_1").appendChild(styleElement);
            this.$el.toggleClass('small');
            $('.introView p').toggleClass('hidden');
            vent.trigger('app:start');
        }
    });

    return itemView;
});