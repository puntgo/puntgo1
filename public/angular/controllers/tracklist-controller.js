(function() {
    'use strict';
    angular.module('puntgo')
        .controller('trackListController', trackListController);

    trackListController.$inject = ['$rootScope','$routeParams', 'tracklistService', 'playlistService'];

    function trackListController($rootScope,$routeParams, tracklistService, playlistService) {
        var tlc = this;
        console.log("trackListController loaded" + $routeParams.albumName);
        var trackPromise = tracklistService.getAlbumSongs($routeParams.albumName);
        trackPromise.then(function(res) {
            tlc.trackInfo = res.data;
            console.log('data recived ' + JSON.stringify(tlc.trackInfo));
        });

        tlc.addToList = function(songs) {
            playlistService.setCanILoadPlaylist(true);
            playlistService.addToPlaylist(songs);
        };
        tlc.addAllToPlaylist=function(albumSongs){
            playlistService.setCanILoadPlaylist(true);
        	albumSongs.forEach(function(songs){
     	        playlistService.addToPlaylist(songs);
        	});
        };
        tlc.playOnly=function(song){
            $rootScope.loadViaSong(song);
        };
    };
})();
