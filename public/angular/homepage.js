'use strict';

var app=angular.module('puntgo',['ui.bootstrap','ngRoute']);


/*app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$routeProvider.
	when('/klantopdrachten', {
		templateUrl: 'view/raadplegen/klantopdrachten.html',controller:'KlantopdrachtenCtrl'
	}).otherwise({
		templateUrl: 'view/resource_unavailable_404.html'
	});
}]);*/


app.controller('homePageController',['$scope','$rootScope','$http','$window',function($scope,$rootScope,$http,$window){

console.log("controller loaded");
}]);