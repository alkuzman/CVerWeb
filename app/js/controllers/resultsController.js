/**
 * Created by User on 6/28/2016.
 */
App.controller("ResultsController", ["$scope", "Entity", "$stateParams", "$state", function ($scope, Entity, $stateParams, $state) {
    $scope.results = [];
    var limit = 20;
    var offset = 0;

    this.getResults = function (query, type, owner, offset, limit) {
        Entity.query({query: query, type: type, owner: owner, offset: offset, limit: limit}, this.onResultsReady,
        function(resultError) {
            console.log(resultError)
        });
    }

    this.onResultsReady = function(res) {
        $scope.results = $scope.results.concat(res);
    }

    this.getResults($stateParams.query, $stateParams.type, $stateParams.owner, offset, limit);
}]);