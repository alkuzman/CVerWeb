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
            }
        }
    });

}]);

