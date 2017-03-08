(function(angular) {
    'use strict';
    var jobListModule = angular.module('bossWebApp.jobList',[]);
    jobListModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/job', {
            templateUrl: 'src/view/jobList/view.html',
            controller: 'JobListController'
        }).when("/job/:jobId",{
            templateUrl: 'src/view/jobList/view_detail.html',
            controller: 'JobListDetailController'
        });
    }]);
    jobListModule.controller('JobListController',['$scope','$http',function ($scope,$http) {
        $scope.companyList = [];
        $scope.loading = true;
        $scope.showFilter=false;
        $http.get('src/resource_json/companyLists.json')
            .then(function(res) {
                //console.log('company==', res.data);
                $scope.companyList=res.data;
                $scope.loading = false;
            }, function(err) {
                $scope.loading = false;
            });
        $scope.exchangeFilter=function(){
            if ($scope.showFilter==false){
                $scope.showFilter=true;
            }else {
                $scope.showFilter=false;
            }
        };
    }]).controller('JobListDetailController',['$scope','$http',function($scope,$http){
        $scope.companyDetail = {};
        $scope.selected=false;
        $scope.loading = true;
        $http.get('src/resource_json/alibaba.json')
            .then(function(res) {
                //console.log('companyDetail==', res.data);
                $scope.companyDetail=res.data;
                $scope.loading = false;
            }, function(err) {
                $scope.loading = false;
            });

        $scope.showDetail = function(){
            //var article = document.getElementsByTagName('article')[0];
            //var iconbottom = document.getElementsByClassName('bottomIconSpan');
            //article.style.height = "auto";
            //iconbottom.removeClass('icon-bottom');
            //iconbottom.addClass('icon-top');
        }
    }]);
})(angular);
