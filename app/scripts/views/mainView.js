define(['underscoreM', 'marionette', 'i18next', 'videojs','dotdotdot'], function(_, Marionette, I18next) {
    'use strict';

    return Marionette.ItemView.extend({
        template: 'main',
        className: 'masonry',
        initialize: function(opt){
            this.map = opt.map;
            var crops = I18next.t(this.model.get('id')+'.crops',{ returnObjectTrees: true });
            var cropText = '';
            _.each(crops, function(crop){
                if (cropText.length > 1){
                    cropText += ', ';
                }
                cropText += crop;
            });
            this.model.get('data').cropText = cropText;
        },
        onShow: function(){
            //prevent text overflow or cutoff
            $('.ellipsis').dotdotdot({
                watch: '.mainview'
            });
            //set background image for app
            $('body').css('background-image', 'url(images/'+this.model.get('id')+'/background.jpg)');
            //set background image for video
            var jMainVideo = $('#mainVideo');
            jMainVideo.css('background-image', 'url(images/'+this.model.get('id')+'/poster.png)');
		    this.updateLine();
        },
        updateLine: function(){
			var coord = this.model.get('coordinates');
            var latlng = new window.L.LatLng(coord[1], coord[0]);
            var posLl  = window.L.CRS.EPSG3857.latLngToPoint(latlng,this.map.getZoom());
            var jThis = $(this.el);
            var bounds = this.map.getPixelBounds().min;
            var jE = $('.mainView');
            var clickX = Math.round(posLl.x-bounds.x - jThis.offset().left);
            var clickY = Math.round(posLl.y-bounds.y - jThis.offset().top);
            this.drawLine(jE.offset().left + jE.width() / 2,jE.offset().top + jE.height() / 2,clickX,clickY);
        },

        events: {
            'click':'handleClick'
        },
        whichTransitionEvent: function(){
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
        handleClick: function (e){
            e.preventDefault();
            var jVideo = $('#mainVideo');
            if ($(e.target).parents().is(jVideo[0])){
                return;
            }
            var jMainView = $('.mainView');
            var jStamp3 = $('.stamp3');
            var transitionEnd = this.whichTransitionEvent();
            var self = this;
            var onEnlarged = function(){
                self.removeLine();
                var id = self.model.get('id');
                jVideo.html('<video id="example_video_1" class="video-js vjs-default-skin" controls preload="auto" poster="images/'+id+'/poster.png"><source src="videos/'+id+'/clip.mp4" type="video/mp4" /><source src="videos/'+id+'/clip.webm" type="video/webm" /><source src="videos/'+id+'/clip.ogg" type="video/ogg" /></video>');
                window.videojs('example_video_1', { 'height': jVideo.height(), 'width':jVideo.width() }, function(){
                    var myPlayer = this;
                    self.player = myPlayer;
                    myPlayer.play();
                });
            };
            var onShrinked = function(){
                self.updateLine();
            };
            var removePlayer = function(){
                // from here: http://help.videojs.com/discussions/problems/861-how-to-destroy-a-video-js-object
                var player = self.player;
                // for html5 - clear out the src which solves a browser memory leak
                //  this workaround was found here: http://stackoverflow.com/questions/5170398/ios-safari-memory-leak-when-loading-unloading-html5-video                                         
                if(player.techName === 'html5'){
                    player.tag.src = '';
                    player.tech.removeTriggers();
                    player.load();
                }
                // destroy the player                 
                player.dispose();
                self.player = undefined;
            };
            if (jMainView.width() < 500){
                //var jStamp3 = $('.stamp3');
                //todo: deal with underlying masonry layer
                jMainView.one(transitionEnd, onEnlarged);
                jMainView.toggleClass('enlarged');
                jStamp3.toggleClass('enlarged');
            }else{
                removePlayer();
                jMainView.one(transitionEnd, onShrinked);
                jMainView.toggleClass('enlarged');
                jStamp3.toggleClass('enlarged');
            }
            //vent.trigger('app:modal', 'story');
        },
        removeLine: function (){
            $(this.line).remove();
            this.line = undefined;
        },
        drawLine:function (x1, y1, x2, y2){
            if(y1 < y2){
                var pom = y1;
                y1 = y2;
                y2 = pom;
                pom = x1;
                x1 = x2;
                x2 = pom;
            }
            var a = Math.abs(x1-x2),b = Math.abs(y1-y2),c;
            var sx = (x1+x2)/2,sy = (y1+y2)/2 ;
            var width = Math.sqrt(a*a + b*b ) ;
            var x = sx - width/2,y = sy;
            a = width / 2;
            c = Math.abs(sx-x);
            b = Math.sqrt(Math.abs(x1-x)*Math.abs(x1-x)+Math.abs(y1-y)*Math.abs(y1-y) );
            var cosb = (b*b - a*a - c*c) / (2*a*c);
            var rad = Math.acos(cosb);
            var deg = (rad*180)/Math.PI;
            var element = null;
            if (this.line===undefined){
	            var htmlns = 'http://www.w3.org/1999/xhtml';
	            var div = document.createElementNS(htmlns, 'div');
	            element = div;
	            this.el.appendChild(div);
	            this.line = div;
            }else{
                element = this.line;
            }
            element.setAttribute('style','border:0px;z-index: 1; background-image: url("images/lineBg.png"); width:'+width+'px;height:4px;-moz-transform:rotate('+deg+'deg);-webkit-transform:rotate('+deg+'deg);position:absolute;top:'+y+'px;left:'+x+'px;');
        }
    });
});