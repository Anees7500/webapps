var ceApp = angular.module('ceApp', ['ngRoute', 'ngMaterial', 'ui-notification']);

ceApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // .when('/', {
        //     templateUrl: 'sections/clientEmployeeslogin/employeeslogin.tpl.html',
        //     controller: 'LoginController'
        // })
        .when('/employeesnew', {
            templateUrl: 'sections/clientEmployeesnewpsw/employeesnewpsw.tpl.html',
            controller: 'LoginNewPswController'
        })
        // .when('/employees', {
        //     templateUrl: 'sections/home/home.tpl.html',
        //     controller: 'HomeController'
        // })
        .otherwise({
            redirectTo: '/'
        });
}]);