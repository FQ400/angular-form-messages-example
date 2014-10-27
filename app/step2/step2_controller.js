'use strict';

angular.module('angular-form-messages-example-step2', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
    .when('/step2', {
        templateUrl: 'step2/step2.html',
        controller: 'Step2Controller'
    });
})
.controller('Step2Controller', function ($scope) {
    console.log('Step2');
});
