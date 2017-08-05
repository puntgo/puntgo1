(function(){
'use strict';
 angular.module('puntgo')
 .controller('playlistController',playlistController);
 
 playlistController.$inject=['$scope','$http','playlistService'];

 function playlistController($scope,$http,playlistService){
 	console.log("playlistController loaded");

 	$scope.removeFromPlaylist=function(songs){
 		playlistService.removeFromPlaylist(songs);
 	};
 };
})();