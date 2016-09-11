/**
 * Created by User on 7/10/2016.
 */
App.controller('TemplatesController', ['$scope', 'Template', function ($scope, Template) {
    var me = this;
    this.templates = [];
    this.query = "";
    this.type = 0;
    this.offset = 0;
    this.types = [];
    this.limit = 10;

    this.queryData = function (query, type, offset, limit) {
        if ($scope.templateType == "CV") {
            Template.queryCvTemplates({query: query, type: type, offset: offset, limit: limit}, me.onTemplatesReady,
                function (error) {
                    console.log(error);
                });
        } else if ($scope.templateType == "Certificate") {
            Template.queryCertificateTemplates({
                    query: query,
                    type: type,
                    offset: offset,
                    limit: limit
                }, me.onTemplatesReady,
                function (error) {
                    console.log(error);
                });
        }
    }
    this.onTemplatesReady = function (temp) {
        me.templates = me.templates.concat(temp);
    }

    this.onNotAuthorized = function () {

    }

    this.queryChanged = function () {
        this.type = 0;
        this.executeSearch();
    }

    this.tabChanged = function () {
        this.executeSearch();
    }

    this.autocomplete = function (q) {

        if ($scope.templateType == "CV") {
            var res = Template.autocompleteCv({query: q, limit: 5});
        } else if ($scope.templateType == "Certificate") {
            var res = Template.autocompleteCertificate({query: q, limit: 5});
        }
        return res.$promise;
    }


    this.executeSearch = function () {
        me.templates.length = 0;
        this.queryData(this.query, me.types[me.type], this.offset, this.limit);
        this.getTypes();
    }

    this.getTypes = function () {
        if ($scope.templateType == "CV") {
            Template.getCvTypes({query: this.query, limit: 10}, function (results) {
                me.types = me.setAllFirst(results);
            }, function (error) {

            });
        } else if ($scope.templateType == "Certificate") {
            Template.getCertificateTypes({query: this.query, limit: 10}, function (results) {
                me.types = me.setAllFirst(results);
            }, function (error) {

            });
        }
    }

    this.setAllFirst = function (result) {
        var index = result.indexOf("Template");
        result.splice(index, 1);
        result.unshift("Template");
        return result;
    }

    this.executeSearch();
}])
;