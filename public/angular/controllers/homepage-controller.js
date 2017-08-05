(function(){
'use strict';
 angular.module('puntgo')
 .controller('homePageController',homePageController);
 
 homePageController.$inject=['$scope','$rootScope','$http','homepageService','playlistService'];

 function homePageController($scope,$rootScope,$http,homepageService,playlistService){
 	$rootScope.loadPlaylist=playlistService.canILoadPlaylist();
 	console.log("homePageController loaded");
 };
})();