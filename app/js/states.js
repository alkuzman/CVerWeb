/**
 * Created by User on 1/14/2016.
 */

App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        abstract: true,
        views: {
            navbar: {
                templateUrl: "views/navbar.html"
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
        parent: "main",
        url: '/results',
        views: {
            "main@": {
                templateUrl: "views/results/results.html",
                controller: "ResultsController",
                controllerAs: "resCtrl"
            }
        }
    }).state("main.resume", {
        parent: "main",
        url: '/resume/:id',
        views: {
            "main@": {
                templateUrl: "views/cv/cv.html",
                controller: "CvController",
                controllerAs: "cvCtrl"
            }
        }
    }).state("main.resume.edit", {
        parent: "main",
        url: '/resume/:id/edit',
        views: {
            "main@": {
                templateUrl: "views/cv/cvEdit.html",
                controller: "CvController",
                controllerAs: "cvCtrl"
            }
        }
    }).state("main.resume.new", {
        parent: "main",
        url: '/new/resume',
        views: {
            "main@": {
                templateUrl: "views/cv/cvEdit.html",
                controller: "CvController",
                controllerAs: "cvCtrl"
            }
        }
    }).state("auth", {
        url: '/auth',
        views: {
            main: {
                templateUrl: "views/auth/auth.html",
                controller: "AuthController",
                controllerAs: "authCtrl"
            },
            "form@auth": {
                templateUrl: "views/auth/forms/getUserForm.html"
            }
        }
    }).state("auth.login", {
        url: '/login',
        parent: "auth",
        views: {
            "form@auth": {
                templateUrl: "views/auth/forms/getLoginForm.html"
            }
        }
    }).state("auth.register", {
        url: '/register',
        parent: "auth",
        views: {
            "form@auth": {
                templateUrl: "views/auth/forms/registerForm.html"
            }
        }
    });
}]);

