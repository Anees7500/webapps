empApp.controller('DashboardController', ['$scope',
  function ($scope) {

    // ------------boolfunction ---------------
    $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.homeBool = false;
      $scope.myOdersBool = false;
      $scope.favouritesBool = false;
      $scope.notificationBool = false;
      $scope.walletBool = false;
      $scope.cardBool = false;
      $scope.feedbackBool = false;
      $scope.settingsBool = false;
      $scope.termsAndPolicyBool = false;
      $scope[value] = true;
    }
    $scope.boolFunction("homeBool");

    $scope.cardInfo = [{ productName : "Brief description", price : "100" },
    { productName : "Brief description", price : "100" },
    { productName : "Brief description", price : "100" },
    { productName : "Brief description", price : "100" },
    { productName : "Brief description", price : "100" }
  ];

    $scope.menuList = [
      { menuType: "Breakfast" },
      { menuType: "Lunch" },
      { menuType: "Snacks" },
      { menuType: "Dinner" },
      { menuType: "Pizza" },
      { menuType: "Burger" },
      { menuType: "Icecream" },
      { menuType: "Cold-drinks" },
      { menuType: "Coffee" },
      { menuType: "Tea" },
      { menuType: "Chaat" },
      { menuType: "Samoosa" },
      { menuType: "Idli" },
      { menuType: "Dosha" },
      { menuType: "Sambhar" }
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

   
    $scope.employeeDetails = [{ 
      name : "Pallavi Gupta", employeeId : "207997" , mobile : "8871128039", emailId : "pallavig033@gmail.com"
    }];
   $scope.makeEmployeeDetailsEditable = function( employeeDetails)
   {
    $scope.editEmployeeDetails = $scope.favourite ? false : true;
   }

    $scope.makeFavouritNReverse = function()
    {
      $scope.favourite = $scope.favourite ? false : true;
    }

  }
]);																