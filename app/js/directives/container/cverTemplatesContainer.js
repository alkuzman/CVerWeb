/**
 * Created by User on 7/10/2016.
 */
App.directive('cverTemplatesContainer', function () {
    return {
        scope: {
            setTemplate: "=cverTemplatesContainer",
            currentTemplate: "=currentTemplate",
            templateType: "=templateType"
        },
        controller: "TemplatesController",
        controllerAs: "templatesCtrl",
        templateUrl: "views/container/templates/panel.html"
    };
});