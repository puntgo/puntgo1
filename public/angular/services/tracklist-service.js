(function() {
    angular
        .module('puntgo')
        .service('tracklistService', tracklistService);

    tracklistService.$inject = ['$http', '$log', '$q'];

    function tracklistService($http, $log, $q) {
        console.log('tracklist service loaded');

        return ({
            getAlbumSongs: function(albumName) {
                var deferred = $q.defer();
                $http.get('/getAlbumSongs?albumName=' + albumName,{cache:true}).
                then(function onSuccess(response) {
                    deferred.resolve({
                        data: response.data
                    });
                }).catch(function onError(response) {
                    $log.error(response, response.data);
                    deferred.reject(response);
                });
                return deferred.promise;
            }
        });
    };
})();