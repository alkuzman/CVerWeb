App.directive('cverTextEditor', ["$compile", function ($compile) {
    // directive factory creates a link function
    return {
        scope: {
            item: "=cverTextEditor",
            bind: "=cverBindCallback",
            saveItem: "=cverSaveItemCallback"
        },
        controller: ["$scope", "$rootScope", function ($scope, $rootScope) {
            var me = this;
            this.compiledTemplate = "";
            this.nonCompiledTemplate = "";

            $scope.auth = {};
            $scope.auth.me = $rootScope.auth.me;

            this.setTemplate = function (template) {
                $scope.item.template = template;
            }

            this.addElementToList = function (list, data) {
                for (var i in list) {
                    if (list[i].identifier.id == data.identifier.id)
                        return;
                }
                list.push(data);
            }

            this.setData = function (data, type) {
                console.log("TUKA");
                switch (type) {
                    case "FirstName": $scope.item.firstName = data;
                        break;
                    case "LastName": $scope.item.lastName = data;
                        break;
                    case "TelephoneNumber": me.addElementToList($scope.item.telephoneNumbers, data);
                        break;
                    case "ValueProposition": $scope.item.valueProposition = data;
                        break;
                    case "DateOfBirth": $scope.item.dateOfBirth = data;
                        break;
                    case "WorkExperience": me.addElementToList($scope.item.workExperiences, data);
                        break;
                    case "ProjectExperience": me.addElementToList($scope.item.workExperiences, data);
                        break;
                    case "EducationalExperience": me.addElementToList($scope.item.educations, data);
                        break;
                    case "Experience": me.addElementToList($scope.item.experiences, data);
                        break;
                    case "Skill": me.addElementToList($scope.item.skills, data);
                        break;
                    case "Certificate": me.addElementToList($scope.item.certificates, data);
                        break;
                    case "Address": me.addElementToList($scope.item.locations, data);
                        break;
                    case "City": me.addElementToList($scope.item.locations, data);
                        break;
                    case "Email": me.addElementToList($scope.item.emails, data);
                        break;
                    case "Experiences": me.addElementToList($scope.item.experiences, data);
                        break;
                    case "Image": $scope.item.image = data;
                        break;
                }
            }

            this.addDirectives = function (value) {
                this.compiledTemplate = $scope.bind(value);
            }
        }],
        controllerAs: "cverEditorCtrl",
        templateUrl: "views/components/textEditor.html",
        link: function (scope, element, attrs, ctrl) {
            var editor = element.find("cver-txt-editor").parent();

            scope.$watch(function (scope) {
                if (scope.item.template != undefined)
                    return scope.item.template.value;
            }, function (value) {
                ctrl.nonCompiledTemplate = value;
            });

            scope.$watch(
                function (scope) {
                    return ctrl.compiledTemplate;
                },
                function (value) {

                    // when the 'compile' expression changes
                    // assign it into the current DOM
                    editor.html(value);

                    scope.blur = false;

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
                    scope.blur = true;
                });
            });

            scope.$watch(
                function (scope) {
                    return ctrl.nonCompiledTemplate;
                },
                function (value) {
                    if (!$(value).find("[editable-form]").length) {
                        if (scope.blur) {
                            scope.blur = false;
                            scope.item.template = jQuery.extend({}, scope.item.template);
                            scope.item.template.value = ctrl.nonCompiledTemplate;
                            scope.item.template.identifier = null;
                        }
                        ctrl.addDirectives(value);
                    }
                }
            );
        }
    };
}]);