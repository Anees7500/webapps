ceApp.controller('HomeController', ['$scope', '$rootScope', '$http', '$log', 'homeService',
  'Notification', 'getWeeklyMenuUrl', '$cookies',
  function ($scope, $rootScope, $http, $log, homeService, Notification, getWeeklyMenuUrl, $cookies) {
    var self = $scope;
    self.type = "Lunch";
    self.employeeComingList = [];

    $scope.enableBooleans = function (value) {
      $scope.homeBool = false;
      $scope.weekMenuBool = false;
      $scope[value] = true;
    }
    $scope.enableBooleans("homeBool");

    $scope.ShowHide = function (val) {
      val.visible = val.visible ? false : true;
    }
    $scope.updateStatus = function (val) {
      // val.visible = val.visible ? false : true;
      Notification.success('Successfully updated the status');
    }
    

    $http.get("http://fancymonk.com:9124/api/client/get-time-of-day-and-tmr-date")
      .then(function (response) {
        $log.info(' get time of the day  ' + JSON.stringify(response));
        if (response.data.timeOfDay != null) {
          $log.info(' hello if condition ');
          if (response.data.timeOfDay >= 0 && response.data.timeOfDay <= 22) {
            self.timeOfDay = true;
          } else {
            self.timeOfDay = false;
          }

          self.tomorrowDate = response.data.tomorrowDate;
          var empUrl = "http://fancymonk.com:9125/api/client/get-employee-default-data?employeeRowId=77&startDate=2018-12-17&endDate=2018-12-22";
          $http.get(empUrl)
            .then(function (response) {
              if (response.data.data != null) {
                $log.info('response  dchjb' + JSON.stringify(response));
                for (var m = 0; m < response.data.data.details.length; m++) {
                  var tmpObj = {};
                  var ob = response.data.data.details[m];
                  tmpObj.id = ob.employeeId;
                  tmpObj.display = ob.firstName + " " + ob.lastName;
                  tmpObj.type = ob.type;
                  tmpObj.working_date = ob.working_date;
                  tmpObj.status = "Yes";

                  if (Date.parse(new Date(tmpObj.working_date)) < Date.parse(new Date("2018-12-19"))) {
                    tmpObj.disabled = true;
                  } else {
                    tmpObj.disabled = false;
                  }
                  self.employeeComingList.push(tmpObj);
                }
              }
            });
        }
      });


    var weeklyMenuUrl = getWeeklyMenuUrl + $cookies.get("cId");


    // var menu = JSON.parse(data.data.menus.menu);
    $scope.weekMenuSorted = {};
    $scope.weekMenuSorted.BREAKFAST = {};
    $scope.weekMenuSorted.LUNCH = {};
    $scope.weekMenuSorted.DINNER = {};
    $scope.weekMenuSorted.SNACKS = {};
    //  weekMenuSorted.BREAKFAST = {};
    // weekMenuSorted.BREAKFAST = {};

    $http.get(weeklyMenuUrl).then(function (response) {
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
  }
]);