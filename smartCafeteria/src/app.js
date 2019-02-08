var empApp = angular.module("empApp", ['ngRoute']);
empApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/emp_login/emp.tpl.html',
            controller: 'empLoginController'
        })

        .when('/dashboard', {
            templateUrl: 'sections/smartCafe_dashboard/dashboard.tpl.html',
            title: 'Header-part',
            controller: 'DashboardController'
        })
        
        .otherwise({
            redirectTo: '/'
        });
}]);
