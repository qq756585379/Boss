(function(angular) {
    'use strict';

    var messageModule = angular.module('bossWebApp.message',[]);

    messageModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/message', {
            templateUrl: 'src/view/message/view.html',
            controller: 'MessageController'
        });
    }]);

    messageModule.controller('MessageController',['$scope','$http',function ($scope, $http) {
        $scope.messageList=[];
        $scope.loading = true;
        $http.get('src/resource_json/messageLists.json')
            .then(function(res) {
                $scope.messageList=res.data;
                $scope.loading = false;
            }, function(err) {
                $scope.loading = false;
            });
    }]);

})(angular);
