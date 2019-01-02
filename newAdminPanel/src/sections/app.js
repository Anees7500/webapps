var adminApp = angular.module("adminApp", ['ngRoute', 'ngMaterial','ngCookies',
'ui.bootstrap','ui-notification']);

adminApp.config(['$routeProvider', '$locationProvider',
    function ($routerProvider, $locationProvider) {
        $routerProvider
            .when('/', {
                templateUrl: 'sections/admin_login/login.tpl.html',
                title: 'Header-part',
                controller: 'AdminLoginController'
            })
           
    }
]);
