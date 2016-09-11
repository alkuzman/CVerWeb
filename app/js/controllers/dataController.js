App.controller('DataController', ["$scope", "Data", function ($scope, Data) {
    var me = this;

    this.query = "";
    this.data = [];
    this.types = [];
    this.type = 0;
    this.limit = 10;
    this.offset = 0;

    this.autocomplete = function (q) {
        var res = Data.autocomplete({query: q, limit: 5});
        return res.$promise;
    }

    this.queryChanged = function () {
        this.type = 0;
        this.executeSearch();
    }

    this.tabChanged = function () {
        this.executeSearch();
    }

    this.executeSearch = function () {
        me.data.length = 0;
        this.queryData(me.query, me.types[me.type], me.offset, me.limit);
        this.getTypes();
    }

    this.queryData = function (query, type, offset, limit) {
        Data.query({query: query, type: type, offset: offset, limit: limit}, me.onDataReady,
            function (error) {
                console.log(error);
            });
    }

    this.onDataReady = function (data) {
        console.log(data);
        me.data = me.data.concat(data);
    }

    this.getTypes = function () {
        Data.getTypes({query: me.query, limit: 30}, function (results) {
            me.types = me.setAllFirst(results);
        }, function (error) {

        });
    }

    this.setAllFirst = function (result) {
        var index = result.indexOf("Data");
        result.splice(index, 1);
        result.unshift("Data");
        return result;
    }

    this.executeSearch();
}]);