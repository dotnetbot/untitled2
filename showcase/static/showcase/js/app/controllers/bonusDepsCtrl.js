'use strict';
app.controller('bonusDepsCtrl', ['$scope', '$http', 'ngAuthSettings', function ($scope, $http, ngAuthSettings) {
    $scope.depOperations = [];
    $http.get(ngAuthSettings.prefix + '/api/bonusdepoperations')
        .success(function (data) {
            $scope.depOperations = data;
        })
        .error(function () {
            alert('error');
        });
}]);