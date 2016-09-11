/**
 * Created by User on 7/22/2016.
 */
App.directive('cverShowItem', ["$compile", function ($compile) {
    return {
        scope: {
            item: "=cverShowItem",
            bind: "=cverBindCallback"
        },
        controller: ["$scope", function ($scope) {
            this.compiledTemplate = $scope.bind($scope.item.template.value);
        }],
        link: function (scope, element, attrs, ctrl) {
            scope.$watch(function (scope) {
                if (scope.item.template != undefined)
                    return scope.item.template.value;
            }, function (value) {
                element.html(scope.bind(value));
                $compile(element.contents())(scope);
            });
        }
    };
}]);