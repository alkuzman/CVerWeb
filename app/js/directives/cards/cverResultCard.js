/**
 * Created by User on 7/4/2016.
 */
App.directive('cverResultCard', function () {
    return {
        scope: {
            result: '=cverResultCard'
        },
        template: '<ng-include src="getTemplateUrl()"/>',
        controller: ['$scope', "$state", "Entity", "$rootScope", function ($scope, $state, Entity, $rootScope) {
            var me = this;
            //function used on the ng-include to resolve the template
            $scope.getTemplateUrl = function () {
                return "views/results/cards/" + $scope.result.type.toLowerCase() + ".html";
            }

            $scope.callThis = function () {
                console.log("Call this");
            }

            this.checkType = function (type, requested) {
                return type === requested;
            }
        }],
        controllerAs: "cardCtrl"
    }
});