salesApp.controller('CompanyController', ['$scope', '$http','getCorporateReviewsUrl','$routeParams',
  function ($scope, $http,getCorporateReviewsUrl,$routeParams, ) {


    
    //=========================== bool Logic start========================================
    $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.empFeedbackBool = false;
      $scope[value] = true;
    }
    $scope.boolFunction("empFeedbackBool");

    /** Employee Feedback Start */
    //==============================================================
    var getFeedbackUrl = getCorporateReviewsUrl + $routeParams.compId;
    $http.get(getFeedbackUrl).then(function (response) {
      $scope.feedback = response.data.data.reviews;
    });
    //=================Active work ==========================================================

    // $scope.boolFunction("companyBool");
    //=================Active work end========================================================
 
    //=================Table search search and filter=========================================
    
    
    //=================Table search and filter end=============================================
  }

]);