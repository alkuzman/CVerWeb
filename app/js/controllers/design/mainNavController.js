/**
 * Created by User on 7/11/2016.
 */
App.controller('MainNavigationController', ["$scope", "$timeout", "$mdSidenav", "$log", "$mdMedia", "$state", "Entity", function ($scope, $timeout, $mdSidenav, $log, $mdMedia, $state, Entity) {
    var me = this;

    this.showSearch = false;

    this.query = "";
    this.types = [];
    this.type = 0;

    this.back = function () {
        this.toggleShowSearch();
        if ($state.current.name === "main.entity")
            this.queryChanged();
    }

    this.toggleShowSearch = function () {
        this.query = "";
        this.type = 0;
        this.types.length = 0;
        this.showSearch = !this.showSearch;
    }

    this.querySearch = function (q) {
        var res = Entity.autocomplete({query: q, limit: 5});
        return res.$promise;
    }

    $scope.toggleLeft = buildDelayedToggler('left');

    $scope.goToState = function (value) {
        $state.go(value);
    }

    $scope.isSideNavOpen = function () {
        return $mdMedia('gt-md') && $state.includes('main') && !$state.is('main.home');
    };

    $scope.isSideNavToggleHidden = function () {
        return $state.includes('auth') || $state.is('main.home');
    };

    this.queryChanged = function () {
        this.type = 0;
        this.executeSearch();
    }

    this.tabChanged = function () {
        this.executeSearch();
    }

    this.executeSearch = function () {
        var t = this.types[this.type];
        $state.go("main.entity", {query: this.query, type: t});
        this.findTypes();
    }

    this.clearQuery = function () {
        this.query = "";
    }

    this.findTypes = function () {
        Entity.getTypes({query: this.query, limit: 20}, function (result) {
            me.types = me.setAllFirst(result);
        }, function (error) {

        });
    }

    this.setAllFirst = function (result) {
        var index = result.indexOf("Entity");
        result.splice(index, 1);
        result.unshift("Entity");
        return result;
    }
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
        var timer;
        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function () {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
        return debounce(function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }

    function buildToggler(navID) {
        return function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }
    }
}]);