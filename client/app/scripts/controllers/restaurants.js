'use strict';

angular.module('clientApp')
.controller('RestaurantsCtrl', ['$http', '$scope', 'RestaurantsService', function($http, $scope, RestaurantsService) {

  // $scope.map = { center: { latitude: 45, longitude: -73} zoom:8 };

$scope.map = { center: { latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };

  $scope.getRestaurants = function () {
    RestaurantsService.getRestaurants() 
    .success(function(data) {
      $scope.restaurants = data;
    })
    .error(function(data) {
      console.log('error --->\n' + data);
    });
  };

  $scope.getRestaurants();
}]);