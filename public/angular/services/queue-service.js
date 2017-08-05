(function() {
    angular
        .module('puntgo')
        .service('queueService', queueService);

    queueService.$inject = ['$http', '$log', '$q'];

    function queueService($http, $log, $q) {
        console.log('queue service loaded');
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