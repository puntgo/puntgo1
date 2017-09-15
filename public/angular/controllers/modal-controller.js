(function(){
'use strict';
angular.module('puntgo')
 .controller('modalController',modalController);

modalController.$inject=['$scope','$rootScope'];

function modalController($scope,$rootScope){
  $scope.text = 'I am from modal controller :)';

    $rootScope.closeModal = function(){
     $rootScope.modal.close()
    };
};
})();