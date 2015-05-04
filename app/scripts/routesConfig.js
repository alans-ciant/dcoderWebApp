/// <reference path="main.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts"/>
var app;
(function (app) {
    'use strict';
    angular.module('appMain').config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/highlights', {
            templateUrl: 'views/highlights.html',
            controller: 'highlightsContentCtrl'
        }).when('/people', {
            templateUrl: 'views/people.html',
            controller: 'peopleContentCtrl'
        }).when('/projects/TransCanada', {
            templateUrl: 'views/project-TransCanada.html',
            controller: 'projectContentCtrl'
        }).when('/U/:login', {
            templateUrl: 'views/profile.html',
            controller: 'profileCtrl'
        }).otherwise({
            redirectTo: '/',
            controller: 'searchTermContentCtrl'
        });
    }]);
})(app || (app = {}));
//# sourceMappingURL=routesConfig.js.map