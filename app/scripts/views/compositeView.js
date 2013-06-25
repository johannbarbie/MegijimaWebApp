define(['underscoreM', 'marionette', 'views/preView', 'templates', 'bootstrap'], function(_, Marionette, PreView, templates) {
    'use strict';
    return Marionette.CompositeView.extend({
        itemView: PreView,
        className: 'masonry js-masonry',
        itemViewContainer: '#masonry',
        template: _.template(templates.composite),
        initialize: function() {
			$('.field').remove();
			this.fields = [];
        },
        appendHtml: function(collectionView, itemView, index){
            this.fields[index] = $(itemView.el);
            this.fields[index].appendTo(collectionView.el);
		},
		onShow: function(){
			//this.collection.each(function(element){
				//console.dir(element.get('coordinates'));
			//});
			new window.Masonry( this.el, {
				// options
				columnWidth: 60,
				stamp: '.stamp',
				isOriginLeft: false,
				gutter:3,
				itemSelector: '.item'
			});
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

            var htmlns = 'http://www.w3.org/1999/xhtml';
            var div = document.createElementNS(htmlns, 'div');
            div.setAttribute('style','border:1px solid black;width:'+width+'px;height:0px;-moz-transform:rotate('+deg+'deg);-webkit-transform:rotate('+deg+'deg);position:absolute;top:'+y+'px;left:'+x+'px;');

            document.getElementById('myElement').appendChild(div);
        }
    });
});