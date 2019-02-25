empApp.controller('DashboardController', ['$scope', 'DashboardService','getVendorMenuList', '$http', '$location', '$cookies',
 'Notification', '$route', '$rootScope', 'getVendorList',
  function ($scope,DashboardService, getVendorMenuList, $http, $location, $cookies, Notification, 
    $route, $rootScope, getVendorList) {

    // ============= Logout ==================================

    $scope.logout = function(){
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
  // else {
  //   $rootScope.employeeDetails.employeeId;

    var companyId = 1;

    $scope.try = function () {
      console.log("hahahaah ");
    }

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

    var getMenus = function()
    {
      var menuListUrl = getVendorMenuList + "?vendorId=" + $scope.selectedVendor.vendorId + "&companyId="+companyId;   
      $http.get(menuListUrl).then(function (response) {
      if(response.data.data != null)
      {
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
    
    $scope.selectVendor = function(obj)
    {
      $scope.selectedVendor = obj;
      getMenus();
    }

    $scope.makeFavouritNReverse = function (obj) {
      obj.favourite = obj.favourite ? false : true;
    }

    $scope.checkForSubMenu = function(arr)
    {
      var resp = false;
      angular.forEach(arr, function(e){
        if(!e.isFoodItem)
        {
          console.log("name : ",e.menuName);
          resp = true;
        }
      });
      console.log("resp : ",resp);
      return resp;
    }

    $scope.toggleSubMenu = function(obj)
    {
      obj.toggle = obj.toggle ? false : true;
    }

    $scope.selectNodeToDisplay = function(arr, obj, isChildNode)
    {
      console.log("selected Menu by functions passed obj: ", JSON.stringify(arr));
      if(isChildNode === 1)
      {
        if($scope.checkForSubMenu(arr))
        {
          $scope.toggleSubMenu(obj);
          return;
        }
      }
      
      $scope.selectedMenuNode = arr;

      console.log("selected Menu by functions: ", JSON.stringify($scope.selectedMenuNode));
    }

    $scope.addToCart = function (itemObj) {
      // console.log("item id  ", JSON.stringify(itemObj));
      // console.log("check ", $scope.cartItems[itemObj.id]);
      if ($scope.cartItems[itemObj.id]) {
        // console.log("item  present");
        $scope.cartItems[itemObj.id].count = $scope.cartItems[itemObj.id].count + 1;
      } else {
        // console.log("item not present");
        // console.log("adding");
        $scope.cartItems[itemObj.id] = {
          obj: itemObj,
          count: 1
        };
      }
      $scope.cartItems[itemObj.id].addedInCart = true;
      $scope.cartItems[itemObj.id].amount = getAmount($scope.cartItems[itemObj.id]);
      $scope.cartItems.totalAmount = getTotalAmount();
      console.log("cart items : ", JSON.stringify($scope.cartItems));
    };


    $scope.addCount = function (val) {
      console.log("val passed : ", JSON.stringify(val));
      $scope.cartItems[val.obj.id].count = $scope.cartItems[val.obj.id].count + 1;
      $scope.cartItems[val.obj.id].amount = getAmount($scope.cartItems[val.obj.id]);
      $scope.cartItems.totalAmount = getTotalAmount();
      console.log(" cart itmes : ", JSON.stringify($scope.cartItems));
    }

    $scope.reduceCount = function (val) {
      if ($scope.cartItems[val.obj.id].count > 0) {
        if($scope.cartItems[val.obj.id].count == 1)
        {
          delete $scope.cartItems[val.obj.id];  
        }
        else
        {
          $scope.cartItems[val.obj.id].count = $scope.cartItems[val.obj.id].count - 1;
          $scope.cartItems[val.obj.id].amount = getAmount($scope.cartItems[val.obj.id]);
        }
        $scope.cartItems.totalAmount = getTotalAmount();
        console.log(" cart itmes : ", JSON.stringify($scope.cartItems));
      }
    }

    var getAmount = function(obj)
    {
      return (obj.count * obj.obj.price);
    }

    var getTotalAmount = function()
    {
      if($scope.getCartItemSize() == 0)
      {
        return null;
      }
      var amt = 0;
      angular.forEach($scope.cartItems, function(val, key){
        if(val != null)
        {
          if(val.amount != null)
          {
            amt = amt + val.amount;
          }
        }
        
      });
      return amt;
    }

    $scope.getCartItemSize = function()
    {
      console.log("get size hshsh");
      var len = Object.keys($scope.cartItems).length -1;
      return len == -1 ? 0 : len;
    }
    
    $scope.getVendorName = function(id)
    {
      // debugger;
      var vName = "";
      angular.forEach($scope.vendorList, function(vl){
        // debugger;
        if(vl.vendorId == id)
        {
          vName =  vl.name;
        }
      });

      return vName;
    }


    var makeRazorPayOptions = function(data, orderId){
      var options = {
        "key": "rzp_test_KgnTG2Mdqgd2WX",
        "amount": (data.totalAmount * 100),
        "name": "Fancymonk",
        "description": "Smart Cafeteria",
        "order_id":orderId,
        "prefill": {
            "name": "Aman Telkar",
            "email": "fancymonk@razorpay.com",
            "phone":"9739420527"
        },
        "notes": {
            "address": " Hello"
        },
        "theme": {
            "color": "lightseagreen"
        },
        handler: function () {
            // alert('Payment successful')
            console.log("after payment success ",JSON.stringify(arguments));
            var updateObj = {};
            updateObj.bookingId = $scope.bookingResponse.bookingId;
            updateObj.status = "USERREQUESTED";
            DashboardService.updateBookings(updateObj);

            updateObj.status = "CONFIRMED";
            if(arguments['0'] != null)
            {
              updateObj.paymentId = arguments['0'].razorpay_payment_id;
            }
            DashboardService.updatePayments(updateObj);
        }
     };
      return options;
    }
    
  var pay = function (params) {
      $.getScript('https://checkout.razorpay.com/v1/checkout.js', function () {
          var rzp = new Razorpay(params);
          rzp.open();
      });
  };


  var getMenuForBookings = function()
  {
    var bookingMenuArr = [];
    angular.forEach($scope.cartItems, function(cartValue, cartKey){
      if(cartKey != 'totalAmount')
      {
        var temp = {};
      temp.menuId = cartKey;
      temp.quantity = cartValue.count;

      bookingMenuArr.push(temp);
      }
    });
    return bookingMenuArr;
  }
    $scope.checkout = function()
    {
      var objForDb = {};
      objForDb.companyId = companyId;
      objForDb.employeeId = "FM002";
      objForDb.menu = JSON.stringify(getMenuForBookings());
      objForDb.paymentType = "ONLINE";
      objForDb.mobile = "9388338322";
      objForDb.totalAmount = $scope.cartItems.totalAmount;
      DashboardService.saveBookings(objForDb).then(function(response){
        if (response.data.status == 1) {
          $scope.bookingResponse = response.data.data;
           if(objForDb.paymentType === "ONLINE")
           {
             var params = makeRazorPayOptions(objForDb, response.data.data.rzpOrderId);
             pay(params);
           }
        }
        else{

        }
      });
    }
    // ================== boolfunction ======================
    $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.homeBool = false;
      $scope.favouritesBool = false;
      $scope.walletBool = false;
      $scope.feedbackBool = false;
      $scope.settingsBool = false;
      $scope.termsAndPolicyBool = false;
      $scope[value] = true;
    }
    $scope.boolFunction("homeBool");

    // ============= Update Employee Details ==================================
    

    $scope.cardInfo = [{ productName: "Brief description", price: "100" },
    { productName: "Brief description", price: "100" },
    { productName: "Brief description", price: "100" },
    { productName: "Brief description", price: "100" },
    { productName: "Brief description", price: "100" }
    ];

    //==================== Vander Manu List ======================
    // $http.get(getVendorMenuList).then(function (response) {
    //   $scope.vendorManuList = response.data.data.menus;
    //   $scope.vendorManuListType = response.data.data.menus.menuNode;
    // });

    //=================== Cusinine List =========================
    $scope.cuisineList = [
      { vendorName: "Corner House Ice Cream ", itemName: "Poori Chole", price: "100", rating: "4.5" },
      { vendorName: " Cream ", itemName: "Namak para", price: "50", rating: "4.3" },
      { vendorName: "House ", itemName: "Stuffed Bread Pakora", price: "30", rating: "3.3" },
      { vendorName: "Corner ", itemName: "Chatkara Spicy Fries", price: "30", rating: "3.3" },
      { vendorName: "Kanti ", itemName: "Pindi Chole", price: "95", rating: "2.3" },
      { vendorName: " Sweets", itemName: "Cheese Chilli Maggi", price: "40", rating: "2.3" },




    ]
    //================ Favourite itme list ================
    $scope.addItemInfavouritList = function (item, ind) {
      if ($scope.favouritItemList == null) {
        $scope.favouritItemList = [];
      }

      if (item.favorited) {
        item.favorited = false;
        $scope.favouritItemList.slice(ind, 1);
      }
      else {
        item.favorited = true;
        $scope.favouritItemList.push(item);
      }
    }
    $scope.checkoutList=[{checkItem: "Poori sabji", checkVendor: "Fancy Vendor", checkPrice: "20"},
{checkItem: "Namak Para", checkVendor: "Classic Vendor", checkPrice: "30"},
{checkItem: "Masala Dhosa", checkVendor: "Pure-South Vendor", checkPrice: "50"}];

    // $scope.favouritItemList = [
    //   { vendorName: "Corner House Ice Cream ", itemName: "Chicken Wings", rating: "4.5" },
    //   { vendorName: "Corner House Ice Cream ", itemName: "Jalapeno Cheese Bites", rating: "4.5" },
    //   { vendorName: "Wild Thyme Restaurant", itemName: "Jalapeno Cheese Bites", rating: "3.2" },
    //   { vendorName: "Kaati Zone", itemName: "Paneer Tikka Roll", rating: "3.8" },
    //   { vendorName: "Kanti Sweets", itemName: "Dry Fruit Laddu", rating: "2.3" },
    //   { vendorName: "Pulp Juice Bar", itemName: "Mosambi Juice", rating: "1.1" }

    // ]
    // $scope.vendorList = [{ vendorName: "Fancy Vendor", cuisineName: "North Indian", foodItems: "Veg, Non-Veg, Chainese", rating: "4.5" },
    // { vendorName: "Modern Vendor", cuisineName: "South Indian", foodItems: "Veg, Non-Veg, Chainese", rating: "4.6" },
    // { vendorName: "Classic Vendor", cuisineName: "West Indian", foodItems: "Veg, Non-Veg, Chainese", rating: "4.7" },
    // { vendorName: "Moderate Vendor", cuisineName: "East Indian", foodItems: "Veg, Non-Veg, Chainese", rating: "4.1" },
    // { vendorName: "Pure-Veg Vendor", cuisineName: "North-East Indian", foodItems: "Veg, Non-Veg, Chainese", rating: "4.6" },
    // { vendorName: "Fancy Vendor", cuisineName: "North-West Indian", foodItems: "Veg, Non-Veg, Chainese", rating: "4.8" },
    // { vendorName: "Classic Vendor", cuisineName: "Italian", foodItems: "Veg, Non-Veg, Chainese", rating: "4.9" },
    // { vendorName: "Modern Vendor", cuisineName: "Japaniese", foodItems: "Veg, Non-Veg, Chainese", rating: "4." }
    // ]
    $scope.removeFavouritItem = function (item, ind) {
      console.log("hello inside delete function");
      $scope.favouritItemList.splice(ind, 1);

    };


//itemlistSandiwh
$scope.sandwichItem=[{itemName: "Paneer Sandwich", Price: "50"},
{itemName: "Veg Spicy Sandwich", Price: "40"},
{itemName: "Baby-Corn Sandwich", Price: "40"},
{itemName: "Chessy Veg Sandwich", Price: "60"},
{itemName: "Chocolate Sandwich", Price: "70"}];


    

    //================ Setting Employee Details ============================

    
    // =================== Edit Button ======================
    $scope.makeEmployeeDetailsEditable = function (employeeDetails) {
      $scope.editEmployeeDetails = $scope.favourite ? false : true;
    }
    //======================= Favourit Button =======================
    
    $scope.addToCartReverse = function () {
      $scope.add = $scope.add ? false : true;
    }

  }
  // }
]);																