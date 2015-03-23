'use strict';
app.controller('queueStateCtrl', ['$scope', '$http', 'ngAuthSettings', 'authService', '$location', function ($scope, $http, ngAuthSettings, authService, $location) {
    if (!authService.authentication.isAuth === true)
        $location.path('/signin');
    
    $scope.queueStates = [];
    $http.get(ngAuthSettings.prefix + '/api/queuestates')
        .success(function (data) {
            $scope.queueStates = data;
        })
        .error(function () {
            alert('error');
        });
}]);