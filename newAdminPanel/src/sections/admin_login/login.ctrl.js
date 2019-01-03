adminApp.controller('AdminLoginController', ['$scope','$rootScope', '$http','AdminLoginService',
'$route',
  function($scope,$rootScope,$http,AdminLoginService,$route) {
    console.log("hello i am isnide login controller");
    $scope.login = function(admin) {
      
      AdminLoginService.login(admin, "http://fancymonk.com:9125/api/admin/login");
    }
  }
]);