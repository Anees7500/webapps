adminApp.controller('CompanyController', ['$scope', '$http', 'vendorassignService', 'postCategoryUrl', '$routeParams',
  function($scope, $http ,vendorassignService, postCategoryUrl, $routeParams
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
      $scope.data = {};
      $scope.category = function (data) {
        $scope.data.companyId = $routeParams.compId;
        console.log("Task Active Field", $scope.data.companyId);
        vendorassignService.activeCategory(data, postCategoryUrl);
      }

      // bool Logic end

     
   
   
    
  }
]);