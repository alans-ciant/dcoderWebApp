/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../typings/angularjs/angular-route.d.ts"/>
/// <reference path="BaseContentCtrl.ts"/>

module app.controllers {
    'use strict';

    export class BaseDetailContentCtrl extends BaseContentCtrl {

        public static $inject = [
            '$scope', '$routeParams', '$location'
        ];

        constructor($scope: interfaces.IBaseContentCtrlScope, $routeParams: ng.route.IRouteParamsService, $location: ng.ILocationService) {

            super($scope);
        }

        public getDetailCard(): models.ICardModel {

            return null;
        }

        public getCards(): models.ICardModel[] {

            var myCards: models.ICardModel[] = [];

            return myCards;
        }
    }
}