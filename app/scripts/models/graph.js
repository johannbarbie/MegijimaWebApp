
define(['jquery', 'underscoreM', 'backbone', 'vent','jitGraph', 'models/node', 'models/nodes'], function( $, _, Backbone, vent, JitGraph, Node, NodeList) {
    'use strict';

    var Graph = Backbone.Model.extend({
        gData: [{
                'id': 'node00',
                'name': 'perfect example',
                'data': {
                        'name' : '',
                        'image' : 'megijimasuhee-5534.jpg',
                        'text' : 'node00.someText',
                        'mapLayer' : 'some layer for map to overlay'
                    },
                    'adjacencies': [{
                        'nodeTo': 'node01',
                        'data': {
                            'weight': 1
                        }
                    }, {
                        'nodeTo': 'node02',
                        'data': {
                            'weight': 2
                        }
                    }, {
                        'nodeTo': 'node03',
                        'data': {
                            'weight': 3
                        }
                    }]
                }, {
                    'id': 'node01',
                    'name': 'to many',
                    'data': {
                        'left' : 'left1 left1 left1 left1 left1 left1 left1 left1 left1 left1 left1 left1 left1 left1 left1',
                        'top' : 'top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1',
                        'image' : 'megijimasuhee-5614-2.jpg',
                        'text' : 'old (wo)man'
                    },
                    'adjacencies': [{
                        'nodeTo': 'node00',
                        'data': {
                            'weight': 1
                        }
                    }, {
                        'nodeTo': 'node02',
                        'data': {
                            'weight': 2
                        }
                    }, {
                        'nodeTo': 'node03',
                        'data': {
                            'weight': 3
                        }
                    }, {
                        'nodeTo': 'node04',
                        'data': {
                            'weight': 4
                        }
                    }]
                }, {
                    'id': 'node02',
                    'name': 'same weight and to few',
                    'data': {
                        'left' : 'left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 ',
                        'top' : 'top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 ',
                        'image' : 'megijimasuhee-5621-2.jpg',
                        'text' : 'old (wo)man'
                    },
                    'adjacencies': [{
                        'nodeTo': 'node00',
                        'data': {
                            'weight': 3
                        }
                    }, {
                        'nodeTo': 'node01',
                        'data': {
                            'weight': 2
                        }
                    }]
                }, {
                    'id': 'node03',
                    'name': 'node03 name',
                    'data': {
                        'left' : 'left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 ',
                        'top' : 'top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3',
                        'image' : 'megijimauntitled-5726.jpg',
                        'text' : 'old (wo)man'
                    },
                    'adjacencies': [{
                        'nodeTo': 'node00',
                        'data': {
                            'weight': 1
                        }
                    }, {
                        'nodeTo': 'node01',
                        'data': {
                            'weight': 3
                        }
                    }]
                }, {
                    'id': 'node04',
                    'name': 'node04 name',
                    'data': {
                        'left' : 'left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 ',
                        'top' : 'top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 ',
                        'image' : 'megijimauntitled-5735.jpg',
                        'text' : 'old (wo)man'
                    },
                    'adjacencies': [{
                        'nodeTo': 'node01',
                        'data': {
                            'weight': 4
                        }
                    }]
                }, {
                    'id': 'node05',
                    'name': 'node05 name',
                    'data': {
                        'left' : 'left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 ',
                        'top' : 'top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 ',
                        'image' : 'megijimauntitled-5735.jpg',
                        'text' : 'old (wo)man'
                    }
                }],
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
                                'coordinates': [134.050, 34.396]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'nodeId': 'node01'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [134.052, 34.396]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'nodeId': 'node02'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [134.054, 34.396]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'nodeId': 'node03'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [134.050, 34.394]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'nodeId': 'node04'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [134.050, 34.392]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'nodeId': 'node05'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [134.050, 34.390]
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