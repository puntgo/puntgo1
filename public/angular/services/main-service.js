(function() {
    angular
        .module('puntgo')
        .service('mainService', mainService);

    mainService.$inject = ['$http', '$log', '$q'];

    function mainService($http, $log, $q) {
        console.log('main service loaded');
        return ({
            getAlbum: getAlbum
        });

        function getAlbum() {
            var deferred = $q.defer();
            $http.get('/getAlbum',{cache:true}).
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