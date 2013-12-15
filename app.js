'use strict';
 
angular.module('app', []);
 
angular.module('app').factory('appSvc', function () {
    return {
    	a: 1
    };
});

angular.module('app').controller('appFeedbackCtrl', function ($scope) {
	$scope.text = 'ciao';
});
