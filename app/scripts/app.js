'use strict';

/**
 * @ngdoc overview
 * @name webappsApp
 * @description
 * # webappsApp
 *
 * Main module of the application.
 */
angular
  .module('webappsApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/mypic', {
        templateUrl: 'views/mypic.html',
        controller: 'MypicCtrl',
        controllerAs: 'Mypic'
      })
      .otherwise({
        redirectTo: '/'
      });
  });