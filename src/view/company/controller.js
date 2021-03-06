(function(angular) {
	'use strict';
	var companyModule = angular.module('bossWebApp.company',[]);
    companyModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/company', {
            templateUrl: './src/view/company/view.html',
            controller: 'CompanyController'
        }).when("/company/:companyId",{
            templateUrl: 'src/view/company/view_detail.html',
            controller: 'CompanyDetailController'
        });
    }]);
    companyModule.controller('CompanyController',['$scope','$http',function ($scope, $http) {
        $scope.companyList = [];
        $scope.loading = true;
        $http.get('src/resource_json/companyLists.json')
            .then(function(res) {
                $scope.companyList=res.data;
                $scope.loading = false;
            }, function(err) {
                $scope.loading = false;
            });
    }]).controller('CompanyDetailController',['$scope','$http',function($scope, $http){

    }]);
})(angular);
