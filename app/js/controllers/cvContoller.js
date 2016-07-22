App.controller('CvController', function () {
    this.cv = {
        id: 1,
        name: "Aleksandar's Job CV",
        owner: {
            id: 1,
            firstName: "Aleksandar",
            lastName: "Kuzmanoski",
            email: "aleksandarkuzmanoski11@gmail.com",
            password: null
        },
        template: {
            id: "template/1",
            type: "Job",
            data: "<h1><span class='firstName cver-data'></span> <span class='lastName cver-data'></span></h1>" +
            "<p class='emails'>Email: <span class='list'><span class='email'><strong class='value cver-data'></strong>, </span></span></p>"
        },
        firstName: "Aleksandar",
        lastName: "Kuzmanoski",
        email: ["aleksandarkuzmanoski11@gmail.com", "aleksandarkuzmanoski.official@gmail.com"],
        address: [
            {
                street: "6th Zone 209/17",
                city: "Gostivar",
                country: "Macedonia",
                postalCode: 01234
            },
            {
                street: "Debar Maalo, Gjorgi Pulevski/36",
                city: "Skopje",
                country: "Macedonia",
                postalCode: 1000
            }
        ]
    }

    var addDirectives = function (template) {
        template = "<div>" + template + "</div>";
        var html = $(template);
        setFirstName(html, this);
        setLastName(html, this);
        setEmail(html, this);
        console.log(html.html());
        console.log(this);
        return html.html();
    }

    this.cv.addDirectives = addDirectives;

    var setFirstName = function (html, cv) {
        var firstName = html.find(".firstName");
        var firstNameValue = $(firstName[0]).text();
        if (firstNameValue == "")
            firstNameValue = cv.firstName;
        firstName.empty();
        firstName.text("{{item.firstName}}");
        cv.firstName = firstNameValue;
    }

    var setLastName = function (html, cv) {
        var lastName = html.find(".lastName");
        var lastNameValue = $(lastName[0]).text();
        if (lastNameValue == "")
            lastNameValue = cv.lastName;
        lastName.empty();
        lastName.text("{{item.lastName}}");
        cv.lastName = lastNameValue;
    }

    var setEmail = function (html, cv) {
        var emails = html.find(".emails");
        var items = emails.first().find(".email");
        var email = items.first().clone();
        var value = email.find(".value").first();
        var list = emails.find(".list");
        items.each(function(index, value) {
            var d = $(value).find(".value").text();
            if (d != "")
                cv.email[index] = d;
        });
        list.empty();
        email.attr("ng-repeat", "email in item.email");
        value.text("{{email}}");
        list.append(email);
    }
});