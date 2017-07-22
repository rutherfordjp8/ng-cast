angular.module('video-player')

.component('app', {
  // TODO
  
  controller: function(youTube) {
    
    this.videos;
    this.playingvideo;

    this.newvideo = (video) => {
      this.playingvideo = video;
      youTube.search();
    };
    
    this.newvideos = (videos) => {
      this.videos = videos;
      this.playingvideo = videos[0];
    
    };
    
    this.enter = (event, query) => {
      if (event.keyCode === 13) {
        youTube.search(query, this.newvideos);
      }
    };
    
    this.searchvideos = (query) => {
      youTube.search(query, this.newvideos);
    };

    this.searchvideos('');
  },
  
 
  
  templateUrl: 'src/templates/app.html'


});
