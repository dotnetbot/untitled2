'use strict';
app.controller('signinCtrl', ['$scope', '$location', 'authService', function ($scope, $location, authService) {

    $scope.loginData = {
        userName: "",
        password: "",
        useRefreshTokens: false
    };

    $scope.message = "";

    $scope.signin = function () {

        authService.login($scope.loginData).then(function (response) {
            $location.path('/home');
        },
         function (err) {
             $scope.errors = [err.error_description];
         });
    };

}]);