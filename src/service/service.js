(function(angular) {
	'use strict';
	angular.module("service",["ngResource"])
	.factory("companyService",["$resource",function(){
		return $resource()
	}])
	.factory("messageService",["$resource",function(){

	}]);
})(angular);

