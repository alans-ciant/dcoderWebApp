/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../models/cardmodel.d.ts" />
/// <reference path="../models/menuitemmodel.d.ts" />
declare module app.interfaces {
    interface IDCoderAppScope extends ng.IScope {
        title: string;
        menuItems: models.MenuItemModel[];
    }
}
