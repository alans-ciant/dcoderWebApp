/// <reference path="../../../typings/angularjs/angular.d.ts" />
declare module app.models {
    class MenuItemModel {
        label: string;
        url: string;
        private $location;
        constructor(label: string, url: string, $location: ng.ILocationService);
        isActive(): boolean;
    }
}
