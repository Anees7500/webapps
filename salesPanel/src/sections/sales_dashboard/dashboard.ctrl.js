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
    // ==============Profile work end =========================================

    // ==============Subordinate Leads ========================================
    $scope.people = [{
        progresswork: "Successfull",
        salesperson: 'Aman',
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk"
      },
      {
        progresswork: "Successfull1",
        salesperson: 'Aman4',
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk"
      },
      {
        progresswork: "Successfull",
        salesperson: 'Aman3',
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk"
      },
      {
        progresswork: "Successfull4",
        salesperson: 'Aman2',
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk"
      },
      {
        progresswork: "Successfull5",
        salesperson: 'Aman1',
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk"
      },
      {
        progresswork: "Successfull8",
        salesperson: 'Aman',
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk"
      },
      {
        progresswork: "Successfull",
        salesperson: 'Aman7',
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk"
      }
    ]
    // ==============Subordinate Leads end =======================================
    $scope.activeMenu = 'company';

    //=============== Unassigned leads===========================================
    //=============== Unassigned leads===========================================
    //====================== sidebar hide and show==========================
    $scope.area = ["Bangalore", "Hsr Layout", "Bommanahalli", "Btm Layout", "Koramangala"];
    $scope.distance = ["0 to 5", "0 to 7", "0 to 9", "0 to 12", "0 to 15", "0 to 20"];
    $scope.document = ["Fssai", "Trade", "Labour", "GST", "PF $ ESI", "Employee BGV $ PVC", "others"];
    $scope.price = ["lakh", "hundred", "thousand", " crore", ];



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
        if( $scope.allCompanies[i].fileName != null){
          $scope.allCompanies[i].fileName = getImageUrl + $scope.allCompanies[i].fileName;
        }else{
          $scope.allCompanies[i].fileName = getImageUrl + "14.png";
        }
        
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
        if($scope.assignedCompany[i].fileName != null){
          $scope.assignedCompany[i].fileName = getImageUrl + $scope.assignedCompany[i].fileName;
        }else{
          $scope.assignedCompany[i].fileName = getImageUrl + "9.png"; 
        }
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
    // =================== Calling data end==============================================
    //====================Assigned leads ================================================
    $scope.assignedleads = [{
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk",
        username: "Aman",
        progresswork: "progress"
      },
      {
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk",
        username: "Amananees",
        progresswork: "Pending"
      },
      {
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk",
        username: "Amananees",
        progresswork: "Work waiting"
      },
      {
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk",
        username: "Amanjaslkfdj",
        progresswork: "Successfull"
      },
      {
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk",
        username: "Amansajdlfkj",
        progresswork: "progress"
      },
      {
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk",
        username: "Amanlsdfj",
        progresswork: "Work waiting"
      },
      {
        address: " 19th Main Rd, Sector 2, HSR Layout, Bengaluru",
        companyname: "Fancymonk",
        username: "Amanasfdjlk",
        progresswork: "Successfull"
      }
    ]
    //====================Assigned leads end ===========================================

    //====================Unassigned lead ================================================
    $scope.unassigned = [{
      address: "#1722,First Floor, 19th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
      companyname: "Fancymonk",
      username: "Aman",
      progress: "progress"
    }, {
      address: "#1722,First Floor, 19th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
      companyname: "Fancymonk",
      username: "Aman",
      progress: "progress"
    }, {
      address: "#1722,First Floor, 19th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
      companyname: "Fancymonk",
      username: "Aman",
      progress: "progress"
    }]
    //====================Unassigned lead  end============================================

    //=========================== bool Logic start========================================
    $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.companyBool = false;
      $scope.vendorListBool = false;
      $scope.addleadsCompanyBool = false;
      $scope.teamCompanyBool = false;
      $scope.callingCompanyBool = false;
      $scope.profileCompanyBool = false;
      $scope.unassignedleads = false;
      $scope.myleads = false;
      $scope.subordinateassigned = false;
      $scope.reports = false;
      $scope[value] = true;
    }
    //=================Active work ==========================================================

    $scope.boolFunction("companyBool");
    //=================Active work end========================================================


    $scope.searchListFun = function () {
      $scope.newList = $scope.searchList;
      console.log("value  of list", $scope.newList);
    }

    $scope.value = 0;
    $scope.min = 0;
    $scope.max = 10000;

    // ===============================Save Lead==========================================
    $scope.saveLead = function () {

    }
    // =============================Toggle Edit Profile======================================
    $scope.hideProfileDetails = true;
    $scope.toggleProfile = function(){
      $scope.hideProfileDetails = ! $scope.hideProfileDetails;
    }

    // ================================Save Profile details=============================
    $scope.saveprofileDetails = function(){

      
    }



  }

]);