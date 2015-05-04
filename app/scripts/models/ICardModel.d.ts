/// <reference path="../../../typings/angularjs/angular.d.ts" />
declare module app.models {
    interface ICardModel {
        mainCard: boolean;
        cardId: number;
        sourceName: string;
        authorImageUrl: string;
        authorName: string;
        authoringDate: string;
        contentTitle: string;
        contentSummary: string;
        contentImageUrl: string;
    }
}
