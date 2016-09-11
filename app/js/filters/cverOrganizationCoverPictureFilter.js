App.filter('cverOrganizationCoverPictureFilter', function() {
    return function(url) {
        return  url ? url : 'img/organizationCover.jpg';
    };
});