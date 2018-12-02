clientApp.controller('LoginController', ['$scope', 'ClientLoginService','$rootScope', '$cookies',
'$http', '$route','postLoginUrl',
  function($scope,ClientLoginService,$rootScope, $cookies,$http,$route,postLoginUrl) {
    // console.log("hello i am isnide login contriller");
    $scope.login = function(user) {
      console.log("check ",JSON.stringify(user));
      ClientLoginService.login(user, postLoginUrl);
    }
  }
]);
