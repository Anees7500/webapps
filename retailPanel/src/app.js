var rtApp = angular.module("rtApp", ['ngRoute', 'rtApp.config', 'ui.tree']);

rtApp.config(['$routeProvider', '$locationProvider',
  function ($routerProvider, $locationProvider) {
		$routerProvider

			.when('/', {
				templateUrl: 'sections/retailCompany/retail.tpl.html',
				title: 'Header-part',
				controller: 'RetailController'
			})
			.when('/menu-item/:menuId', {
				templateUrl: 'sections/retailCompany/random.tpl.html',
				// title: 'Header-part',
				controller: 'RandomController'
			})
  }
]);
