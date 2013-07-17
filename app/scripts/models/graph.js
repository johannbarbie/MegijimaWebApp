
define(['jquery', 'underscoreM', 'backbone', 'vent','jitGraph', 'models/node', 'models/nodes'], function( $, _, Backbone, vent, JitGraph, Node, NodeList) {
    'use strict';

    var Graph = Backbone.Model.extend({
        gData: [
            {
                'id': 'node00',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 1}},
                    {'nodeTo': 'node02','data': {'weight': 2}},
                    {'nodeTo': 'node03','data': {'weight': 3}},
                    {'nodeTo': 'node04','data': {'weight': 4}},
                    {'nodeTo': 'node05','data': {'weight': 5}},
                    {'nodeTo': 'node06','data': {'weight': 6}},
                    {'nodeTo': 'node07','data': {'weight': 7}},
                    {'nodeTo': 'node08','data': {'weight': 8}}
                ]
            }, {
                'id': 'node01',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node00','data': {'weight': 1}},
                    {'nodeTo': 'node02','data': {'weight': 2}},
                    {'nodeTo': 'node03','data': {'weight': 3}},
                    {'nodeTo': 'node04','data': {'weight': 4}}
                ]
            }, {
                'id': 'node02',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node00','data': {'weight': 3}},
                    {'nodeTo': 'node01','data': {'weight': 2}}
                ]
            }, {
                'id': 'node03',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node00','data': {'weight': 1}},
                    {'nodeTo': 'node01','data': {'weight': 3}}
                ]
            }, {
                'id': 'node04',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node05',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node06',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node07',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node08',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node09',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node10',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node11',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node12',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node13',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node14',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node15',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node16',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node17',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node18',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node19',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node20',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node21',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node22',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node23',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node24',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node25',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node26',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node27',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node28',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node29',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node30',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node31',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
                ]
            }, {
                'id': 'node32',
                'data': {'mapLayer' : 'some layer for map to overlay'},
                'adjacencies': [
                    {'nodeTo': 'node01','data': {'weight': 4}}
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
            console.log(id);
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
                    weight: (10 - adjacence.data.weight)
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