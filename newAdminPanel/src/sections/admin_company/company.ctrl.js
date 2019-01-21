adminApp.controller('CompanyController', ['$scope', '$http', 'VendorassignService', 'postCategoryUrl', '$routeParams',
  'corporateReviewsUrl', 'getCompanyProfileUrl', 'getAllVendorListUrl', 'getItemCheckListForVendor', 'getItemCheckListedForVendor',
  function($scope, $http ,VendorassignService, postCategoryUrl, $routeParams, corporateReviewsUrl, 
   getCompanyProfileUrl, getAllVendorListUrl, getItemCheckListForVendor, getItemCheckListedForVendor
   ) {
  	 // bool Logic start
     $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.configurationBool = false;
      $scope.clientRequirementBool=false;
      $scope.vendorRequirementBool=false;
      $scope.itemCheckBool=false;
      $scope.assignedBool=false;
      $scope.companySettingsBool=false;
      $scope.empFeedbackBool=false;
      $scope.clientMonthlyDetailsBool=false; 
      $scope.vendorMonthlyDetailsBool=false;
      $scope.dispatchDetailsBool=false;       
      $scope[value] = true;
    }

    $scope.boolFunction("configurationBool");
   
    

     // ================ feedback ====================
    var getFeedbackUrl = corporateReviewsUrl + $routeParams.compId;
    $http.get(getFeedbackUrl).then(function (response) {
      $scope.feedback = response.data.data.reviews;
    });

    // ==================== getCompProfileUrl==============

    var getCompProfileUrl = getCompanyProfileUrl + $routeParams.compId;
      $http.get(getCompProfileUrl).then(function (response) {
        $scope.cmpyName = response.data.data.company.companyName;
        $scope.data = response.data.data.company;
      });
      // ==================== All Vender list==============
      //  var getAllVendorToCompany = getAllVendorToCompanyUrl + $routeParams.compId;
      // $http.get(getAllVendorToCompany).then(function (response) {
      //   console.log("getAllVendorToCompanyUrl", response.data.data.details);
      //   $scope.vendorList = response.data.data.details;
      // });

   $http.get(getAllVendorListUrl).then(function (response) {
        // console.log("response.data 555", response.data.data.vendors);
        $scope.allVendorsList = response.data.data.vendors;
        // console.log("response.data 560", $scope.allVendorsList);
      });
 // ==================== Tooltip==============
    $scope.demo = {
      showTooltip: false,
      tipDirection: 'bottom'
    };

    $scope.demo.delayTooltip = undefined;
    $scope.$watch('demo.delayTooltip', function(val) {
      $scope.demo.delayTooltip = parseInt(val, 10) || 0;
    });
// ==================== Save password for app==============
    $scope.saveCheckListIndb = function () {
        var tempOb = {};
        tempOb.companyId = $routeParams.compId;
        tempOb.vendorId = -1;
        var jj = {};
        jj.items = $scope.itemCheckList;
        tempOb.data = JSON.stringify(jj);
        VendorassignService.saveCheckListIndb(tempOb);
      }

   // ================== Configuration ===============//
        // ========== Category ============

        $scope.categories = [
            { displayName: "Breakfast", dbName: "breakfast"},
            { displayName: "Lunch", dbName: "lunch" },
            { displayName: "Snacks", dbName: "snacks"},
            { displayName: "Dinner", dbName: "dinner"},
            { displayName: "Mid-Night Snacks", dbName: "midNightSnacks"},
            { displayName: "Early Morning Snacks", dbName: "earlyMorningSnacks"},
            { displayName: "Cash & Carry", dbName: "cashNCarry"}
        ];
        
        $scope.data = {};


        $scope.category = function (data) {
            $scope.data.companyId = $routeParams.compId;
            console.log("Task Active Field", $scope.data.companyId);
            VendorassignService.activeCategory(data, postCategoryUrl);
          }

    // ==================== Working days==============  

$scope.workingDays = [ {  day: "MONDAY", Selected: false },
                       {   day: "TUESDAY", Selected: false },
                       {   day: "WEDNESDAY", Selected: false },
                       {  day: "THURSDAY", Selected: false },
                       {   day: "FRIDAY", Selected: false },
                       {   day: "SATURDAY", Selected: false },
                       {  day: "SUNDAY", Selected: false } ];

    $scope.wrkDayGetVl = function () {                
                for (var i = 0; i < $scope.workingDays.length; i++) {
                    if ($scope.workingDays[i].Selected) {
                        var dayName = $scope.workingDays[i].day;                       
                        console.log("WorkingDays in selectbox",$scope.workingDays[i]);
                    }
                }
              }
      // ====================  Invoicing Date =============================================
              $scope.Mid_of_date=['1','2','3','4','5','6','7','8','9','10','11','12',
                         '13','14','15','16','17','18','19','20','21','22',
                         '23','24','25','26','27','28','29','30','31'];
       // =================Requirements ================

        $scope.clientRequirement = {};
        $scope.saveReq = function () {
            console.log("client reqs : ", JSON.stringify($scope.clientRequirement));
        }

        //=====================additional requirement=======================
        $scope.additionalReqDetails = {
          breakfast : [
            {
                'columnName': 'Pax',
                'disabled': true
            }],
          lunch : [
            {
                'columnName': 'Pax',
                'disabled': true
            }],
          snacks : [
            {
                'columnName': 'Pax',
                'disabled': true
            }],
          dinner : [
            {
                'columnName': 'Pax',
                'disabled': true
            }],
          midNightSnacks : [
            {
                'columnName': 'Pax',
                'disabled': true
            }],
          earlyMorningSnacks : [
            {
                'columnName': 'Pax',
                'disabled': true
            }],
          cashNCarry : [
            {
                'columnName': 'Pax',
                'disabled': true
            }]
        };


        $scope.addNew = function (menuDetails) {
            menuDetails.push({
                'columnName': ""
            });
        };

        $scope.remove = function () {
            var newDataList = [];
            $scope.selectedAll = false;
            angular.forEach($scope.menuDetails, function (selected) {
                if (!selected.selected) {
                    newDataList.push(selected);
                }
            });
            $scope.menuDetails = newDataList;
        };

        $scope.checkAll = function () {
            if (!$scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }
            angular.forEach($scope.menuDetails, function (menuDetail) {
                menuDetail.selected = $scope.selectedAll;
            });
        };

        //===========show hide for additional requirement checkbox============

    
     $scope.isVisible = false;
            $scope.showHide = function (data) {    
                //If DIV is visible it will be hidden and vice versa.
                $scope.isVisible = $scope.isVisible ? false : true;
            }
      

    // ==================== Item check list ==============             
 
   $scope.selectedItemCheckList = [];
      $http.get(getItemCheckListForVendor).then(function (response) {
        $scope.itemCheckList = response.data.data.items;
      }); 
      // console.log("response form url : ", getItemCheckListedForVendor);
      $http.get(getItemCheckListedForVendor + $routeParams.compId).then(function (response) {
        console.log("response form listed : ", JSON.stringify(response));
        if (response.data.data.items != null) {
          console.log("hello world");
          for (var i = 0; i < $scope.itemCheckList.length; i++) {
            var itemEle = $scope.itemCheckList[i];
            console.log("item element : ", JSON.stringify(itemEle));
            for (var j = 0; j < response.data.data.items.length; j++) {
              var dbItem = response.data.data.items[j];
              if (itemEle.id == dbItem.id) {
                itemEle.quantity = dbItem.quantity;
                itemEle.enabled = dbItem.enabled;
              }
            }
          }
        }
      });

      $scope.toggle = function (item, list) {
        if (item.enabled) {
          item.enabled = false;
          item.quantity = null;
        } else {
          item.enabled = true;
        }
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        } else {
          list.push(item);
        }
        
        console.log("selected List : ", JSON.stringify($scope.selectedItemCheckList));
      };

      $scope.exists = function (item, list) {
        return item.enabled;
      };

      $scope.getQuantity = function (item, list) {
        var val = list.some(function (element) {
          if (element.id === item.id) {

            return element.quantity;
          }
        });

        console.log("quantiit value : ", val);
        return val;
      };

      $scope.saveCheckListIndb = function () {
        var tempOb = {};
        tempOb.companyId = $routeParams.compId;
        tempOb.vendorId = -1;
        var jj = {};
        jj.items = $scope.itemCheckList;
        tempOb.data = JSON.stringify(jj);
        VendorassignService.saveCheckListIndb(tempOb);
      } 

        // =========================  vendor Monthly Details ======================================
$scope.vendorMnthyDts = [ {  Date: "1/01/2019", Day: "MONDAY",    Pax: '10', Price: '10', Amount: '100' },
                          {  Date: '1/02/2019', Day: 'TUESDAY',   Pax: '12', Price: '10', Amount: '120' },
                          {  Date: '1/03/2019', Day: 'WEDNESDAY', Pax: '12', Price: '10', Amount: '100' },
                          { Date: '1/04/2019',  Day: 'THURSDAY',  Pax: '10', Price: '10', Amount: '100' },
                          { Date: '1/05/2019',  Day: 'FRIDAY',    Pax: '10', Price: '10', Amount: '100' },
                          { Date: '1/06/2019',  Day: 'SATURDAY',  Pax: '10', Price: '10', Amount: '100' },
                          { Date: '1/07/2019',  Day: 'SUNDAY',    Pax: '10', Price: '10', Amount: '100' },
                      
                          ];
   
     
     
      
   
    
//vendor monthly details



    }
    ]);