'use strict';
app.controller('pwdChangeCtrl', ['$scope', '$http', 'ngAuthSettings', function ($scope, $http, ngAuthSettings) {
    $scope.savedSuccessfully = false;
    $scope.message = "";

    $scope.pwdchange = {
        number: "",
        oldPassword: "",
        newPassword: "",
        repeatNewPassword: ""
    };

    $scope.change = function () {
        $http.post(ngAuthSettings.prefix + '/api/account/changezhssuserpwd',
            {
                oldPassword: $scope.pwdchange.oldPassword,
                newPassword: $scope.pwdchange.newPassword,
                repeatNewPassword: $scope.pwdchange.repeatNewPassword
            }).success(function () {
                $scope.savedSuccessfully = true;
                $scope.message = "Пароль изменен!";
            }).error(function (response) {
                var errors = [];
                for (var key in response.modelState) {
                    for (var i = 0; i < response.modelState[key].length; i++) {
                        errors.push(response.modelState[key][i]);
                    }
                }
                $scope.message = "Не удалось изменить пароль:" + errors.join(' ');
            });
    };
}]);