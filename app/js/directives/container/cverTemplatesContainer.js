/**
 * Created by User on 7/10/2016.
 */
App.directive('cverTemplatesContainer', function () {
    return {
        controller: "TemplatesController",
        controllerAs: "templatesCtrl",
        templateUrl: "views/container/templates/panel.html"
    };
});