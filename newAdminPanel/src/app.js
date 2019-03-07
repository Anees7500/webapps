var adminApp = angular.module("adminApp", ['ngRoute', 'adminApp.config', 'ui-notification',
                                            'ngCookies']);

adminApp.config(['$routeProvider', '$locationProvider',
    function ($routerProvider, $locationProvider) {
        $routerProvider
            .when('/dashboard', {
                templateUrl: 'sections/admin_dashboard/admin.tpl.html',
                title: 'Header-part',
                controller: 'DashboardController'
            })
            .when('/dashboard/company/:compId', {
                templateUrl: 'sections/admin_company/company.tpl.html',
                controller: 'CompanyController'
            })
            .when('/dashboard/trial', {
                templateUrl: 'sections/trial_folder/trial.tpl.html',
                controller: 'trailController'
            })
            .when('/dashboard/vendor/:venId', {
                templateUrl: 'sections/admin_vendor/vendor.tpl.html',
                controller: 'VendorController'
            })
            .when('/', {
                templateUrl: 'sections/admin_login/login.tpl.html',
                controller: 'AdminLoginController'
            });
        //   .otherwise({
        //     redirectTo: '/'
        // });


    }
]);
