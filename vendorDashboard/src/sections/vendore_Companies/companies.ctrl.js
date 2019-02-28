vendorApp.controller('CompanyController', ['$scope', '$routeParams', '$rootScope', 'getAllCompanyToVendorUrl',
  '$http', 'getVendorProfileUrl', 'getImageUrl', '$cookies', '$location', '$route', 'Notification',
  function ($scope, $routeParams, $rootScope, getAllCompanyToVendorUrl, $http, getVendorProfileUrl,
     getImageUrl, $cookies, $location, $route, Notification) {

      var vendorId = 1;
    // var vendorId = $routeParams.venId;
    // $scope.vId = vendorId;
    // console.log("$scope.vId 600", $scope.vId); 
    $scope.companySignup = function (company) {
      companydetailsService.companySignup(company, companySignupUrl);
    }
    //====================== boolfunction===========================
    $scope.boolFunction = function (value) {
        console.log("boolFunction", value);

        $scope.assignedCompaniesBool = false;    
        $scope[value] = true;
    }
    $scope.boolFunction("assignedCompaniesBool");

    var getVendorDetails = getVendorProfileUrl + vendorId;
    $http.get(getVendorDetails).then(function (response) {
      $rootScope.vendorName = response.data.data.vendor.name;
    });


    var getCompanies = getAllCompanyToVendorUrl + vendorId;
    $http.get(getCompanies).then(function (response) {
      $scope.assignedCompany = response.data.data.companies;
      for (var i = 0; i < $scope.assignedCompany.length; i++) {
        $scope.assignedCompany[i].fileName = getImageUrl + $scope.assignedCompany[i].fileName;
      }
    });

  }

]);
