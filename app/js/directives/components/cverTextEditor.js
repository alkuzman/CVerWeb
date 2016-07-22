App.directive('cverTextEditor', ["$compile", function ($compile) {
    // directive factory creates a link function
    return {
        scope: {
            item: "=cverTextEditor"
        },
        controller: ["$scope", function ($scope) {
            this.compiledTemplate = ""
            this.nonCompiledTemplate = $scope.item.template.data;
            this.addDirectives = function(value) {
                this.compiledTemplate = $scope.item.addDirectives(value);
            }
        }],
        controllerAs: "cverEditorCtrl",
        templateUrl: "views/components/textEditor.html",
        link: function (scope, element, attrs, ctrl) {
            var editor = element.find("cver-txt-editor").parent();
            scope.$watch(
                function (scope) {
                    return ctrl.compiledTemplate;
                },
                function (value) {

                    // when the 'compile' expression changes
                    // assign it into the current DOM
                    editor.html(value);

                    // compile the new DOM and link it to the current
                    // scope.
                    // NOTE: we only compile .childNodes so that
                    // we don't get into infinite loop compiling ourselves
                    $compile(editor.contents())(scope);
                }
            );
            editor.bind('blur', function () {
                scope.$apply(function () {
                    ctrl.nonCompiledTemplate = editor.html();
                });
            });

            scope.$watch(
                function (scope) {
                    return ctrl.nonCompiledTemplate;
                },
                function (value) {
                    ctrl.addDirectives(value);
                }
            );
        }
    };
}]);