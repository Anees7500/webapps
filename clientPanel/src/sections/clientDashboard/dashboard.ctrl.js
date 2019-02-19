clientApp.controller('ClientDashboardController', ['$scope', '$http', '$rootScope', '$cookies', '$location',
  'clientDashboardService', '$interval', 'Notification',
  function($scope, $http, $rootScope, $cookies, $location, clientDashboardService, $interval, Notification) {
    var self = this;

    self.expandAll = function(expanded) {
      // $scope is required here, hence the injection above, even though we're using "controller as" syntax
      $scope.$broadcast('onExpandAll', {
        expanded: expanded
      });
    };

    $scope.ShowHideWeekMenu = function(val) {
      val.visible = val.visible ? false : true;
    }

    $scope.selectables = [{
        label: 'BREACKFAST',
        value: 1
      },
      {
        label: 'LUNCH',
        value: 2
      },
      {
        label: 'SNACKS',
        value: 3
      },
      {
        label: 'DINNER',
        value: 4
      },
      {
        label: 'MID NIGHT SNACKS',
        value: 5
      },
      {
        label: 'EARLY MORNING SNACKS',
        value: 6
      },
      {
        label: 'CASH & CARRY',
        value: 7
      }
    ];
    $scope.selectedItemvalue = "2";
    $scope.IsVisible = false;
    $scope.ShowHide = function(lst, dtList) {
      var tempIsVisible = lst.isVisible;
      for (var i = 0; i < dtList.length; i++) {
        dtList[i].isVisible = false;
      }
      lst.isVisible = tempIsVisible ? false : true;
    }
    var getEmployeeMonthlyCountUrl = "http://fancymonk.com:9125/api/client/get-employee-coming-data-monthly?companyId=" + $cookies.get("clientPanelCompanyId");
    $http.get(getEmployeeMonthlyCountUrl).then(function(response) {
      $scope.employeeMonthlyDetails = response.data.data.details;

      console.log("monthly dddtlks : ", $scope.employeeMonthlyDetails);
    });

    $scope.curPage = 1,
      $scope.itemsPerPage = 10,
      $scope.maxSize = 5;
    var getEmployeesUrl = "http://fancymonk.com:9125/api/common/get-all-employees?companyId=" + $cookies.get("clientPanelCompanyId");
    $http.get(getEmployeesUrl).then(function(response) {
      $scope.employeeList = response.data.data.employees;

      this.items = $scope.employeeList;
      $scope.numOfPages = function() {
        return Math.ceil($scope.employeeList.length / $scope.itemsPerPage);
      };

      //   $scope.$watch('curPage + numPerPage', function() {
      //   var begin = (($scope.curPage - 1) * $scope.itemsPerPage);
      //   end = begin + $scope.itemsPerPage;
      //
      //   $scope.employeeListFiltered = $scope.employeeList.slice(begin, end);
      //
      // });


    });
 
    $scope.employertypeeList = [];
    $scope.addEmpDtls = function(item) {
      var newEmp = {};
      newEmp.firstName = item.firstName;
      newEmp.lastName = item.lastName;
      newEmp.mobile = item.mobile;
      newEmp.employeeId = item.employeeId;
      newEmp.type = item.type;

      if ($scope.employeeList == null) {
        $scope.employeeList = [];
      }
      if (!$scope.employeeList.some(function(element) {
          return element.employeeId === item.employeeId;
        })) {
        $scope.employeeList.push(newEmp);
        newEmp.companyId = $cookies.get("clientPanelCompanyId");

        clientDashboardService.addEmployeeToDB(newEmp, "http://fancymonk.com:9125/api/client/add-employee");

        console.log("comment 3 ", $scope.newEmp);
      } else {
        Notification.error("User is already added");
        console.log("user already added");
      }

    };
    // console.log("com details ", $rootScope.companyDetails);
    $scope.deleteRow = function(item, ind) {
      console.log("hello inside delete function");
      $scope.employeeList.splice(ind, 1);
      var emp = {};
      emp.employeeId = item.employeeId;
      clientDashboardService.deleteEmployeeToDB(emp, "http://fancymonk.com:9125/api/client/delete-employee");
    };

    $scope.logout = function() {
      //Just clear values from scope
      $scope.username = '';
      $scope.password = '';
      $location.path('/');
    }
    $scope.enableBooleans = function(value) {
      $scope.categoryBool = false;
      $scope.requirementBool = false;
      $scope.feedbackBool = false;
      $scope.manageEmployeeBool = false;
      $scope.employeeCountBool = false;
      $scope.weeklyMenuBool = false;
      $scope[value] = true;
    }
    $scope.enableBooleans("categoryBool");


    if ($rootScope.companyDetails != null) {
      $scope.companyDetail = $rootScope.companyDetails;
      // console.log("dateInCompany fancymonk", $scope.companyDetail);
      makeRequirementMenu($scope.companyDetail);
    } else {
      var url = 'http://fancymonk.com:9125/api/common/corporate-company?companyId=' + $cookies.get("clientPanelCompanyId");
      $http.get(url).then(function(response) {
        // console.log("dashboard url response ", response);
        $scope.companyDetail = response.data.data.company;
        // console.log("dateInCompany fancymonk", $scope.companyDetail);

        makeRequirementMenu($scope.companyDetail);
      });
    }
    // console.log("com id by cookies ", $cookies.get("clientPanelCompanyId"));

    var weeklyMenuUrl = 'http://fancymonk.com:9125/api/vendor/company-menu?companyId=' + $cookies.get("clientPanelCompanyId");


    // var menu = JSON.parse(data.data.menus.menu);
    $scope.weekMenuSorted = {};
    $scope.weekMenuSorted.BREAKFAST = {};
    $scope.weekMenuSorted.LUNCH = {};
    $scope.weekMenuSorted.DINNER = {};
    $scope.weekMenuSorted.SNACKS = {};
    //  weekMenuSorted.BREAKFAST = {};
    // weekMenuSorted.BREAKFAST = {};

    $http.get(weeklyMenuUrl).then(function(response) {
      // console.log("company weeklymenu response ", response);
      $scope.weeklymenuSorted = [];
      var weeklymenuSorted = response.data.data.menus;
      for (var i = 0; i < weeklymenuSorted.length; i++) {
        var tem = weeklymenuSorted[i];
        tem.menu = JSON.parse(tem.menu);

        if (tem.menuType === "BREAKFAST") {
          makeDayWiseJson(tem, "BREAKFAST", $scope.weekMenuSorted)
        }
        if (tem.menuType === "LUNCH") {
          makeDayWiseJson(tem, "LUNCH", $scope.weekMenuSorted)
        }
        if (tem.menuType === "DINNER") {
          makeDayWiseJson(tem, "DINNER", $scope.weekMenuSorted)
        }
        if (tem.menuType === "SNACKS") {
          makeDayWiseJson(tem, "SNACKS", $scope.weekMenuSorted)
        }
      }
      console.log(" soretd new json ", JSON.stringify($scope.weekMenuSorted));

    });



    function makeDayWiseJson(tem, menutype, obj) {
      if (obj[menutype].Monday != null) {

      } else {
        obj[menutype].Monday = {};
      }
      if (obj[menutype].Tuesday != null) {

      } else {
        obj[menutype].Tuesday = {};
      }
      if (obj[menutype].Wednesday != null) {

      } else {
        obj[menutype].Wednesday = {};
      }
      if (obj[menutype].Thursday != null) {

      } else {
        obj[menutype].Thursday = {};
      }
      if (obj[menutype].Friday != null) {

      } else {
        obj[menutype].Friday = {};
      }
      if (obj[menutype].Saturday != null) {

      } else {
        obj[menutype].Saturday = {};
      }
      if (obj[menutype].Sunday != null) {

      } else {
        obj[menutype].Sunday = {};
      }

      if (tem.dayName == "Monday") {
        obj[menutype].Monday = tem;
      }
      if (tem.dayName == "Tuesday") {
        obj[menutype].Tuesday = tem;
      }
      if (tem.dayName == "Wednesday") {
        obj[menutype].Wednesday = tem;
      }
      if (tem.dayName == "Thursday") {
        obj[menutype].Thursday = tem;
      }
      if (tem.dayName == "Friday") {
        obj[menutype].Friday = tem;
      }
      if (tem.dayName == "Saturday") {
        obj[menutype].Saturday = tem;
      }
      if (tem.dayName == "Sunday") {
        obj[menutype].Sunday = tem;
      }

    };


    var feedbackUrl = 'http://fancymonk.com:9125/api/admin/corporate-reviews?companyId=' + $cookies.get("clientPanelCompanyId");
    $http.get(feedbackUrl).then(function(response) {
      // console.log("company feedback response ", response);
      $scope.feedback = response.data.data.reviews;
      $scope.feedback = $scope.feedback.reverse();

      // $scope.curPage = 1;
      // $scope.itemsPerPage = 10;
      // $scope.maxSize = 5;
      $scope.numOfPages = function() {
        return Math.ceil($scope.feedback.length / $scope.itemsPerPage);

      };

      $scope.$watch('curPage + numPerPage', function() {
        console.log("hrknvjdsb wating cdvh");
        var begin = (($scope.curPage - 1) * $scope.itemsPerPage);
        end = begin + $scope.itemsPerPage;

        $scope.feedbackFiltered = $scope.feedback.slice(begin, end);
      });

    });

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

    var requirementUrl = 'http://fancymonk.com:9125/api/common/company-requirement?companyId=' + $cookies.get("clientPanelCompanyId");
    $http.get(requirementUrl).then(function(response) {
      // console.log("requirement response ", JSON.stringify(response));
      // $scope.companyRequirements = response.data.data.requirements;
      for (var i = 0; i < $scope.companyRequirementsSorted.length; i++) {
        // console.log("in first loop");
        for (var j = 0; j < response.data.data.requirements.length; j++) {
          // console.log("in second loop");
          if ($scope.companyRequirementsSorted[i].dayName === response.data.data.requirements[j].dayName) {
            $scope.companyRequirementsSorted[i] = response.data.data.requirements[j];
            // console.log("requirement response ", response);

          }
        }
      }
      // console.log("companyRequirements ", JSON.stringify($scope.companyRequirementsSorted));

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

    function makeRequirementMenu(compDetail) {
      $scope.Menu = [];
      if (compDetail.breakfast) {
        $scope.Menu.push("Breakfast");
      }
      if (compDetail.lunch) {
        $scope.Menu.push("Lunch");
      }
      if (compDetail.dinner) {
        $scope.Menu.push("Dinner");
      }
      if (compDetail.snacks) {
        $scope.Menu.push("Snacks");
      }

      // if(compDetail.cashNCarry)
      // {
      //   $scope.Menu.push("CashNCarry");
      // }
      if (compDetail.midNightSnacks) {
        $scope.Menu.push("Mid Night Snacks");
      }

      if (compDetail.earlyMorningSnacks) {
        $scope.Menu.push("Early Morning Snacks");
      }

      if ($scope.Menu.length <= 3) {
        $scope.Data = [0];
      } else if ($scope.Menu.length <= 6) {
        $scope.Data = [0, 1];
      } else {
        $scope.Data = [0, 1, 2];
      }
    };

    function makeRequirementMenuDetails(compDetail, reqArray) {

      $scope.companyRequirements = {};
      if (compDetail.breakfast) {
        $scope.companyRequirements.Breakfast = makeBreakFastArray(reqArray);
      }
      if (compDetail.lunch) {
        $scope.companyRequirements.Lunch = makeLunchArray(reqArray);
      }
      if (compDetail.dinner) {
        $scope.companyRequirements.Dinner = makeDinnerArray(reqArray);
      }
      if (compDetail.snacks) {
        $scope.companyRequirements.Snacks = makeSnacksArray(reqArray);
      }

      if (compDetail.midNightSnacks) {
        // $scope.Menu.push("Mid Night Snacks");
        $scope.companyRequirements['Mid Night Snacks'] = makeMidNightSnacksArray(reqArray);
      }
      if (compDetail.earlyMorningSnacks) {
        // $scope.Menu.push("Mid Night Snacks");
        $scope.companyRequirements['Early Morning Snacks'] = makeEarlyMorningSnacksArray(reqArray);
      }
      // console.log("re sssss ", JSON.stringify($scope.companyRequirements));
    };

    function makeBreakFastArray(reqArray) {
      var arr = [];

      for (var i = 0; i < reqArray.length; i++) {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.breakfast;
        tempObj.price = e.breakfastPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };

    function makeLunchArray(reqArray) {
      var arr = [];

      for (var i = 0; i < reqArray.length; i++) {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.lunch;
        tempObj.price = e.lunchPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };

    function makeSnacksArray(reqArray) {
      var arr = [];

      for (var i = 0; i < reqArray.length; i++) {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.snacks;
        tempObj.price = e.snacksPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };

    function makeDinnerArray(reqArray) {
      var arr = [];

      for (var i = 0; i < reqArray.length; i++) {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.dinner;
        tempObj.price = e.dinnerPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };

    function makeMidNightSnacksArray(reqArray) {
      var arr = [];

      for (var i = 0; i < reqArray.length; i++) {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.midNightSnacks;
        tempObj.price = e.midNightSnacksPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };

    function makeEarlyMorningSnacksArray(reqArray) {
      var arr = [];

      for (var i = 0; i < reqArray.length; i++) {
        var tempObj = {};
        var e = reqArray[i];
        tempObj.count = e.earlyMorningSnacks;
        tempObj.price = e.earlyMorningSnacksPrice;
        tempObj.day = e.dayName;

        arr.push(tempObj);
      }
      return arr;
    };
  }
]);
