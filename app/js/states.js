/**
 * Created by User on 1/14/2016.
 */

App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        abstract: true,
        views: {
            navbar: {
                templateUrl: "views/navbar.html",
                controller: "MainNavigationController",
                controllerAs: "mainNavCtrl"
            },
            container: {
                templateUrl: "views/container/container.html",
                controller: "TabController",
                controllerAs: "tabCtrl"
            },
            sidebar: {
                templateUrl: "views/sidebar.html"
            }
        }
    }).state('main.home', {
        parent: "main",
        url: '/',
        views: {
            "main@": {
                templateUrl: "views/home.html"
            }
        }
    }).state("main.results", {
        url: '/results',
        views: {
            "main@": {
                templateUrl: "views/results/results.html",
                controller: "ResultsController",
                controllerAs: "resCtrl"
            }
        }
    }).state("main.resume", {
        url: '/resume',
        views: {
            "main@": {
                templateUrl: "views/cv/cv.html",
                controller: "CvController"
            }
        }
    }).state("main.resume.preview", {
        url: '/resume/:id'
    }).state("auth", {
        url: '/login',
        views: {
            main: {
                templateUrl: "views/auth/auth.html",
                controller: "AuthController",
                controllerAs: "authCtrl"
            }
        }
    })
}]);

