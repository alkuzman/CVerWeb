/**
 * Created by PC on 05/09/2016.
 */
App.filter('cverHtmlToPlaintext', function() {
    return function(text) {
        return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
});