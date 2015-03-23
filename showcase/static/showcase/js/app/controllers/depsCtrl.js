'use strict';
app.controller('depsCtrl', ['$scope', '$http', 'ngAuthSettings', function ($scope, $http, ngAuthSettings) {
    $scope.depOperations = [];
    $http.get(ngAuthSettings.prefix + '/api/depoperations')
        .success(function (data) {
            $scope.depOperations = data;
        })
        .error(function () {
            alert('error');
        });
}]);