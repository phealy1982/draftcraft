'use strict';

angular.module('draftcraftApp')
  .controller('BeerCtrl', function ($scope, $http) {
    $scope.beers = [];
    $scope.predicate = 'name';

    $http.get('/api/beers').success(function(beers) {
      $scope.beers = beers;
    });

    $scope.addBeer = function() {
      if($scope.newBeer === '') {
        return;
      }
      $http.post('/api/beers', { name: $scope.newBeer });
      $scope.newBeer = '';
    };

    $scope.deleteBeer = function(beer) {
      $http.delete('/api/beers/' + beer._id);
    };
  });
