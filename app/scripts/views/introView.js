define(['underscoreM', 'marionette', 'vent'], function(_, Marionette, vent) {
    'use strict';
    var itemView = Marionette.ItemView.extend({
        template: 'logo',
        className: 'introView',
        initialize: function(opt) {
            this.renderSmall = (opt)?opt.renderSmall:false;
            var self = this;
            vent.on('intro:shrink',function(){
                self.shrink();
            });
            $(document).click(function(e) {
                self.handleClick(e);
            });
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
                var jCF = $('#crossfade');
                var oldImg = jCF.children(':first').next();
                oldImg.animate({'opacity': 0},1000,function(){
                    self.$el.one(self.transEvent(), function(){
                        vent.trigger('map:display', function(){
                            //do something
                        });
                    });
                    self.$el.delay(1000).animate({'opacity': 1});
                });
            }

        },
        events: {
            'click':'handleClick'
        },
        handleClick: function(e){
            e.preventDefault();
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