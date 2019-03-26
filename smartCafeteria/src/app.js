var empApp = angular.module("empApp", ['ngRoute', 'empApp.config',
    'ngCookies', 'ui-notification'
]);
empApp.run(function($http, clientId, clientToken) {
    $http.defaults.headers.common.client = clientId;
    $http.defaults.headers.common.Authorization = 'Basic ' + clientToken;

    console.log("time : ", new Date());
});
empApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/sc_login/login.tpl.html',
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

    .when('/dashboard/favourite', {
        templateUrl: 'sections/smartCafe_favourite/favourite.tpl.html',
        title: 'Header-part',
        controller: 'FavouritController'
    })

    .when('/dashboard', {
        templateUrl: 'sections/sc_dashboard/dashboard.tpl.html',
        title: 'Header-part',
        controller: 'DashboardController'
    })

    // .otherwise({
    //     redirectTo: '/'
    // });



}]);