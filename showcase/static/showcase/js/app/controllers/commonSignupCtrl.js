'use strict';
app.controller('commonSignupCtrl', ['$scope', '$location', '$timeout', 'authService', function ($scope, $location, $timeout, authService) {

    $scope.savedSuccessfully = false;
    $scope.message = "";
    $scope.format = "dd MMMM yyyy";

    $scope.master = {};

    $scope.registration = {
        lastName: "",
        firstName: "",
        middleName: "",
        docSeries: "",
        docNumber: "",
        docDate: "",
        snils: "",
        phoneNumber: ""
    };

    $scope.signUp = function () {
        $scope.login = $scope.registration.snils;
        authService.saveRegistration($scope.registration).then(function (response) {
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

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };
    $scope.dateOptions = {
        startingDay: 1,
        showWeeks: false
    };
}]);