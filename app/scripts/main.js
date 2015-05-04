/// <reference path="../../typings/angularjs/angular.d.ts"/>
/// <reference path="controllers/DCoderAppCtrl.ts"/>
/// <reference path="controllers/SearchTermContentCtrl.ts"/>
/// <reference path="controllers/HighlightsContentCtrl.ts"/>
/// <reference path="controllers/PeopleContentCtrl.ts"/>
/// <reference path="controllers/ProfileCtrl.ts"/>
/// <reference path="controllers/ProjectContentCtrl.ts"/>
var app;
(function (app) {
    'use strict';
    var AppMain = angular.module('appMain', ['ngRoute']).directive('onLastRepeat', function () {
        return function (scope, element, attrs) {
            if (scope.$last) {
                setTimeout(function () {
                    scope.$emit('onRepeatLast', element, attrs);
                }, 1);
            }
        };
    }).controller('dCoderAppCtrl', app.controllers.DCoderAppCtrl).controller('searchTermContentCtrl', app.controllers.SearchTermContentCtrl).controller('highlightsContentCtrl', app.controllers.HighlightsContentCtrl).controller('peopleContentCtrl', app.controllers.PeopleContentCtrl).controller('profileCtrl', app.controllers.ProfileCtrl).controller('projectContentCtrl', app.controllers.ProjectContentCtrl);
})(app || (app = {}));
//# sourceMappingURL=main.js.map