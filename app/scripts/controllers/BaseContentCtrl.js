/// <reference path="../../../typings/masonry/masonry.d.ts"/>
/// <reference path="../interfaces/IBaseContentCtrlScope.ts"/>
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var BaseContentCtrl = (function () {
            function BaseContentCtrl($scope) {
                var _this = this;
                $scope.cards = this.getCards();
                $scope.$on('onRepeatLast', function (scope, element, attrs) {
                    _this.initCardContainer();
                });
            }
            BaseContentCtrl.prototype.initCardContainer = function () {
                var $container = $('.masonry-container').masonry({
                    columnWidth: '.masonry-card.one-column',
                    gutter: ".gutter-sizer",
                    itemSelector: '.masonry-card',
                });
                //var $container = $('.masonry-container').masonry({
                //    columnWidth: '.masonry-card.col-md-2',
                //    itemSelector: '.masonry-card',
                //});
                // initialize Masonry after all images have loaded  
                $container.imagesLoaded(function () {
                    $container.masonry();
                });
            };
            BaseContentCtrl.prototype.getCards = function () {
                var myCards = [];
                return myCards;
            };
            return BaseContentCtrl;
        })();
        controllers.BaseContentCtrl = BaseContentCtrl;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=BaseContentCtrl.js.map