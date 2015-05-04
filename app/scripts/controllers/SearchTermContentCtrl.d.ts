/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="BaseContentCtrl.d.ts" />
/// <reference path="../interfaces/ISearchTermContentCtrlScope.d.ts" />
declare module app.controllers {
    class SearchTermContentCtrl extends BaseContentCtrl {
        private $scope;
        private $location;
        static $inject: string[];
        constructor($scope: interfaces.ISearchTermContentCtrlScope, $location: ng.ILocationService);
        getCards(): models.ICardModel[];
    }
}
