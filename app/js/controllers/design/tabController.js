App.controller('TabController', ['$scope', function($scope) {
    this.currentTab = 1;

    this.setTab = function(value) {
        this.currentTab = value;
    }

    this.checkTab = function(value) {
        return this.currentTab === value;
    }
}]);