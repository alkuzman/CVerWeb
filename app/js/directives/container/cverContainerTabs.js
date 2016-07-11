/**
 * Created by User on 7/10/2016.
 */
App.directive('cverContainerTabs', function () {
    return {
        restrict: 'A',
        controller: "TabController",
        controllerAs: "tabCtrl",
        templateUrl: "views/container/tabs/tabs.html"
    };
});