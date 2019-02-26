empApp.controller('NavbarController', ['$scope', '$cookies', 'Notification', '$location', '$route',
  function ($scope, $cookies, Notification, $location, $route) {

    //========================= Logout funtion ======================
    console.log("inside navbar controller");
    $scope.logout = function () {
      $cookies.remove('eId');
      $cookies.remove('rId');
      $cookies.remove('cId');
      $location.path('/');
    }
    if ($cookies.get('eId') == null) {
      Notification.warning("Login required!!!");
      $location.path('/');
      $route.reload();
    }


    var companyId = 1;
    // =================== Add In Favourit =============================
    $scope.addToCartReverse = function () {
      $scope.add = $scope.add ? false : true;
    }
    $scope.makeFavouritNReverse = function () {
      $scope.favourite = $scope.add ? false : true;
    }
    // ================== boolfunction ======================
    $scope.boolFunction = function (value) {
      console.log("boolFunction", value); 
      $scope.walletBool = false;
      $scope.settingsBool = false;
      $scope.termsAndPolicyBool = false;
      $scope[value] = true;
    }
    // $scope.boolFunction("homeBool");

  

  }

]);