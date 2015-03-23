'use strict';
app.controller('commonRestoreCtrl', ['$scope', '$http', 'ngAuthSettings', function ($scope, $http, ngAuthSettings) {
    $scope.savedSuccessfully = false;
    $scope.message = "";
    $scope.restore = {
        number: "",
        phoneNumber: ""
    };

    $scope.restore = function () {
        $http.post(ngAuthSettings.prefix + '/api/account/RestoreUserPassword',
            {
                snils: $scope.restore.snils,
                phoneNumber: $scope.restore.phoneNumber
            }).success(function () {
                $scope.savedSuccessfully = true;
                $scope.message = "Пароль выслан на ваш номер телефона!";
            }).error(function (response) {
                var errors = [];
                for (var key in response.modelState) {
                    for (var i = 0; i < response.modelState[key].length; i++) {
                        errors.push(response.modelState[key][i]);
                    }
                }
                $scope.errors = errors;
            });
    };
}]);