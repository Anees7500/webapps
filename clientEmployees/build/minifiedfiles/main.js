var ceApp = angular.module('ceApp', ['ngRoute','ngMaterial']);

ceApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'sections/home/home.tpl.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

ceApp.controller('HomeController', ['$scope', '$rootScope', '$http', '$log', 'homeService',
function($scope, $rootScope, $http, $log, homeService) {
  console.log("hdhs");
  var self = $scope;

  self.simulateQuery = false;
  self.isDisabled = false;
  // self.comingDecision = "Nope";

  // list of `state` value/display objects
  self.states = loadAll();
  self.querySearch = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.searchTextChange = searchTextChange;

  self.newState = newState;
  self.employeeComingList = [];

  self.addTolist = function(dcsn) {

    var empDtls = {};

    empDtls.employeeId = self.employeeObject.id;

    if (dcsn == "Yes") {
      empDtls.decision = true;
    } else {
      empDtls.decision = false;
    }


    homeService.addDetail(empDtls, "http://fancymonk.com:9125/api/client/add-employee-count");
    $log.info('hello adding to the list  ' + dcsn);
    var tmpObj = {};

    tmpObj.id = self.employeeObject.id;
    tmpObj.display = self.employeeObject.display;
    tmpObj.decision = dcsn;
    self.employeeComingList.push(tmpObj);
  }



  $http.get("http://fancymonk.com:9125/api/client/get-time-of-day-and-tmr-date")
    .then(function(response) {
        $log.info(' get time of the day  ' + JSON.stringify(response));
        if (response.data.timeOfDay != null) {
          $log.info(' hello if condition ');
          if (response.data.timeOfDay >= 8 && response.data.timeOfDay <= 22) {
            self.timeOfDay = true;
          } else {
            self.timeOfDay = false;
          }

          self.tomorrowDate = response.data.tomorrowDate;

          var empUrl = "http://fancymonk.com:9125/api/client/get-all-employee-data?companyId=1&date=" + self.tomorrowDate

          $http.get("empUrl")
            .then(function(response) {
                if (response.data.data != null) {
                  for(var m = 0; m < response.data.data.details.length; m++)
                  {
                    var tmpObj = {};
                    var ob = response.data.data.details[m];
                    tmpObj.id = ob.employeeId;
                    tmpObj.display = ob.firstname+" "+ob.lastname;
                    tmpObj.decision = ob.active;
                    self.employeeComingList.push(tmpObj);
                  }
                }
              }
            );


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
  $http.get("http://fancymonk.com:9125/api/common/get-all-employees?companyId=1")
    .then(function(response) {
      if (response.data.data != null) {
        var employeesDetails = response.data.data.employees;

        for (var i = 0; i < employeesDetails.length; i++) {
          var ele = employeesDetails[i];
          ele.value = (ele.firstname + " " + ele.lastname).toLowerCase();
          ele.display = ele.firstname + " " + ele.lastname;
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

}]);

ceApp.factory('homeService', ['$http', '$httpParamSerializerJQLike',
    function($http,$httpParamSerializerJQLike) {
        return {
            addDetail: function(params,url) {
                $http({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'type': 'clientPanel',
                        'scm': 'fancymonk',
                        'Authorization': 'Basic WVhCd1FHWmhibU41Ylc5dWEyRmhZV0Z1OjE1OjJDOjJBOkZFOjUxOkQwOkM3OjNCOjQ2OjFGOkREOjk2Ojk0OkFGOjkyOkE2OjFGOjUyOjBEOkUz',
                    },

                    data: $httpParamSerializerJQLike(params)
                }).then(function(response) {
                  console.log("response logins ",response);
                    if (response.data.status == 1) {
                        // $location.path('/dashboard');
                    } else {
                    }
                })
                .catch(function(response) {

                });
            }
        }
    }
]);
