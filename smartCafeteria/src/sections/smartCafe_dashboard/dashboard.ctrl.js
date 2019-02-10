empApp.controller('DashboardController', ['$scope',
  function($scope) {

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
      { venderName: "Meghana Foods", area: "Indiranagar "},
      { venderName: "Absolute Barbecues", area: "Koramangala "},
      { venderName: "The Bier Library", area: "Marathahalli "   },
      { venderName: "Meghana Foods", area: "Indiranagar " },
      { venderName: "Absolute Barbecues", area: "Koramangala " },
      { venderName: "The Bier Library", area: "Marathahalli " },
      { venderName: "Meghana Foods", area: "Indiranagar " },
      { venderName: "Absolute Barbecues", area: "Koramangala "},
      { venderName: "The Bier Library", area: "Marathahalli " },
      { venderName: "Big Pitcher", area: "Old Airport Road " }
      // { vanderName: "Meghana Foods", area: "JP Nagar Bangalore" }
    ];

    $scope.menuList = [
      { menuType: "Breakfast"},
      { menuType: "Lunch"},
      { menuType: "Snacks"},
      { menuType: "Dinner"},
      { menuType: "Dosa"},
      { menuType: "Combos"},
      { menuType: "Chaat"}
    ];
  }
]);																