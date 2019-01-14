adminApp.controller('AdminController', ['$scope', '$http','companydetailsService', 'getAllCompanyUrl', 
  'getAssignedCompanyUrl', 'getUnassignedCompanyUrl', 'getAllVendorListUrl',
  function($scope, $http, companydetailsService, getAllCompanyUrl, getAssignedCompanyUrl, getUnassignedCompanyUrl,
  getAllVendorListUrl ) {

  	 // bool Logic start
      $scope.boolFunction = function (value) {
        console.log("boolFunction", value);
        $scope.CompanyBool = false;
        $scope.AddNewCompanyBool = false;
        $scope.AssignedCompanyBool = false;
        $scope.UnAssignedCompanyBool = false;
        $scope.InvoiceBool = false;
        $scope.VendorListBool = false;
        $scope.UnAssignedVendorListBool = false;
        $scope.AssignedVendorListBool = false;
        $scope[value] = true;
      }
      $scope.boolFunction("CompanyBool");
      // bool Logic end

      $scope.companySignup = function (company) {
        // console.log("lat & lng in cntrl file : ",company);
        companydetailsService.companySignup(company, companySignupUrl);
      }

      $http.get(getAllVendorListUrl).then(function (response) {
        $scope.AllVendorslist = response.data.data.vendors;
      });
      // $http.get(getAssignedVendor).then(function (response) {
      //   $scope.assignedVendorslist = response.data.data.assignedVendors;
      // });
      // $http.get(getUnassignedVendor).then(function (response) {
      //   $scope.unassignedVendorlist = response.data.data.unassignedVendors;
      // });

      $http.get(getUnassignedCompanyUrl).then(function (response) {
        $scope.unassignedCompanies = response.data.data.companies;
      });
      $http.get(getAssignedCompanyUrl).then(function (response) {
        $scope.assignedCompany = response.data.data.companies;
      });
      $http.get(getAllCompanyUrl).then(function (response) {
        $scope.allCompanies = response.data.data.companies;
      });
   
   
    
  }
]);