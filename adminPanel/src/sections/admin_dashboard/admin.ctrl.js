vmApp.controller('AdminController', ['$cookies', 'getAllVendorListUrl', 'getAssignedVendor', 'getUnassignedVendor',
  '$location', 'Notification', '$scope', '$route', '$rootScope', '$http', 'companydetailsService', 'companySignupUrl',
  'getUnassignedCompanyUrl', 'getAllCompanyUrl', 'getTodayStatusUrl', 'getAssignedCompanyUrl',
  function ($cookies, getAllVendorListUrl, getAssignedVendor, getUnassignedVendor,
    $location, Notification, $scope, $route, $rootScope, $http, companydetailsService, companySignupUrl,
    getUnassignedCompanyUrl, getAllCompanyUrl, getTodayStatusUrl, getAssignedCompanyUrl) {
    $scope.signOutAdmin = function () {
      $cookies.remove('admin_username');
      // $cookies.remove('token');
      // $cookies.remove('username');
      // $cookies.remove('email');
      // $rootScope.barBool = false;
      // $rootScope.vId = false;
      // // $rootScope.notifBool = false;
      $rootScope.adminSignOutBool = false;
      $rootScope.footerBool = false;
      $location.path('/adminlogin');
    }
    if ($cookies.get('admin_username') == null) {
      Notification.warning("Login required!!!");
      $rootScope.adminSignOutBool = false;
      $rootScope.footerBool = false;
      $location.path('/adminlogin');
      $route.reload();
    } else {

      // tongal baar script start
      "use strict";
      var tid = setInterval(function () {
        if ("complete" === document.readyState) {
          clearInterval(tid);
          var a = document.querySelector.bind(document),
            b = document.querySelector(".vertical_nav"),
            c = document.querySelector(".wrapper"),
            d = document.getElementById("js-menu"),
            e = d.querySelectorAll(".menu--item__has_sub_menu");
          a(".toggle_menu").onclick = function () {
            b.classList.toggle("vertical_nav__opened"), c.classList.toggle("toggle-content")
          }, a(".collapse_menu").onclick = function () {
            b.classList.toggle("vertical_nav__minify"), c.classList.toggle("wrapper__minify");
            for (var a = 0; a < e.length; a++) e[a].classList.remove("menu--subitens__opened")
          };
          for (var f = 0; f < e.length; f++) e[f].classList.contains("menu--item__has_sub_menu") && e[f].querySelector(".menu--link").addEventListener("click", function (a) {
            for (var b = 0; b < e.length; b++) a.target.offsetParent != e[b] && e[b].classList.remove("menu--subitens__opened");
            a.target.offsetParent.classList.toggle("menu--subitens__opened")
          }, !1)
        }
      }, 100);
      // tongal baar script end

      // today date
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd
      }

      if (mm < 10) {
        mm = '0' + mm
      }

      today = yyyy + '-' + mm + '-' + dd;
      // console.log("today",today);
      $scope.today = today;

      // yesterday date
      var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
      var y_dd = yesterday.getDate();
      var y_mm = yesterday.getMonth() + 1;
      var y_yyyy = yesterday.getFullYear();
      if (y_dd < 10) {
        y_dd = '0' + y_dd
      }
      if (y_mm < 10) {
        y_mm = '0' + y_mm
      }
      var yesterday_date = y_yyyy + '-' + y_mm + '-' + y_dd;
      // console.log("yesterday_date",yesterday_date);
      $scope.yesterday_date = yesterday_date;

      // last 1 day
      var yesterday_1 = new Date(new Date().setDate(new Date().getDate() - 2));
      var y_dd_1 = yesterday_1.getDate();
      var y_mm_1 = yesterday_1.getMonth() + 1;
      var y_yyyy_1 = yesterday_1.getFullYear();
      if (y_dd_1 < 10) {
        y_dd_1 = '0' + y_dd_1
      }
      if (y_mm_1 < 10) {
        y_mm_1 = '0' + y_mm_1
      }
      var yesterday_1 = y_yyyy_1 + '-' + y_mm_1 + '-' + y_dd_1;
      // console.log("yesterday_1",yesterday_1);
      $scope.yesterday_1 = yesterday_1;

      // last 2 day
      var yesterday_2 = new Date(new Date().setDate(new Date().getDate() - 3));
      var y_dd_2 = yesterday_2.getDate();
      var y_mm_2 = yesterday_2.getMonth() + 1;
      var y_yyyy_2 = yesterday_2.getFullYear();
      if (y_dd_2 < 10) {
        y_dd_2 = '0' + y_dd_2
      }
      if (y_mm_2 < 10) {
        y_mm_2 = '0' + y_mm_2
      }
      var yesterday_2 = y_yyyy_2 + '-' + y_mm_2 + '-' + y_dd_2;
      // console.log("yesterday_2",yesterday_2);
      $scope.yesterday_2 = yesterday_2;

      // last 3 day
      var yesterday_3 = new Date(new Date().setDate(new Date().getDate() - 4));
      var y_dd_3 = yesterday_3.getDate();
      var y_mm_3 = yesterday_3.getMonth() + 1;
      var y_yyyy_3 = yesterday_3.getFullYear();
      if (y_dd_3 < 10) {
        y_dd_3 = '0' + y_dd_3
      }
      if (y_mm_3 < 10) {
        y_mm_3 = '0' + y_mm_3
      }
      var yesterday_3 = y_yyyy_3 + '-' + y_mm_3 + '-' + y_dd_3;
      // console.log("yesterday_3",yesterday_3);
      $scope.yesterday_3 = yesterday_3;

      // last 4 day
      var yesterday_4 = new Date(new Date().setDate(new Date().getDate() - 5));
      var y_dd_4 = yesterday_4.getDate();
      var y_mm_4 = yesterday_4.getMonth() + 1;
      var y_yyyy_4 = yesterday_4.getFullYear();
      if (y_dd_4 < 10) {
        y_dd_4 = '0' + y_dd_4
      }
      if (y_mm_4 < 10) {
        y_mm_4 = '0' + y_mm_4
      }
      var yesterday_4 = y_yyyy_4 + '-' + y_mm_4 + '-' + y_dd_4;
      // console.log("yesterday_4",yesterday_4);
      $scope.yesterday_4 = yesterday_4;

      // last 5 day
      var yesterday_5 = new Date(new Date().setDate(new Date().getDate() - 6));
      var y_dd_5 = yesterday_5.getDate();
      var y_mm_5 = yesterday_5.getMonth() + 1;
      var y_yyyy_5 = yesterday_5.getFullYear();
      if (y_dd_5 < 10) {
        y_dd_5 = '0' + y_dd_5
      }
      if (y_mm_5 < 10) {
        y_mm_5 = '0' + y_mm_5
      }
      var yesterday_5 = y_yyyy_5 + '-' + y_mm_5 + '-' + y_dd_5;
      // console.log("yesterday_5",yesterday_5);
      $scope.yesterday_5 = yesterday_5;

      //  end !!!!

      var getTodayStatus = getTodayStatusUrl + today;
      var getYesterdayStatus = getTodayStatusUrl + yesterday_date;
      var getYesterdayStatus_1 = getTodayStatusUrl + yesterday_1;
      var getYesterdayStatus_2 = getTodayStatusUrl + yesterday_2;
      var getYesterdayStatus_3 = getTodayStatusUrl + yesterday_3;
      var getYesterdayStatus_4 = getTodayStatusUrl + yesterday_4;
      var getYesterdayStatus_5 = getTodayStatusUrl + yesterday_5;

      $http.get(getTodayStatus).then(function (response) {
        if (response.data.data != null) {
          $scope.todayStatus = response.data.data.foodTracks;
        }
      });
      $http.get(getYesterdayStatus).then(function (response) {
        if (response.data.data != null) {
          $scope.yesterdayStatus = response.data.data.foodTracks;
        }
      });
      $http.get(getYesterdayStatus_1).then(function (response) {
        if (response.data.data != null) {
          $scope.yesterdayStatus_1 = response.data.data.foodTracks;
        }

      });
      $http.get(getYesterdayStatus_2).then(function (response) {
        if (response.data.data != null) {
          $scope.yesterdayStatus_2 = response.data.data.foodTracks;
        }
      });
      $http.get(getYesterdayStatus_3).then(function (response) {
        if (response.data.data != null) {
          $scope.yesterdayStatus_3 = response.data.data.foodTracks;
        }
      });
      $http.get(getYesterdayStatus_4).then(function (response) {
        if (response.data.data != null) {
          $scope.yesterdayStatus_4 = response.data.data.foodTracks;
        }
      });
      $http.get(getYesterdayStatus_5).then(function (response) {
        if (response.data.data != null) {
          $scope.yesterdayStatus_5 = response.data.data.foodTracks;
        }
      });

      // typwritter animation
      var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };

      TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function () {
          that.tick();
        }, delta);
      };

      window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
      };
      // animation end

      $rootScope.adminSignOutBool = true;
      $rootScope.footerBool = true;

      $http.get(getAllVendorListUrl).then(function (response) {
        $scope.AllVendorslist = response.data.data.vendors;
      });
      $http.get(getAssignedVendor).then(function (response) {
        $scope.assignedVendorslist = response.data.data.assignedVendors;
      });
      $http.get(getUnassignedVendor).then(function (response) {
        $scope.unassignedVendorlist = response.data.data.unassignedVendors;
      });

      $http.get(getUnassignedCompanyUrl).then(function (response) {
        $scope.unassignedCompanies = response.data.data.companies;
      });
      $http.get(getAssignedCompanyUrl).then(function (response) {
        $scope.assignedCompany = response.data.data.companies;
      });
      $http.get(getAllCompanyUrl).then(function (response) {
        $scope.allCompanies = response.data.data.companies;
      });

      // bool Logic start
      $scope.boolFunction = function (value) {
        console.log("value 23=5", value);
        $scope.addDashboardBool = false;
        $scope.addCompanyBool = false;
        $scope.addAssignedCompanyBool = false;
        $scope.addUnsignedCompanyBool = false;
        $scope.companyDetailsBool = false;
        $scope.barBool = false;

        $scope.allVendorListBool = false;
        $scope.unassignedVendorListBool = false;
        $scope.assignedVendorListBool = false;
        $scope.FoodConfirmationBool = false;
        $scope[value] = true;
      }
      $scope.boolFunction("addDashboardBool");
      // bool Logic end

      $scope.companySignup = function (company) {
        // console.log("lat & lng in cntrl file : ",company);
        companydetailsService.companySignup(company, companySignupUrl);
      }
    }
  }
]);