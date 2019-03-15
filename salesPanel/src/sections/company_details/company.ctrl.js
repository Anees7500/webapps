salesApp.controller('CompanyController', ['$scope', '$http',
  function ($scope, $http, ) {

    //=========================== bool Logic start========================================
    $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.empFeedbackBool = false;
      $scope[value] = true;
    }
    $scope.boolFunction("empFeedbackBool");

    /** Employee Feedback Start */
    //==============================================================
    // var getFeedbackUrl = getCorporateReviewsUrl + $routeParams.compId;
    // $http.get(getFeedbackUrl).then(function (response) {
    //   $scope.feedback = response.data.data.reviews;
    // });
    //=================Active work ==========================================================

    // $scope.boolFunction("companyBool");
    //=================Active work end========================================================


    //=================Table search search and filter=========================================
    
    $scope.people = [{
        name: 'Aman',
        contact: '7500',
        date : '2008/11/13'
      },
      {
        name:'Anees',
        contact: '750064',
        date : '2008/11/14'
      },
      {
        name:'Aniket',
        contact: '75006445',
        date : '2008/11/15'
      }
    ]
    //=================Table search and filter end===============================================
  }

]);