var clientApp = angular.module("clientApp",['ngRoute']);
clientApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/client_Login/login.tpl.html',
            controller: 'ClientLoginCtrl'
        })

        .when('/dashboard', {
            templateUrl: 'sections/client_dashboard/dashboard.tpl.html',
            controller: 'ClientDashboardCtrl'
        })


    }]);