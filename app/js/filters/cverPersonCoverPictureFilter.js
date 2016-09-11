App.filter('cverPersonCoverPictureFilter', function() {
    return function(url) {
        return  url ? url : 'img/userCover.jpg';
    };
});