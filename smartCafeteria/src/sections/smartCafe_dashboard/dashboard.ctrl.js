empApp.controller('DashboardController', ['$scope', 'getVendorMenuList', '$http',
  function ($scope, getVendorMenuList, $http) {

    // ================== boolfunction ======================
    $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.homeBool = false;
      $scope.myOdersBool = false;
      $scope.favouritesBool = false;
      $scope.walletBool = false;
      $scope.cardBool = false;
      $scope.feedbackBool = false;
      $scope.settingsBool = false;
      $scope.termsAndPolicyBool = false;
      $scope[value] = true;
    }
    $scope.boolFunction("homeBool");

    $scope.cardInfo = [{ productName: "Brief description", price: "100" },
    { productName: "Brief description", price: "100" },
    { productName: "Brief description", price: "100" },
    { productName: "Brief description", price: "100" },
    { productName: "Brief description", price: "100" }
    ];

    //==================== Vander Manu List ======================
    $http.get(getVendorMenuList).then(function (response) {
      $scope.vendorManuList = response.data.data.menus;
      $scope.vendorManuListType = response.data.data.menus.menuNode;
    });

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
      if($scope.favouritItemList == null)
      {
        $scope.favouritItemList = [];
      }
      
      if(item.favorited)
      {
        item.favorited = false;
        $scope.favouritItemList.slice(ind,1);
      }
      else{
        item.favorited = true;
        $scope.favouritItemList.push(item);
      }
    }
  
    // $scope.favouritItemList = [
    //   { vendorName: "Corner House Ice Cream ", itemName: "Chicken Wings", rating: "4.5" },
    //   { vendorName: "Corner House Ice Cream ", itemName: "Jalapeno Cheese Bites", rating: "4.5" },
    //   { vendorName: "Wild Thyme Restaurant", itemName: "Jalapeno Cheese Bites", rating: "3.2" },
    //   { vendorName: "Kaati Zone", itemName: "Paneer Tikka Roll", rating: "3.8" },
    //   { vendorName: "Kanti Sweets", itemName: "Dry Fruit Laddu", rating: "2.3" },
    //   { vendorName: "Pulp Juice Bar", itemName: "Mosambi Juice", rating: "1.1" }

    // ]
    $scope.removeFavouritItem = function (item, ind) {
      console.log("hello inside delete function");
      $scope.favouritItemList.splice(ind, 1);

    };



    //================ Ratingfeedback ============================
    var maxRating = 5;
    $scope.stars = [].constructor(maxRating);
    $scope.ratingParameters = [
      {
        name: "Presentation",
        rating: 3
      },
      {
        name: "Quality",
        rating: 3
      },
      {
        name: "Taste",
        rating: 4

      },
      {
        name: "Quantity",
        rating: 4
      }
    ];

    $scope.rateBy = function (j, star) {
      console.log("hhhsh cdhbdsjhs : ", star);
      console.log("hhhshs : ", JSON.stringify($scope.stars));
      j.rating = star;

    }

    //================ Employee Details ============================

    $scope.employeeDetails = [{
      name: "Pallavi Gupta",
      employeeId: "207997",
      mobile: "8871128039", emailId: "pallavig033@gmail.com"
    }];
    // =================== Edit Button ======================
    $scope.makeEmployeeDetailsEditable = function (employeeDetails) {
      $scope.editEmployeeDetails = $scope.favourite ? false : true;
    }
    //======================= Favourit Button =======================
    $scope.makeFavouritNReverse = function () {
      $scope.favourite = $scope.favourite ? false : true;
    }
    $scope.addToCartReverse = function () {
      $scope.add = $scope.add ? false : true;
    }

  }
]);																