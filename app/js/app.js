var App = angular.module('cver', [
    'ui.router',
    'myApp.version',
    'ngResource',
    'ngSanitize']);

var initializeMaterialDesign = function () {
    $.material.init();
};

var scrollableNavbar = function () {
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $(".navbar").fadeOut();
        } else {
            $(".navbar").fadeIn();
        }
        lastScrollTop = st;
    });
};

(function ($) {
    $(document).ready(function () {
        $(function () {
            initializeMaterialDesign();
            scrollableNavbar();
        });
    });
}(jQuery));