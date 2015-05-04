/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../interfaces/ipeoplecontentctrlscope.d.ts" />
/// <reference path="BaseContentCtrl.d.ts" />
/// <reference path="../interfaces/IProfileCtrlScope.d.ts" />
declare module app.controllers {
    class ProfileCtrl extends BaseContentCtrl {
        private $scope;
        private $routeParams;
        private $location;
        static $inject: string[];
        constructor($scope: interfaces.IProfileCtrlScope, $routeParams: ng.route.IRouteParamsService, $location: ng.ILocationService);
        getProfile(login: string): any;
        getCards(): models.ICardModel[];
    }
}
