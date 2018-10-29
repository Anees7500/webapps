clientApp.controller('LoginController', ['$scope', 'ClientLoginService','$rootScope', '$cookies', '$http', '$route',
  function($scope,ClientLoginService,$rootScope, $cookies,$http,$route) {
    // console.log("hello i am isnide login contriller");
    $scope.login = function(user) {
      console.log("check ",JSON.stringify(user));
      ClientLoginService.login(user, "http://fancymonk.com:9124/api/corporate/login");
    }
  }
]);
 