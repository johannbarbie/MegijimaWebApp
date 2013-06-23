
define(['jquery', 'underscoreM', 'backbone', 'vent','jitGraph', 'models/node', 'models/nodes'], function( $, _, Backbone, vent, JitGraph, Node, NodeList) {
    'use strict';

    var Graph = Backbone.Model.extend({
        gData: [{
                'id': 'node0',
                'name': 'perfect example',
                'data': {

                        'left' : 'left0 left0 left0 left0 left0 left0 left0 left0 left0 left0 left0 left0 left0 left0 left0 left0 left0',
                        'top' : 'top0 top0 top0 top0 top0 top0 top0 top0 top0 top0 top0 top0 top0 top0 top0 top0 top0 top0 top0 top0 ',
                        'image' : 'image0 image0 image0 image0 image0 image0 image0 image0 image0 image0 image0 image0 image0 image0 ',
                        'text' : 'text0 text0 text0 text0 text0 text0 text0 text0 text0 text0 text0 text0 text0 text0 text0 text0 text0 ',
                        'background' : 'http://saonetuh.jsp',
                        'personPic' : '.ouonutho.jpg',
                        'video' : ''
                    },
                    'adjacencies': [{
                        'nodeTo': 'node1',
                        'data': {
                            'weight': 1
                        }
                    }, {
                        'nodeTo': 'node2',
                        'data': {
                            'weight': 2
                        }
                    }, {
                        'nodeTo': 'node3',
                        'data': {
                            'weight': 3
                        }
                    }]
                }, {
                    'id': 'node1',
                    'name': 'to many',
                    'data': {
                        'left' : 'left1 left1 left1 left1 left1 left1 left1 left1 left1 left1 left1 left1 left1 left1 left1',
                        'top' : 'top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1 top1',
                        'image' : 'image1 image1 image1 image1 image1 image1 image1 image1 image1 image1 image1 image1 image1 ',
                        'text' : 'text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 '
                    },
                    'adjacencies': [{
                        'nodeTo': 'node0',
                        'data': {
                            'weight': 1
                        }
                    }, {
                        'nodeTo': 'node2',
                        'data': {
                            'weight': 2
                        }
                    }, {
                        'nodeTo': 'node3',
                        'data': {
                            'weight': 3
                        }
                    }, {
                        'nodeTo': 'node4',
                        'data': {
                            'weight': 4
                        }
                    }]
                }, {
                    'id': 'node2',
                    'name': 'same weight and to few',
                    'data': {
                        'left' : 'left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 left2 ',
                        'top' : 'top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 ',
                        'image' : 'image2 image2 image2 image2 image2 image2 image2 image2 image2 image2 image2 image2 image2 ',
                        'text' : 'text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 '
                    },
                    'adjacencies': [{
                        'nodeTo': 'node0',
                        'data': {
                            'weight': 3
                        }
                    }, {
                        'nodeTo': 'node1',
                        'data': {
                            'weight': 2
                        }
                    }]
                }, {
                    'id': 'node3',
                    'name': 'node3 name',
                    'data': {
                        'left' : 'left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 left3 ',
                        'top' : 'top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3',
                        'image' : 'image3 image3 image3 image3 image3 image3 image3 image3 image3 image3 image3 image3 image3 ',
                        'text' : 'text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 '
                    },
                    'adjacencies': [{
                        'nodeTo': 'node0',
                        'data': {
                            'weight': 1
                        }
                    }, {
                        'nodeTo': 'node1',
                        'data': {
                            'weight': 3
                        }
                    }]
                }, {
                    'id': 'node4',
                    'name': 'node4 name',
                    'data': {
                        'left' : 'left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 left4 ',
                        'top' : 'top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 ',
                        'image' : 'image4 image4 image4 image4 image4 image4 image4 image4 image4 image4 image4 image4 image4',
                        'text' : 'text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 '
                    },
                    'adjacencies': [{
                        'nodeTo': 'node1',
                        'data': {
                            'weight': 4
                        }
                    }]
                }, {
                    'id': 'node5',
                    'name': 'node5 name',
                    'data': {
                        'left' : 'left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 left5 ',
                        'top' : 'top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 top5 ',
                        'image' : 'image5 image5 image5 image5 image5 image5 image5 image5 image5 image5 image5 image5 image5 ',
                        'text' : 'text5 text5 text5 text5 text5 text5 text5 text5 text5 text5 text5 text5 text5 text5 text5 text5 '
                    }
                }],
                geojsonFeatures: {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': {
                                'nodeId': 'node0'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [134.050, 34.396]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'nodeId': 'node1'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [134.052, 34.396]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'nodeId': 'node2'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [134.054, 34.396]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'nodeId': 'node3'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [134.050, 34.394]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'nodeId': 'node4'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [134.050, 34.392]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'nodeId': 'node5'
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
                },
                getNode: function(id){
                    return new Node(this.get('data').get(id).data);
                },
                getClosest: function(id, count){
                    var best = [];
                    //read from graph and make nodes to models
                    _.each(this.get('data').get(id).adjacencies, function(adjacence) {
                        console.log('node: '+id+' has edge('+adjacence.data.weight+') from: ' + adjacence.nodeFrom.id + ' to: ' + adjacence.nodeTo.id);
                        var preview = adjacence.nodeTo.id;
                        if (preview === id){
                            preview = adjacence.nodeFrom.id;
                        }
                        best[best.length] = new Node({
                            preview: preview,
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
                    return rv;
                }
            });
    return Graph;
});