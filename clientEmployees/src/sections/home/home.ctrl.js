ceApp.controller('HomeController', ['$scope', '$rootScope', '$http', '$log', 'homeService', 'Notification',
  function($scope, $rootScope, $http, $log, homeService, Notification) {
    console.log("hdhs");
    var self = $scope;


    self.itemsPerPage = 5;
    self.currentPage = 0;

    self.range = function() {
      var rangeSize = 2;
      var ret = [];
      var start;

      start = self.currentPage;
      if (start > self.pageCount() - rangeSize) {
        start = self.pageCount() - rangeSize;
      }

      for (var i = start; i < start + rangeSize; i++) {
        ret.push(i);
      }
      return ret;
    };

    self.prevPage = function() {
      if (self.currentPage > 0) {
        self.currentPage--;
      }
    };

    self.prevPageDisabled = function() {
      return self.currentPage === 0 ? "disabled" : "";
    };

    self.nextPage = function() {
      if (self.currentPage < self.pageCount() - 1) {
        self.currentPage++;
      }
    };

    self.nextPageDisabled = function() {
      return self.currentPage === self.pageCount() - 1 ? "disabled" : "";
    };

    self.pageCount = function() {
      return Math.ceil(self.total / self.itemsPerPage);
    };

    self.setPage = function(n) {
      if (n > 0 && n < self.pageCount()) {
        self.currentPage = n;
      }
    };

    function getItemToshow(arr, offset, limit) {
      return arr.slice(offset, offset + limit);
    };


    self.simulateQuery = false;
    self.isDisabled = false;
    self.type = "Lunch";

    // list of `state` value/display objects
    self.states = loadAll();
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;

    self.newState = newState;
    self.employeeComingList = [];

<<<<<<< HEAD
    self.addTolist = function(dcsn) {

      var empDtls = {};

      empDtls.employeeId = self.employeeObject.id;

      empDtls.type = dcsn;
      // if (dcsn == "Yes") {
      //   empDtls.decision = true;
      // } else {
      //   empDtls.decision = false;
      // }


      homeService.addDetail(empDtls, "http://fancymonk.com:9124/api/client/add-employee-count");
      $log.info('hello adding to the list  ' + dcsn);
      var tmpObj = {};

      tmpObj.id = self.employeeObject.id;
      tmpObj.display = self.employeeObject.display;
      tmpObj.type = dcsn;

      $log.info('already added employees dscn' + !self.employeeComingList.some(function(element) {
        $log.info('elemenr val ' + JSON.stringify(element));
        $log.info('employee oBj  val ' + JSON.stringify(self.employeeObject));
        return element.display === self.employeeObject.display;
      }));
      if(!self.employeeComingList.some(function(element) {
        return element.display === self.employeeObject.display;
      }))
      {
        $log.info('hejevhjdb');
        self.employeeComingList.push(tmpObj);

        $log.info('list after adding  ' + JSON.stringify(self.employeeComingList));
      }
      else {
        Notification.error("User is already added");
      }
    }
=======
    // self.addTolist = function(dcsn) {
    //
    //   var empDtls = {};
    //
    //   empDtls.employeeId = self.employeeObject.id;
    //
    //   empDtls.type = dcsn;
    //   // if (dcsn == "Yes") {
    //   //   empDtls.decision = true;
    //   // } else {
    //   //   empDtls.decision = false;
    //   // }
    //
    //
    //   homeService.addDetail(empDtls, "http://fancymonk.com:9124/api/client/add-employee-count");
    //   $log.info('hello adding to the list  ' + dcsn);
    //   var tmpObj = {};
    //
    //   tmpObj.id = self.employeeObject.id;
    //   tmpObj.display = self.employeeObject.display;
    //   tmpObj.type = dcsn;
    //
    //   $log.info('already added employees dscn' + !self.employeeComingList.some(function(element) {
    //     $log.info('elemenr val ' + JSON.stringify(element));
    //     $log.info('employee oBj  val ' + JSON.stringify(self.employeeObject));
    //     return element.display === self.employeeObject.display;
    //   }));
    //   if(!self.employeeComingList.some(function(element) {
    //     return element.display === self.employeeObject.display;
    //   }))
    //   {
    //     $log.info('hejevhjdb');
    //     self.employeeComingList.push(tmpObj);
    //
    //     $log.info('list after adding  ' + JSON.stringify(self.employeeComingList));
    //   }
    //   else {
    //     Notification.error("User is already added");
    //   }
    // }
>>>>>>> cf0f834e478ba9176f538bfd7eb8b256c9b09e7c


    $http.get("http://fancymonk.com:9124/api/client/get-time-of-day-and-tmr-date")
      .then(function(response) {
        $log.info(' get time of the day  ' + JSON.stringify(response));
        if (response.data.timeOfDay != null) {
          $log.info(' hello if condition ');
          if (response.data.timeOfDay >= 0 && response.data.timeOfDay <= 22) {
            self.timeOfDay = true;
          } else {
            self.timeOfDay = false;
          }

          self.tomorrowDate = response.data.tomorrowDate;

<<<<<<< HEAD
          var empUrl = "http://fancymonk.com:9124/api/client/get-all-employee-data?companyId=1&date=" + self.tomorrowDate
=======
          var empUrl = "http://fancymonk.com:9125/api/client/get-employee-default-data?employeeRowId=50&startDate=2018-12-17&endDate=2018-12-22";
>>>>>>> cf0f834e478ba9176f538bfd7eb8b256c9b09e7c

          $http.get(empUrl)
            .then(function(response) {
              if (response.data.data != null) {
                $log.info('response  dchjb' + JSON.stringify(response));
                for (var m = 0; m < response.data.data.details.length; m++) {
                  var tmpObj = {};
                  var ob = response.data.data.details[m];
                  tmpObj.id = ob.employeeId;
                  tmpObj.display = ob.firstName + " " + ob.lastName;
                  tmpObj.type = ob.type;
<<<<<<< HEAD
                  // employeeComingList
                  // if (ob.active) {
                  //   tmpObj.decision = "Yes";
                  // } else {
                  //   tmpObj.decision = "Nope";
                  // }

=======
                  tmpObj.working_date = ob.working_date;
                  tmpObj.status = "Yes";

                  if( Date.parse( new Date(tmpObj.working_date) ) <  Date.parse( new Date("2018-12-19") ))
                  {
                    tmpObj.disabled = true;
                  }
                  else {
                    tmpObj.disabled = false;
                  }
>>>>>>> cf0f834e478ba9176f538bfd7eb8b256c9b09e7c
                  self.employeeComingList.push(tmpObj);

                  self.$watch("currentPage", function(newValue, oldValue) {
                    self.pagedItems = getItemToshow(self.employeeComingList, newValue * self.itemsPerPage,
                      self.itemsPerPage);
                    self.total = self.employeeComingList.length;

                    $log.info('total count   ' + self.total);
                  });

                }
              }
            });


        }
      });




    function newState(state) {
      alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
      $log.info('passed query  ' + JSON.stringify(query));
      var results = query ? self.states.filter(createFilterFor(query)) : self.states,
        deferred;

      $log.info('query search  ' + JSON.stringify(results));
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function() {
          deferred.resolve(results);
        }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
      self.employeeObject = item;
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var employeeList = [];
      $http.get("http://fancymonk.com:9124/api/common/get-all-employees?companyId=1")
        .then(function(response) {
          if (response.data.data != null) {
            var employeesDetails = response.data.data.employees;

            for (var i = 0; i < employeesDetails.length; i++) {
              var ele = employeesDetails[i];
              ele.value = (ele.firstName + " " + ele.lastName).toLowerCase();
              ele.display = ele.firstName + " " + ele.lastName;
              employeeList.push(ele);
            }
          }

        });

      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

      var ex = allStates.split(/, +/g).map(function(state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });

      // $log.info('slipt  ' + JSON.stringify(ex));
      return employeeList;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = query.toLowerCase();
      $log.info('createFilterFor  ' + lowercaseQuery);
      return function filterFn(state) {
        var valueRerurned = (state.value.indexOf(lowercaseQuery) === 0);

        $log.info('fliterFn  ' + valueRerurned);
        return valueRerurned;
      };

    }



  }
]);
