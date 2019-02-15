var empApp = angular.module("empApp", ['ngRoute', 'ngMessages']);

// empApp.config(function($locationProvider) {
//     $locationProvider.hashPrefix('');
//   });
  
empApp.config(['$routeProvider',
 function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/emp_login/emp.tpl.html',
            controller: 'empLoginController'
        })


        .when('/registration', {
            templateUrl: 'sections/emp_registration/empRegistration.tpl.html',
            title: 'Header-part',
            controller: 'empRegistrationController'
        })

        .when('/scrollspy', {
            templateUrl: 'sections/scrollspy_try/scrollspy.tpl.html',
            title: 'Header-part',
            controller: 'empScrollspyController'
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
