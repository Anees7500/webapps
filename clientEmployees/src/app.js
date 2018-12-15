var ceApp = angular.module('ceApp', ['ngRoute', 'ngMaterial', 'ui-notification', 'app.templates', 'ceApp.config', 'ngCookies']);

ceApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
<<<<<<< HEAD
            templateUrl: 'sections/clientEmployeeslogin/clientlogin.tpl.html',
            controller: 'LoginController'
        })
        .when('/employees', {
=======
            templateUrl: 'sections/clientEmployeeslogin/employeeslogin.tpl.html',
            controller: 'LoginController'
        })
        .when('/newemployees', {
            templateUrl: 'sections/clientEmployeesnewpsw/employeesnew.tpl.html',
            controller: 'LoginNewPswController'
        })
        .when('/dashboard', {
>>>>>>> cf0f834e478ba9176f538bfd7eb8b256c9b09e7c
            templateUrl: 'sections/home/home.tpl.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
 