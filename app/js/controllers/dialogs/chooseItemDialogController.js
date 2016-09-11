App.controller('ChooseItemDialogController', ["items", "title", "$scope", "$mdDialog", function (items, title, $scope, $mdDialog) {
    var me = this;
    this.items = items;
    this.title = title;

    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
}]);