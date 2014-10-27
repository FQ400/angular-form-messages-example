'use strict';

angular.module('angular-form-messages-example', [ 'ngRoute','angular-form-messages-example-main','templates' ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });