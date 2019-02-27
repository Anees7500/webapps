empApp.controller('DashboardController', ['$scope', 'DashboardService', 'getVendorMenuList', '$http', '$location', '$cookies',
  'Notification', '$route', '$rootScope', 'getVendorList','CartService',
  function ($scope, DashboardService, getVendorMenuList, $http, $location, $cookies, Notification,
    $route, $rootScope, getVendorList, CartService) {

    // ============= Logout ==================================

    // $scope.logout = function () {
    //   $cookies.remove('eId');
    //   $cookies.remove('rId');
    //   $cookies.remove('cId');
    //   $location.path('/');
    // }
    // if ($cookies.get('eId') == null) {
    //   Notification.warning("Login required!!!");
    //   $location.path('/');
    //   $route.reload();
    // }


    var companyId = 1;

    // $scope.try = function () {
    //   console.log("hahahaah ");
    // }
  

    //==============================================================
    //================ DEFINITION PART START========================
    //==============================================================

    /* vendor List */
    $scope.vendorList = [];

    /* Cart items  */
    $scope.cartItems = {};
    //==============================================================
    //================ DEFINITION PART END==========================
    //==============================================================

    //==============================================================
    //================ GET DATA FROM DB PART START==================
    //==============================================================

    /* Vendor List */
    var vendorListUrl = getVendorList + companyId;
    $http.get(vendorListUrl).then(function (response) {
      $scope.vendorList = response.data.data.details;
      $scope.selectedVendor = $scope.vendorList[0];
      getMenus();
      // console.log("selected vendor : ", JSON.stringify($scope.selectedVendor));
    });

    var getMenus = function () {
      var menuListUrl = getVendorMenuList + "?vendorId=" + $scope.selectedVendor.vendorId + "&companyId=" + companyId;
      $http.get(menuListUrl).then(function (response) {
        if (response.data.data != null) {
          $scope.menuNode = response.data.data.menus;
        }
        $scope.selectedMenuNode = $scope.menuNode[0].menuNode;
        console.log("selected Menu : ", JSON.stringify($scope.selectedMenuNode));
      });
    }

    //==============================================================
    //================ GET DATA FROM DB PART END====================
    //==============================================================


    // ===================functions=================================

    $scope.selectVendor = function (obj) {
      $scope.selectedVendor = obj;
      getMenus();
    }

    $scope.makeFavouritNReverse = function (obj) {
      obj.favourite = obj.favourite ? false : true;
    }

    $scope.checkForSubMenu = function (arr) {
      var resp = false;
      angular.forEach(arr, function (e) {
        if (!e.isFoodItem) {
          console.log("name : ", e.menuName);
          resp = true;
        }
      });
      console.log("resp : ", resp);
      return resp;
    }

    $scope.toggleSubMenu = function (obj) {
      obj.toggle = obj.toggle ? false : true;
    }

    $scope.selectNodeToDisplay = function (arr, obj, isChildNode) {
      console.log("selected Menu by functions passed obj: ", JSON.stringify(arr));
      if (isChildNode === 1) {
        if ($scope.checkForSubMenu(arr)) {
          $scope.toggleSubMenu(obj);
          return;
        }
      }

      $scope.selectedMenuNode = arr;

      console.log("selected Menu by functions: ", JSON.stringify($scope.selectedMenuNode));
    }

    $scope.cartObj = CartService.getCartObj();
    $scope.addToCart = function (itemObj) {


      $scope.cartObj = CartService.addToCart(itemObj);

    };

    

    $scope.addCount = function (val) {
  
      $scope.cartObj = CartService.addCount(val);
    }

    $scope.reduceCount = function (val) {

      $scope.cartObj = CartService.reduceCount(val);
    }

    var getAmount = function (obj) {
      return (obj.count * obj.obj.price);
    }

    var getTotalAmount = function (obj) {
      if ($scope.getCartItemSize(obj) == 0) {
        return null;
      }
      var amt = 0;
      angular.forEach(obj, function (val, key) {
        if (val != null) {
          if (val.amount != null) {
            amt = amt + val.amount;
          }
        }

      });
      return amt;
    }

    $scope.getCartItemSize = function (obj) {
   CartService.getCartItemSize();
    }

    $scope.getVendorName = function (id) {
      // debugger;
      var vName = "";
      angular.forEach($scope.vendorList, function (vl) {
        // debugger;
        if (vl.vendorId == id) {
          vName = vl.name;
        }
      });

      return vName;
    }

    $scope.gotoCheckout = function()
    {
      console.log("itens hahah: ", JSON.stringify($scope.cartItems));
      if(angular.equals($scope.cartObj.cartItems, {}))
      {
        Notification.warning("No menu is selected, Please select few Items to checkout");
        return;
      }

      // $cookies.put("selectedCartItems", JSON.stringify($scope.cartItems));
      $location.path("/dashboard/checkout");
    }



  
   

  
    //======================= Favourit Button =======================

    $scope.makeFavouritNReverse = function () {
      $scope.favourite = $scope.add ? false : true;
    }


  }
  // }
]);																