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






    //Ratingfeedback

      // $scope.maxRating = 10;
      //       $scope.ratedBy = 0;
      //       $scope.rateBy = function (star) {
      //           $scope.ratedBy = star;
      //       }

   
  }
]);																