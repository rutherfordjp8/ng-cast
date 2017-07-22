angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = (query, callback) => {
    console.log('I\'m Searching', callback);

    $http.get('https://www.googleapis.com/youtube/v3/search', {
      //method: 'GET',
      //url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    })
    .then(function(stuff) {
      // this callback will be called asynchronously
      // when the response is available
      callback(stuff.data.items);
      console.log('Success: Retrieved from Server', stuff.data.items);
      
    })
      .catch(function(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
        console.log('Error: Did not retrieve from Server');
      });
  };
});


//[1,2,3,4,5,6,8,2],[1,3 5,3,7,]

//