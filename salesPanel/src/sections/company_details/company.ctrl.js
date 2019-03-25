salesApp.controller('CompanyController', ['$scope', '$http','getCorporateReviewsUrl','$routeParams',
  function ($scope, $http,getCorporateReviewsUrl,$routeParams, ) {


    $scope.form ={};
    $scope.feedback =[];
    $scope.pageSize =5;
    $scope.currentPage = 1;
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

      $scope.itemsPerPage = 7;
        $scope.cancelOrderHistroyPage = [];
        $scope.search = function () {
            $scope.currentPage = 0;
            $scope.groupToPages();
        };
        $scope.groupToPages = function () {
            $scope.cancelOrderHistroyPage = [];
            for (var i = 0; i < $scope.feedback.length; i++) {
                if (i % $scope.itemsPerPage === 0) {
                    $scope.cancelOrderHistroyPage[Math.floor(i / $scope.itemsPerPage)] = [$scope.feedback[i]];
                } else {
                    $scope.cancelOrderHistroyPage[Math.floor(i / $scope.itemsPerPage)].push($scope.feedback[i]);
                }
            }
        };
        $scope.ranges = function (start, end) {
            var ret = [];
            if (!end) {
                end = start;
                start = 0;
            }
            for (var i = start; i < end; i++) {
                ret.push(i);
            }
            return ret;
        };
        $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };
        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.cancelOrderHistroyPage.length - 1) {
                $scope.currentPage++;
            }
        };
        $scope.setPages = function () {
            $scope.currentPage = this.n;
        };
        $scope.search();
      
    });
    //=================Active work ==========================================================

    // $scope.boolFunction("companyBool");
    //=================Active work end========================================================
 
    //=================Table search search and filter=========================================
    
    
    //=================Table search and filter end=============================================
  }

]);