/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../models/ICardModel.d.ts" />
declare module app.interfaces {
    interface IBaseContentCtrlScope extends ng.IScope {
        title: string;
        cards: models.ICardModel[];
        onLoad(): void;
    }
}
