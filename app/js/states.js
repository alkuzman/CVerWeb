/**
 * Created by User on 1/14/2016.
 */

App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        views: {
            main: {
                templateUrl: "views/home.html"
            },
            navbar: {
                templateUrl: "views/navbar.html",
                controller: "SideNavigationController"
            },
            footer: {
                templateUrl: "views/footer.html"
            },
            container: {
                templateUrl: "views/container/container.html",
                controller: "TabController",
                controllerAs: "tabCtrl"
            },
            sidebar: {
                templateUrl: "views/sidebar.html",
                controller: "AuthController",
                controllerAs: "AuthCtrl"
            }
        }
    }).state("results", {
        url: '/results',
        views: {
            main: {
                templateUrl: "views/results/results.html",
                controller: "ResultsController"
            },
            navbar: {
                templateUrl: "views/navbar.html",
                controller: "AuthController"
            },
            footer: {
                templateUrl: "views/footer.html"
            }
        }
    }).state("cv", {
        url: '/cv',
        views: {
            main: {
                templateUrl: "views/cv/cv.html",
                controller: "CvController"
            },
            navbar: {
                templateUrl: "views/navbar.html",
                controller: "AuthController"
            },
            footer: {
                templateUrl: "views/footer.html"
            }
        }
    }).state("auth", {
        url: '/login',
        views: {
            main: {
                templateUrl: "views/auth/auth.html",
                controller: "AuthController"
            },
            footer: {
                templateUrl: "views/footer.html"
            }
        }
    })
}]);

