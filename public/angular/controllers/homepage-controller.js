(function(){
'use strict';
 angular.module('puntgo')
 .controller('homePageController',homePageController);

 homePageController.$inject=['$scope','$rootScope','$http','homepageService','playlistService','$uibModal'];

 function homePageController($scope,$rootScope,$http,homepageService,playlistService,$uibModal){
 	
 	//Load the initial playlist.
 	$rootScope.loadPlaylist=playlistService.canILoadPlaylist();
 	

 	/**loading modal for all the pages
		$rootScope.openModal :- to open modal 
		$rootScope.modal: contain the modal object access to other pages

 	*/
     $rootScope.openModal = function(){
	      $rootScope.modal=$uibModal.open({
	        templateUrl: 'modal.html',
	        size: "md",
	        keyboard: true,
	        windowClass: 'center-modal',
	        controller:'modalController'
      });

      $rootScope.modal.result.then(function (selectedItem) {
        //$ctrl.selected = selectedItem;
      }, function () {
      	console.log('modal closed');
        //$log.info('Modal dismissed at: ' + new Date());
      });
    };
    //End the modal code: for other activity we are calling modal controller.

 	console.log("homePageController loaded");
 };
})();