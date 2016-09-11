/**
 * Created by PC on 17/08/2016.
 */

App.factory("Data", ["$state", "$resource", function ($state, $resource) {
    return $resource("core/data", {}, {
        query: {
            url: "core/data/?query=:query&limit=:limit&offset=:offset",
            method: "GET",
            isArray: true
        },
        autocomplete: {
            url: "core/data/autocomplete?query=:query&limit=:limit",
            method: "GET",
            isArray: true
        },
        getTypes: {
            url: "core/data/types?query=:query&limit=:limit",
            method: "GET",
            isArray: true
        }
    });
}]);