'use strict';

angular.module('sysexLibrarianApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'dx7-operator',
  'midi-services',
  'common-sysex',
  'dx7-sysex',
  'components'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dx7', {
        templateUrl: 'views/dx7.html',
        controller: 'Dx7Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
