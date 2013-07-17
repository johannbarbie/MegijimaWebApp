define(['underscoreM', 'marionette', 'vent'], function(_, Marionette, vent) {
    'use strict';
    var itemView = Marionette.ItemView.extend({
        template: 'intro',
        className: 'introView',
        initialize: function(opt) {
            this.renderSmall = (opt)?opt.renderSmall:false;
            var self = this;
            vent.on('intro:shrink',function(){
                self.shrink();
            });
        },
        render: function(){
            this.$el.html(
                '<object type="image/svg+xml" data="images/logo.svg" class="shadow">Your browser does not support SVG</object>'+
                //'<audio controls><source src="audio/intro.wav" type="audio/wav"></audio>'+
                '<p><strong>A community mapping project by Suhi, Songe, Patrick, and Johann.</strong></p>');
            return this;
        },
        shrink: function(){
            this.$el.addClass('small');
            $('.introView p').addClass('hidden');
        },
        transEvent: function(){
            var t;
            var el = document.createElement('fakeelement');
            var transitions = {
                'transition':'transitionend',
                'OTransition':'oTransitionEnd',
                'MozTransition':'transitionend',
                'WebkitTransition':'webkitTransitionEnd'
            };

            for(t in transitions){
                if( el.style[t] !== undefined ){
                    return transitions[t];
                }
            }
        },
        onShow:function () {
            if (this.renderSmall === true){
                this.shrink();
            }else{
                var self = this;
                $('img.bg').animate({'opacity': 1},2000,function(){
                    self.$el.delay(100).animate({'opacity': 1});
                    self.$el.one(self.transEvent(), function(){
                        vent.trigger('map:display', function(){
                            //do something
                        });
                    });
                });
            }

        },
        events: {
            'click':'handleClick'
        },
        handleClick: function(){
            var svgDoc = this.$el.children(':first')[0].contentDocument;
            var styleElement = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'style');
            styleElement.textContent = 'polygon { fill: #000 } path { fill: #000 }'; // add whatever you need here
            svgDoc.getElementById('Layer_1').appendChild(styleElement);
            this.shrink();
            window.Backbone.history.navigate('map',true);
        }
    });

    return itemView;
});