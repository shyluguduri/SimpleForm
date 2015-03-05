var artistsHomeController=angular.module("artistsHomeController",[]);

artistsHomeController.controller('artistsHomeCtrl',function($scope,Artist,ArtistName,Track){

	$scope.artisAlbums=[];
	$scope.artisName=[];
	$scope.artisName.push('Search an Artist Above');
	$scope.userSeletectArtist='';
	$scope.showAlbum=false;
	$scope.showTracks=false;
	$scope.tracks=[];
	$scope.currentAlbumForTrack='';
	
	var allAlbumData=[];
	var albumID='';
	
	var getAlbumName=function(){
		var temp=$scope.userSeletectArtist.trim();
		Artist.query({artistName:temp},
		function(resultData){
			$scope.artisAlbums=[];
			allAlbumData=[];
			
			$scope.showAlbum=true;
			var artisAlbums=resultData.albums.items;
			for(x in artisAlbums){
			allAlbumData.push(artisAlbums[x]);
			var temp=artisAlbums[x].name;
			$scope.artisAlbums.push(temp);
			};	
		},
		function(errorData){
			alert("Please Check Your Input");
		});
		
	}
	
	
	$scope.getArtistName=function(){
		ArtistName.query({artistName:$scope.userArtist},
		function(resultData){
			$scope.artisName=[];
			var artisNames=resultData.artists.items;
			for(x in artisNames){
				var temp=artisNames[x].name;
				$scope.artisName.push(temp);
			};
			alert("Search Successful");
				
		},
		function(errorData){
			alert("Please Check Your Input");
		});
	}
	
	$scope.$watch('userSeletectArtist', function(newValue, oldValue) {
		if (newValue !== oldValue) {
			getAlbumName();
			$scope.tracks=[];
			$scope.showTracks=false;
		}
	});
	
	var getTrack=function(albumName){
		Track.query({id:albumID},
		function(resultData){
			console.log(resultData);
			$scope.tracks=[];
			var trackName=resultData.items;
			for(x in trackName){
				var temp=trackName[x].name;
				$scope.tracks.push(temp);
			};
			$scope.showTracks=true;
			$scope.currentAlbumForTrack=albumName;			
		},
		function(errorData){
			alert("Please Check Your Input");
		});
	}
	
	$scope.getAlbumTrack=function(albumName){		
		for(x in allAlbumData){
			if(allAlbumData[x].name==albumName){
			albumID=allAlbumData[x].id;
			break;
			}
		}		
		getTrack(albumName);
	}
});
