empApp.controller('FavouritController', ['$scope', 
  function ($scope) {


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
      $scope.checkoutList = [{ checkItem: "Poori sabji", checkVendor: "Fancy Vendor", checkPrice: "20" },
      { checkItem: "Namak Para", checkVendor: "Classic Vendor", checkPrice: "30" },
      { checkItem: "Masala Dhosa", checkVendor: "Pure-South Vendor", checkPrice: "50" }];
  
  
      $scope.removeFavouritItem = function (item, ind) {
        console.log("hello inside delete function");
        $scope.favouritItemList.splice(ind, 1);
  
      };
  
    
      //======================= Favourit Button =======================
  
      $scope.makeFavouritNReverse = function () {
        $scope.favourite = $scope.add ? false : true;
      }










    }
]);