App.filter('cverOrganizationProfilePictureFilter', function() {
    return function(url) {
        return  url ? url : 'img/organization.png';
    };
});