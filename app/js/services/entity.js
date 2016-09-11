/**
 * Created by PC on 17/08/2016.
 */

App.factory("Entity", ["$state", "$resource", function ($state, $resource) {
    return $resource("core/users/:id", {}, {
        query: {
            url: "core/entity?query=:query&offset=:offset&limit=:limit",
            method: "GET",
            isArray: true
        },
        autocomplete: {
            url: "core/entity/autocomplete?query=:query&limit=:limit",
            method: "GET",
            isArray: true
        },
        getTypes: {
            url: "core/entity/types?query=:query&limit=:limit",
            method: "GET",
            isArray: true
        }
    });
}]);