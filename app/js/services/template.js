/**
 * Created by PC on 26/08/2016.
 */

App.factory("Template", ["$state", "$resource", function ($state, $resource) {
    return $resource("core/template/:id", {}, {
        query: {
            url: "core/template?query=:query&offset=:offset&limit=:limit",
            method: "GET",
            isArray: true
        },
        queryCvTemplates: {
            url: "core/template/cv?query=:query&offset=:offset&limit=:limit",
            method: "GET",
            isArray: true
        },
        autocompleteCv: {
            url: "core/template/cv/autocomplete?query=:query&limit=:limit",
            method: "GET",
            isArray: true
        },
        getCvTypes: {
            url: "core/template/cv/types?query=:query&limit=:limit",
            method: "GET",
            isArray: true
        },
        queryCertificateTemplates: {
            url: "core/template/certificate?query=:query&offset=:offset&limit=:limit",
            method: "GET",
            isArray: true
        },
        autocompleteCertificate: {
            url: "core/template/certificate/autocomplete?query=:query&limit=:limit",
            method: "GET",
            isArray: true
        },
        getCertificateTypes: {
            url: "core/template/certificate/types?query=:query&limit=:limit",
            method: "GET",
            isArray: true
        }
    });
}]);