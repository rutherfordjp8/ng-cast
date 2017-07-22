angular.module('video-player')

.component('app', {
  // TODO
  
  controller: function() {
    
    this.videos = window.exampleVideoData;
    this.playingvideo = this.videos[0];

    this.newvideo = (video) => {
      this.playingvideo = video;
    };

    this.newvideos = (videos) => {
      this.videos = videos;
    };
  },
  
 
  
  templateUrl: 'src/templates/app.html'


});
