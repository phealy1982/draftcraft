'use strict';

describe('Controller: BarCtrl', function () {

  // load the controller's module
  beforeEach(module('draftcraftApp'));

  var BarCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/bars')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    MainCtrl = $controller('BarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of bars to the scope', function () {
    $httpBackend.flush();
    expect(scope.bars.length).toBe(4);
  });
});
