define(['jquery', 'underscoreM', 'backbone', 'models/node'], function( $, _, Backbone, Node) {
    'use strict';

    return Backbone.Collection.extend({
        model: Node
    });
});