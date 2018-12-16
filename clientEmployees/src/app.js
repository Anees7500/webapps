var ceApp = angular.module('ceApp', ['ngRoute', 'ngMaterial', 'ui-notification', 'app.templates', 'ceApp.config', 'ngCookies']);

ceApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/clientEmployeeslogin/employeeslogin.tpl.html',
            controller: 'LoginController'
        })
        .when('/newemployees', {
            templateUrl: 'sections/clientEmployeesnewpsw/employeesnew.tpl.html',
            controller: 'LoginNewPswController'
        })
        .when('/dashboard', {
            templateUrl: 'sections/home/home.tpl.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
