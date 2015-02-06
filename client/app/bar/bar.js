'use strict';

angular.module('draftcraftApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/bars', {
        templateUrl: 'app/bar/bar.html',
        controller: 'BarCtrl'
      });
  });