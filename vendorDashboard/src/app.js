var vendorApp = angular.module("vendorApp", ['ngRoute', 'vendorApp.config',
    'ngCookies', 'ui-notification']);
vendorApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/vendor_login/login.tpl.html',
            controller: 'VendorLoginController'
        })

        .when('/dashboard', {
            templateUrl: 'sections/vendor_Dashboard/dashboard.tpl.html',
            title: 'Header-part',
            controller: 'DashboardController'
        })

        .otherwise({
            redirectTo: '/'
        });



}]);
