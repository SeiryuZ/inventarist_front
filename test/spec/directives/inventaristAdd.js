'use strict';

describe('Directive: inventaristAdd', function () {

  // load the directive's module
  beforeEach(module('inventaristFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<inventarist-add></inventarist-add>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the inventaristAdd directive');
  }));
});
