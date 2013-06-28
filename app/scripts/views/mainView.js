define(['underscoreM', 'marionette','videojs'], function(_, Marionette) {
    'use strict';

    return Marionette.ItemView.extend({
        template: 'main',
        className: 'masonry',
        initialize: function(opt){
            this.map = opt.map;
        },
        onShow: function(){
            window.videojs('example_video_1', {}, function(){
              // Player (this) is initialized and ready.
            });
		    this.updateLine();
        },
        updateLine: function(){
			var coord = this.model.get('coordinates');
            var latlng = new window.L.LatLng(coord[1], coord[0]);
            var posLl  = window.L.CRS.EPSG3857.latLngToPoint(latlng,this.map.getZoom());
            var bounds = this.map.getPixelBounds().min;
            var clickX = Math.round(posLl.x-bounds.x);
            var clickY = Math.round(posLl.y-bounds.y);
            var jE = $('.mainView');
            this.drawLine(jE.offset().left + jE.width() / 2,jE.offset().top + jE.height() / 2,clickX,clickY);
        },
        events: {
            'click':'makeModal'
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
        makeModal: function (){
            var jMainView = $('.mainView');
            if (jMainView.width() < 500){
                //var jStamp3 = $('.stamp3');
                //todo: deal with underlying masonry layer
                var transitionEnd = this.whichTransitionEvent();
                jMainView.one(transitionEnd, function(e){
                    console.log('registered' + e);
                });
                jMainView.toggleClass('enlarged');
            }else{
                jMainView.toggleClass('enlarged');
            }
            //vent.trigger('app:modal', 'story');
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
            element.setAttribute('style','border:1px solid black;z-index: 1;width:'+width+'px;height:0px;-moz-transform:rotate('+deg+'deg);-webkit-transform:rotate('+deg+'deg);position:absolute;top:'+y+'px;left:'+x+'px;');
        }
    });
});