var rtApp = angular.module("rtApp", ['ngRoute', 'rtApp.config', 'ui.tree' ,'ngMaterial','ui-notification', 'uiGmapgoogle-maps']);

rtApp.config(['$routeProvider', '$locationProvider',
  function ($routerProvider, $locationProvider) {
		$routerProvider

			.when('/retail/:companyName', {
				templateUrl: 'sections/retailCompany/retail.tpl.html',
				title: 'Header-part',
				// controller: 'RetailController'
			})
      .when('/retail/:companyName/checkout', {
				templateUrl: 'sections/retailCheckout/checkout.tpl.html',
				title: 'Header-part',
			 controller: 'FooController'
			})
		// .when('/menu-item/:menuId', {
		// 	templateUrl: 'sections/retailCompany/random.tpl.html',
		// 	// title: 'Header-part',
		// 	controller: 'RandomController'
		// })
  }
]);
