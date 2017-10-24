;
(function(angular) {
	angular.module('searchModule', ['ngRoute'])
		.directive('search', ['$route', '$location', function($route, $location) {
			return {

				template: '<form class="navbar-form navbar-right" ng-submit="search()"> ' +
					'<input type="text" class="form-control" placeholder="Search..." ng-model="content"> ' +
					'</form>',
				replace: true,
				link: function($scope) {

					$scope.content = '';

					$scope.search = function() {
						console.log($location.path())
						var path = $location.path();
						var searchPath = path.replace(/\/(.+?)\/\d+/, '$1');
						console.log(searchPath)
						//detail页面search有问题？
						$route.updateParams({ movielist: 'search', q: $scope.content });




						$scope.content = '';

					}

				}

			}
		}]);
})(angular);
