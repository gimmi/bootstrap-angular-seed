/* global angular */

'use strict';
 
angular.module('app', []);
 
angular.module('app').factory('appServerSvc', function ($http) {
	return {
		call: function () {
			return $http.get('/angular-1.2.5/version.txt').then(function (ret) {
				return ret.data;
			});
		}
	};
});

angular.module('app').controller('appFeedbackCtrl', function ($scope, appServerSvc) {
	appServerSvc.call().then(function (ret) {
		console.log(ret);
	})
});
