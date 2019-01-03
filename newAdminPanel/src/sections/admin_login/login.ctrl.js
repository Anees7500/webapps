adminApp.controller('AdminLoginController', ['$scope', 'AdminLoginService', '$http',
  function($scope, AdminLoginService, $http) {
    $scope.login = function(user) {
      AdminLoginService.login(user, 'http://fancymonk.com:9125/api/admin/login');
    }
   
    
  }
]);