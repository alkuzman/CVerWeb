/**
 * Created by User on 7/22/2016.
 */
App.directive('cverScale', ["$window", function ($window) {
    return {
        link: function (scope, element, attrs) {
            var toScale = element.children();

            var resize = function() {
                var containerWidth = element.prop('offsetWidth');
                var toScaleWidth = toScale.prop('offsetWidth');
                var scale = containerWidth/toScaleWidth;
                var scaleValue = "scale(" + scale + ")";
                toScale.css('-ms-transform', scaleValue);
                toScale.css('-webkit-transform', scaleValue);
                toScale.css('transform', scaleValue);

            }

            angular.element($window).bind("resize", function() {
                resize();
            });

            resize();
        }
    };
}]);