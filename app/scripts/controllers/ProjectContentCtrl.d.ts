/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="BaseContentCtrl.d.ts" />
/// <reference path="../interfaces/IProjectContentCtrlScope.d.ts" />
/// <reference path="../models/cardmodel.d.ts" />
declare module app.controllers {
    class ProjectContentCtrl extends BaseContentCtrl {
        private $scope;
        private $location;
        static $inject: string[];
        constructor($scope: interfaces.IProjectContentCtrlScope, $location: ng.ILocationService);
        getCards(): models.ICardModel[];
    }
}
