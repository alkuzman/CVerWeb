/**
 * Created by User on 7/13/2016.
 */
App.directive('cverCategorySelector', function () {
    return {
        scope: {
            categoryData: '=cverCategorySelector'
        },
        restrict: 'A',
        controller: ["$scope", function($scope) {
            this.setSelected = function(value) {
                $scope.categoryData.selected = value;
            }
        }],
        controllerAs: "selectorCtrl",
        templateUrl: "views/components/categorySelector.html"
    };
});