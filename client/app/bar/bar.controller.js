'use strict';

angular.module('draftcraftApp')
  .controller('BarCtrl', function ($scope, $http) {
    $scope.bars = [];
    $scope.predicate = 'name';

    $http.get('/api/bars').success(function(bars) {
      $scope.bars = bars;
    });

    $scope.addBar = function() {
      if($scope.newBar === '') {
        return;
      }
      $http.post('/api/bars', { name: $scope.newBar });
      $scope.newBar = '';
    };

    $scope.deleteBar = function(bar) {
      $http.delete('/api/bars/' + bar._id);
    };
  });
