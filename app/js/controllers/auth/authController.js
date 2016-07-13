App.controller('AuthController', ["$state", "$rootScope", function ($state, $rootScope) {
    this.me = $rootScope.me;

    this.current = defaultUser;

    this.getUserStatus = 1;

    this.loginStatus = 2;

    this.registerStatus = 3;

    this.status = this.getUserStatus;

    this.getUser = function () {
        for (var userIndex in users) {
            var user = users[userIndex];
            if (user.email === this.current.email) {
                this.status = this.loginStatus;
                this.current = user;
                return;
            }
        }
        this.status = this.registerStatus;
    };

    this.checkStatus = function (status) {
        return this.status === status;
    };

    this.statusBack = function () {
        this.status = this.getUserStatus;
        this.current = {};
    };

    this.login = function () {
        if (this.current.password === this.current.truePassword) {
            this.me = this.current;
            $rootScope.me = this.me;
            $state.go("results");
        }
        else {
            this.current.password = "";
        }
    };

    this.register = function () {
        this.current.truePassword = this.current.password;
        if (!this.current.image)
            this.current.image = "/img/user.jpg";
        users.push(this.current);
        this.login();
    }

    this.logout = function() {
        this.me.password = "";
        $rootScope.me = undefined;
        this.me = undefined;
        $state.go("home");
    }
}]);

var users = [
    {
        id: 1,
        firstName: "Aleksandar",
        lastName: "Kuzmanoski",
        email: "aleksandarkuzmanoski.official@gmail.com",
        password: "",
        truePassword: "279mk813:@",
        image: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11225436_10203432866617044_729904542407639638_n.jpg?oh=3b32be74a68498495535dc25c6cb2cc5&oe=57FAAB30"
    }
]

var defaultUser = {
    email: "",
    password: "",
    confirmPassword: ""
};