clientApp.controller('ClientDashboardController', ['$scope','$http', '$rootScope', '$cookies', '$location',
 'clientDashboardService', '$interval',
    function ($scope,$http, $rootScope, $cookies, $location, clientDashboardService, $interval) {
        // console.log("com details ", $rootScope.companyDetails);

            $scope.logout = function(){
              //Just clear values from scope
              $scope.username = '';
              $scope.password = '';
              $location.path('/');
          }
        $scope.enableBooleans = function(value){
            $scope.categoryBool = false;
            $scope.requirementBool = false;
            $scope.feedbackBool = false;
            $scope.manageEmployee = false;
            $scope[value] = true;
        }
        $scope.enableBooleans("categoryBool");

        if($rootScope.companyDetails != null)
        {
            $scope.companyDetail = $rootScope.companyDetails;
            makeRequirementMenu($scope.companyDetail);
        }
        else
        {
            var url = 'http://fancymonk.com:9124/api/common/corporate-company?companyId='+$cookies.get("clientPanelCompanyId");
           $http.get(url).then(function(response)
            {
                // console.log("dashboard url response ", response);
                $scope.companyDetail = response.data.data.company;

                makeRequirementMenu($scope.companyDetail);
            });
        }
        console.log("com id by cookies ", $cookies.get("clientPanelCompanyId"));


        var feedbackUrl = 'http://fancymonk.com:9124/api/admin/corporate-reviews?companyId='+$cookies.get("clientPanelCompanyId");
        $http.get(feedbackUrl).then(function(response)
            {
                console.log("company feedback response ", response);
                $scope.feedback = response.data.data.reviews;
                    $scope.Item = [];
                   $scope.itemsPerPage = 10;
                    $scope.currentPage = 0;

                    $scope.range = function() {
                      var rangeSize = 5;
                      var ret = [];
                      var start;

                      start = $scope.currentPage;
                      if ( start > $scope.pageCount()-rangeSize ) {
                        start = $scope.pageCount()-rangeSize;
                      }

                      for (var i=start; i<start+rangeSize; i++) {
                        ret.push(i);
                      }
                      return ret;
                    };

               $scope.prevPage = function() {
                if ($scope.currentPage > 0) {
                  $scope.currentPage--;
                }
              };

            $scope.prevPageDisabled = function() {
              return $scope.currentPage === 0 ? "disabled" : "";
            };

            $scope.nextPage = function() {
              if ($scope.currentPage < $scope.pageCount() - 1) {
                $scope.currentPage++;
              }
            };

            $scope.nextPageDisabled = function() {
              return $scope.currentPage === $scope.pageCount() - 1 ? "disabled" : "";
            };

            $scope.pageCount = function() {
              return Math.ceil($scope.total/$scope.itemsPerPage);
            };

            $scope.setPage = function(n) {
              if (n > 0 && n < $scope.pageCount()) {
                $scope.currentPage = n;
              }
            };

            $scope.$watch("currentPage", function(newValue, oldValue) {
              $scope.pagedItems = getItemToshow($scope.feedback , newValue*$scope.itemsPerPage,
               $scope.itemsPerPage);
              $scope.total = $scope.feedback.length;
            });
      });

      function getItemToshow(arr, offset, limit) {
      return arr.slice(offset, offset+limit);
    };

        $scope.companyRequirementsSorted = [];
                var mondayObj = {};
                mondayObj.dayName = "MONDAY";

                var tuesdayObj = {};
                tuesdayObj.dayName = "TUESDAY";

                var wednesdayObj = {};
                wednesdayObj.dayName = "WEDNESDAY";

                var thursdayObj = {};
                thursdayObj.dayName = "THURSDAY";

                var fridayObj = {};
                fridayObj.dayName = "FRIDAY";

                var saturdayObj = {};
                saturdayObj.dayName = "SATURDAY";

                var sundayObj = {};
                sundayObj.dayName = "SUNDAY";

                $scope.companyRequirementsSorted.push(mondayObj);
                $scope.companyRequirementsSorted.push(tuesdayObj);
                $scope.companyRequirementsSorted.push(wednesdayObj);
                $scope.companyRequirementsSorted.push(thursdayObj);
                $scope.companyRequirementsSorted.push(fridayObj);
                $scope.companyRequirementsSorted.push(saturdayObj);
                $scope.companyRequirementsSorted.push(sundayObj);

             var requirementUrl = 'http://fancymonk.com:9124/api/common/company-requirement?companyId='+$cookies.get("clientPanelCompanyId");
             $http.get(requirementUrl).then(function(response)
              {
                console.log("requirement response ", JSON.stringify(response));
                // $scope.companyRequirements = response.data.data.requirements;
                for(var i = 0; i <$scope.companyRequirementsSorted.length; i++){
                  // console.log("in first loop");
                  for(var j = 0; j <response.data.data.requirements.length; j++){
                    // console.log("in second loop");
                      if($scope.companyRequirementsSorted[i].dayName === response.data.data.requirements[j].dayName){
                           $scope.companyRequirementsSorted[i] = response.data.data.requirements[j];
                           console.log("requirement response ", response);
                          // $rootScope.activeSaveBool="false";
                          // $rootScope.activeUpdateBool="true";
                      }
                  }
                }
                console.log("companyRequirements ", JSON.stringify($scope.companyRequirementsSorted));

                makeRequirementMenuDetails($scope.companyDetail, $scope.companyRequirementsSorted);
              });


        $scope.Days = [
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY",
            "FRIDAY",
            "SATURDAY",
            "SUNDAY"
        ];


          $scope.demo = {
            showTooltip: false,
            tipDirection: 'bottom'
          };

          $scope.demo.delayTooltip = undefined;
          $scope.$watch('demo.delayTooltip', function(val) {
            $scope.demo.delayTooltip = parseInt(val, 10) || 0;
          });


    function makeRequirementMenu(compDetail)
    {
       $scope.Menu = [];
       if(compDetail.breakfast)
       {
         $scope.Menu.push("Breakfast");
       }
       if(compDetail.lunch)
       {
         $scope.Menu.push("Lunch");
       }
       if(compDetail.dinner)
       {
         $scope.Menu.push("Dinner");
       }
       if(compDetail.snacks)
       {
         $scope.Menu.push("Snacks");
       }

       // if(compDetail.cashNCarry)
       // {
       //   $scope.Menu.push("CashNCarry");
       // }
        if(compDetail.midNightSnacks)
       {
         $scope.Menu.push("Mid Night Snacks");
       }

       if(compDetail.earlyMorningSnacks)
       {
         $scope.Menu.push("Early Morning Snacks");
       }

       if($scope.Menu.length <= 3)
       {
        $scope.Data = [0];
       }
       else if ($scope.Menu.length <= 6)
       {
         $scope.Data = [0, 1];
       }
       else
       {
        $scope.Data = [0, 1, 2];
       }
    };

    function makeRequirementMenuDetails(compDetail, reqArray)
    {

       $scope.companyRequirements = {};
       if(compDetail.breakfast)
       {
         $scope.companyRequirements.Breakfast = makeBreakFastArray(reqArray);
       }
       if(compDetail.lunch)
       {
         $scope.companyRequirements.Lunch = makeLunchArray(reqArray);
       }
        if(compDetail.dinner)
       {
         $scope.companyRequirements.Dinner = makeDinnerArray(reqArray);
       }
       if(compDetail.snacks)
       {
            $scope.companyRequirements.Snacks = makeSnacksArray(reqArray);
       }

      if(compDetail.midNightSnacks)
       {
         // $scope.Menu.push("Mid Night Snacks");
         $scope.companyRequirements['Mid Night Snacks'] = makeMidNightSnacksArray(reqArray);
       }
        if(compDetail.earlyMorningSnacks)
       {
         // $scope.Menu.push("Mid Night Snacks");
         $scope.companyRequirements['Early Morning Snacks'] = makeEarlyMorningSnacksArray(reqArray);
       }



       console.log("re sssss ", JSON.stringify($scope.companyRequirements));
    };

    function makeBreakFastArray(reqArray){
      var arr = [];

      for(var i = 0; i < reqArray.length; i++)
      {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.breakfast;
        tempObj.price = e.breakfastPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };

    function makeLunchArray(reqArray){
      var arr = [];

      for(var i = 0; i < reqArray.length; i++)
      {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.lunch;
        tempObj.price = e.lunchPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };

    function makeSnacksArray(reqArray){
      var arr = [];

      for(var i = 0; i < reqArray.length; i++)
      {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.snacks;
        tempObj.price = e.snacksPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };
    function makeDinnerArray(reqArray){
      var arr = [];

      for(var i = 0; i < reqArray.length; i++)
      {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.dinner;
        tempObj.price = e.dinnerPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };
        function makeMidNightSnacksArray(reqArray){
      var arr = [];

      for(var i = 0; i < reqArray.length; i++)
      {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.midNightSnacks;
        tempObj.price = e.midNightSnacksPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };
    function makeEarlyMorningSnacksArray(reqArray){
      var arr = [];

      for(var i = 0; i < reqArray.length; i++)
      {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.earlyMorningSnacks;
        tempObj.price = e.earlyMorningSnacksPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };

     $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

   }

]);
