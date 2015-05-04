/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="BaseContentCtrl.d.ts" />
declare module app.controllers {
    class BaseDetailContentCtrl extends BaseContentCtrl {
        static $inject: string[];
        constructor($scope: interfaces.IBaseContentCtrlScope, $routeParams: ng.route.IRouteParamsService, $location: ng.ILocationService);
        getDetailCard(): models.ICardModel;
        getCards(): models.ICardModel[];
    }
}
