/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="basecontentctrl.ts" />
/// <reference path="../interfaces/IProjectContentCtrlScope.ts" />
/// <reference path="../models/CardModel.ts" />
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
        var ProjectContentCtrl = (function (_super) {
            __extends(ProjectContentCtrl, _super);
            function ProjectContentCtrl($scope, $location) {
                _super.call(this, $scope);
                this.$scope = $scope;
                this.$location = $location;
                this.$scope.title = "TransCanada";
            }
            ProjectContentCtrl.prototype.getCards = function () {
                var myCards = [];
                myCards.push(new app.models.CardModel(1, "Vinicius Patrinhani", "https://lh3.googleusercontent.com/-Vk3GGkT_M4U/AAAAAAAAAAI/AAAAAAAAA6w/GAF0smAh7jc/photo.jpg?sz=150", "Ana Luisa Correa de Oliveira Bezerra", "February 4, 2015", "5 Years: Marcos Leandro Francischinelli", "O +Marcos Leandro Francischinelli completou 5 anos de CI&T em Janeiro!! O prêmio foi entregue pelo...", "./ciandt-i/images/photo01.jpg", true));
                return myCards;
            };
            ProjectContentCtrl.$inject = [
                '$scope',
                '$location'
            ];
            return ProjectContentCtrl;
        })(controllers.BaseContentCtrl);
        controllers.ProjectContentCtrl = ProjectContentCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=ProjectContentCtrl.js.map