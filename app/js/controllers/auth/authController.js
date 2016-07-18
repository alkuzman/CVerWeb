App.controller('AuthController', ["$state", "$rootScope", "Person", function ($state, $rootScope, Person) {
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
            if(resultError.status === 404);
            controller.onUserNotFound();
        });
    };

    this.onUserFound = function(user) {
        controller.current.user = user;
        $state.go(".login");
    }

    this.onUserNotFound = function () {
        $state.go(".register");
        //controller.setStatus(controller.registerStatus);
    }

    this.login = function () {
        if (this.current.user.password === this.current.user.truePassword) {
            $rootScope.auth.me = this.current.user;
            this.current.user = undefined;
            $state.go("main.results");
        }
        else {
            this.current.user.password = "";
        }
    };

    this.register = function () {
        this.current.user.truePassword = this.current.password;
        if (!this.current.user.image)
            this.current.user.image = "/img/user.jpg";
        users.push(this.current.user);
        this.login();
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