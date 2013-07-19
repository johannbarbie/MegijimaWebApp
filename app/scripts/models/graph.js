
define(['jquery', 'underscoreM', 'backbone', 'vent','jitGraph', 'models/node', 'models/nodes'], function( $, _, Backbone, vent, JitGraph, Node, NodeList) {
    'use strict';

    var Graph = Backbone.Model.extend({
        gData: [
            {
                'id': 'node00',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node06','data': {'weight': 0.103}},
                    {'nodeTo': 'node13','data': {'weight': 0.397}},
                    {'nodeTo': 'node12','data': {'weight': 0.356}},
                    {'nodeTo': 'node11','data': {'weight': 0.517}},
                    {'nodeTo': 'node14','data': {'weight': 0.267}},
                    {'nodeTo': 'node03','data': {'weight': 0.495}},
                    {'nodeTo': 'node09','data': {'weight': 0.277}},
                    {'nodeTo': 'node05','data': {'weight': 0.204}},
                    {'nodeTo': 'node10','data': {'weight': 0.297}},
                    {'nodeTo': 'node04','data': {'weight': 0.462}},
                    {'nodeTo': 'node07','data': {'weight': 0.16}}
                ]
            }, {
                'id': 'node01',
                'adjacencies': [
                    {'nodeTo': 'node14','data': {'weight': 0.319}},
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node04','data': {'weight': 0.581}},
                    {'nodeTo': 'node06','data': {'weight': 0.034}},
                    {'nodeTo': 'node12','data': {'weight': 0.407}},
                    {'nodeTo': 'node03','data': {'weight': 1.0}},
                    {'nodeTo': 'node11','data': {'weight': 0.551}},
                    {'nodeTo': 'node13','data': {'weight': 0.633}},
                    {'nodeTo': 'node10','data': {'weight': 0.462}},
                    {'nodeTo': 'node07','data': {'weight': 0.07}},
                    {'nodeTo': 'node05','data': {'weight': 0.288}},
                    {'nodeTo': 'node09','data': {'weight': 0.481}}
                ]
            }, {
                'id': 'node02',
                'adjacencies': [
                    {'nodeTo': 'node14','data': {'weight': 0.319}},
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node04','data': {'weight': 0.581}},
                    {'nodeTo': 'node06','data': {'weight': 0.034}},
                    {'nodeTo': 'node12','data': {'weight': 0.407}},
                    {'nodeTo': 'node03','data': {'weight': 1.0}},
                    {'nodeTo': 'node11','data': {'weight': 0.551}},
                    {'nodeTo': 'node13','data': {'weight': 0.633}},
                    {'nodeTo': 'node10','data': {'weight': 0.462}},
                    {'nodeTo': 'node07','data': {'weight': 0.07}},
                    {'nodeTo': 'node05','data': {'weight': 0.288}},
                    {'nodeTo': 'node09','data': {'weight': 0.481}}
                ]
            }, {
                'id': 'node03',
                'adjacencies': [
                    {'nodeTo': 'node14','data': {'weight': 0.319}},
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node04','data': {'weight': 0.581}},
                    {'nodeTo': 'node06','data': {'weight': 0.034}},
                    {'nodeTo': 'node12','data': {'weight': 0.407}},
                    {'nodeTo': 'node11','data': {'weight': 0.551}},
                    {'nodeTo': 'node13','data': {'weight': 0.633}},
                    {'nodeTo': 'node10','data': {'weight': 0.462}},
                    {'nodeTo': 'node07','data': {'weight': 0.07}},
                    {'nodeTo': 'node05','data': {'weight': 0.288}},
                    {'nodeTo': 'node09','data': {'weight': 0.481}}
                ]
            }, {
                'id': 'node04',
                'adjacencies': [
                    {'nodeTo': 'node06','data': {'weight': 0.092}},
                    {'nodeTo': 'node10','data': {'weight': 0.378}},
                    {'nodeTo': 'node13','data': {'weight': 0.483}},
                    {'nodeTo': 'node11','data': {'weight': 0.492}},
                    {'nodeTo': 'node14','data': {'weight': 0.356}},
                    {'nodeTo': 'node07','data': {'weight': 0.054}},
                    {'nodeTo': 'node12','data': {'weight': 0.385}},
                    {'nodeTo': 'node20','data': {'weight': 0.069}},
                    {'nodeTo': 'node32','data': {'weight': 0.057}},
                    {'nodeTo': 'node05','data': {'weight': 0.277}},
                    {'nodeTo': 'node09','data': {'weight': 0.454}}
                ]
            }, {
                'id': 'node05',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node13','data': {'weight': 0.243}},
                    {'nodeTo': 'node12','data': {'weight': 0.273}},
                    {'nodeTo': 'node10','data': {'weight': 0.174}},
                    {'nodeTo': 'node09','data': {'weight': 0.212}},
                    {'nodeTo': 'node14','data': {'weight': 0.204}},
                    {'nodeTo': 'node11','data': {'weight': 0.224}}
                ]
            }, {
                'id': 'node06',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node11','data': {'weight': 0.042}},
                    {'nodeTo': 'node10','data': {'weight': 0.056}},
                    {'nodeTo': 'node14','data': {'weight': 0.062}},
                    {'nodeTo': 'node13','data': {'weight': 0.061}},
                    {'nodeTo': 'node09','data': {'weight': 0.064}},
                    {'nodeTo': 'node12','data': {'weight': 0.041}}
                ]
            }, {
                'id': 'node07',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node12','data': {'weight': 0.043}},
                    {'nodeTo': 'node11','data': {'weight': 0.022}},
                    {'nodeTo': 'node09','data': {'weight': 0.033}},
                    {'nodeTo': 'node14','data': {'weight': 0.064}},
                    {'nodeTo': 'node10','data': {'weight': 0.058}}
                ]
            }, {
                'id': 'node08',
                'adjacencies': [
                    {'nodeTo': 'node14','data': {'weight': 0.0}},
                    {'nodeTo': 'node09','data': {'weight': 0.042}},
                    {'nodeTo': 'node20','data': {'weight': 1.0}},
                    {'nodeTo': 'node32','data': {'weight': 0.816}}
                ]
            }, {
                'id': 'node09',
                'adjacencies': [
                    {'nodeTo': 'node20','data': {'weight': 0.042}},
                    {'nodeTo': 'node14','data': {'weight': 0.283}},
                    {'nodeTo': 'node10','data': {'weight': 0.424}},
                    {'nodeTo': 'node12','data': {'weight': 0.268}},
                    {'nodeTo': 'node32','data': {'weight': 0.035}},
                    {'nodeTo': 'node13','data': {'weight': 0.261}},
                    {'nodeTo': 'node11','data': {'weight': 0.506}}
                ]
            }, {
                'id': 'node10',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node12','data': {'weight': 0.282}},
                    {'nodeTo': 'node13','data': {'weight': 0.274}},
                    {'nodeTo': 'node14','data': {'weight': 0.316}},
                    {'nodeTo': 'node11','data': {'weight': 0.516}}
                ]
            }, {
                'id': 'node11',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node13','data': {'weight': 0.49}},
                    {'nodeTo': 'node12','data': {'weight': 0.354}},
                    {'nodeTo': 'node14','data': {'weight': 0.301}}
                ]
            }, {
                'id': 'node12',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node13','data': {'weight': 0.319}},
                    {'nodeTo': 'node14','data': {'weight': 0.463}}
                ]
            }, {
                'id': 'node13',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node14','data': {'weight': 0.159}}
                ]
            }, {
                'id': 'node14',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.0}}
                ]
            }, {
                'id': 'node15',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}},
                    {'nodeTo': 'node20','data': {'weight': 0.816}}
                ]
            }, {
                'id': 'node16',
                'adjacencies': [
                    {'nodeTo': 'node20','data': {'weight': 1.0}},
                    {'nodeTo': 'node32','data': {'weight': 0.816}}
                ]
            }, {
                'id': 'node17',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}},
                    {'nodeTo': 'node20','data': {'weight': 0.816}}
                ]
            }, {
                'id': 'node18',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}},
                    {'nodeTo': 'node20','data': {'weight': 0.816}}
                ]
            }, {
                'id': 'node19',
                'adjacencies': [
                    {'nodeTo': 'node20','data': {'weight': 1.0}},
                    {'nodeTo': 'node32','data': {'weight': 0.816}}
                ]
            }, {
                'id': 'node20',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.816}}
                ]
            }, {
                'id': 'node21',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node22',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node23',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node24',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node25',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node26',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node27',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node28',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node29',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node30',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node31',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node32',
                'adjacencies': [
                ]
            }
        ],
        geojsonFeatures: {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node00'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.054078, 34.401247]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node01'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.050792, 34.398004]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node02'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.048989, 34.389594]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node03'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.051267, 34.388762]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node04'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.055014,34.404834]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node05'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.053576, 34.391856]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node06'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.050787, 34.392644]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node07'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.05356,34.391967]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node08'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.054274,34.390979]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node09'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.046387,34.386982]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node10'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.05356, 34.391967]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node11'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.048228, 34.3975]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node12'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.046366, 34.397110]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node13'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.051688, 34.39217]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node14'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.05534, 34.385379]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.052005, 34.390824]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node16'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.05436, 34.391442]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node17'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.05023,34.392411]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node18'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.051469,34.39262]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node19'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.050792, 34.398004]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node20'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.038061, 34.379952]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node21'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.049443, 34.388832]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node22'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.03,34.4]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node23'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.03,34.4]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node24'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.03,34.4]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node25'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.039016, 34.383892]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node26'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.054078, 34.401247]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node27'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.056318, 34.407003]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node28'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.045015, 34.395968]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node29'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.045044, 34.388708]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node30'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.038609, 34.381368]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node31'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.056066, 34.394722]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node32'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.055833, 34.392688]
                    }
                }
            ]
        },
        getGeoJson: function() {
            return this.geojsonFeatures;
        },
        initialize: function() {
            var g = JitGraph.construct(this.gData);
            this.set('data', g);
            _.bindAll(this,'getNode','getClosest');
            this.points = {};
            var self = this;
            _.each(this.geojsonFeatures.features, function(point){
                self.points[point.properties.nodeId] = point;
            });
        },
        getNode: function(id){
            var rv = this.get('data').get(id);
            rv.data.name = id + '.name';
            rv.data.text = id + '.text';
            rv.data.crops = id + '.crops';
            rv.coordinates = this.points[id].geometry.coordinates;
            return new Node(rv);
        },
        getClosest: function(id, count){
            var best = [];
            //read from graph and make nodes to models
            var self = this;
            _.each(this.get('data').get(id).adjacencies, function(adjacence) {
                var preview = adjacence.nodeTo.id;
                if (preview === id){
                    preview = adjacence.nodeFrom.id;
                }
                best[best.length] = new Node({
                    data: self.get('data').get(preview).data,
                    mainId: id,
                    preview: preview,
                    coordinates: self.points[preview].geometry.coordinates,
                    weight: (1 - adjacence.data.weight)
                });
            });
            //fill up
            // if (best.length < count){
            //     for (var i = best.length;i<count;i++){
            //         best[i] = new Node({
            //             preview: 'empty',
            //             weight: 10
            //         });
            //     }
            // }
            //sort
            var rv = new NodeList(best,{comparator: 'weight'});
            //remove extra
            if (rv.length > count){
                for (var j = rv.length;j>count;j--){
                    rv.pop();
                }
            }
            //create css for masonry
            var partBig = 0.2, partMed = 0.3;
            partBig = Math.round(count * partBig);
            partMed = Math.round(count * partMed);
            rv.each(function(node){
                if (partBig > 0){
                    node.set('css', 'w4 h4');
                    partBig--;
                }else if (partMed > 0){
                    node.set('css', 'w3 h3');
                    partMed--;
                }else{
                    node.set('css', 'w2 h2');
                }
            });
            //shuffle
            rv = new NodeList(rv.shuffle());
            return rv;
        }
    });
    return Graph;
});