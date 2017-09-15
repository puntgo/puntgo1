(function() {
    'use strict';
    angular
        .module('puntgo', ['ngRoute','ui.bootstrap'])
        .config(config).run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        //   $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'main.html',
                controller: 'mainController',
                controllerAs: 'mCtrl'
            })
            /*.when('/albums', {
                templateUrl: 'track_list.html',
                controller: 'trackListController',
                controllerAs: 'tlCtrl'
            })*/
            .when('/hindi/:albumName', {
                templateUrl: 'track_list.html',
                controller: 'trackListController',
                controllerAs: 'tlc'
            });
    }

    function run($rootScope) {
        $rootScope.$on("$routeChangeStart", function() {
            NProgress.start();
        });

        $rootScope.$on("$routeChangeSuccess", function() {
            NProgress.done();
        });
    };
})();
