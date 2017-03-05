(function(angular) {
	'use strict';
	angular.module('bossWebApp', [
		'ngRoute',
		'ngAnimate',
        'bossWebApp.jobList',
		'bossWebApp.company',
		'bossWebApp.message',
		'bossWebApp.userInfo',
        'bossWebApp.directives'
		]).config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
			// 定义hash的前缀为#！
			$locationProvider.hashPrefix("!");
			$routeProvider.otherwise({ redirectTo: '/job' });
			// .otherwise('/job');
		}]);
})(angular);


