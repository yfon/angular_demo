;
(function(angular) {
	angular.module('moviecat.auto_directive', [])
		.directive('autoFocus', ['$location', function($location) {




			return {
				link: function($scope, iElm, iAttrs, controller) {

					$scope.location = $location;

					$scope.$watch('location.path()', function(now) {
						var aLink = iElm.children().attr('href');
						var paths = aLink.replace(/#(\/.+?)\/\d+/, '$1');
						iElm.removeClass('active');
						if (now.startsWith(paths)) {

							iElm.addClass('active');
						}
					});

				}
			}
		}]);
})(angular);
