'use strict';
app.controller('phoneChangeCtrl', ['$scope', '$http', 'ngAuthSettings', function ($scope, $http, ngAuthSettings) {
    $scope.savedSuccessfully = false;
    $scope.message = "";
    $scope.phonechange = {
        phoneNumber: ""
    };

    $scope.change = function () {
        $http.post(ngAuthSettings.prefix + '/api/account/changephonenumber',
            {
                phoneNumber: $scope.phonechange.phoneNumber
            }).success(function () {
                $scope.savedSuccessfully = true;
                $scope.message = "Номер телефона изменен!";
            }).error(function (response) {
                var errors = [];
                for (var key in response.modelState) {
                    for (var i = 0; i < response.modelState[key].length; i++) {
                        errors.push(response.modelState[key][i]);
                    }
                }
                $scope.message = "Не удалось изменить номер телефона:" + errors.join(' ');
            });
    };
}]);