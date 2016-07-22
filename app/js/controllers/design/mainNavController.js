/**
 * Created by User on 7/11/2016.
 */
App.controller('MainNavigationController',["$scope", "$timeout", "$mdSidenav", "$log", "$mdMedia", "$state", function ($scope, $timeout, $mdSidenav, $log, $mdMedia, $state) {
    this.showSearch = false;
    
    this.toggleShowSearch = function() {
        this.showSearch = !this.showSearch;
    }
    
    $scope.toggleLeft = buildDelayedToggler('left');

    $scope.goToState = function(value) {
        $state.go(value);
    }
    
    $scope.isSideNavOpen = function() {
        return $mdMedia('gt-md') && $state.includes('main') && !$state.is('main.home');
    };
    
    $scope.isSideNavToggleHidden = function () {
        return $state.includes('auth') || $state.is('main.home');
    };
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
            timer = $timeout(function() {
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
        return debounce(function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }
    function buildToggler(navID) {
        return function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }
    }
}]);