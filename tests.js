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

describe('appServerSvc', function () {
	var svc, httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function ($httpBackend, appServerSvc) {
		httpBackend = $httpBackend;
		svc = appServerSvc;
	}));

	it('should return username', function () {
		httpBackend.when('GET', '/login').respond({userId: 'userX'}, {'X-User-Name': 'xxx'});

		var actual;
		svc.call().then(function (ret) {
			actual = ret;
		});

		httpBackend.flush();
		expect(actual).toBe('xxx');
	});
});
