/**
 * Created by User on 7/11/2016.
 */
App.controller('ContextMenuController', [function() {
    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };
}]);
