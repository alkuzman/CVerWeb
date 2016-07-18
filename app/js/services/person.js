/**
 * Created by User on 7/17/2016.
 */
App.factory("Person", ["$state", "$resource", function ($state, $resource) {
    return $resource("core/users/:id", {}, {
        getByEmail: {
            url: "core/users?email=:email",
            method: "GET",
            isArray: false
        }
    });
}]);