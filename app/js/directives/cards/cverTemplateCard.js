/**
 * Created by User on 7/11/2016.
 */
App.directive('cverTemplateCard', function () {
    return {
        scope: {
            template: '=cverTemplateCard',
            setTemplate: "=cverTemplateCallback",
            currentTemplate: "=currentTemplate"
        },
        controller: ["$scope", function ($scope) {
            this.filterTypes = function(list) {
                var stop = ["Entity", "NamedIndividual", "Thing", "Nothing", "Template", "CVTemplate", "CertificateTemplate"];
                list = list.filter( function( el ) {
                    return !stop.includes( el.name );
                } );
                return list;
            };
            $scope.template.types = this.filterTypes($scope.template.types);


            this.setTemplate = function(template) {
                $scope.setTemplate(template);
            }
        }],
        controllerAs: "tempCtrl",
        templateUrl: "views/container/templates/cards/default.html"
    }
});