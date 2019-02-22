var empApp = angular.module("empApp", ['ngRoute', 'ngMessages', 'empApp.config',
    'ngCookies', 'ui-notification']);
empApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/emp_login/emp.tpl.html',
            controller: 'EmpLoginController'
        })

        .when('/registration', {
            templateUrl: 'sections/emp_registration/empRegistration.tpl.html',
            title: 'Header-part',
            controller: 'EmpRegistrationController'
        })

        .when('/scrollspy', {
            templateUrl: 'sections/scrollspy_try/scrollspy.tpl.html',
            title: 'Header-part',
            controller: 'EmpScrollspyController'
        })


        .when('/dashboard', {
            templateUrl: 'sections/smartCafe_dashboard/dashboard.tpl.html',
            title: 'Header-part',
            controller: 'DashboardController'
        })
        
        .otherwise({
            redirectTo: '/'
        });

        
       
}]);
