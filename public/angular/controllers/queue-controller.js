(function(){
'use strict';
 angular.module('puntgo')
 .controller('queueController',queueController);
 
 queueController.$inject=['$scope','$http','queueService'];

 function queueController($scope,$http,queueService){
 	console.log("queueController loaded");
 //	var a=queueService.getAlbum();
 //	console.log('respone is '+ JSON.stringify(a));
 };
})();