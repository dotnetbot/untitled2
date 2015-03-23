'use strict';
app.controller('homeController', ['$scope', 'authService', '$location', function ($scope, authService, $location) {

    if (authService.authentication.isAuth !== true)
        $location.path('/signin');
}]);