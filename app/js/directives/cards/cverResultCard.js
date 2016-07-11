/**
 * Created by User on 7/4/2016.
 */
App.directive('cverResultCard', function () {
    return {
        scope: {
            result: '=cverResultCard'
        },
        template: '<ng-include src="getTemplateUrl()"/>',
        controller: ['$scope', function($scope) {
            //function used on the ng-include to resolve the template
            $scope.getTemplateUrl = function() {
                return "views/results/cards/" + $scope.result.type + ".html";
            }
        }]
    }
});