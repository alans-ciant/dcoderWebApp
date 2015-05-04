/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../models/ICardModel.ts" />


module app.interfaces {
    'use strict';

    export interface IBaseContentCtrlScope extends ng.IScope {
        title: string;
        cards: models.ICardModel[];
        onLoad(): void;
    }
} 