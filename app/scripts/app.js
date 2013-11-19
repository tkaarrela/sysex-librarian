'use strict';

angular.module('sysexLibrarianApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'dx7-sysex'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
