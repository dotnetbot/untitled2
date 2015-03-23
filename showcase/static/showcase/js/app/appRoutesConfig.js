app.config(['ngAuthSettings', '$stateProvider', '$urlRouterProvider', function (ngAuthSettings, $stateProvider, $urlRouterProvider) {

    var prefix = ngAuthSettings.prefix;

    $urlRouterProvider.otherwise("/home");

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: prefix + "/static/showcase/js/app/views/home.html",
        controller: "homeController",
        data: {
            ncyBreadcrumbLabel: 'Главная'
        },
        activetab: 'home'
    });

    $stateProvider.state('bonusdeps', {
        url: '/bonusdeps',
        templateUrl: prefix + "/static/showcase/js/app/views/bonusdeps.html",
        controller: "bonusDepsCtrl"
    });

    $stateProvider.state('signin', {
        url: '/signin',
        templateUrl: prefix + "/static/showcase/js/app/views/signin.html",
        controller: "signinCtrl",
        data: {
            ncyBreadcrumbLabel: 'Вход'
        },
        activetab: 'login'
    });

    $stateProvider.state("signup", {
        url: '/signup',
        controller: "signupController",
        templateUrl: prefix + "/static/showcase/js/app/views/signup.html",
        data: {
            ncyBreadcrumbLabel: 'Регистрация'
        },
        activetab: 'signup'
    });

    $stateProvider.state('commonSignup', {
        url: '/commonsignup',
        templateUrl: prefix + "/static/showcase/js/app/views/commonsignup.html",
        controller: "commonSignupCtrl",
        data: {
            ncyBreadcrumbLabel: 'Вход'
        },
        activetab: 'login'
    });

    $stateProvider.state('changePwd', {
        url: '/changepwd',
        controller: 'pwdChangeCtrl',
        templateUrl: prefix + '/static/showcase/js/app/views/pwdchange.html'
    });

    $stateProvider.state('changePhone', {
        url: '/changephone',
        controller: 'phoneChangeCtrl',
        templateUrl: prefix + '/static/showcase/js/app/views/phonechange.html'
    });

    $stateProvider.state('commonRestore', {
        url: '/commonrestorepwd',
        controller: 'commonRestoreCtrl',
        templateUrl: prefix + '/static/showcase/js/app/views/commonRestore.html'
    });

    $stateProvider.state('restorePwd', {
        url: '/restorepwd',
        controller: 'pwdRestoreCtrl',
        templateUrl: prefix + '/static/showcase/js/app/views/restore.html'
    });

    $stateProvider.state('deps', {
        url: '/deps',
        controller: 'depsCtrl',
        templateUrl: prefix + '/static/showcase/js/app/views/deps.html'
    });
    
    $stateProvider.state('queuestate', {
        url: '/queuestate',
        controller: 'queueStateCtrl',
        templateUrl: prefix + '/static/showcase/js/app/views/queuestate.html'
    });
}]);