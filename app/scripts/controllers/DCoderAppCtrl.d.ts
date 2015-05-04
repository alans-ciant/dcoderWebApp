/// <reference path="../../../typings/masonry/masonry.d.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../interfaces/idcoderappscope.d.ts" />
/// <reference path="../models/menuitemmodel.d.ts" />
declare module app.controllers {
    class DCoderAppCtrl {
        private $scope;
        private $location;
        static $inject: string[];
        constructor($scope: interfaces.IDCoderAppScope, $location: ng.ILocationService);
        private getMenuItems();
    }
}
