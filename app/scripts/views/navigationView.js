define(['underscoreM', 'marionette', 'models/graph', 'templates', 'leaflet', 'bootstrap'], function(_, Marionette, Graph) {
    'use strict';
    return Marionette.ItemView.extend({
        //template: _.template(templates.navigation),
        className: 'map',
        render: function(){
            //aoeu
        },
        onEachFeature: function(feature, layer) {
		    var onClickFeature = function(e){
		        var nodeId = e.target.feature.properties.nodeId;
		        window.location.href = '#node/'+nodeId;
			};
		    layer.on('click', onClickFeature);
		},
        onShow:function(){
            var map = window.L.map('map', {
				dragging: false,
			    attributionControl: false
            }).setView([34.39, 134.02], 14);
            window.L.tileLayer('http://{s}.tile.cloudmade.com/a57b9e7194ea41bba4ed92f6d3022766/99822/256/{z}/{x}/{y}.png', {
			    attribution: 'Map data © OpenStreetMap contributors',
			    maxZoom: 18
			}).addTo(map);
			var geoJson = new Graph().getGeoJson();
			window.L.geoJson(geoJson,{onEachFeature: this.onEachFeature}).addTo(map);
        }
    });
});