/* global describe, beforeEach, it, expect */
/* global module, inject */

'use strict';

describe('appFeedbackCtrl', function () {
	var scope, ctrl;

	beforeEach(module('app'));

	beforeEach(inject(function ($rootScope, $controller) {
	  scope = $rootScope.$new();
	  ctrl = $controller('appFeedbackCtrl', { $scope: scope });
	}));

	it('should be true', function () {
		expect(scope.text).toBe('ciao');
	});
});
