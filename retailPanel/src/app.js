var rtApp = angular.module("rtApp", ['ngRoute']);

rtApp.config(["$routerProvider", "$locationProvider",
  function($routerProvider, $locationProvider) {
    $routerProvider
    
    .when("/", 
    {
      templateUrl: "section/retailCompany/retail.tpl.html",
      controller: "RetailController"
    })
    .when
  }
]);
