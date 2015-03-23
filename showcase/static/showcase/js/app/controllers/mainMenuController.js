'use strict';
app.controller('mainMenuController', ['$scope', '$http', '$location', 'authService', '$state', function ($scope, $http, $location, authService, $state) {
    $scope.$state = $state;

    $scope.signout = function () {
        authService.logOut();
        $location.path('/signin');
    };

    $scope.authentication = authService.authentication;
}]);