/**
 * Created by User on 7/10/2016.
 */
App.directive('cverDataContainer', function () {
    return {
        controller: "DataController",
        controllerAs: "dataCtrl",
        templateUrl: "views/container/data/panel.html"
    };
});