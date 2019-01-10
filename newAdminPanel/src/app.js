var adminApp = angular.module("adminApp", ['ngRoute', 'adminApp.config']);

adminApp.config(['$routeProvider', '$locationProvider',
    function ($routerProvider, $locationProvider) {
        $routerProvider
        .when('/dashboard', {
            templateUrl: 'sections/admin_dashboard/admin.tpl.html',
            title: 'Header-part',
            controller: 'AdminController',
            require:'ngModel'
        })
        .when('/dashboard/company/:compId', {
           templateUrl: 'sections/admin_company/company.tpl.html',
           controller: 'CompanyController',
           require:'ngModel'
       })
        .when('/', {
          templateUrl: 'sections/admin_login/login.tpl.html',
          controller: 'AdminLoginController',
          require:'ngModel'
      });
      //   .otherwise({
      //     redirectTo: '/'
      // });
      

    }
    ]);
