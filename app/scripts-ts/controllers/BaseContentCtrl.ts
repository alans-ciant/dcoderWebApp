/// <reference path="../../../typings/masonry/masonry.d.ts"/>
/// <reference path="../interfaces/IBaseContentCtrlScope.ts"/>

module app.controllers {
    'use strict';

    export class BaseContentCtrl {

        constructor($scope: interfaces.IBaseContentCtrlScope) {

            $scope.cards = this.getCards();

            $scope.$on('onRepeatLast',(scope, element, attrs) => {

                this.initCardContainer();
            });
        }

        public initCardContainer(): void {

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
        }

        public getCards(): models.ICardModel[] {

            var myCards: models.ICardModel[] = [];

            return myCards;
        }
    }
}