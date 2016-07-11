/**
 * Created by User on 7/10/2016.
 */
App.controller('TemplatesController', ['$scope', function ($scope) {
    this.templates = tts;
    this.types = ts;
}]);

var ts = [
    {type: "Job"},
    {type: "Educational"},
    {type: "Chronogogical"},
    {type: "Functional"}
]

var tts = [
    {
        id: 1,
        image: "http://zpdp.org/wp-content/uploads/2015/06/job-resume-examples-03eeijhn.png",
        url: "#",
        stars: 3,
        tags: ["Job", "Chronological"]
    },
    {
        id: 1,
        image: "https://www.livecareer.com/images/uploaded/resume-examples-expanded/teacher-education-emphasis-3.jpg",
        url: "#",
        stars: 3,
        tags: ["Educational", "Functional"]
    }
]