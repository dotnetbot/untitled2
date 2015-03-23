'use strict';
app.controller('signupController', ['$scope', '$location', '$timeout', 'authService', function ($scope, $location, $timeout, authService) {

    $scope.savedSuccessfully = false;
    $scope.message = "";

    $scope.registration = {
        number: "",
        lastName: "",
        phoneNumber: ""
    };

    $scope.signUp = function () {
        $scope.login = $scope.registration.number;
        authService.saveZhssRegistration($scope.registration).then(function (response) {
            $scope.errors = null;
            $scope.savedSuccessfully = true;
        },
         function (response) {
             var errors = [];
             for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     errors.push(response.data.modelState[key][i]);
                 }
             }
             $scope.savedSuccessfully = false;
             $scope.errors = errors;
         });
    };
}]);