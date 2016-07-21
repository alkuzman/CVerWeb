App.directive('cverTextEditor', ["$compile", function ($compile) {
    // directive factory creates a link function
    return {
        require: "ngModel",
        templateUrl: "views/components/textEditor.html",
        link: function (scope, element, attrs, ctrl) {
            var editor = element.find("cver-txt-editor").parent();
            scope.$watch(
                function (scope) {
                    return scope.$eval(attrs.cverTextEditor);
                },
                function (value) {

                    // when the 'compile' expression changes
                    // assign it into the current DOM
                    console.log(editor.html());
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
                    ctrl.$setViewValue(editor.html());
                });
            });
        }
    };
}]);