app.controller('MainController', function($scope, publicServices) {
	publicServices.getAllAds(function(resp) {
		$scope.ads = resp;
	});
	publicServices.getAllTowns(function(resp) {
		$scope.towns = resp;
	});
	publicServices.getAllCategories(function(resp) {
		$scope.categories = resp;
	});
});