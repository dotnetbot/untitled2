'use strict';
app.factory('authService', ['$http', '$q', 'ngAuthSettings', '$location', function ($http, $q, ngAuthSettings, $location) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName: "",
        useRefreshTokens: false,
        inQueue: false,
        isZhssUser: false
    };

    var _saveZhssRegistration = function (registration) {

        _logOut();

        return $http.post(serviceBase + 'api/account/registerzhssuser', registration).then(function (response) {
            return response;
        });

    };
    
    var _saveRegistration = function (registration) {

        _logOut();

        return $http.post(serviceBase + 'api/account/registeruser', registration).then(function (response) {
            return response;
        });

    };

    var _login = function (loginData) {
       
        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        if (loginData.useRefreshTokens) {
            data = data + "&client_id=" + ngAuthSettings.clientId;
        }

        var deferred = $q.defer();

        $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            var authData = {
                token: response.access_token,
                userName: loginData.userName,
                refreshToken: loginData.useRefreshTokens ? response.refresh_token : "",
                useRefreshTokens: true,
                inQueue: response.inQueue === 'true',
                isZhssUser: response.isZhssUser === 'true'
            };
            //localStorageService.set('authorizationData', authData);

            _authentication.isAuth = true;
            _authentication.userName = loginData.userName;
            _authentication.useRefreshTokens = loginData.useRefreshTokens;
            _authentication.inQueue = authData.inQueue;
            _authentication.isZhssUser = authData.isZhssUser;


            deferred.resolve(response);

        }).error(function (err, status) {
            _logOut();
            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _logOut = function () {

        //localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.userName = "";
        _authentication.useRefreshTokens = false;
        _authentication.inQueue = false;
        _authentication.isZhssUser = false;
    };

    var _fillAuthData = function () {

        var authData = null;//localStorageService.get('authorizationData');
        if (authData) {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
            _authentication.useRefreshTokens = authData.useRefreshTokens;
            _authentication.inQueue = authData.inQueue;
            _authentication.isZhssUser = authData.isZhssUser;
        }

    };

    authServiceFactory.saveRegistration = _saveRegistration;
    authServiceFactory.saveZhssRegistration = _saveZhssRegistration;
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;
    //authServiceFactory.refreshToken = _refreshToken;

    return authServiceFactory;
}]);