
define(['jquery', 'underscoreM', 'backbone', 'vent','jitGraph', 'models/node', 'models/nodes'], function( $, _, Backbone, vent, JitGraph, Node, NodeList) {
    'use strict';

    var Graph = Backbone.Model.extend({
        gData: [
            {
                'id': 'node00',
                'adjacencies': [
                    {'nodeTo': 'node18','data': {'weight': 0.653}},
                    {'nodeTo': 'node29','data': {'weight': 0.703}},
                    {'nodeTo': 'node14','data': {'weight': 0.451}},
                    {'nodeTo': 'node08','data': {'weight': 0.476}},
                    {'nodeTo': 'node32','data': {'weight': 0.604}},
                    {'nodeTo': 'node24','data': {'weight': 0.498}},
                    {'nodeTo': 'node22','data': {'weight': 0.407}},
                    {'nodeTo': 'node19','data': {'weight': 0.054}},
                    {'nodeTo': 'node01','data': {'weight': 0.611}},
                    {'nodeTo': 'node20','data': {'weight': 0.605}},
                    {'nodeTo': 'node16','data': {'weight': 0.415}},
                    {'nodeTo': 'node07','data': {'weight': 0.621}},
                    {'nodeTo': 'node21','data': {'weight': 0.455}},
                    {'nodeTo': 'node13','data': {'weight': 0.512}},
                    {'nodeTo': 'node30','data': {'weight': 0.514}},
                    {'nodeTo': 'node04','data': {'weight': 0.635}},
                    {'nodeTo': 'node09','data': {'weight': 0.565}},
                    {'nodeTo': 'node11','data': {'weight': 0.626}},
                    {'nodeTo': 'node02','data': {'weight': 0.583}},
                    {'nodeTo': 'node10','data': {'weight': 0.253}},
                    {'nodeTo': 'node12','data': {'weight': 0.575}},
                    {'nodeTo': 'node05','data': {'weight': 0.027}}
                ]
            }, {
                'id': 'node01',
                'adjacencies': [
                    {'nodeTo': 'node07','data': {'weight': 0.653}},
                    {'nodeTo': 'node15','data': {'weight': 0.754}},
                    {'nodeTo': 'node21','data': {'weight': 0.615}},
                    {'nodeTo': 'node18','data': {'weight': 0.488}},
                    {'nodeTo': 'node31','data': {'weight': 0.628}},
                    {'nodeTo': 'node08','data': {'weight': 0.562}},
                    {'nodeTo': 'node03','data': {'weight': 0.555}},
                    {'nodeTo': 'node22','data': {'weight': 0.41}},
                    {'nodeTo': 'node02','data': {'weight': 0.587}},
                    {'nodeTo': 'node29','data': {'weight': 0.717}},
                    {'nodeTo': 'node30','data': {'weight': 0.573}},
                    {'nodeTo': 'node10','data': {'weight': 0.342}},
                    {'nodeTo': 'node09','data': {'weight': 0.621}},
                    {'nodeTo': 'node11','data': {'weight': 0.618}},
                    {'nodeTo': 'node19','data': {'weight': 0.092}},
                    {'nodeTo': 'node16','data': {'weight': 0.463}},
                    {'nodeTo': 'node13','data': {'weight': 0.447}},
                    {'nodeTo': 'node20','data': {'weight': 0.657}},
                    {'nodeTo': 'node04','data': {'weight': 0.606}},
                    {'nodeTo': 'node12','data': {'weight': 0.576}},
                    {'nodeTo': 'node24','data': {'weight': 0.51}},
                    {'nodeTo': 'node05','data': {'weight': 0.115}}
                ]
            }, {
                'id': 'node02',
                'adjacencies': [
                    {'nodeTo': 'node29','data': {'weight': 0.546}},
                    {'nodeTo': 'node13','data': {'weight': 0.61}},
                    {'nodeTo': 'node16','data': {'weight': 0.534}},
                    {'nodeTo': 'node04','data': {'weight': 0.628}},
                    {'nodeTo': 'node08','data': {'weight': 0.539}},
                    {'nodeTo': 'node21','data': {'weight': 0.555}},
                    {'nodeTo': 'node05','data': {'weight': 0.11}},
                    {'nodeTo': 'node07','data': {'weight': 0.519}},
                    {'nodeTo': 'node11','data': {'weight': 0.551}},
                    {'nodeTo': 'node14','data': {'weight': 0.535}},
                    {'nodeTo': 'node22','data': {'weight': 0.367}},
                    {'nodeTo': 'node32','data': {'weight': 0.614}},
                    {'nodeTo': 'node18','data': {'weight': 0.66}},
                    {'nodeTo': 'node03','data': {'weight': 0.929}},
                    {'nodeTo': 'node15','data': {'weight': 0.552}},
                    {'nodeTo': 'node20','data': {'weight': 0.574}},
                    {'nodeTo': 'node19','data': {'weight': 0.055}},
                    {'nodeTo': 'node12','data': {'weight': 0.565}},
                    {'nodeTo': 'node30','data': {'weight': 0.478}},
                    {'nodeTo': 'node10','data': {'weight': 0.331}},
                    {'nodeTo': 'node24','data': {'weight': 0.609}},
                    {'nodeTo': 'node09','data': {'weight': 0.559}}
                ]
            }, {
                'id': 'node03',
                'adjacencies': [
                    {'nodeTo': 'node13','data': {'weight': 0.653}},
                    {'nodeTo': 'node20','data': {'weight': 0.581}},
                    {'nodeTo': 'node07','data': {'weight': 0.458}},
                    {'nodeTo': 'node08','data': {'weight': 0.556}},
                    {'nodeTo': 'node14','data': {'weight': 0.555}},
                    {'nodeTo': 'node16','data': {'weight': 0.587}},
                    {'nodeTo': 'node12','data': {'weight': 0.604}},
                    {'nodeTo': 'node21','data': {'weight': 0.593}},
                    {'nodeTo': 'node19','data': {'weight': 0.111}},
                    {'nodeTo': 'node30','data': {'weight': 0.456}},
                    {'nodeTo': 'node09','data': {'weight': 0.569}},
                    {'nodeTo': 'node10','data': {'weight': 0.435}},
                    {'nodeTo': 'node32','data': {'weight': 0.565}},
                    {'nodeTo': 'node29','data': {'weight': 0.5}},
                    {'nodeTo': 'node04','data': {'weight': 0.626}},
                    {'nodeTo': 'node24','data': {'weight': 0.577}},
                    {'nodeTo': 'node22','data': {'weight': 0.408}},
                    {'nodeTo': 'node18','data': {'weight': 0.652}},
                    {'nodeTo': 'node15','data': {'weight': 0.516}}
                ]
            }, {
                'id': 'node04',
                'adjacencies': [
                    {'nodeTo': 'node30','data': {'weight': 0.513}},
                    {'nodeTo': 'node18','data': {'weight': 0.61}},
                    {'nodeTo': 'node21','data': {'weight': 0.483}},
                    {'nodeTo': 'node29','data': {'weight': 0.598}},
                    {'nodeTo': 'node07','data': {'weight': 0.561}},
                    {'nodeTo': 'node19','data': {'weight': 0.095}},
                    {'nodeTo': 'node15','data': {'weight': 0.611}},
                    {'nodeTo': 'node20','data': {'weight': 0.551}},
                    {'nodeTo': 'node09','data': {'weight': 0.535}},
                    {'nodeTo': 'node24','data': {'weight': 0.558}},
                    {'nodeTo': 'node31','data': {'weight': 0.614}},
                    {'nodeTo': 'node12','data': {'weight': 0.58}},
                    {'nodeTo': 'node05','data': {'weight': 0.071}},
                    {'nodeTo': 'node13','data': {'weight': 0.585}},
                    {'nodeTo': 'node11','data': {'weight': 0.552}},
                    {'nodeTo': 'node08','data': {'weight': 0.514}},
                    {'nodeTo': 'node10','data': {'weight': 0.34}},
                    {'nodeTo': 'node14','data': {'weight': 0.565}},
                    {'nodeTo': 'node16','data': {'weight': 0.505}},
                    {'nodeTo': 'node22','data': {'weight': 0.335}}
                ]
            }, {
                'id': 'node05',
                'adjacencies': [
                    {'nodeTo': 'node19','data': {'weight': 0.0}},
                    {'nodeTo': 'node12','data': {'weight': 0.053}},
                    {'nodeTo': 'node30','data': {'weight': 0.072}},
                    {'nodeTo': 'node07','data': {'weight': 0.049}},
                    {'nodeTo': 'node10','data': {'weight': 0.026}},
                    {'nodeTo': 'node21','data': {'weight': 0.212}},
                    {'nodeTo': 'node24','data': {'weight': 0.093}},
                    {'nodeTo': 'node18','data': {'weight': 0.054}},
                    {'nodeTo': 'node29','data': {'weight': 0.057}},
                    {'nodeTo': 'node13','data': {'weight': 0.041}},
                    {'nodeTo': 'node20','data': {'weight': 0.231}},
                    {'nodeTo': 'node32','data': {'weight': 0.158}},
                    {'nodeTo': 'node22','data': {'weight': 0.123}},
                    {'nodeTo': 'node15','data': {'weight': 0.091}},
                    {'nodeTo': 'node16','data': {'weight': 0.133}},
                    {'nodeTo': 'node14','data': {'weight': 0.125}},
                    {'nodeTo': 'node11','data': {'weight': 0.031}}
                ]
            }, {
                'id': 'node06',
                'adjacencies': [
                    {'nodeTo': 'node18','data': {'weight': 0.503}},
                    {'nodeTo': 'node21','data': {'weight': 0.461}},
                    {'nodeTo': 'node12','data': {'weight': 0.528}},
                    {'nodeTo': 'node20','data': {'weight': 0.542}},
                    {'nodeTo': 'node24','data': {'weight': 0.458}},
                    {'nodeTo': 'node11','data': {'weight': 0.492}},
                    {'nodeTo': 'node07','data': {'weight': 1.0}},
                    {'nodeTo': 'node15','data': {'weight': 0.662}},
                    {'nodeTo': 'node31','data': {'weight': 0.543}},
                    {'nodeTo': 'node10','data': {'weight': 0.203}},
                    {'nodeTo': 'node16','data': {'weight': 0.385}},
                    {'nodeTo': 'node14','data': {'weight': 0.419}},
                    {'nodeTo': 'node30','data': {'weight': 0.532}},
                    {'nodeTo': 'node19','data': {'weight': 0.025}},
                    {'nodeTo': 'node22','data': {'weight': 0.324}},
                    {'nodeTo': 'node13','data': {'weight': 0.474}},
                    {'nodeTo': 'node29','data': {'weight': 0.679}},
                    {'nodeTo': 'node09','data': {'weight': 0.516}}
                ]
            }, {
                'id': 'node07',
                'adjacencies': [
                    {'nodeTo': 'node18','data': {'weight': 0.503}},
                    {'nodeTo': 'node21','data': {'weight': 0.461}},
                    {'nodeTo': 'node12','data': {'weight': 0.528}},
                    {'nodeTo': 'node20','data': {'weight': 0.542}},
                    {'nodeTo': 'node24','data': {'weight': 0.458}},
                    {'nodeTo': 'node11','data': {'weight': 0.492}},
                    {'nodeTo': 'node15','data': {'weight': 0.662}},
                    {'nodeTo': 'node32','data': {'weight': 0.543}},
                    {'nodeTo': 'node10','data': {'weight': 0.203}},
                    {'nodeTo': 'node16','data': {'weight': 0.385}},
                    {'nodeTo': 'node14','data': {'weight': 0.419}},
                    {'nodeTo': 'node30','data': {'weight': 0.532}},
                    {'nodeTo': 'node19','data': {'weight': 0.025}},
                    {'nodeTo': 'node22','data': {'weight': 0.324}},
                    {'nodeTo': 'node13','data': {'weight': 0.474}},
                    {'nodeTo': 'node29','data': {'weight': 0.679}},
                    {'nodeTo': 'node09','data': {'weight': 0.516}}
                ]
            }, {
                'id': 'node08',
                'adjacencies': [
                    {'nodeTo': 'node30','data': {'weight': 0.503}},
                    {'nodeTo': 'node12','data': {'weight': 0.528}},
                    {'nodeTo': 'node14','data': {'weight': 0.571}},
                    {'nodeTo': 'node21','data': {'weight': 0.555}},
                    {'nodeTo': 'node19','data': {'weight': 0.164}},
                    {'nodeTo': 'node10','data': {'weight': 0.452}},
                    {'nodeTo': 'node11','data': {'weight': 0.484}},
                    {'nodeTo': 'node18','data': {'weight': 0.415}},
                    {'nodeTo': 'node13','data': {'weight': 0.588}},
                    {'nodeTo': 'node29','data': {'weight': 0.493}},
                    {'nodeTo': 'node20','data': {'weight': 0.511}},
                    {'nodeTo': 'node15','data': {'weight': 0.496}},
                    {'nodeTo': 'node24','data': {'weight': 0.356}},
                    {'nodeTo': 'node22','data': {'weight': 0.209}},
                    {'nodeTo': 'node16','data': {'weight': 0.602}},
                    {'nodeTo': 'node09','data': {'weight': 0.51}},
                    {'nodeTo': 'node32','data': {'weight': 0.437}}
                ]
            }, {
                'id': 'node09',
                'adjacencies': [
                    {'nodeTo': 'node13','data': {'weight': 0.469}},
                    {'nodeTo': 'node18','data': {'weight': 0.458}},
                    {'nodeTo': 'node19','data': {'weight': 0.156}},
                    {'nodeTo': 'node31','data': {'weight': 0.517}},
                    {'nodeTo': 'node24','data': {'weight': 0.429}},
                    {'nodeTo': 'node11','data': {'weight': 0.486}},
                    {'nodeTo': 'node14','data': {'weight': 0.524}},
                    {'nodeTo': 'node16','data': {'weight': 0.561}},
                    {'nodeTo': 'node30','data': {'weight': 0.485}},
                    {'nodeTo': 'node10','data': {'weight': 0.393}},
                    {'nodeTo': 'node21','data': {'weight': 0.552}},
                    {'nodeTo': 'node20','data': {'weight': 0.564}},
                    {'nodeTo': 'node22','data': {'weight': 0.421}},
                    {'nodeTo': 'node12','data': {'weight': 0.495}},
                    {'nodeTo': 'node15','data': {'weight': 0.541}},
                    {'nodeTo': 'node29','data': {'weight': 0.559}}
                ]
            }, {
                'id': 'node10',
                'adjacencies': [
                    {'nodeTo': 'node20','data': {'weight': 0.372}},
                    {'nodeTo': 'node13','data': {'weight': 0.513}},
                    {'nodeTo': 'node16','data': {'weight': 0.642}},
                    {'nodeTo': 'node11','data': {'weight': 0.475}},
                    {'nodeTo': 'node32','data': {'weight': 0.203}},
                    {'nodeTo': 'node24','data': {'weight': 0.258}},
                    {'nodeTo': 'node15','data': {'weight': 0.281}},
                    {'nodeTo': 'node21','data': {'weight': 0.574}},
                    {'nodeTo': 'node18','data': {'weight': 0.28}},
                    {'nodeTo': 'node30','data': {'weight': 0.396}},
                    {'nodeTo': 'node14','data': {'weight': 0.435}},
                    {'nodeTo': 'node29','data': {'weight': 0.226}},
                    {'nodeTo': 'node19','data': {'weight': 0.368}},
                    {'nodeTo': 'node12','data': {'weight': 0.457}}
                ]
            }, {
                'id': 'node11',
                'adjacencies': [
                    {'nodeTo': 'node22','data': {'weight': 0.341}},
                    {'nodeTo': 'node29','data': {'weight': 0.584}},
                    {'nodeTo': 'node12','data': {'weight': 0.664}},
                    {'nodeTo': 'node19','data': {'weight': 0.185}},
                    {'nodeTo': 'node31','data': {'weight': 0.555}},
                    {'nodeTo': 'node18','data': {'weight': 0.545}},
                    {'nodeTo': 'node21','data': {'weight': 0.588}},
                    {'nodeTo': 'node24','data': {'weight': 0.496}},
                    {'nodeTo': 'node30','data': {'weight': 0.53}},
                    {'nodeTo': 'node13','data': {'weight': 0.527}},
                    {'nodeTo': 'node16','data': {'weight': 0.515}},
                    {'nodeTo': 'node14','data': {'weight': 0.453}},
                    {'nodeTo': 'node15','data': {'weight': 0.652}}
                ]
            }, {
                'id': 'node12',
                'adjacencies': [
                    {'nodeTo': 'node14','data': {'weight': 0.503}},
                    {'nodeTo': 'node20','data': {'weight': 0.539}},
                    {'nodeTo': 'node16','data': {'weight': 0.549}},
                    {'nodeTo': 'node24','data': {'weight': 0.474}},
                    {'nodeTo': 'node19','data': {'weight': 0.267}},
                    {'nodeTo': 'node13','data': {'weight': 0.57}},
                    {'nodeTo': 'node32','data': {'weight': 0.507}},
                    {'nodeTo': 'node29','data': {'weight': 0.537}},
                    {'nodeTo': 'node18','data': {'weight': 0.541}},
                    {'nodeTo': 'node15','data': {'weight': 0.577}},
                    {'nodeTo': 'node22','data': {'weight': 0.361}},
                    {'nodeTo': 'node21','data': {'weight': 0.597}}
                ]
            }, {
                'id': 'node13',
                'adjacencies': [
                    {'nodeTo': 'node29','data': {'weight': 0.455}},
                    {'nodeTo': 'node21','data': {'weight': 0.589}},
                    {'nodeTo': 'node14','data': {'weight': 0.65}},
                    {'nodeTo': 'node30','data': {'weight': 0.542}},
                    {'nodeTo': 'node31','data': {'weight': 0.438}},
                    {'nodeTo': 'node22','data': {'weight': 0.312}},
                    {'nodeTo': 'node20','data': {'weight': 0.52}},
                    {'nodeTo': 'node24','data': {'weight': 0.498}},
                    {'nodeTo': 'node18','data': {'weight': 0.576}},
                    {'nodeTo': 'node15','data': {'weight': 0.407}},
                    {'nodeTo': 'node16','data': {'weight': 0.673}},
                    {'nodeTo': 'node19','data': {'weight': 0.183}}
                ]
            }, {
                'id': 'node14',
                'adjacencies': [
                    {'nodeTo': 'node30','data': {'weight': 0.503}},
                    {'nodeTo': 'node24','data': {'weight': 0.409}},
                    {'nodeTo': 'node18','data': {'weight': 0.44}},
                    {'nodeTo': 'node15','data': {'weight': 0.399}},
                    {'nodeTo': 'node32','data': {'weight': 0.397}},
                    {'nodeTo': 'node21','data': {'weight': 0.521}},
                    {'nodeTo': 'node22','data': {'weight': 0.324}},
                    {'nodeTo': 'node16','data': {'weight': 0.637}},
                    {'nodeTo': 'node29','data': {'weight': 0.428}},
                    {'nodeTo': 'node19','data': {'weight': 0.15}},
                    {'nodeTo': 'node20','data': {'weight': 0.506}}
                ]
            }, {
                'id': 'node15',
                'adjacencies': [
                    {'nodeTo': 'node30','data': {'weight': 0.58}},
                    {'nodeTo': 'node16','data': {'weight': 0.388}},
                    {'nodeTo': 'node20','data': {'weight': 0.658}},
                    {'nodeTo': 'node18','data': {'weight': 0.562}},
                    {'nodeTo': 'node29','data': {'weight': 0.756}},
                    {'nodeTo': 'node24','data': {'weight': 0.52}},
                    {'nodeTo': 'node32','data': {'weight': 0.651}},
                    {'nodeTo': 'node21','data': {'weight': 0.51}},
                    {'nodeTo': 'node22','data': {'weight': 0.376}},
                    {'nodeTo': 'node19','data': {'weight': 0.091}}
                ]
            }, {
                'id': 'node16',
                'adjacencies': [
                    {'nodeTo': 'node21','data': {'weight': 0.599}},
                    {'nodeTo': 'node19','data': {'weight': 0.243}},
                    {'nodeTo': 'node29','data': {'weight': 0.402}},
                    {'nodeTo': 'node20','data': {'weight': 0.531}},
                    {'nodeTo': 'node18','data': {'weight': 0.441}},
                    {'nodeTo': 'node30','data': {'weight': 0.538}},
                    {'nodeTo': 'node22','data': {'weight': 0.36}},
                    {'nodeTo': 'node32','data': {'weight': 0.415}}
                ]
            }, {
                'id': 'node17',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.618}},
                    {'nodeTo': 'node29','data': {'weight': 0.588}},
                    {'nodeTo': 'node30','data': {'weight': 0.512}},
                    {'nodeTo': 'node22','data': {'weight': 0.422}},
                    {'nodeTo': 'node18','data': {'weight': 1.0}},
                    {'nodeTo': 'node19','data': {'weight': 0.054}},
                    {'nodeTo': 'node20','data': {'weight': 0.551}},
                    {'nodeTo': 'node21','data': {'weight': 0.453}},
                    {'nodeTo': 'node24','data': {'weight': 0.597}}
                ]
            }, {
                'id': 'node18',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.618}},
                    {'nodeTo': 'node29','data': {'weight': 0.588}},
                    {'nodeTo': 'node30','data': {'weight': 0.512}},
                    {'nodeTo': 'node22','data': {'weight': 0.422}},
                    {'nodeTo': 'node19','data': {'weight': 0.054}},
                    {'nodeTo': 'node20','data': {'weight': 0.551}},
                    {'nodeTo': 'node21','data': {'weight': 0.453}},
                    {'nodeTo': 'node24','data': {'weight': 0.597}}
                ]
            }, {
                'id': 'node19',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.0}},
                    {'nodeTo': 'node21','data': {'weight': 0.264}},
                    {'nodeTo': 'node20','data': {'weight': 0.128}},
                    {'nodeTo': 'node30','data': {'weight': 0.143}},
                    {'nodeTo': 'node24','data': {'weight': 0.093}},
                    {'nodeTo': 'node22','data': {'weight': 0.061}},
                    {'nodeTo': 'node29','data': {'weight': 0.057}}
                ]
            }, {
                'id': 'node20',
                'adjacencies': [
                    {'nodeTo': 'node30','data': {'weight': 0.552}},
                    {'nodeTo': 'node22','data': {'weight': 0.418}},
                    {'nodeTo': 'node21','data': {'weight': 0.564}},
                    {'nodeTo': 'node24','data': {'weight': 0.533}},
                    {'nodeTo': 'node29','data': {'weight': 0.693}},
                    {'nodeTo': 'node32','data': {'weight': 0.579}}
                ]
            }, {
                'id': 'node21',
                'adjacencies': [
                    {'nodeTo': 'node22','data': {'weight': 0.26}},
                    {'nodeTo': 'node29','data': {'weight': 0.451}},
                    {'nodeTo': 'node30','data': {'weight': 0.464}},
                    {'nodeTo': 'node24','data': {'weight': 0.444}},
                    {'nodeTo': 'node32','data': {'weight': 0.434}}
                ]
            }, {
                'id': 'node22',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.401}},
                    {'nodeTo': 'node24','data': {'weight': 0.344}},
                    {'nodeTo': 'node29','data': {'weight': 0.405}},
                    {'nodeTo': 'node30','data': {'weight': 0.352}}
                ]
            }, {
                'id': 'node23',
                'adjacencies': [
                    {'nodeTo': 'node29','data': {'weight': 0.542}},
                    {'nodeTo': 'node30','data': {'weight': 0.442}},
                    {'nodeTo': 'node32','data': {'weight': 0.544}},
                    {'nodeTo': 'node24','data': {'weight': 1.0}}
                ]
            }, {
                'id': 'node24',
                'adjacencies': [
                    {'nodeTo': 'node29','data': {'weight': 0.542}},
                    {'nodeTo': 'node30','data': {'weight': 0.442}},
                    {'nodeTo': 'node32','data': {'weight': 0.544}}
                ]
            }, {
                'id': 'node29',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.624}},
                    {'nodeTo': 'node30','data': {'weight': 0.637}}
                ]
            }, {
                'id': 'node30',
                'adjacencies': [
                    {'nodeTo': 'node32','data': {'weight': 0.495}}
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
                        'coordinates': [134.056376, 34.398721]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node23'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.054971, 34.395973]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'nodeId': 'node24'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [134.055234, 34.396526]
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
        initialize: function() {
            if (typeof(Number.prototype.toRad) === 'undefined') {
                Number.prototype.toRad = function() {
                    return this * Math.PI / 180;
                };
            }
            var g = JitGraph.construct(this.gData);
            this.set('data', g);
            _.bindAll(this,'getNode','getClosest');
            this.points = {};
            var self = this;
            _.each(this.geojsonFeatures.features, function(point){
                self.points[point.properties.nodeId] = point;
            });
        },
        getGeoJson: function() {
            return this.geojsonFeatures;
        },
        getClosestGeoJson: function(id) {
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
                    coordinates: self.points[preview].geometry.coordinates
                });
            });
            return null;
        },
        getNode: function(id){
            var rv = this.get('data').get(id);
            rv.data.name = id + '.name';
            rv.data.text = id + '.text';
            rv.data.crops = id + '.crops';
            rv.coordinates = this.points[id].geometry.coordinates;
            return new Node(rv);
        },
        getDistance: function(c1, c2){
            var R = 6371; // km
            var dLat = (c2[1]-c1[1]).toRad();
            var dLon = (c2[0]-c1[0]).toRad();
            var lat1 = c1[1].toRad();
            var lat2 = c2[1].toRad();

            var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c;
            return d;
        },
        getClosestRaw: function(id){
            var best = [];
            //read from graph and make nodes to models
            var self = this;
            _.each(this.get('data').get(id).adjacencies, function(adjacence) {
                var preview = adjacence.nodeTo.id;
                if (preview === id){
                    preview = adjacence.nodeFrom.id;
                }
                var maxDistance = 3.6;
                var distWeight = 1-self.getDistance(
                    self.points[preview].geometry.coordinates,
                    self.points[id].geometry.coordinates)/maxDistance;
                best[best.length] = new Node({
                    data: self.get('data').get(preview).data,
                    mainId: id,
                    preview: preview,
                    coordinates: self.points[preview].geometry.coordinates,
                    weight: (1 - ((adjacence.data.weight+distWeight)/2))
                });
            });
            return best;
        },
        getClosest: function(id, count){
            var best = this.getClosestRaw(id);
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