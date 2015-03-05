var artistServices=angular.module("artistServices",['ngResource']);

artistServices.factory('Artist',function($resource){
	return $resource('https://api.spotify.com/v1/search?q=:artistName&type=album', {}, {
      query: {method:'GET', isArray: false}
    });

})
.factory('ArtistName',function($resource){
	return $resource('https://api.spotify.com/v1/search?q=:artistName&type=artist', {}, {
      query: {method:'GET', isArray: false}
    });

})

.factory('Track',function($resource){
	return $resource('https://api.spotify.com/v1/albums/:id/tracks', {}, {
      query: {method:'GET', isArray: false}
    });

})

;
