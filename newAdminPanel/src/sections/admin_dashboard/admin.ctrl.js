adminApp.controller('AdminController', ['$scope', '$http','companydetailsService', 'getAllCompanyUrl',
  function($scope, $http, companydetailsService, getAllCompanyUrl ) {

  	 // bool Logic start
      $scope.boolFunction = function (value) {
        console.log("value 23=5", value);
        $scope.CompanyBool = false;
        $scope.AddNewCompanyBool = false;
        $scope.AssignedCompanyBool = false;
        $scope.UnsignedCompanyBool = false;
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

      // $http.get(getAllVendorListUrl).then(function (response) {
      //   $scope.AllVendorslist = response.data.data.vendors;
      // });
      // $http.get(getAssignedVendor).then(function (response) {
      //   $scope.assignedVendorslist = response.data.data.assignedVendors;
      // });
      // $http.get(getUnassignedVendor).then(function (response) {
      //   $scope.unassignedVendorlist = response.data.data.unassignedVendors;
      // });

      // $http.get(getUnassignedCompanyUrl).then(function (response) {
      //   $scope.unassignedCompanies = response.data.data.companies;
      // });
      // $http.get(getAssignedCompanyUrl).then(function (response) {
      //   $scope.assignedCompany = response.data.data.companies;
      // });
      $http.get(getAllCompanyUrl).then(function (response) {
        $scope.allCompanies = response.data.data.companies;
      });
   
   
    
  }
]);