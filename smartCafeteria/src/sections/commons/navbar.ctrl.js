empApp.controller('NavbarController', ['$scope', '$cookies', 'Notification', '$location', '$route', 'NavbarService',
  function ($scope, $cookies, Notification, $location, $route, NavbarService) {

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

    $scope.boolFunction = function (value) {
      debugger;
      console.log("boolFunction", value); 
      $scope.walletBool = false;
      $scope.settingsBool = false;
      $scope.termsAndPolicyBool = false;
      $scope[value] = true;
      $scope.navBool = true;
    }

    // $scope.booleans = NavbarService.boolFunction(value);
    var companyId = 1;
    // =================== Add In Favourit =============================
    $scope.addToCartReverse = function () {
      $scope.add = $scope.add ? false : true;
    }

    $scope.makeEmployeeDetailsEditable = function () {
      $scope.editEmployeeDetails = $scope.editEmployeeDetails ? false : true;
    }
   
    // $scope.boolFunction = function(value)
    // {
    //   $scope.booleans = NavbarService.boolFunction(value);
    // };

  

  

  }

]);