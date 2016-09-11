App.controller('CvController', ["$stateParams", "$state", "Cv", "$mdToast", "$rootScope", function ($stateParams, $state, Cv, $mdToast, $rootScope) {
    var me = this;
    this.data = {};
    this.data.cv = {
        template: {
            value: ""
        }
    };

    this.onNotAuthorized = function () {
        var toast = $mdToast.simple()
            .textContent("You are not authorized for this action")
            .action('Login')
            .highlightAction(true)
            .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
            .position("bottom right");

        $mdToast.show(toast).then(function (response) {
            $state.go("auth");
        });
    }

    this.save = function (cv) {
        if ($rootScope.auth.me) {
            Cv.insertCv({}, cv, me.onSaveReady, function (error) {

            });
        } else {
            me.onNotAuthorized();
        }
    }

    this.onSaveReady = function (cv) {
        console.log(cv);
        me.data.cv = cv;
        $mdToast.show(
            $mdToast.simple()
                .textContent('Your resume was saved successfully.')
                .position("bottom right")
                .hideDelay(3000)
        );
    }

    var edit = $state.is("main.entity.resume.edit") || $state.is("main.entity.newResume");

    this.bind = function (template) {
        template = "<div><div style='overflow: auto'>" + template + "</div></div>";
        var html = $(template);
        setCv(html, me.data.cv);
        var contactInfo = html.find("#contact-info");
        setOwner(html, me.data.cv);
        setFirstName(contactInfo, me.data.cv);
        setLastName(contactInfo, me.data.cv);
        setEmail(contactInfo, me.data.cv);
        setTelephoneNumber(html, me.data.cv);
        setValueProposition(html, me.data.cv);
        setWorkExperience(html, me.data.cv);
        setSkill(html, me.data.cv);
        setEducation(html, me.data.cv);
        setProject(html, me.data.cv);
        setHomePages(html, me.data.cv);
        setCertificate(html, me.data.cv);
        return html.html();
    }

    this.onCvReady = function (cv) {
        me.data.cv = cv;
        console.log(cv);
    }

    this.init = function () {
        var id = $stateParams.id;
        if ($state.includes("main.entity.resume")) {
            Cv.getCv({id: id}, this.onCvReady, function (error) {
                console.log(error);
            });
        } else {
            Cv.getNewCv(this.onCvReady, function (error) {

            });
        }
    }

    this.init();

    var setCv = function (html, cv) {
        var cvElement = html.find("[typeof='cvo:CV']");
        $(cvElement).attr("resource", getResource("item.identifier.id"));
    }

    var setOwner = function (html, cv) {
        var owner = html.find("[property='cvo:owner']");
        $(owner).attr("resource", getResource("item.owner.identifier.id"));
    }

    var setFirstName = function (html, cv) {
        var firstName = html.find("[property='cvo:firstName']");
        $(firstName).attr("resource", getResource("item.firstName.identifier.id"));
        var value = firstName.find("[property='cvo:val']");
        value.empty();
        if (edit)
            $(value).html("<span editable-text='item.firstName.value' class='inlineEditText'>{{item.firstName.value}}</span>");
        else
            $(value).text("{{item.firstName.value}}");
    }

    var setLastName = function (html, cv) {
        var lastName = html.find("[property='cvo:lastName']");
        $(lastName).attr("resource", getResource("item.lastName.identifier.id"));
        var value = lastName.find("[property='cvo:val']");
        value.empty();
        value.text("{{item.lastName.value}}");
        if (edit)
            $(value).html("<span editable-text='item.lastName.value' class='inlineEditText'>{{item.lastName.value}}</span>");
        else
            $(value).text("{{item.lastName.value}}");
    }

    var setEmail = function (html, cv) {
        var emails = html.find("[property='cvo:email']");
        emails.not(':first').remove();
        var email = emails.first();
        $(email).attr("ng-repeat", "email in item.emails");
        $(email).attr("resource", getResource("email.identifier.id"));
        $(email).attr("href", "mailto:{{email.mbox}}");
        var mbox = $(email).find("[property='cvo:mbox']");
        if (edit)
            $(mbox).html("<span editable-text='email.mbox' class='inlineEditText'>{{email.mbox}}</span>");
        else
            $(mbox).text("{{email.mbox}}");
    }

    var setTelephoneNumber = function (html, cv) {
        var telephoneNumbers = html.find("[property='cvo:telephoneNumber']");
        telephoneNumbers.not(':first').remove();
        var telephoneNumber = telephoneNumbers.first();
        $(telephoneNumber).attr("ng-repeat", "telephoneNumber in item.telephoneNumbers");
        $(telephoneNumber).attr("resource", getResource("telephoneNumber.identifier.id"));
        $(telephoneNumber).attr("href", "tel:{{telephoneNumber.value}}");
        var val = $(telephoneNumber).find("[property='cvo:val']");
        if (edit)
            $(val).html("<span editable-text='telephoneNumber.value' class='inlineEditText'>{{telephoneNumber.value}}</span>");
        else
            $(val).text("{{telephoneNumber.value}}");
    }

    var setValueProposition = function (html, cv) {
        var valueProposition = html.find("[property='cvo:valueProposition']");
        $(valueProposition).attr("resource", getResource("item.valueProposition.identifier.id"));
        var value = $(valueProposition).find("[property='cvo:val']");
        if (edit)
            $(value).html("<span editable-textarea='item.valueProposition.value' class='inlineEditText'>{{item.valueProposition.value}}</span>");
        else
            $(value).text("{{item.valueProposition.value}}");
    }

    var setWorkExperience = function (html, cv) {
        var experiences = html.find("[property='cvo:workExperience']");
        experiences.not(":first").remove();
        var experience = experiences.first();
        $(experience).attr("ng-repeat", "experience in item.workExperiences");
        $(experience).attr("resource", getResource("experience.identifier.id"));
        var acquiredFrom = $(experience).find("[property='cvo:acquiredFrom']");
        $(acquiredFrom).attr("resource", getResource("experience.acquiredFrom.identifier.id"));
        var acquiredFromName = $(acquiredFrom).find("[property='cvo:name']").first();
        if (edit)
            $(acquiredFromName).html("<span editable-text='experience.acquiredFrom.name' class='inlineEditText'>{{experience.acquiredFrom.name}}</span>");
        else
            $(acquiredFromName).text("{{experience.acquiredFrom.name}}");
        var address = $(experience).find("[property='cvo:address']");
        $(address).attr("resource", getResource("experience.location.identifier.id"));
        var addressStreet = $(address).find("[property='cvo:street']");
        if (edit)
            $(addressStreet).html("<span editable-text='experience.location.street' class='inlineEditText'>{{experience.location.street}}</span>");
        else
            $(addressStreet).text("{{experience.location.street}}");
        var addressCity = $(address).find("[property='cvo:city']");
        $(addressCity).attr("resource", getResource("experience.location.city.identifier.id"));
        var addressCityName = $(addressCity).find("[property='cvo:name']");
        if (edit)
            $(addressCityName).html("<span editable-text='experience.location.city.name' class='inlineEditText'>{{experience.location.city.name}}</span>");
        else
            $(addressCityName).text("{{experience.location.city.name}}");
        var addressCountry = $(address).find("[property='cvo:country']");
        $(addressCountry).attr("resource", getResource("experience.location.country.identifier.id"));
        var addressCountryName = $(addressCountry).find("[property='cvo:name']");
        if (edit)
            $(addressCountryName).html("<span editable-text='experience.location.country.name' class='inlineEditText'>{{experience.location.country.name}}</span>");
        else
            $(addressCountryName).text("{{experience.location.country.name}}");
        var period = $(experience).find("[property='cvo:period']");
        $(period).attr("resource", getResource("experience.period.identifier.id"));
        var periodStartDate = $(period).find("[property='cvo:startDate']");
        var periodStartDateMonth = $(periodStartDate).find("[month]");
        var periodStartDateYear = $(periodStartDate).find("[year]");
        $(periodStartDateYear).text("{{experience.period.startDate | date:'yyyy'}}");
        $(periodStartDateMonth).text("{{experience.period.startDate | date:'MMM'}}");
        var periodEndDate = $(period).find("[property='cvo:endDate']");
        var periodEndDateMonth = $(periodEndDate).find("[month]");
        var periodEndDateYear = $(periodEndDate).find("[year]");
        $(periodEndDateYear).text("{{experience.period.endDate | date:'yyyy'}}");
        $(periodEndDateMonth).text("{{experience.period.endDate | date:'MMM'}}");
        var position = $(experience).find("[property='cvo:position']");
        $(position).attr("resource", getResource("experience.position.identifier.id"));
        var positionName = $(position).find('[property="cvo:name"]');
        $(positionName).text("{{experience.position.name}}");
        if (edit)
            $(positionName).html("<span editable-text='experience.position.name' class='inlineEditText'>{{experience.position.name}}</span>");
        else
            $(positionName).text("{{experience.position.name}}");
        var description = $(experience).find("[property='cvo:description']");
        if (edit)
            $(description).html("<span editable-text='experience.description' class='inlineEditText'>{{experience.description}}</span>");
        else
            $(description).text("{{experience.description}}");
    }

    var setSkill = function (html, cv) {
        var skills = $(html).find("[property='cvo:skill']");
        skills.not(":first").remove();
        var skill = skills.first();
        $(skill).attr("ng-repeat", "skill in item.skills");
        $(skill).attr("resource", getResource("skill.identifier.id"));
        var skillResource = $(skill).find("[property='cvo:resource']");
        $(skillResource).attr("resource", getResource("skill.resource.identifier.id"));
        var skillResourceName = $(skillResource).find("[property='cvo:name']");
        if (edit)
            $(skillResourceName).html("<span editable-text='skill.resource.name' class='inlineEditText'>{{skill.resource.name}}</span>");
        else
            $(skillResourceName).text("{{skill.resource.name}}");
        var skillResourceDescription = $(skillResource).find("[property='cvo:description']");
        if (edit)
            $(skillResourceDescription).html("<span editable-textarea='skill.description' class='inlineEditText'>{{skill.description}}</span>");
        else
            $(skillResourceDescription).text("{{skill.description}}");
    }

    var setEducation = function (html, cv) {
        var experiences = html.find("[property='cvo:education']");
        experiences.not(":first").remove();
        var experience = experiences.first();
        $(experience).attr("ng-repeat", "experience in item.educations");
        $(experience).attr("resource", getResource("experience.identifier.id"));
        var acquiredFrom = $(experience).find("[property='cvo:acquiredFrom']");
        $(acquiredFrom).attr("resource", getResource("experience.acquiredFrom.identifier.id"));
        var acquiredFromName = $(acquiredFrom).find("[property='cvo:name']").first();
        if (edit)
            $(acquiredFromName).html("<span editable-text='experience.acquiredFrom.name' class='inlineEditText'>{{experience.acquiredFrom.name}}</span>");
        else
            $(acquiredFromName).text("{{experience.acquiredFrom.name}}");
        var address = $(experience).find("[property='cvo:address']");
        $(address).attr("resource", getResource("experience.location.identifier.id"));
        var addressStreet = $(address).find("[property='cvo:street']");
        if (edit)
            $(addressStreet).html("<span editable-text='experience.location.street' class='inlineEditText'>{{experience.location.street}}</span>");
        else
            $(addressStreet).text("{{experience.location.street}}");
        var addressCity = $(address).find("[property='cvo:city']");
        $(addressCity).attr("resource", getResource("experience.location.city.identifier.id"));
        var addressCityName = $(addressCity).find("[property='cvo:name']");
        if (edit)
            $(addressCityName).html("<span editable-text='experience.location.city.name' class='inlineEditText'>{{experience.location.city.name}}</span>");
        else
            $(addressCityName).text("{{experience.location.city.name}}");
        var addressCountry = $(address).find("[property='cvo:country']");
        $(addressCountry).attr("resource", getResource("experience.location.country.identifier.id"));
        var addressCountryName = $(addressCountry).find("[property='cvo:name']");
        if (edit)
            $(addressCountryName).html("<span editable-text='experience.location.country.name' class='inlineEditText'>{{experience.location.country.name}}</span>");
        else
            $(addressCountryName).text("{{experience.location.country.name}}");
        var period = $(experience).find("[property='cvo:period']");
        $(period).attr("resource", getResource("experience.period.identifier.id"));
        var periodStartDate = $(period).find("[property='cvo:startDate']");
        var periodStartDateMonth = $(periodStartDate).find("[month]");
        var periodStartDateYear = $(periodStartDate).find("[year]");
        $(periodStartDateYear).text("{{experience.period.startDate | date:'yyyy'}}");
        $(periodStartDateMonth).text("{{experience.period.startDate | date:'MMM'}}");
        var periodEndDate = $(period).find("[property='cvo:endDate']");
        var periodEndDateMonth = $(periodEndDate).find("[month]");
        var periodEndDateYear = $(periodEndDate).find("[year]");
        $(periodEndDateYear).text("{{experience.period.endDate | date:'yyyy'}}");
        $(periodEndDateMonth).text("{{experience.period.endDate | date:'MMM'}}");
        var degree = $(experience).find("[property='cvo:degree']");
        $(degree).attr("resource", getResource("experience.degree.identifier.id"));
        var degreeName = $(degree).find('[property="cvo:name"]');
        if (edit)
            $(degreeName).html("<span editable-text='experience.degree.name' class='inlineEditText'>{{experience.degree.name}}</span>");
        else
            $(degreeName).text("{{experience.degree.name}}");
        var gdp = $(experience).find("[property='cvo:gdp']");
        if (edit)
            $(gdp).html("<span editable-text='experience.gdp' class='inlineEditText'>{{experience.gdp}}</span>");
        else
            $(gdp).text("{{experience.gdp}}");
        var major = $(experience).find("[property='cvo:major']");
        if (edit)
            $(major).html("<span editable-text='experience.major' class='inlineEditText'>{{experience.major}}</span>");
        else
            $(major).text("{{experience.major}}");
    }

    var setProject = function (html, cv) {
        var projects = $(html).find("[property='cvo:project']");
        projects.not(":first").remove();
        var project = projects.first();
        $(project).attr("ng-repeat", "project in item.projects");
        $(project).attr("resource", "cvo:{{project.identifier.id}}");
        var projectName = $(project).find("[property='cvo:name']");
        $(projectName).attr("href", "{{project.externalLink}}");
        if (edit)
            $(projectName).html("<span editable-text='project.name' class='inlineEditText'>{{project.name}}</span>");
        else
            $(projectName).text("{{project.name}}");
    }

    var setHomePages = function (html, cv) {
        var homePages = $(html).find("[property='cvo:homePage']");
        homePages.not(":first").remove();
        var homePage = homePages.first();
        $(homePage).attr("ng-repeat", "homePage in item.homePages");
        $(homePage).attr("resource", "cvo:{{homePage.identifier.id}}");
        var homePageName = $(homePage).find("[property='cvo:name']");
        $(homePageName).attr("href", "{{homePage.externalLink}}");
        if (edit)
            $(homePageName).html("<span editable-text='homePage.name' class='inlineEditText'>{{homePage.name}}</span>");
        else
            $(homePageName).text("{{homePage.name}}");
    }

    var setCertificate = function (html, cv) {
        var certificates = $(html).find("[property='cvo:certificate']");
        certificates.not(":first").remove();
        var certificate = certificates.first();

    }

    var getResource = function (name) {
        return "cvr:{{" + name + "}}"
    }
}]);