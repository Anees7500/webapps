var adminApp = angular.module("adminApp", ['ngRoute', 'adminApp.config']);

adminApp.config(['$routeProvider', '$locationProvider',
    function ($routerProvider, $locationProvider) {
        $routerProvider
            .when('/', {
                templateUrl: 'sections/admin_login/login.tpl.html',
                title: 'Header-part',
                controller: 'AdminLoginController'
            })
            .when('/dashboard', {
                templateUrl: 'sections/admin_dashboard/admin.tpl.html',
                title: 'Header-part',
                controller: 'AdminController'
            })
            
           
    }
]);
