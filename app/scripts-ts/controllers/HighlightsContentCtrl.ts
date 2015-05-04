/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="basecontentctrl.ts" />
/// <reference path="../interfaces/IHighlightsContentScope.ts"/>

module app.controllers {
    'use strict';

    export class HighlightsContentCtrl extends BaseContentCtrl {

        public static $inject = [
            '$scope', '$location'
        ];

        constructor(private $scope: interfaces.IHighlightsContentScope, private $location: ng.ILocationService) {

            super($scope);
        }

        public getCards(): models.ICardModel[] {

            var myCards: models.ICardModel[] = [];

            return myCards;
        }
    }
}