(function(){
    'use strict';

    angular
        .module('shipyard.containers')
        .factory('ContainerService', ContainerService)

    ContainerService.$inject = ['$http'];
    function ContainerService($http) {
        return {
            list: function() {
                var promise = $http
                    .get('/containers/json?all=1')
                    .then(function(response) {
                        return response.data;
                    });
                return promise;
            },
            inspect: function(containerId) {
                var promise = $http
                    .get('/containers/' + containerId + '/json')
                    .then(function(response) {
                        return response.data;
                    });
                return promise;
            },
            destroy: function(containerId) {
                var promise = $http
                    .delete('/containers/' + containerId)
                    .then(function(response) {
                        return response.data;
                    });
                return promise;

            },
            stop: function(containerId) {
                var promise = $http
                    .post('/containers/' + containerId + '/stop')
                    .then(function(response) {
                        return response.data;
                    });
                return promise;
            },
            restart: function(containerId) {
                var promise = $http
                    .post('/containers/' + containerId + '/restart')
                    .then(function(response) {
                        return response.data;
                    });
                return promise;
            },
        } 
    }


})();