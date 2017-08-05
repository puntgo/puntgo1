(function() {
    angular
        .module('puntgo')
        .service('homepageService', homepageService);

    homepageService.$inject = ['$http', '$log', '$q'];

    function homepageService($http, $log, $q) {
        console.log('home service loaded');
        return ({
            getAlbum: getAlbum
        });

        function getAlbum() {
            var deferred = $q.defer();
            $http.get('/getAlbum').
            then(function onSuccess(response) {
                deferred.resolve({
                    data: response.data
                });
            }).catch(function onError(response) {
                $log.error(response, response.data);
                deferred.reject(response);
            });
            return deferred.promise;
        };
    };
})();