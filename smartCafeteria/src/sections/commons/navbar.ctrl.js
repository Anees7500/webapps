empApp.controller('NavbarController', ['$scope', '$cookies', 'Notification', '$location', '$route', 'NavbarService',
'NavBoolService','SMCNotifications',
  function ($scope, $cookies, Notification, $location, $route, NavbarService,NavBoolService, SMCNotifications) {

    //========================= Logout funtion ======================
    console.log("inside navbar controller");
    $scope.name = "aman";
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

    $scope.boolFunction = function (value) {
      console.log("boolFunction", value); 
      $scope.walletBool = false;
      $scope.settingsBool = false;
      $scope.termsAndPolicyBool = false;
      $scope[value] = true;

      NavBoolService.setNavBool(true);

    }

    // $scope.booleans = NavbarService.boolFunction(value);
    var companyId = 1;
    // =================== Add In Favourit =============================
    $scope.addToCartReverse = function () {
      $scope.add = $scope.add ? false : true;
    }
   
    $scope.notifObj = SMCNotifications.updateVal();
    // $scope.boolFunction = function(value)
    // {
    //   $scope.booleans = NavbarService.boolFunction(value);
    // };

  

  

  }

]);