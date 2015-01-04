app.factory('publicServices', function ($http, $log) {
    return {
        getAllAds: function(success) {
            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/ads?pagesize=10&startpage=1'
            })
                .success(function(data, status, headers, config) {
                success(data)
                })
                .error(function(data, status, headers, config) {
                $log.log(data);
                });
        },
        getAllTowns: function(success) {
            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/towns'
            })
                .success(function(data, status, headers, config) {
                    success(data)
                })
                .error(function(data, status, headers, config) {
                    $log.log(data);
                });
        },
        getAllCategories: function(success) {
            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/categories'
            })
                .success(function(data, status, headers, config) {
                    success(data)
                })
                .error(function(data, status, headers, config) {
                    $log.log(data);
                });
        }
    }
});
