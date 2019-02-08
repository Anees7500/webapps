adminApp.controller('AdminLoginController', ['$scope', 'AdminLoginService', '$http', 'adminLoginUrl',
  function($scope, AdminLoginService, $http,adminLoginUrl) {
    $scope.login = function(user) {
      console.log("passed value : ", user);
      console.log("admin var : ", $scope.admin);
      AdminLoginService.login(user, adminLoginUrl);
    }
   
    
  }
]);