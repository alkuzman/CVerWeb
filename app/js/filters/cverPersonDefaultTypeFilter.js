/**
 * Created by PC on 06/09/2016.
 */
App.filter('cverPersonDefaultTypeFilter', function () {
    return function (list) {
        var stop = ["Entity", "NamedIndividual", "Thing", "Nothing", "Agent", "Person"];
        list = list.filter(function (el) {
            return !stop.includes(el.name);
        });
        if (list[0] != undefined)
            return list.slice(-1).pop().name;
        return undefined;
    };
});