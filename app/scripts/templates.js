// templates
define(function(require) {
    'use strict';
    return {
        main: require('text!templates/main.htm'),
        header: require('text!templates/header.htm'),
        footer: require('text!templates/footer.htm'),
        composite: require('text!templates/composite.htm'),
        portrait: require('text!templates/portrait.htm')
    };
});
