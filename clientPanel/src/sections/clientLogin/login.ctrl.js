clientApp.controller('LoginController', ['$scope', 'ClientLoginService',
  function($scope,ClientLoginService) {
    // console.log("hello i am isnide login contriller");
    $scope.login = function(client) {
      // console.log("check ",JSON.stringify(client));
      ClientLoginService.login(client, "http://fancymonk.com:9124/api/corporate/login");
    }
  }
]);
