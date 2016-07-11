/**
 * Created by User on 7/11/2016.
 */
App.directive('cverTemplateCard', function () {
    return {
        scope: {
            template: '=cverTemplateCard'
        },
        templateUrl: "views/container/templates/cards/default.html"
    }
});