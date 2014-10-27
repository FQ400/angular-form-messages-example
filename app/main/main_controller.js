'use strict';

angular.module('angular-form-messages-example-main', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
    });
})
.controller('MainCtrl', function ($scope) {


    $scope.text = undefined;
    $scope.number = 123;

    console.log($scope.dummyForm.$error);
});
