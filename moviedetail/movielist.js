(function(angular) {
	'use strict';
	// 创建正在热映模块

	var module = angular.module(
		'moviecat.moviedetail', ['ngRoute', 'httpModule']);
	// 配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/detail/:id', {
			templateUrl: 'moviedetail/view.html',
			controller: 'moviedetailController'
		});
	}]);

	/*	module.controller('movielistController', ['$scope', '$http', function($scope, $http) {

						$http.get('/moviecat/app/data.json').then(function(resData) {
								console.log(resData)
								$scope.subject = resData.data.subjects;
						}, function(err) {
								console.log(err.statusText)
								$scope.message = err.statusText;
						});
				}*/
	module.controller('moviedetailController', ['$scope', '$route',
		'$routeParams', 'HttpService', 'movieConstant',

		function($scope, $route, $routeParams, HttpService, movieConstant) {
			$scope.movie = {};
			var http = movieConstant.detailAdd + $routeParams.id;
			HttpService.jsonp(http, {}, function(data) {
				$scope.movie = data;
				$scope.$apply();
			});


		}

	]);
})(angular)
