var clientApp = angular.module("clientApp", ['ngRoute', 'ngMaterial','ngCookies','ui.bootstrap']);

clientApp.config(['$routeProvider', '$locationProvider',
    function ($routerProvider, $locationProvider) {
        $routerProvider
            .when('/', {
                templateUrl: 'sections/clientLogin/login.tpl.html',
                title: 'Header-part',
                controller: 'LoginController'
            })
            .when('/dashboard', {
                templateUrl: 'sections/clientDashboard/dashboard.tpl.html',
                title: 'Header-part',
                controller: 'ClientDashboardController'
            });

    }
]);
