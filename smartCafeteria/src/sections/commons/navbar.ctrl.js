empApp.controller('NavbarController', ['$scope',
  function($scope) {
    $scope.addToCartReverse = function()
    {
      $scope.add = $scope.add ? false : true;
    }
    $scope.makeFavouritNReverse = function () {
      $scope.favourite = $scope.add ? false : true;
    }
     // ================== boolfunction ======================
    //  $scope.boolFunction = function (value) {
    //   console.log("boolFunction", value);
     
    //   $scope.favouritesBool = false;
    //   $scope.walletBool = false;
     
    //   $scope.settingsBool = false;
    //   $scope.termsAndPolicyBool = false;
    //   $scope[value] = true;
    // }
    // $scope.boolFunction("homeBool");

  // ============= Logout ==================================

//   $scope.logout = function(){
//     $cookies.remove('eId');
//     $cookies.remove('rId');
//     $cookies.remove('cId');
//     $location.path('/');
// }
// if ($cookies.get('eId') == null) {
//   Notification.warning("Login required!!!");
//   $location.path('/');
//   $route.reload();
// } 

  }

  ]);