/**
 * Created by User on 7/10/2016.
 */
App.directive('cverSyncContainer', function () {
    return {
        controller: "SyncController",
        controllerAs: "syncCtrl",
        templateUrl: "views/container/sync/panel.html"
    };
});