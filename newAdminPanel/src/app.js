var adminApp = angular.module("adminApp", ['ngRoute', 'adminApp.config']);

adminApp.config(['$routeProvider', '$locationProvider',
    function ($routerProvider, $locationProvider) {
        $routerProvider
        .when('/dashboard', {
            templateUrl: 'sections/admin_dashboard/admin.tpl.html',
            title: 'Header-part',
            controller: 'AdminController'
        })
        .when('/dashboard/company/:compId', {
           templateUrl: 'sections/admin_company/company.tpl.html',
           controller: 'CompanyController'
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
