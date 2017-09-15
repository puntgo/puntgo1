(function(){
'use strict';
 angular.module('puntgo')
 .controller('mainController',mainController);
 
 mainController.$inject=['$scope','$http','mainService'];

 function mainController($scope,$http,mainService){
 	
 	Puntgo.fullMode();

 	console.log("mainController loaded");
 	var albumPromise=mainService.getAlbum();
 	albumPromise.then(function(res){
 		$scope.albumsList=res.data;
 	});
 };
})();