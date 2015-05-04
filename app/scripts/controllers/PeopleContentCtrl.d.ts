/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="BaseContentCtrl.d.ts" />
/// <reference path="../interfaces/ipeoplecontentctrlscope.d.ts" />
/// <reference path="../models/cardmodel.d.ts" />
declare module app.controllers {
    class PeopleContentCtrl extends BaseContentCtrl {
        private $scope;
        private $location;
        static $inject: string[];
        constructor($scope: interfaces.IPeopleContentCtrlScope, $location: ng.ILocationService);
        getCards(): models.ICardModel[];
    }
}
