/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="basecontentctrl.ts" />
/// <reference path="../interfaces/IProjectContentCtrlScope.ts" />
/// <reference path="../models/CardModel.ts" />

module app.controllers {
    'use strict';

    export class ProjectContentCtrl extends BaseContentCtrl {

        public static $inject = [
            '$scope', '$location'
        ];

        constructor(private $scope: interfaces.IProjectContentCtrlScope, private $location: ng.ILocationService) {

            super($scope);

            this.$scope.title = "TransCanada";
        }

        public getCards(): models.ICardModel[] {

            var myCards: models.ICardModel[] = [];

            myCards.push(new models.CardModel(
                1,
                "Vinicius Patrinhani",
                "https://lh3.googleusercontent.com/-Vk3GGkT_M4U/AAAAAAAAAAI/AAAAAAAAA6w/GAF0smAh7jc/photo.jpg?sz=150",
                "Ana Luisa Correa de Oliveira Bezerra",
                "February 4, 2015",
                "5 Years: Marcos Leandro Francischinelli",
                "O +Marcos Leandro Francischinelli completou 5 anos de CI&T em Janeiro!! O prêmio foi entregue pelo...",
                "./ciandt-i/images/photo01.jpg",
                true)
                );

            return myCards;
        }
    }
}