adminApp.controller('CompanyController', ['$scope', '$http',
  function($scope, $http
   ) {

  	 // bool Logic start
      $scope.boolFunction = function (value) {
        console.log("boolFunction", value);
        $scope.CategaryBool = false;
        $scope.RequirementBool=false;
        $scope.ItemCheckBool=false;
        $scope.AssignedBool=false;
        $scope.SetPasswordBool=false;
        $scope.EmpFeedbackBool=false;
        $scope.MonthlyDetailsBool=false;
        $scope.VendorMonthlyDetailsBool=false;
        $scope.DispatchDetailsBool=false;

       
        $scope[value] = true;
      }
      $scope.boolFunction("CategaryBool");
      // bool Logic end

     
   
   
    
  }
]);