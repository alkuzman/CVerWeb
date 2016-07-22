/**
 * Created by User on 7/22/2016.
 */
App.directive('cverShowItem', ["$compile", function ($compile) {
    return {
        scope: {
            item: "=cverShowItem"
        },
        controller: ["$scope", function ($scope) {
            this.compiledTemplate = $scope.item.addDirectives($scope.item.template.data);
        }],
        link: function (scope, element, attrs, ctrl) {
            element.html(ctrl.compiledTemplate);
            $compile(element.contents())(scope);
        }
    };
}]);