adminApp.controller('DashboardController', ['$scope', '$http', 'CompanydashboardService', 'getAllCompanyUrl',
  'getAssignedCompanyUrl', 'getUnassignedCompanyUrl', 'getAllVendorListUrl', 'getImageUrl','$cookies', '$location', '$route', 'Notification',
  function ($scope, $http, CompanydashboardService, getAllCompanyUrl, getAssignedCompanyUrl, getUnassignedCompanyUrl,
    getAllVendorListUrl, getImageUrl,  $cookies,$location,$route,
    Notification) {

      $scope.logout = function(){
        $cookies.remove('id');    
         $location.path('/');
    }
    // if ($cookies.get('id') == null) {
    //   Notification.warning("Login required!!!");
    //   $location.path('/');
    //   $route.reload();
    // } 
    // ================== bool Logic start ==============================
    $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.companyBool = false;
      $scope.addNewCompanyBool = false;
      $scope.assignedCompanyBool = false;
      $scope.unAssignedCompanyBool = false; 
      $scope.vendorListBool = false;
      $scope.unAssignedVendorListBool = false;
      $scope.assignedVendorListBool = false;
      $scope[value] = true;
    }
    $scope.boolFunction("companyBool");
    // ========================== bool Logic end ==========================

    // ===================== Signup ==================================
    $scope.companySignup = function (company) {
      companydetailsService.companySignup(company, companySignupUrl);
    }
    // ======================= All Vendor List =========================
    $http.get(getAllVendorListUrl).then(function (response) {
      $scope.AllVendorslist = response.data.data.vendors;
    });

    // ======================= Assiged Vendor List =========================      
  

    // ======================= Unassigned Vendor List =========================      
    // $http.get(getUnassignedVendor).then(function (response) {
    //   $scope.unassignedVendorlist = response.data.data.unassignedVendors;
    // });
    // ======================= All Unassigned Company List =========================
    $http.get(getUnassignedCompanyUrl).then(function (response) {
      console.log("respoinse : ", JSON.stringify(response));
      $scope.unassignedCompanies = response.data.data.companies;
      for (var i = 0; i < $scope.unassignedCompanies.length; i++) {
        $scope.unassignedCompanies[i].fileName = getImageUrl + $scope.unassignedCompanies[i].fileName;
      }
    });
    // ======================= All Assigned Company List =========================   
    $http.get(getAssignedCompanyUrl).then(function (response) {
      $scope.assignedCompany = response.data.data.companies;
      for (var i = 0; i < $scope.assignedCompany.length; i++) {
        $scope.assignedCompany[i].fileName = getImageUrl + $scope.assignedCompany[i].fileName;
      }
    });

    // ======================= All Company List ====================================
    $http.get(getAllCompanyUrl).then(function (response) {
      $scope.allCompanies = response.data.data.companies;
      for (var i = 0; i < $scope.allCompanies.length; i++) {
        $scope.allCompanies[i].fileName = getImageUrl + $scope.allCompanies[i].fileName;
      }

    });





  }
]);