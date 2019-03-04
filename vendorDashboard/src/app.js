var vendorApp = angular.module("vendorApp", ['ngRoute', 'vendorApp.config',
    'ngCookies', 'ui-notification', 'ui.tree']);
vendorApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/vendor_login/login.tpl.html',
            controller: 'VendorLoginController'
        })

        .when('/companies', {
            templateUrl: 'sections/vendore_Companies/companies.tpl.html',
            title: 'Header-part',
            controller: 'CompanyController'
        })
        .when('/companies/:compId', {
            templateUrl: 'sections/vendor_Dashboard/dashboard.tpl.html',
            title: 'Header-part',
            controller: 'DashboardController'
        })

        .otherwise({
            redirectTo: '/'
        });



}]);
