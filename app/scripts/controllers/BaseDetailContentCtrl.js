/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../typings/angularjs/angular-route.d.ts"/>
/// <reference path="BaseContentCtrl.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var BaseDetailContentCtrl = (function (_super) {
            __extends(BaseDetailContentCtrl, _super);
            function BaseDetailContentCtrl($scope, $routeParams, $location) {
                _super.call(this, $scope);
            }
            BaseDetailContentCtrl.prototype.getDetailCard = function () {
                return null;
            };
            BaseDetailContentCtrl.prototype.getCards = function () {
                var myCards = [];
                return myCards;
            };
            BaseDetailContentCtrl.$inject = [
                '$scope',
                '$routeParams',
                '$location'
            ];
            return BaseDetailContentCtrl;
        })(controllers.BaseContentCtrl);
        controllers.BaseDetailContentCtrl = BaseDetailContentCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=BaseDetailContentCtrl.js.map