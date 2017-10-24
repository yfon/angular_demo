'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
	'ngRoute',
	'moviecat.moviedetail',
	'moviecat.movielist',
	'moviecat.auto_directive',
	'searchModule',


]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
}]).constant('movieConstant', {
	pageSize: 10,
	movielistAdd: 'http://api.douban.com/v2/movie/',
	detailAdd: 'http://api.douban.com/v2/movie/subject/'
});;
/*.controller('searchController', ['$scope', '$route', function($scope, $route) {
		$scope.content = '';
		console.log($scope.content)
		$scope.search = function() {
				$route.updateParams({ movielist: 'search', q: $scope.content });
		};

}]);*/
