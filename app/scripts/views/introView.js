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
            if (!this.renderSmall){
                $(document).click(function(e) {
                    self.handleClick(e);
                });
            }
        },
        shrink: function(){
            $(document).off('click');
            this.$el.addClass('small');
            $('.introView p').addClass('hidden');
            this.shrinked = true;
        },
	onEnlarged: function(){
	    var self = this;
	    $('.introView p').removeClass('hidden');
	    this.shrinked = false;
	    $(document).click(function(e) {
		self.handleClick(e);
	    });
	},
        enlarge: function(){
	    var self = this;
	    this.$el.one(this.transEvent(), function(){
		self.onEnlarged();
	    });
            this.$el.removeClass('small');
            this.shrinked = false;
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
                this.$el.css('opacity', 1);
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
                    self.$el.delay(1000).css('opacity', 1);
                });
            }
        },
        events: {
            'click':'handleClick'
        },
        setColor: function(color){
            var svgDoc = this.$el.children(':first')[0].contentDocument;
            var styleElement = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'style');
            if (color === 'white'){
                styleElement.textContent = 'polygon { fill: #EBEBEB } path { fill: #EBEBEB }';
            }else{
                styleElement.textContent = 'polygon { fill: #000 } path { fill: #000 }';
            }
            svgDoc.getElementById('Layer_1').appendChild(styleElement);
        },
        handleClick: function(e){
            e.preventDefault();
            if (this.shrinked){
                window.Backbone.history.navigate('',true);
            }else{
                this.shrink();
                window.Backbone.history.navigate('map',true);
            }
        }
    });

    return itemView;
});