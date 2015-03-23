var app = angular.module('App', [
    'ui.bootstrap',
    'toaster',
    'ui.router',
    'chieffancypants.loadingBar',
    'ncy-angular-breadcrumb',
    'angularFileUpload',
    'LocalStorageModule',
    'angular-underscore']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: "/app/views/home.html",
        controller: "homeController",
        data: {
            ncyBreadcrumbLabel: 'Главная'
        },
        activetab: 'home'
    });

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: "/app/views/login.html",
        controller: "loginController",
        data: {
            ncyBreadcrumbLabel: 'Вход'
        },
        activetab: 'login'
    });

    $stateProvider.state("signup", {
        url: '/signup',
        controller: "signupController",
        templateUrl: "/app/views/signup.html",
        data: {
            ncyBreadcrumbLabel: 'Регистрация'
        },
        activetab: 'signup'
    });

    $stateProvider.state('users', {
        url: '/users',
        templateUrl: "/app/views/users.html",
        controller: "usersController",
        data: {
            ncyBreadcrumbLabel: 'Пользователи'
        },
        activetab: 'users'
    });

    $stateProvider.state('user', {
        url: '/user/:id',
        templateUrl: "/app/views/user.html",
        controller: "userController",
        data: {
            ncyBreadcrumbLabel: 'Пользователь {{ user.userName }}',
            ncyBreadcrumbParent: 'users'
        },
        activetab: 'users'
    });

    $stateProvider.state('userroles', {
        url: '/userroles/:id',
        templateUrl: "/app/views/userroles.html",
        controller: "userRolesController",
        data: {
            ncyBreadcrumbLabel: 'Роли пользователя',
            ncyBreadcrumbParent: 'user'
        },
        activetab: 'users'
    });

    $stateProvider.state('newuser_state', {
        url: '/newuser',
        templateUrl: "/app/views/newuser.html",
        controller: "newUserController",
        data: {
            ncyBreadcrumbLabel: 'Новый пользователь',
            ncyBreadcrumbParent: 'users'
        },
        activetab: 'users'
    });

    $stateProvider.state('roles', {
        url: '/roles',
        templateUrl: "/app/views/roles.html",
        controller: "rolesController",
        data: {
            ncyBreadcrumbLabel: 'Роли'
        },
        activetab: 'roles'
    });

    $stateProvider.state('role', {
        url: '/role/:id',
        templateUrl: "/app/views/role.html",
        controller: "roleController",
        data: {
            ncyBreadcrumbLabel: 'Роль',
            ncyBreadcrumbParent: 'roles'
        },
        activetab: 'roles'
    });

    $stateProvider.state('newrole_state', {
        url: '/newrole',
        templateUrl: "/app/views/newrole.html",
        controller: "newRoleController",
        data: {
            ncyBreadcrumbLabel: 'Новая роль',
            ncyBreadcrumbParent: 'roles'
        },
        activetab: 'roles'
    });

    $stateProvider.state('roleactions', {
        url: '/roleactions/:id',
        templateUrl: "/app/views/roleactions.html",
        controller: "roleActionsController",
        data: {
            ncyBreadcrumbLabel: 'Действия',
            ncyBreadcrumbParent: 'roles'
        },
        activetab: 'roles'
    });

    $stateProvider.state('actions', {
        url: '/actions',
        templateUrl: "/app/views/actions.html",
        controller: "actionsController",
        data: {
            ncyBreadcrumbLabel: 'Действия'
        },
        activetab: 'actions'
    });

    $stateProvider.state('refreshaction', {
        url: '/refreshactions',
        templateUrl: "/app/views/refreshactions.html",
        controller: "refreshActionsController",
        data: {
            ncyBreadcrumbLabel: 'Обновление',
            ncyBreadcrumbParent: 'actions'
        },
        activetab: 'actions'
    });

    $stateProvider.state('events', {
        url: '/events',
        templateUrl: "/app/views/events.html",
        controller: "eventsController",
        data: {
            ncyBreadcrumbLabel: 'События'
        },
        activetab: 'events'
    });
});

app.constant('ngAuthSettings', {
    apiServiceBaseUri: 'http://localhost:64736/',
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);