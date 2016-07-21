/**
 * Created by User on 6/25/2016.
 */

App.run(["$rootScope", "$templateCache", function ($rootScope, $templateCache, $state) {
    $rootScope.auth = {
        me: undefined
    };
    $templateCache.put('template/1.html', "This is my first template");
}])