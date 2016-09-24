'use strict';

/**
 * @ngdoc function
 * @name webappsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappsApp
 */
angular.module('webappsApp')
  .controller('MainCtrl', function () {
    new Vidage('#VidageVideo');
  });
