var empApp = angular.module("empApp", ['ngRoute', 'ngMessages', 'empApp.config',
    'ngCookies', 'ui-notification']);
empApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/emp_login/login.tpl.html',
            controller: 'EmpLoginController'
        })

        .when('/registration', {
            templateUrl: 'sections/emp_registration/empRegistration.tpl.html',
            title: 'Header-part',
            controller: 'EmpRegistrationController'
        })

        .when('/dashboard/checkout', {
            templateUrl: 'sections/smartCafe_checkout/checkout.tpl.html',
            title: 'Header-part',
            controller: 'CheckoutController'
        })

        .when('/dashboard/orders', {
            templateUrl: 'sections/smartCafe_orders/orders.tpl.html',
            title: 'Header-part',
            controller: 'OrdersController'
        })


        .when('/dashboard', {
            templateUrl: 'sections/smartCafe_dashboard/dashboard.tpl.html',
            title: 'Header-part',
            controller: 'DashboardController'
        })
        
        // .otherwise({
        //     redirectTo: '/'
        // });

        
       
}]);
