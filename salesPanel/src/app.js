var salesApp = angular.module('salesApp', ['ngRoute','salesApp.config','xeditable']);
salesApp.config(['$routeProvider', '$locationProvider',
   function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/login_company/login.tpl.html' 
        })
        .when('/dashboard', {
            templateUrl: 'sections/sales_dashboard/dashboard.tpl.html',
            title: 'Header-part',
            controller: 'AdminController'
        })
        .when('/dashboard/team/:teamId', {
            templateUrl: 'sections/team_sales/sales.tpl.html',
            controller:'TeamController'
        })
}

]);