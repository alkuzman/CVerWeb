/**
 * Created by PC on 27/08/2016.
 */

App.factory("Call", ["$state", "$resource", function ($state, $resource) {
    return $resource("core/call", {}, {
        getCv: {
            url: "core/call/:id",
            method: "GET",
            isArray: false
        },
        apply: {
            url: "core/call/:id/apply",
            method: "PUT",
            isArray: false
        },
        insertCall: {
            url: "core/call?organizationId=:organizationId",
            method: "POST",
            isArray: false
        }
    });
}]);