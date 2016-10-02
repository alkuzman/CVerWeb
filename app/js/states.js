/**
 * Created by User on 1/14/2016.
 */

App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        abstract: true,
        views: {
            main: {
                templateUrl: "views/main.html"
            }
        }
    }).state('main.home', {
        url: '/',
        parent: "main",
        views: {
            "main": {
                templateUrl: "views/home.html"
            }
        }
    }).state("main.entity", {
        url: '/entity?query=:q&type=:t&owner=:o',
        parent: "main",
        views: {
            "main": {
                templateUrl: "views/results/results.html",
                controller: "ResultsController",
                controllerAs: "resCtrl"
            }
        }
    }).state("main.entity.resume", {
        parent: "main.entity",
        url: '/resume/:id',
        views: {
            "main@main": {
                templateUrl: "views/cv/cv.html",
                controller: "CvController",
                controllerAs: "cvCtrl"
            }
        }
    }).state("main.entity.resume.edit", {
        parent: "main.entity.resume",
        url: '/edit',
        views: {
            "main@main": {
                templateUrl: "views/cv/cvEdit.html",
                controller: "CvController",
                controllerAs: "cvCtrl"
            }
        }
    }).state("main.entity.newResume", {
        parent: "main.entity",
        url: '/new/resume',
        views: {
            "main@main": {
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
    }).state("main.entity.person", {
        url: '/person/:id',
        parent: "main.entity",
        views: {
            "main@main": {
                templateUrl: "views/person/person.html"
            }
        }
    }).state("main.entity.organization", {
        url: "/organization/:id",
        parent: "main.entity"
    }).state("main.entity.certificate", {
        url: "/certificate/:id",
        parent: "main.entity"
    }).state("main.entity.template", {
        url: "/template/:id",
        parent: "main.entity"
    }).state("main.entity.project", {
        url: "/project/:id",
        parent: "main.entity"
    }).state("main.entity.call", {
        url: "/call/:id",
        parent: "main.entity"
    });
}]);

