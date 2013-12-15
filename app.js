/* global angular */

'use strict';
 
angular.module('app', []);
 
angular.module('app').factory('appServerSvc', function ($http) {
	return {
		call: function () {
			return $http.get('/login').then(function (ret) {
				return ret.headers('X-User-Name');
			});
		}
	};
});

angular.module('app').controller('appFeedbackCtrl', function ($scope) {
	$scope.text = 'ciao';
});
