(function() {
    angular
        .module('puntgo')
        .service('playlistService', playlistService);

    playlistService.$inject = ['$http','$rootScope','$log','$q'];

    function playlistService($http,$rootScope, $log, $q) {
        console.log('play list service loaded');
        $rootScope.loadPlaylist=false;
        $rootScope.playlist=[];

        return ({
            canILoadPlaylist:function(){
                return $rootScope.loadPlaylist;
            },
            setCanILoadPlaylist:function(isLoad){
                $rootScope.loadPlaylist=isLoad;
            },
            addToPlaylist:function(songs){
                var index =$rootScope.playlist.indexOf(songs);
                if (index==-1) {
                    $rootScope.playlist.push(songs);
                    $rootScope.loadViaUrl(songs.url)
                }else{
                    console.log('already added');
                }
            },
            getPlaylist:function(){
                return $rootScope.playlist;
            },
            removeFromPlaylist:function(songs){
                var index =$rootScope.playlist.indexOf(songs);
                $rootScope.playlist.splice(index,1);
               /* if($rootScope.playlist.length==0){
                    this.setCanILoadPlaylist(false);
                }*/
            }
        });
    };
})();