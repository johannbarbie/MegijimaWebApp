define(['underscoreM', 'marionette','templates'], function(_, Marionette, templates) {
    'use strict';

    return Marionette.ItemView.extend({
        template: _.template(templates.main),
        className: 'masonry',
        initialize: function(opt){
            this.map = opt.map;
        },
        onShow: function(){
		    this.updateLine();
        },
        updateLine: function(){
			var coord = this.model.get('coordinates');
            var latlng = new window.L.LatLng(coord[1], coord[0]);
            var posLl  = window.L.CRS.EPSG3857.latLngToPoint(latlng,this.map.getZoom());
            var clickX = Math.round(posLl.x-this.map.getPixelOrigin().x);
            var clickY = Math.round(posLl.y-this.map.getPixelOrigin().y);
            var jE = $('.mainView');
            this.drawLine(jE.offset().left + jE.width() / 2,jE.offset().top + jE.height() / 2,clickX,clickY);
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

            var a = Math.abs(x1-x2);
            var b = Math.abs(y1-y2);
            var c;
            var sx = (x1+x2)/2 ;
            var sy = (y1+y2)/2 ;
            var width = Math.sqrt(a*a + b*b ) ;
            var x = sx - width/2;
            var y = sy;

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