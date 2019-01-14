var rtApp = angular.module("rtApp", ['ngRoute', 'rtApp.config', 'ui.tree', 'ngAnimate', 'ngAria', 'ngMessages',
	 'ui-notification', 'uiGmapgoogle-maps', 'ngCookies', 'ui.carousel']);

rtApp.config(['$routeProvider',
  function ($routerProvider) {
		$routerProvider
			.when('/', {
				templateUrl: 'sections/retailLogin/login.tpl.html',
				title: 'Header-part',
				controller: 'RetailLoginController'
			})
			.when('/retail/:companyName', {
				templateUrl: 'sections/retailCompany/retail.tpl.html',
				title: 'Header-part',
				controller: 'RetailController'
			})
      .when('/retail/:companyName/checkout', {
				templateUrl: 'sections/retailCheckout/checkout.tpl.html',
				title: 'Header-part',
			 controller: 'CheckoutController'
			})
		// .when('/menu-item/:menuId', {
		// 	templateUrl: 'sections/retailCompany/random.tpl.html',
		// 	// title: 'Header-part',
		// 	controller: 'RandomController'
		// })
  }
]);
