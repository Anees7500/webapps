adminApp.controller('AdminController', ['$scope', '$http','CompanydetailsService', 'getAllCompanyUrl', 
  'getAssignedCompanyUrl', 'getUnassignedCompanyUrl', 'getAllVendorListUrl', 
  function($scope, $http, CompanydetailsService, getAllCompanyUrl, getAssignedCompanyUrl, getUnassignedCompanyUrl,
  getAllVendorListUrl ) {

  	 // bool Logic start
      $scope.boolFunction = function (value) {
        console.log("boolFunction", value);
        $scope.companyBool = false;
        $scope.addNewCompanyBool = false;
        $scope.assignedCompanyBool = false;
        $scope.unAssignedCompanyBool = false;
        $scope.invoiceBool = false;
        $scope.vendorListBool = false;
        $scope.unAssignedVendorListBool = false;
        $scope.assignedVendorListBool = false;
        $scope[value] = true;
      }
      $scope.boolFunction("companyBool");
      // bool Logic end
      $scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: 'server/upload/url', //upload.php script, node.js route, or servlet url
        data: {myObj: $scope.myModelObj},
        file: file,
      }).progress(function(evt) {
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).then(function(response) {
        var data = response.data;
        // file is uploaded successfully
        console.log(data);
      });
    }
  };
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