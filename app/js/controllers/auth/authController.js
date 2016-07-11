App.controller('AuthController', ['$scope', function($scope) {
    $scope.me = {
        id: 1,
        firstName: "Aleksandar",
        lastName: "Kuzmanoski",
        email: "aleksandarkuzmanoski.official@gmail.com",
        password: "",
        image: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11225436_10203432866617044_729904542407639638_n.jpg?oh=3b32be74a68498495535dc25c6cb2cc5&oe=57FAAB30"
    }

    $scope.current = defaultUser;

    $scope.getUserStatus = 1;

    $scope.loginStatus = 2;

    $scope.registerStatus = 3;

    $scope.status = $scope.getUserStatus;

    $scope.getUser = function() {
        for (var userIndex in users) {
            var user = users[userIndex];
            if (user.email === $scope.current.email) {
                $scope.status = $scope.loginStatus;
                $scope.current = user;
                return;
            }
        }
        $scope.status = $scope.registerStatus;
    };

    $scope.checkStatus = function(status) {
        return $scope.status === status;
    };

    $scope.statusBack = function() {
        $scope.status = $scope.getUserStatus;
        $scope.current = defaultUser;
    };

    $scope.login = function() {
        console.log("LOGIN");
    };
}]);

var users = [
    {
        id: 1,
        firstName: "Aleksandar",
        lastName: "Kuzmanoski",
        email: "aleksandarkuzmanoski.official@gmail.com",
        password: "",
        image: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11225436_10203432866617044_729904542407639638_n.jpg?oh=3b32be74a68498495535dc25c6cb2cc5&oe=57FAAB30"
    }
]

var defaultUser = {
    email: "",
    password: "",
    confirmPassword: ""
};