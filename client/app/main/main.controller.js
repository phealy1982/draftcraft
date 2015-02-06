'use strict';

angular.module('draftcraftApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    $scope.happenings = [];

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.whatHappeningLimit = 140;

    $scope.exceedsWhatHappeningLimit = function(happening) {
        return(happening.length > $scope.whatHappeningLimit);
    };

    //if($scope.isLoggedIn()){
      $http.get('/api/happenings').success(function(happenings) {
        $scope.happenings = happenings;
        
      })
      ;
    //};

    $scope.addHappening = function() {
      if($scope.newHappening === '') {
        return;
      }
      $http.post('/api/happenings', { name: $scope.newHappening });
      $scope.newHappening = '';
    };

    $scope.deleteHappening = function(happening) {
      $http.delete('/api/happenings/' + happening._id);
    };
  });
