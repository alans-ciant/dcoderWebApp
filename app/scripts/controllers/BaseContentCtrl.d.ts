/// <reference path="../../../typings/masonry/masonry.d.ts" />
/// <reference path="../interfaces/IBaseContentCtrlScope.d.ts" />
declare module app.controllers {
    class BaseContentCtrl {
        constructor($scope: interfaces.IBaseContentCtrlScope);
        initCardContainer(): void;
        getCards(): models.ICardModel[];
    }
}
