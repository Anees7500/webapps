var rtApp = angular.module('rtApp', ['ngRoute']);

rtApp.config(['$routeProvider', '$locationProvider',
  function($routerProvider, $locationProvider) {
    $routerProvider
    
    .when('/', 
    {
      templateUrl: 'sections/retailCompany/retail.tpl.html',
      title: 'Header-part',
      controller: 'RetailController'
    })
    .when('/randomUrl',
  {
    templateUrl: 'sections/retailCompany/random.tpl.html',
    // title: 'Header-part',
    controller: 'RandomController'
  })
  }
]);
