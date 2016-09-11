/**
 * Created by PC on 05/09/2016.
 */
App.filter('cverEmptyTextFilter', function() {
    return function(text) {
        return  text ? text : 'Empty';
    };
});