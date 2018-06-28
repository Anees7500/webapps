var vmApp = angular.module('vmApp', ['ngRoute', 'ngCookies', 'app.templates', 'vmApp.config', 'ngMaterial', 'ui-notification', 'uiGmapgoogle-maps', 'ui.tree', 'ngFileUpload','pubnub.angular.service']);

vmApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/admin', {
      templateUrl: 'sections/admin_dashboard/admin.tpl.html',
      controller: 'AdminController'
    })
    .when('/admin/vendor/:venId', {
      templateUrl: 'sections/admin_vendor/vendor.tpl.html',
      controller: 'VendorController'
    })
    .when('/admin/vendor/profile/:vId/:cId', {
      templateUrl: 'sections/admin_vendorProfile/profile.tpl.html',
      controller: 'ProfileController'
    })
    .when('/admin/company/:compId', {
      templateUrl: 'sections/admin_company/company.tpl.html',
      controller: 'CompanyController'
    })
    .when('/adminlogin', {
      templateUrl: 'sections/admin_login/adminlogin.tpl.html',
      controller: 'AdminLoginController'
    })
    .otherwise({
      redirectTo: '/adminlogin'
    });
}]);