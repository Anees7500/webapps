var clientApp = angular.module("clientApp", ['ngRoute']);

clientApp.config(['$routeProvider', '$locationProvider',
  function ($routerProvider, $locationProvider) {
		$routerProvider

			.when('/', {
				templateUrl: 'sections/clientLogin/login.tpl.html',
				title: 'Header-part',
				controller: 'LoginController'
			})
		// .when('/menu-item/:menuId', {
		// 	templateUrl: 'sections/retailCompany/random.tpl.html',
		// 	// title: 'Header-part',
		// 	controller: 'RandomController'
		// })
  }
]);
