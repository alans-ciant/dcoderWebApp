/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../interfaces/ipeoplecontentctrlscope.ts" />
/// <reference path="basecontentctrl.ts" />
/// <reference path="../interfaces/IProfileCtrlScope.ts" />

module app.controllers {
    'use strict';

    export class ProfileCtrl extends BaseContentCtrl {

        public static $inject = [
            '$scope', '$routeParams', '$location'
        ];

        constructor(private $scope: interfaces.IProfileCtrlScope, private $routeParams: ng.route.IRouteParamsService, private $location: ng.ILocationService) {

            super($scope);

            this.$scope.profileCard = this.getProfile($routeParams["login"]);
        }

        public getProfile(login: string): any {

            if (login == "patrinhani") {
                return {
                    personImageBanner: "./ciandt-i/images/profiles/patrinhani/banner.jpg",
                    personPhoto: "./ciandt-i/images/profiles/patrinhani/photo.jpg",
                    personName: "VINICIUS PATRINHANI",
                    personTitle: "Software Architect",
                    contactEmail: "patrinhani@ciandt.com",
                    mobileTel: "+55 11 97100-4256",
                    contactLocation: "Campinas",
                    managerLogin: "hgomes",
                    managerName: "HOOBERTH WENDER GOMES",
                    awards: [
                        {
                            awardId: 28,
                            awardTitle: "Sensei - 14, December 28, 2013",
                            awardDescription: "Robot Fight .Net",
                        },
                        {
                            awardId: 28,
                            awardTitle: "Sensei - 15, March 15, 2014",
                            awardDescription: "API Marvel .Net",
                        },
                    ],
                    skillTags: [
                        {
                            tagId: "smtag-tech-ms-dotnet-mts",
                            tagLabel: ".NET Framework/MTS"
                        },
                        {
                            tagId: "smtag-tech-ms-sql-server",
                            tagLabel: "MS SQL SERVER"
                        },
                        {
                            tagId: "smtag-tech-ms-dotnet-csharp",
                            tagLabel: "C#"
                        },
                        {
                            tagId: "smtag-tech-ms-dotnet-visual-studio",
                            tagLabel: "MS Visual Studio .NET"
                        },
                        {
                            tagId: "smtag-tech-ms-dotnet-aspnet",
                            tagLabel: "ASP.NET"
                        },
                        {
                            tagId: "smtag-tech-web-services",
                            tagLabel: "Web Services"
                        },
                        {
                            tagId: "smtag-tech-xml",
                            tagLabel: "XML"
                        },
                        {
                            tagId: "smtag-tech-ms-msmq",
                            tagLabel: "MSMQ"
                        },
                        {
                            tagId: "smtag-tech-uml",
                            tagLabel: "UML"
                        },
                        {
                            tagId: "smtag-tech-css",
                            tagLabel: "CSS"
                        },
                        {
                            tagId: "smtag-tech-html",
                            tagLabel: "HTML"
                        },
                        {
                            tagId: "smtag-tech-ajax",
                            tagLabel: "AJAX"
                        },
                        {
                            tagId: "smtag-tech-javascript",
                            tagLabel: "Javascript"
                        },
                    ],
                };
            }

            return null;
        }

        public getCards(): models.ICardModel[] {

            var myCards: models.ICardModel[] = [];

            return myCards;
        }
    }
}