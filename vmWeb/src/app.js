var vmApp = angular.module('vmApp', ['ngRoute']);


vmApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'sections/vendor_login/login.tpl.html',
      controller: 'LoginController'
    })
