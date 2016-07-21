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
                console.log(value);
                var html = $(value);
                console.log(html.html());
                var firstName = html.find(".firstName");
                firstName.empty();
                console.log(html.html());
                firstName.text("{{cv.firstName}}");
                console.log(html.html());
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