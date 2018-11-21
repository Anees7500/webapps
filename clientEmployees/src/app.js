var ceApp = angular.module('ceApp', ['ngRoute','ngMaterial','ui-notification']);

ceApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/home/home.tpl.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
