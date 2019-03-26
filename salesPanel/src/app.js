var salesApp = angular.module('salesApp', ['ngRoute','salesApp.config','xeditable','ui.tree']);
salesApp.config(['$routeProvider', '$locationProvider',
   function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/login_company/login.tpl.html',
            controller: 'AdminLoginController'
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
        .when('/catmap',{
            templateUrl: 'sections/catering_map/catmap.html',
            controller:'catMapCtrl'
        })
        .when('/dashboard/company/:compId',{
            templateUrl: 'sections/company_details/company.tpl.html',
            controller:'CompanyController'
        })
}

]);