var app = angular.module('App', [
    'ui.bootstrap',
    'ui.router',
    'ui.bootstrap',
    'ui.mask',
    'chieffancypants.loadingBar',
    'angular-underscore']);

app.constant('ngAuthSettings', {
    apiServiceBaseUri: 'http://localhost:8000/',
    prefix: '',
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);

app.directive('fancybox', function ($compile, $parse) {
    return {
        restrict: 'C',
        replace: false,
        link: function ($scope, element, attrs) {

            $scope.$watch(function () { return element.attr('openbox'); }, function (openbox) {
                if (openbox == 'show') {

                    var options = $parse(attrs.options)($scope) || {};

                    if (!options.href && !options.content) {

                        options.content = angular.element(element.html());

                        $compile(options.content)($scope);

                    }


                    options.afterClose = function () {
                        $scope.$apply(function () {
                            element.attr('openbox', 'hide');
                        });
                    };

                    $.fancybox(options);
                }
            });
        }
    };
});

app.directive('datepickerLocalDate', ['$parse', function ($parse) {
    var directive = {
        restrict: 'A',
        require: ['ngModel'],
        link: link
    };
    return directive;

    function link(scope, element, attr, ctrls) {
        var ngModelController = ctrls[0];

        // called with a JavaScript Date object when picked from the datepicker
        ngModelController.$parsers.push(function (viewValue) {
            // undo the timezone adjustment we did during the formatting
            viewValue.setMinutes(viewValue.getMinutes() - viewValue.getTimezoneOffset());
            // we just want a local date in ISO format
            return viewValue.toISOString().substring(0, 10);
        });

        // called with a 'yyyy-mm-dd' string to format
        ngModelController.$formatters.push(function (modelValue) {
            if (!modelValue) {
                return undefined;
            }
            // date constructor will apply timezone deviations from UTC (i.e. if locale is behind UTC 'dt' will be one day behind)
            var dt = new Date(modelValue);
            // 'undo' the timezone offset again (so we end up on the original date again)
            dt.setMinutes(dt.getMinutes() + dt.getTimezoneOffset());
            return dt;
        });
    }
}]);


