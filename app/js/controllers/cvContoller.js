App.controller('CvController', function() {
    this.cv = {
        id: 1,
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
            data: "<h1 class='firstName'></h1>"
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

    this.template = "<h1 contenteditable='false'>Aleksandar</h1>"
});