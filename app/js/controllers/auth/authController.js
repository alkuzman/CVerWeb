App.controller('AuthController', ["$state", "$rootScope", "$scope", "Person", "$mdToast", function ($state, $rootScope, $scope, Person, $mdToast) {
    var controller = this;

    this.current = {};
    
    this.isGetUserForm = function () {
        return $state.is("auth");
    }

    this.backToGetUserForm = function () {
        var email = this.current.user.email
        this.current.user = {};
        this.current.user.email = email;
        $state.go("^");
    };

    this.getUser = function () {
        Person.getByEmail({email: this.current.user.email}, controller.onUserFound, function (resultError) {
            if(resultError.status === 404)
                controller.onUserNotFound();
        });
    };

    this.onUserFound = function(user) {
        controller.current.user = user;
        $state.go(".login");
    }

    this.onUserNotFound = function () {
        this.current.user.type = "Person";
        $state.go(".register");
    }

    this.login = function () {
        this.current.user.$login({email: controller.current.user.email ,password: controller.current.user.password}, controller.onUserLoggedIn, function(resultError) {
            controller.onWrongPassword();
        });
    };

    this.onWrongPassword = function () {
        controller.current.user.password = "";
        $mdToast.show({
            hideDelay: 4000,
            position: 'bottom right',
            templateUrl: 'views/auth/error/wrongPasswordToast.html'
        });
    }

    this.onUserLoggedIn = function(resultSuccess) {
        $rootScope.auth.me = controller.current.user;
        $state.go("main.entity");
    }

    this.register = function () {
        this.current.user.type = "Person"
        Person.register({}, this.current.user ,controller.onUserRegistered, function(resultError) {
            console.log(resultError );
            console.log("ERROR");
        });
    }

    this.onUserRegistered = function(user) {
        controller.current.user = user;
        $state.go("^.login");
    }

    this.logout = function () {
        $rootScope.auth.me = undefined;
        $state.go("main.home");
    }
    
    this.loginWithFacebook = function () {
        
    }
    
    this.loginWithGoogle = function () {
        
    }

    this.loginWithLinkedIn = function () {
        
    }
    
    this.loginWithPinterest = function () {
        
    }
}]);