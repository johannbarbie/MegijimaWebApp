define(['underscoreM', 'marionette', 'i18next', 'vent' , 'videojs','dotdotdot'], function(_, Marionette, I18next, vent) {
    'use strict';

    var mainView = Marionette.ItemView.extend({
        template: 'main',
        className: 'masonry',
        initialize: function(opt){
            this.map = opt.map;
            var self = this;

            //handle map events
            var mapChanged = function(){
                self.updateLine();
            };
            this.map.on('zoomend moveend', mapChanged);
            this.mapChanged = mapChanged;

            //deal with tags
            var crops = I18next.t(this.model.get('id')+'.crops',{ returnObjectTrees: true });
            var cropText = '';
            _.each(crops, function(crop){
                if (crop !== 'none'){
                    if (cropText.length > 1){
                        cropText += ', ';
                    }
                    cropText += crop;
                }
            });
            this.model.get('data').cropText = cropText;
        },
        onShow: function(){
            $('div#mainText').addClass('antiEllipsis');
            //prevent text overflow or cutoff
            $('.ellipsis').dotdotdot({
                watch: '.mainview',
                lastCharacter   : {
                    remove      : [ ' ', ',', ';', '.', '!', '?' ]
                }
            });
            var self = this;
            var jCF = $('#crossfade');
            var oldImg = jCF.children(':first');
            oldImg.addClass('top').removeClass('bottom');
            oldImg.next().remove();
            var img = $('<img class="bottom">'); //Equivalent: $(document.createElement('img'))
            img.attr('src', 'images/' + this.model.get('id') + '/background.jpg');
            img.prependTo(jCF);
            oldImg.animate({'opacity': 0},500,function(){
                self.fadeIn( function(){
                    self.updateLine();
                    vent.trigger('map:showPOIs', function(){
                        //do something
                    });
                });
            });
            vent.trigger('map:display');
            //set background image for video
            var jMainVideo = $('#mainVideo');
            jMainVideo.css('background-image', 'url(images/'+this.model.get('id')+'/poster.jpg)');
            jMainVideo.css('background-position', 'center');
        },
        fadeIn: function(callback){
            var jView = $('div.mainView');
            jView.one(this.transEvent(), callback);
            jView.css('opacity',1);
            //this.updateLine();
        },
        fadeOut: function(callback){
            var jView = $('div.mainView');
            jView.one(this.transEvent(), callback);
            jView.css('opacity', 0);
            this.removeLine();
        },
        remove: function(){
            var mapChanged = this.mapChanged;
            if (this.enlarged){
                this.removePlayer();
            }
            //vent.trigger('map:removePOIs');
            this.map.off('zoomend moveend', mapChanged);
            this.fadeOut(function(){
                this.remove();
            });
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
        handleClick: function (e){
            e.preventDefault();
            var self = this;
            var jVideo = $('#mainVideo');
            if ($(e.target).parents().is(jVideo[0])){
                return;
            }
            var jMainView = $('.mainView');
            var jStamp3 = $('.stamp3');
            if (jMainView.width() < 700){
                this.enlarged = true;
                //var jStamp3 = $('.stamp3');
                //todo: deal with underlying masonry layer
                jMainView.one(this.transEvent(), function(){
                    self.onEnlarged();
                });
                jMainView.toggleClass('enlarged');
                jStamp3.toggleClass('enlarged');
                $('div#mainText').removeClass('ellipsis');
                $('div#mainText').trigger('destroy');
                $('div#mainText').removeClass('antiEllipsis');
                $('div#mainText').addClass('scroller');
            }else{
                this.shrink();
            }
        },
        onEnlarged: function(){
            var self = this;
            var jVideo = $('#mainVideo');
            this.removeLine();
            var id = this.model.get('id');
            jVideo.html('<video id="example_video_1" class="video-js vjs-default-skin" preload="auto" poster="images/'+id+'/poster.jpg"><source src="videos/'+id+'/clip.mp4" type="video/mp4" /><source src="videos/'+id+'/clip.webm" type="video/webm" /><source src="videos/'+id+'/clip.ogg" type="video/ogg" /></video>');
            window.videojs('example_video_1', { 'height': jVideo.height(), 'width':jVideo.width() }, function(){
                var myPlayer = this;
                self.player = myPlayer;
                myPlayer.play();
            });
            $('div.scroller').css('height','100%');
            vent.trigger('popup:start',this.model.get('id'));
        },
        onShrinked: function(){
	        $('div#mainText').dotdotdot();
            this.updateLine();
        },
        removePlayer: function(){
            // destroy the player                 
            this.player.dispose();
            this.player = undefined;
        },
        shrink: function (){
            var self = this;
            this.enlarged = false;
            this.removePlayer();
            var jMainView = $('.mainView');
            jMainView.one(this.transEvent(), function(){
                self.onShrinked();
            });
            jMainView.toggleClass('enlarged');
            var jStamp3 = $('.stamp3');
            jStamp3.toggleClass('enlarged');
            $('div#mainText').addClass('ellipsis');
            $('div#mainText').removeClass('scroller');
            $('div#mainText').addClass('antiEllipsis');
            vent.trigger('popup:stop',this.model.get('id'));
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
    return mainView;
});