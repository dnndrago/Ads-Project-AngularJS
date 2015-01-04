var app = angular.module('softUniApp', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/listAllAds.html'
		});

		//$routeProvider.when('/newAd', {
		//	templateUrl: 'templates/newAd.html',
		//	controller: 'NewAdController'
		//});
		//$routeProvider.when('/ads', {
		//	templateUrl: 'templates/allAds.html',
		//	controller: 'AllAdsController'
		//});
	});


