/// <reference path="../../typings/angularjs/angular.d.ts"/>

'use strict';

/**
 * @ngdoc overview
 * @name dcoderWebAppApp
 * @description
 * # dcoderWebAppApp
 *
 * Main module of the application.
 */
angular
  .module('dcoderWebAppApp', [
    'ngAnimate',
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
