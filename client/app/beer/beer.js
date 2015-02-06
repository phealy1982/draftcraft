'use strict';

angular.module('draftcraftApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/beers', {
        templateUrl: 'app/beer/beer.html',
        controller: 'BeerCtrl'
      });
  });
