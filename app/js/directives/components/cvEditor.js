App.directive('cverCvEditor', function () {
    return {
        scope: {
            cv: '=cverCvEditor'
        },
        controller: ["$scope", function ($scope) {
            this.compiledTemplate = ""
            this.nonCompiledTemplate = $scope.cv.template.data;
            this.addDirectives = function(value) {
                value = "<div>" + value + "</div>";
                var html = $(value);
                var firstName = html.find(".firstName");
                firstName.empty();
                firstName.text("{{cv.firstName}}");
                this.compiledTemplate = html.html();
            }
        }],
        link: function (scope, element, attrs, ctrl) {
            scope.$watch(
                function (scope) {
                    return ctrl.nonCompiledTemplate;
                },
                function (value) {
                    ctrl.addDirectives(value);
                }
            );
        },
        controllerAs: "cvEditorCtrl",
        templateUrl: "views/components/cvEditor.html"
    }
});