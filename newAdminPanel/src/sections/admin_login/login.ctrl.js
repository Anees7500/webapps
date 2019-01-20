adminApp.controller('AdminLoginController', ['$scope', 'AdminLoginService', '$http', 'adminLoginUrl',
  function($scope, AdminLoginService, $http,adminLoginUrl) {
    $scope.login = function(user) {
      AdminLoginService.login(user, adminLoginUrl);
    }
   
    
  }
]);