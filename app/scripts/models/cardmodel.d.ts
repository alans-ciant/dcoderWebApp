/// <reference path="../../../typings/angularjs/angular.d.ts" />
declare module app.models {
    class CardModel implements ICardModel {
        cardId: number;
        sourceName: string;
        authorImageUrl: string;
        authorName: string;
        authoringDate: string;
        contentTitle: string;
        contentSummary: string;
        contentImageUrl: string;
        mainCard: boolean;
        constructor(cardId: number, sourceName: string, authorImageUrl: string, authorName: string, authoringDate: string, contentTitle: string, contentSummary: string, contentImageUrl: string, mainCard?: boolean);
        getContentImgWidth(): number;
        getContentImgHeight(): number;
        getClass(): string;
    }
}
