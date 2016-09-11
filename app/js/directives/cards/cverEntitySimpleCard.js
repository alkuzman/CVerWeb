/**
 * Created by User on 7/4/2016.
 */
App.directive('cverEntitySimpleCard', function () {
    return {
        scope: {
            result: '=cverEntitySimpleCard'
        },
        controller: ['$scope', function ($scope) {
            var me = this;

            $scope.getTemplate = function () {
                return "views/results/simpleCards/" + $scope.result.type.toLowerCase() + ".html";
            }
        }],
        template: '<ng-include src="getTemplate()"/>',
        controllerAs: "simpleCardCtrl"
    }
});