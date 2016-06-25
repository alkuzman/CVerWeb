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
                templateUrl: "views/navbar.html"
            },
            footer: {
                templateUrl: "views/footer.html"
            }
        }
    }).state("cvs", {
        url: '/cvs',
        views: {
            main: {
                templateUrl: "views/cvs/cvs.html"
            },
            navbar: {
                templateUrl: "views/navbar.html"
            },
            footer: {
                templateUrl: "views/footer.html"
            }
        }
    }).state("cv", {
        url: '/cv',
        views: {
            main: {
                templateUrl: "views/cv/cv.html"
            },
            navbar: {
                templateUrl: "views/navbar.html"
            },
            footer: {
                templateUrl: "views/footer.html"
            }
        }
    });
}]);

