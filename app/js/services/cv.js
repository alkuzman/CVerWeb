/**
 * Created by PC on 27/08/2016.
 */

App.factory("Cv", ["$state", "$resource", function ($state, $resource) {
    return $resource("core/cv", {}, {
        getCv: {
            url: "core/cv/:id",
            method: "GET",
            isArray: false
        },
        getNewCv: {
            url: "core/cv/new",
            method: "GET",
            isArray: false
        },
        insertCv: {
            url: "core/cv",
            method: "POST",
            isArray: false
        }
    });
}]);