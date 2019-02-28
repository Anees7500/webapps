vendorApp.controller('NavbarController', ['$scope', '$http', '$cookies', 'Notification', '$location', '$route', 'NavbarService',
  function ($scope, $http, $cookies, Notification, $location, $route, NavbarService) {

    $scope.logout = function () {
        $cookies.remove('vendorname'); 
        $cookies.remove('token');
        $cookies.remove('vendorId');
        $cookies.remove('email');
        $cookies.remove('name');
        $cookies.remove('mobile');
        $cookies.remove('authUserId');
        $location.path('/');
    }
    if ($cookies.get('vendorId') == null) {
        Notification.warning("Login required!!!");
        $location.path('/');
        $route.reload();
    }

  }
]);
