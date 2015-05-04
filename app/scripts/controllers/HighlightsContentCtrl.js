/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="basecontentctrl.ts" />
/// <reference path="../interfaces/IHighlightsContentScope.ts"/>
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
        var HighlightsContentCtrl = (function (_super) {
            __extends(HighlightsContentCtrl, _super);
            function HighlightsContentCtrl($scope, $location) {
                _super.call(this, $scope);
                this.$scope = $scope;
                this.$location = $location;
            }
            HighlightsContentCtrl.prototype.getCards = function () {
                var myCards = [];
                return myCards;
            };
            HighlightsContentCtrl.$inject = [
                '$scope',
                '$location'
            ];
            return HighlightsContentCtrl;
        })(controllers.BaseContentCtrl);
        controllers.HighlightsContentCtrl = HighlightsContentCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=HighlightsContentCtrl.js.map