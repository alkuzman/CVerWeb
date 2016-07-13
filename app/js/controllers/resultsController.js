/**
 * Created by User on 6/28/2016.
 */
App.controller("ResultsController", ["$scope", function ($scope) {
    $scope.results = items;
    this.categoryData  = rt;
}]);

var rt = {
    selected: "all",
    categories: [
        "person",
        "cv"
    ]
}

var items = [
    {
        id: 1,
        type: "cv",
        name: "Aleksandar's Job Resume",
        template: {
            templateUrl: "/template/1",
            category: "Job"
        },
        cover: "https://www.livecareer.com/images/uploaded/resume-example-home/web-developer-resume-example-emphasis-2-expanded-2.png",
        owner: {
            id: 2,
            firstName: "Aleksandar",
            lastName: "Kuzmanoski",
            cover: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11156164_10203007807870841_5192745030243951016_n.jpg?oh=b31b5f0be935607086ab59e8e76fb806&oe=57F01FDD",
            image: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11225436_10203432866617044_729904542407639638_n.jpg?oh=3b32be74a68498495535dc25c6cb2cc5&oe=57FAAB30",
            type: "person"
        }
    },
    {
        id: 2,
        type: "cv",
        name: "Aleksandar's Educational Resume",
        template: {
            templateUrl: "/template/1",
            category: "Educational"
        },
        cover: "https://resumegenius.com/wp-content/uploads/2014/09/Resume-Template-Professional-Gray.jpg",
        owner: {
            id: 2,
            firstName: "Aleksandar",
            lastName: "Kuzmanoski",
            cover: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11156164_10203007807870841_5192745030243951016_n.jpg?oh=b31b5f0be935607086ab59e8e76fb806&oe=57F01FDD",
            image: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11225436_10203432866617044_729904542407639638_n.jpg?oh=3b32be74a68498495535dc25c6cb2cc5&oe=57FAAB30",
            type: "person"
        }
    },
    {
        id: 2,
        firstName: "Aleksandar",
        lastName: "Kuzmanoski",
        cover: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11156164_10203007807870841_5192745030243951016_n.jpg?oh=b31b5f0be935607086ab59e8e76fb806&oe=57F01FDD",
        image: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11225436_10203432866617044_729904542407639638_n.jpg?oh=3b32be74a68498495535dc25c6cb2cc5&oe=57FAAB30",
        type: "person"
    }
];