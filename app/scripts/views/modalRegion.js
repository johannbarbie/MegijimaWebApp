define(['underscoreM', 'marionette', 'bootstrap'], function(_, Marionette) {
    'use strict';
    var modalRegion = Marionette.Region.extend({
        constructor: function() {
            Marionette.Region.prototype.constructor.apply(this, arguments);
            this.ensureEl();
            this.$el.on('hidden', {region:this}, function(event) {
                event.data.region.close();
            });
        },
        onShow: function() {
            this.$el.modal('show');
        },
        onClose: function() {
            this.$el.modal('hide');
        }
    });

    return modalRegion;
});