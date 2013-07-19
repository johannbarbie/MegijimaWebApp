define(['underscoreM', 'marionette', 'vent'], function(_, Marionette, vent) {
    'use strict';
    var itemView = Marionette.ItemView.extend({
        template: 'credits',
        className: 'creditsView',
        onShow:function () {
            //do something
            this.playmp3('audio/intro.wav');
        },
        playmp3: function(url){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', url);
            audioElement.load();
            audioElement.addEventListener('canplay', function() {
                audioElement.play();
            });
            this.audioElement = audioElement;
        },
        onClose: function(){
            this.audioElement.pause();
        },
        events: {
            'click':'handleClick'
        },
        handleClick: function(e){
            e.preventDefault();
            vent.trigger('app:credits',true);
        }
    });

    return itemView;
});