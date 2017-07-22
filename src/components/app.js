angular.module('video-player')

.component('app', {
  // TODO
  
  controller: function() {
      
    this.videos = window.exampleVideoData;
    this.playingvideo = this.videos[0];

  },
  
 
  
  templateUrl: 'src/templates/app.html'


});
