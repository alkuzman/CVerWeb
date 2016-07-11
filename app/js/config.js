/**
 * Created by i5 on 16.01.2016.
 */


App.config(['$resourceProvider', function($resourceProvider){
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

App.config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('grey');
}]);

App.config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider.fontSet('md', 'material-icons');
}]);

App.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '../translate/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('mk');
}]);