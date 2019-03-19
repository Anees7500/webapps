var clientApp = angular.module("clientApp",['ngRoute','clientApp.config', 'ngCookies', 'ui-notification']);
clientApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/client_Login/login.tpl.html',
            controller: 'ClientLoginCtrl'
        })

        .when('/dashboard', {
            templateUrl: 'sections/client_dashboard/dashboard.tpl.html',
            title: 'Header-part',
            controller: 'ClientDashboardCtrl'
        })
        .when('/trail', {
            templateUrl: 'sections/trial/trail.tpl.html',
            title: 'Header-part',
            controller: 'TrailCtrl'
        })
       

    }]);