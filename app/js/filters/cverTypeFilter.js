/**
 * Created by PC on 05/09/2016.
 */
App.filter('cverTypeFilter', function() {
    return function(list) {
        var stop = ["Entity", "NamedIndividual", "Thing", "Nothing", "Agent", "Person", "Organization", "Document", "Template", "CV", "Certificate", "Project", "Call"];
        list = list.filter( function( el ) {
            return !stop.includes( el );
        } );
        return list;
    };
});