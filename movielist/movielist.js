(function(angular) {
	'use strict';
	// 创建正在热映模块

	var module = angular.module(
		'moviecat.movielist', ['ngRoute', 'httpModule']);
	// 配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/:movielist/:page', {
			templateUrl: 'movielist/view.html',
			controller: 'movielistController'
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
	module.controller('movielistController', ['$scope', '$route',
		'$routeParams', 'HttpService', 'movieConstant',

		function($scope, $route, $routeParams, HttpService, movieConstant) {

			var totalCount = 0;
			var eCount = 10;
			var totalPage = 0;
			var page = parseInt($routeParams.page);
			$scope.title = "Loading..."
			var start = (page - 1) * eCount;
			HttpService.jsonp(movieConstant.movielistAdd + $routeParams.movielist, { count: eCount, start: start, q: $routeParams.q },
				function(data) {
					$scope.title = data.title;
					$scope.subject = data.subjects;
					$scope.totalCount = data.total;
					$scope.totalPage = Math.ceil(data.total / eCount);
					$scope.Currentpage = page;
					$scope.$apply();


				});
			$scope.go = function(Currentpage) {
				if (Currentpage >= 1 && Currentpage <= $scope.totalPage) {

					$route.updateParams({ page: Currentpage });
				}

			};

		}

	]);
})(angular)
