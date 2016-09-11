/**
 * Created by i5 on 16.01.2016.
 */


App.config(['$resourceProvider', function ($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

App.config(['$mdThemingProvider', function ($mdThemingProvider) {
    var customTealMap = $mdThemingProvider.extendPalette('teal', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });

    $mdThemingProvider.definePalette('customTeal', customTealMap);

    $mdThemingProvider.theme('default')
        .primaryPalette('customTeal', {
            "default": "500",
            "hue-1": "50"
        })
        .accentPalette('pink')
        .warnPalette('red')
        .backgroundPalette('grey');

    $mdThemingProvider.theme('secondary')
        .primaryPalette('cyan')
        .accentPalette('grey');

    $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey');

    $mdThemingProvider.theme('facebook').primaryPalette('indigo')

    $mdThemingProvider.theme('google').primaryPalette('deep-orange');

    $mdThemingProvider.theme('linkedin').primaryPalette('blue');

    $mdThemingProvider.theme('pinterest').primaryPalette('red');
}]);

App.config(['$mdIconProvider', function ($mdIconProvider) {
    $mdIconProvider.fontSet('md', 'material-icons');
}]);

App.run(['editableOptions', 'editableThemes', function (editableOptions, editableThemes) {
    // set `default` theme
    editableOptions.theme = 'bs3';
}]);

App.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.useStaticFilesLoader({
        prefix: '../translate/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
}]);

App.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
}]);

App.run(['amMoment', function(amMoment) {
    amMoment.changeLocale('en');
}]);