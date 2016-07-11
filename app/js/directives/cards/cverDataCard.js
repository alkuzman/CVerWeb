/**
 * Created by User on 7/8/2016.
 */
App.directive('cverDataCard', function () {
    return {
        scope: {
            data: '=cverDataCard'
        },
        template: '<ng-include src="getTemplateUrl()"/>',
        controller: ['$scope', function($scope) {
            //function used on the ng-include to resolve the template
            $scope.getTemplateUrl = function() {
                return "views/container/data/cards/" + $scope.data.type + ".html";
            }
        }]
    }
});