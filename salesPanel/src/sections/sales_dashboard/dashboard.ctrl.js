salesApp.controller('AdminController', ['$scope', '$http', 'getAllCompanyUrl',
  'getImageUrl', 'getAllVendorListUrl', 'getAssignedCompanyUrl', 'editableOptions',
  function ($scope, $http, getAllCompanyUrl, getImageUrl, getAllVendorListUrl, getAssignedCompanyUrl, editableOptions, ) {

    // ==============Profile work============================================
    editableOptions.theme = 'bs4';
    $scope.user = {
      name: 'awesome user',
      phone: '+91 90000 00000',
      email: 'somerandom@email.com',
      location: 'Bengaluru',
      companies: 'fancymonk.com',
      profilename: 'Aman Telkar',
      Cofounder: 'Co-founder at Fancymonk',

    };
    // ==============Profile work end ============================================

    //=============== Unassigned leads===========================================

    //=============== Unassigned leads===========================================
    //====================== sidebar hide and show==========================
    $scope.toggle = true;
    $scope.toggleFilter = function () {
      $scope.toggle = $scope.toggle === false ? true : false;
    }

    $scope.employees = {
      "05/17/2015": {
        'name': 'Bangalore',
        'age': 37
      },
      "03/25/2016": {
        'name': 'Bravo',
        'age': 27
      },
      "09/11/2015": {
        'name': 'Charlie',
        'age': 29
      },
      "01/07/2016": {
        'name': 'Delta',
        'age': 19
      },
      "03/09/2014": {
        'name': 'Echo',
        'age': 32
      }
    }

    $scope.empArray = Object.keys($scope.employees)
      .map(function (value, index) {
        return {
          joinDate: new Date(value),
          values: $scope.employees[value]
        }
      });

    //========================= SHOW EMPLOYEE DETAILS.=========================
    $scope.showDetails = function () {
      $scope.details =
        'Name: ' + $scope.employee.values.name + '\n' +
        'Age: ' + $scope.employee.values.age + '\n' +
        'Date of Joining: ' + $filter('date')($scope.employee.joinDate, 'dd/MM/yyyy');
    };
    //====================== sidebar hide and show End==========================

    //=================== All companies URL =======================================

    $http.get(getAllCompanyUrl).then(function (response) {
      console.log(" compay url : ", getAllCompanyUrl);
      $scope.allCompanies = response.data.data.companies;
      for (var i = 0; i < $scope.allCompanies.length; i++) {
        $scope.allCompanies[i].fileName = getImageUrl + $scope.allCompanies[i].fileName;
      }
    });
    //================== All companies URL End ===================================

    //================== All VendorList URL ======================================
    $http.get(getAllVendorListUrl).then(function (response) {
      $scope.allVendorsList = response.data.data.vendors;
    });
    //================== All VendorList URL End==================================

    //================== All AssingendCOmpany URL=================================
    $http.get(getAssignedCompanyUrl).then(function (response) {
      $scope.assignedCompany = response.data.data.companies;
      for (var i = 0; i < $scope.assignedCompany.length; i++) {
        $scope.assignedCompany[i].fileName = getImageUrl + $scope.assignedCompany[i].fileName;
      }
    });
    //======================= card toggle================================================
    // ===========Team Work1=============================================================
    $scope.toggle = function () {
      $scope.state = !$scope.state;
    };
    //  ================== All AssingendCOmpany URL End===================================

    // =================== Calling data===================================================
    $scope.data = [{
        firstName: "Jayaram",
        lastName: "P",
        email: "jayaram@gmail.com",
        project: "javasavvy",
        designation: "Software Engineer",
        empId: "10001"
      },
      {
        firstName: "Arjun",
        lastName: "D",
        email: "Arjun@gmail.com",
        project: "Sample Project",
        designation: "Test",
        empId: "10002"
      }
    ];
    $scope.empoyees = angular.copy($scope.data);
    $scope.enabledEdit = [];
    $scope.editEmployee = function (index) {
      console.log("edit index" + index);
      $scope.enabledEdit[index] = true;
    }
    $scope.deleteEmployee = function (index) {
      $scope.empoyees.splice(index, 1);
    }

    $scope.submitEmployee = function () {

      console.log("form submitted:" + angular.toJson($scope.empoyees));
    }
    // =================== Calling data end===============================================

    //=========================== bool Logic start========================================
    $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.companyBool = false;
      $scope.vendorListBool = false;
      $scope.addleadsCompanyBool = false;
      $scope.teamCompanyBool = false;
      $scope.assignedCompanyBool = false;
      $scope.callingCompanyBool = false;
      $scope.profileCompanyBool = false;
      $scope.unassignedleads = false;
      $scope.myleads = false;
      $scope.subordinateassigned = false;
      $scope.reports = false;
      $scope[value] = true;
    }
    $scope.boolFunction("companyBool");



    $scope.searchListFun = function () {
      $scope.newList = $scope.searchList;
      console.log("value  of list", $scope.newList);
    }

    $scope.value = 30;
    $scope.min = 0;
    $scope.max = 100;

    // ===============================Save Lead==========================================
    $scope.saveLead = function () {

    }
    // ==================================================================================

  }

]);