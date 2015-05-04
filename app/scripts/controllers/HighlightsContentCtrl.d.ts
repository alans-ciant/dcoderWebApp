/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="BaseContentCtrl.d.ts" />
/// <reference path="../interfaces/IHighlightsContentScope.d.ts" />
declare module app.controllers {
    class HighlightsContentCtrl extends BaseContentCtrl {
        private $scope;
        private $location;
        static $inject: string[];
        constructor($scope: interfaces.IHighlightsContentScope, $location: ng.ILocationService);
        getCards(): models.ICardModel[];
    }
}
