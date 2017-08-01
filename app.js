var testApp = angular.module('testApp', []);
testApp.controller('testController', function($scope) {
	$scope.first = '';
	$scope.last = '';
	$scope.updateMessage = function() {
		$scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
	};
})
