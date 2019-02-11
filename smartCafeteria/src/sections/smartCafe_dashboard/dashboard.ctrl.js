empApp.controller('DashboardController', ['$scope',
  function ($scope) {

    // ------------boolfunction ---------------
    $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.homeBool = false;
      $scope.myOdersBool = false;
      $scope.notificationBool = false;
      $scope.walletBool = false;
      $scope.feedbackBool = false;
      $scope.settingsBool = false;
      $scope.termsAndPolicyBool = false;
      $scope[value] = true;
    }
    $scope.boolFunction("homeBool");

    $scope.venderList = [
      { venderName: "Meghana Foods", area: "Indiranagar " },
      { venderName: "Absolute Barbecues", area: "Koramangala " },
      { venderName: "The Bier Library", area: "Marathahalli " },
      { venderName: "Meghana Foods", area: "Indiranagar " },
      { venderName: "Absolute Barbecues", area: "Koramangala " },
      { venderName: "The Bier Library", area: "Marathahalli " },
      { venderName: "Meghana Foods", area: "Indiranagar " },
      { venderName: "Absolute Barbecues", area: "Koramangala " },
      { venderName: "The Bier Library", area: "Marathahalli " },
      { venderName: "Big Pitcher", area: "Old Airport Road " }
      // { vanderName: "Meghana Foods", area: "JP Nagar Bangalore" }
    ];

    $scope.menuList = [
      { menuType: "Breakfast" },
      { menuType: "Lunch" },
      { menuType: "Snacks" },
      { menuType: "Dinner" },
      { menuType: "Dosa" },
      { menuType: "Combos" },
      { menuType: "Chaat" }
    ];



    //Ratingfeedback
    var maxRating = 5;
    $scope.stars = [].constructor(maxRating);
    $scope.ratingParameters = [
      {
        name: "Presentation",
        rating : 3
      },
      {
        name: "Quality",
        rating : 3
      },
      {
        name: "Taste",
        rating : 4    
        
      },
      {
        name: "Quantity",
        rating : 4    
      }
    ];
    
    $scope.rateBy = function (j, star) {
      console.log("hhhsh cdhbdsjhs : ", star);
      console.log("hhhshs : ", JSON.stringify($scope.stars));
      j.rating = star;
    
    }

  }
]);																