adminApp.controller('CompanyController', ['$scope', '$http', 'vendorassignService', 'postCategoryUrl', '$routeParams',
  'corporateReviewsUrl',
  function($scope, $http ,vendorassignService, postCategoryUrl, $routeParams, corporateReviewsUrl
   ) {

  	 // bool Logic start
     $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.ConfigurationBool = false;
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

    $scope.boolFunction("ConfigurationBool");
    $scope.data = {};
    $scope.category = function (data) {
      $scope.data.companyId = $routeParams.compId;
      console.log("Task Active Field", $scope.data.companyId);
      vendorassignService.activeCategory(data, postCategoryUrl);
    }

    var getFeedbackUrl = corporateReviewsUrl + $routeParams.compId;
    $http.get(getFeedbackUrl).then(function (response) {
      $scope.feedback = response.data.data.reviews;
    });
    $scope.demo = {
      showTooltip: false,
      tipDirection: 'bottom'
    };

    $scope.demo.delayTooltip = undefined;
    $scope.$watch('demo.delayTooltip', function(val) {
      $scope.demo.delayTooltip = parseInt(val, 10) || 0;
    });

    

      // bool Logic end

      
      
      
      
    }
    ]);