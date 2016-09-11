App.filter('cverPersonProfilePictureFilter', function() {
    return function(url) {
        return  url ? url : 'img/user.jpg';
    };
});