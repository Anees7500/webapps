adminApp.controller('CompanyController', ['$scope', '$http', 'AdminCompanyServices', 'postCategoryUrl', '$routeParams',
  'corporateReviewsUrl', 'getCompanyProfileUrl', 'getAllVendorListUrl', 'getItemCheckListForVendor',
  'getItemCheckListedForVendor', 'Excel', '$timeout','getCompanyWorkingDaysUrl','getCompanyInvoicingDate',
  'getCompanyAdditionalRequirements','getCompanyRequirements','getVendorRequirements',
  function ($scope, $http, AdminCompanyServices, postCategoryUrl, $routeParams, corporateReviewsUrl,
    getCompanyProfileUrl, getAllVendorListUrl, getItemCheckListForVendor, 
    getItemCheckListedForVendor, Excel, $timeout,getCompanyWorkingDaysUrl,
    getCompanyInvoicingDate,getCompanyAdditionalRequirements,getCompanyRequirements,getVendorRequirements
  ) {
    // bool Logic start
    $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.configurationBool = false;
      $scope.clientRequirementBool = false;
      $scope.vendorRequirementBool = false;
      $scope.itemCheckBool = false;
      $scope.assignedBool = false;
      $scope.invoiceBool = false;
      $scope.companySettingsBool = false;
      $scope.empFeedbackBool = false;
      $scope.clientMonthlyDetailsBool = false;
      $scope.vendorMonthlyDetailsBool = false;
      $scope.dispatchDetailsBool = false;
      $scope[value] = true;
    }
 
    $scope.boolFunction("configurationBool");




    $scope.categories = [
      { displayName: "Breakfast", dbName: "breakfast" },
      { displayName: "Lunch", dbName: "lunch" },
      { displayName: "Snacks", dbName: "snacks" },
      { displayName: "Dinner", dbName: "dinner" },
      { displayName: "Mid-Night Snacks", dbName: "midNightSnacks" },
      { displayName: "Early Morning Snacks", dbName: "earlyMorningSnacks" },
      { displayName: "Cash & Carry", dbName: "cashNCarry" }
    ];

<<<<<<< HEAD
    $scope.data = {};
    console.log("data : ", $scope.data );
=======
  

>>>>>>> 57b71d32667ef427007c64f8b1f505b30a4fa249
    // ================ feedback ====================
    var getFeedbackUrl = corporateReviewsUrl + $routeParams.compId;
    $http.get(getFeedbackUrl).then(function (response) {
      $scope.feedback = response.data.data.reviews;
    });
    $scope.exportData = function () {
      $('#feedback').tableExport({ type: 'json', escape: 'false' });
    };
    $scope.exportToExcel = function (tableId) { // ex: '#my-table'
      var exportHref = Excel.tableToExcel(tableId, 'WireWorkbenchDataExport');
      $timeout(function () { location.href = exportHref; }, 500); // trigger download
    }

    // ==================== getCompProfileUrl==============

    var getCompProfileUrl = getCompanyProfileUrl + $routeParams.compId;
    $http.get(getCompProfileUrl).then(function (response) {
      $scope.cmpyName = response.data.data.company.companyName;
      $scope.cmpyAddress = response.data.data.company.address;
      $scope.data = response.data.data.company;
    });

    // ==================== Working days==============  

    $scope.workingDays = [
    { day: "Monday", selected: false, dbName: "monday"},
    { day: "Tuesday", selected: false, dbName: "tuesday" },
    { day: "Wednesday", selected: false, dbName: "wednesday"},
    { day: "Thursday", selected: false, dbName: "thursday"},
    { day: "Friday", selected: false, dbName: "friday"},
    { day: "Saturday", selected: false, dbName: "saturday"},
    { day: "Sunday", selected: false, dbName: "sunday" }];
    // ==================== getCompanyWorkingDays ============
    var getCompanyWorkingDaysUrl = getCompanyWorkingDaysUrl + $routeParams.compId;
    console.log("working day url : ", getCompanyWorkingDaysUrl);
    $http.get(getCompanyWorkingDaysUrl).then(function (response) {

      var tempWorkingDaysArrObj = {};
      if(response.data.data.workingDays.length == 1)
      {
        tempWorkingDaysArrObj = response.data.data.workingDays[0];
        $scope.workingDaysDbRowId = tempWorkingDaysArrObj.id;
      }
      
      for (var i = 0; i < $scope.workingDays.length; i++) {
        if(tempWorkingDaysArrObj[$scope.workingDays[i].dbName])
        {
          $scope.workingDays[i].selected = true;
        }
      }
    });

    // ====================== getCompanyInvoicingDate ==========
    $scope.invoicingDate = {};
    var invoicingDateUrl = getCompanyInvoicingDate + $routeParams.compId;
    $http.get(invoicingDateUrl).then(function (response) {
      
      // console.log("invoicing url : ", response.data.data.status);
      // console.log("invoicing url : ", JSON.stringify(response));
      if(response.data.status == 1)
      {
        console.log("invoicing url : ", response);
        $scope.invoicingDateDbRowId = response.data.data.invoicingDate.id;
        $scope.invoicingDate.firstOfNextMonth = response.data.data.invoicingDate.firstOfNextMonth;
        $scope.invoicingDate.monthEnd = response.data.data.invoicingDate.monthEnd;
        $scope.invoicingDate.midOfMonth = response.data.data.invoicingDate.midOfMonth;
      }
    });

    //=====================additional requirement=======================
    $scope.additionalReqDetails = {
      breakfast: 
      {
        arrVal : [
        {
          'columnName': 'breakfast',
          'disabled': true
        }]
      },
      lunch: 
      {
        arrVal : [
        {
          'columnName': 'lunch',
          'disabled': true
        }]
      },
      snacks: 
      {
        arrVal : [
        {
          'columnName': 'snacks',
          'disabled': true
        }]
      },
      dinner: 
      {
        arrVal : [
        {
          'columnName': 'dinner',
          'disabled': true
        }]
      },
      midNightSnacks: 
      {
        arrVal : [
        {
          'columnName': 'midNightSnacks',
          'disabled': true
        }]
      },
      earlyMorningSnacks: 
      {
        arrVal : [
        {
          'columnName': 'earlyMorningSnacks',
          'disabled': true
        }]
      }
    };

    //============ getAdditionalRequirements ============
    var additionalRequirementsUrl = getCompanyAdditionalRequirements + $routeParams.compId;
    $http.get(additionalRequirementsUrl).then(function (response) {
      
      if(response.data.status == 1)
      {
        var reqArr = response.data.data.additionalRequirements;
        if(reqArr.length > 0)
        {
          $scope.companyAdditionalRequirementBoolean = true;
        }
        angular.forEach(reqArr,function(item){
          $scope.additionalReqDetails[item.type].additionalReqToggle = true;

          var dbSavedAdditionalReqArr = JSON.parse(item.requirement);
          $scope.additionalReqDetails[item.type].arrVal.push.apply($scope.additionalReqDetails[item.type].arrVal, dbSavedAdditionalReqArr);
          $scope.additionalReqDetails[item.type].additionaRequirementDbRowId = item.id;
        });
      }
    });

    // ================= client requirement ===================
    $scope.clientRequirement = {};

    var companyRequirementsUrl = getCompanyRequirements + $routeParams.compId;
    $http.get(companyRequirementsUrl).then(function (response) {
      
      if(response.data.status == 1)
      {
        var reqArr = response.data.data.requirements;
        // if(reqArr.length > 0)
        // {
        //   $scope.companyAdditionalRequirementBoolean = true;
        // }
        angular.forEach(reqArr,function(item){
          $scope.clientRequirement[item.type] = JSON.parse(item.requirement);
          $scope.clientRequirement[item.type].companyRequirementDbRowId = item.id;
        });
      }
    });

    // ================== vendor requirements =============
    $scope.vendorRequirement = {};

    var vendorRequirementsUrl = getVendorRequirements + $routeParams.compId;
    $http.get(vendorRequirementsUrl).then(function (response) {
      
      if(response.data.status == 1)
      {
        var reqArr = response.data.data.requirements;
        // if(reqArr.length > 0)
        // {
        //   $scope.companyAdditionalRequirementBoolean = true;
        // }
        angular.forEach(reqArr,function(item){
          $scope.vendorRequirement[item.type] = JSON.parse(item.requirement);
          $scope.vendorRequirement[item.type].companyVendorRequirementDbRowId = item.id;
        });
      }
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
    $scope.$watch('demo.delayTooltip', function (val) {
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
      AdminCompanyServices.saveCheckListIndb(tempOb);
    }


   // ================== Configuration ===============//
        // ========== Category ============

   


        $scope.category = function (data) {
            $scope.data.companyId = $routeParams.compId;
            console.log("Task Active Field", $scope.data.companyId);
            VendorassignService.activeCategory(data, postCategoryUrl);
          }

    // ================== Configuration ===============//
    // ========== Category ============

// $scope.workingDays = [ {  day: "Monday", Selected: false , id: "1"},
//                        {   day: "Tuesday", Selected: false, id: "2" },
//                        {   day: "Wednesday", Selected: false, id: "3" },
//                        {  day: "Thursday", Selected: false, id: "4" },
//                        {   day: "Friday", Selected: false, id: "5" },
//                        {   day: "Saturday", Selected: false, id: "6" },
//                        {  day: "Sunday", Selected: false, id: "7" } ];

//       $scope.selectAll = function(){
//     angular.forEach($scope.workingDays, function(item){
//       item.Selected = event.target.checked;
//     });
//   }


    $scope.selectAll = function () {
      angular.forEach($scope.workingDays, function (item) {
        item.selected = event.target.checked;
      });
    }

    $scope.saveCompanyWorkingDays = function () {
      var dbObjToSave = {};
      dbObjToSave.companyId = $routeParams.compId;
      for (var i = 0; i < $scope.workingDays.length; i++) {
        dbObjToSave[$scope.workingDays[i].dbName] = $scope.workingDays[i].selected;
      }
      // $scope.workingDaysDbRowId =
      AdminCompanyServices.saveWorkingDaysForCompany(dbObjToSave).then(function(response)
      {
          if (response.data.status == 1) {
            $scope.workingDaysDbRowId = response.data.data.id;
              // Notification.success('Successfully Saved !!!');
          } 
          else {
              console.log('error saving working days');
          }
      });
    }

    $scope.updateCompanyWorkingDays = function () {
      var dbObjToSave = {};
      dbObjToSave.id = $scope.workingDaysDbRowId;
      for (var i = 0; i < $scope.workingDays.length; i++) {
        dbObjToSave[$scope.workingDays[i].dbName] = $scope.workingDays[i].selected;
      }
      // $scope.workingDaysDbRowId =
      AdminCompanyServices.updateWorkingDaysForCompany(dbObjToSave);
    }

    $scope.saveCompanyInvoicingDate = function (dbObjToSave) {
      dbObjToSave.companyId = $routeParams.compId;
      AdminCompanyServices.saveInvoicingDateForCompany(dbObjToSave).then(function(response)
      {
          if (response.data.status == 1) {
            $scope.invoicingDateDbRowId = response.data.data.id;
              // Notification.success('Successfully Saved !!!');
          } 
          else {
              console.log('error saving invoicing date');
          }
      });
    }

    $scope.updateCompanyInvoicingDate = function (dbObjToSave) {
      dbObjToSave.id = $scope.invoicingDateDbRowId;
      AdminCompanyServices.updateInvoicingDateForCompany(dbObjToSave);
    }


    // ====================  Invoicing Date =============================================
    $scope.Mid_of_date = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
      '13', '14', '15', '16', '17', '18', '19', '20', '21', '22',
      '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    // =================Requirements ================

    

    $scope.saveCompanyRequirements = function (obj, type) {
      console.log("client reqs : ", JSON.stringify($scope.clientRequirement));

      var dbObjToSave = {};
      dbObjToSave.companyId = $routeParams.compId;
      dbObjToSave.type = type;
      dbObjToSave.requirement = JSON.stringify(obj);

      AdminCompanyServices.saveRequirementForCompany(dbObjToSave).then(function(response)
      {
          if (response.data.status == 1) {
            obj.companyRequirementDbRowId = response.data.data.id;
              // Notification.success('Successfully Saved !!!');
          } 
          else {
              console.log('error saving invoicing date');
          }
      });

    }

    
    $scope.saveVendorRequirements = function (obj, type) {
      console.log("client reqs : ", JSON.stringify($scope.clientRequirement));

      var dbObjToSave = {};
      dbObjToSave.companyId = $routeParams.compId;
      dbObjToSave.type = type;
      dbObjToSave.requirement = JSON.stringify(obj);

      AdminCompanyServices.saveVendorRequirementForCompany(dbObjToSave).then(function(response)
      {
          if (response.data.status == 1) {
            obj.companyVendorRequirementDbRowId = response.data.data.id;
              // Notification.success('Successfully Saved !!!');
          } 
          else {
              console.log('error saving invoicing date');
          }
      });

    }

    


    // =============== additional requirements functions============
    $scope.addNewRow = function (menuDetails) {
      menuDetails.push({
        'columnName': ""
      });
    };

    $scope.remove = function (menuDetails, $index) {
      menuDetails.splice($index, 1);
    };

    $scope.saveAdditionalRequirements = function(obj, type)
    {
      // console.log("arr passed : ", JSON.stringify(arr.splice(0,1)));
      var dbArr = [];
      for (var i = 1; i < obj.arrVal.length; i++) {
        if(obj.arrVal[i].columnName !== "")
        {
          dbArr.push(obj.arrVal[i]);
        }
      }
      var dbObjToSave = {};
      dbObjToSave.companyId = $routeParams.compId;
      dbObjToSave.type = type;
      dbObjToSave.requirement = JSON.stringify(dbArr);

      AdminCompanyServices.saveAdditionalRequirementForCompany(dbObjToSave).then(function(response)
      {
          if (response.data.status == 1) {
            obj.additionaRequirementDbRowId = response.data.data.id;
              // Notification.success('Successfully Saved !!!');
          } 
          else {
              console.log('error saving invoicing date');
          }
      });
    }

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
      // console.log("response form listed : ", JSON.stringify(response));
      if (response.data.data.items != null) {
        for (var i = 0; i < $scope.itemCheckList.length; i++) {
          var itemEle = $scope.itemCheckList[i];
          // console.log("item element : ", JSON.stringify(itemEle));
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
      AdminCompanyServices.saveCheckListIndb(tempOb);
    }

    // monthly details 
    $scope.monthlyDateNDays = [{ date: "1/01/2019", day: "Monday" },
    { date: '1/02/2019', day: 'Tuesday' },
    { date: '1/03/2019', day: 'Wednesday' },
    { date: '1/04/2019', day: 'Thursday' },
    { date: '1/05/2019', day: 'Friday' },
    { date: '1/06/2019', day: 'Saturday' }, 
    { date: '1/07/2019', day: 'Sunday' }
    ];

    $scope.getAmount = function (obj) {
      var amount = 0;
      for (var key in obj) {
        console.log("key : ", key);
        if (obj.hasOwnProperty(key)) {
          obj[key].amount = (obj[key].pax * obj[key].price);
          console.log("amount  : ", amount);
        }
      }      
      return amount;
    };


 //======================  Pdf ==================================================
//  $scope.exportToPdf = function(){
//   html2canvas(document.getElementById('invoice'), {
//     onrendered: function (canvas) {
//       var data = canvas.toDataURL();
//       var docDefinition = {
//         content: [{
//           image: data,
//           width: 500,
//           pageSize: 'LEGAL',
//           extend: 'pdfHtml5',
//           orientation: 'landscape',
//           layout: 'noBorders',

//         }]
//       };
//                  // var doc = new jsPDF('p', 'mm', 'a4');
//                  //  var position = 0;
//       pdfMake.createPdf(docDefinition).download("invoice.pdf");
//       pdfMake.createPdf(docDefinition).download("invoice.pdf");
//     }
//   });
// }

        

        // =========================  vendor Monthly Details ======================================
// $scope.vendorMnthyDts = [ {  Date: "1/01/2019", Day: "MONDAY",    Pax: '10', Price: '10', Amount: '100' },
//                           {  Date: '1/02/2019', Day: 'TUESDAY',   Pax: '12', Price: '10', Amount: '120' },
//                           {  Date: '1/03/2019', Day: 'WEDNESDAY', Pax: '12', Price: '10', Amount: '100' },
//                           { Date: '1/04/2019',  Day: 'THURSDAY',  Pax: '10', Price: '10', Amount: '100' },
//                           { Date: '1/05/2019',  Day: 'FRIDAY',    Pax: '10', Price: '10', Amount: '100' },
//                           { Date: '1/06/2019',  Day: 'SATURDAY',  Pax: '10', Price: '10', Amount: '100' },
//                           { Date: '1/07/2019',  Day: 'SUNDAY',    Pax: '10', Price: '10', Amount: '100' }
//                           ];
   
//   $scope.clientMnthyDtls=["DATE","DAY","PAX","PRICE","AMOUNT","Name","Age",
//                           "contact","Address","Email","Telephone",""];
     



    $scope.clientMonthlyDetailsSave = function () {
      console.log("client monthly reqs : ", JSON.stringify($scope.clientRequirement));
    }
    //====================== Excel==================================================
    $scope.exportData = function () {
      $('#clientMonthlyDetailsSave').tableExport({ type: 'json', escape: 'false' });
    };
    $scope.exportToExcel = function (tableId) { // ex: '#my-table'
      var exportHref = Excel.tableToExcel(tableId, 'WireWorkbenchDataExport');
      $timeout(function () { location.href = exportHref; }, 500); // trigger download
    }

    //======================  Pdf ==================================================
    $scope.exportToPdf = function () {
      html2canvas(document.getElementById('invoice'), {
        onrendered: function (canvas) {
          var data = canvas.toDataURL();
          var docDefinition = {
            content: [{
              image: data,
              width: 550,
            
            }]
          };
          pdfMake.createPdf(docDefinition).download("invoice.pdf");
          pdfMake.createPdf(docDefinition).download("invoice.pdf");
        }
      });
    }
    // =========================  vendor Monthly Details ======================================
    $scope.vendorMnthyDts = [{ Date: "1/01/2019", Day: "MONDAY", Pax: '10', Price: '10', Amount: '100' },
    { Date: '1/02/2019', Day: 'TUESDAY', Pax: '12', Price: '10', Amount: '120' },
    { Date: '1/03/2019', Day: 'WEDNESDAY', Pax: '12', Price: '10', Amount: '100' },
    { Date: '1/04/2019', Day: 'THURSDAY', Pax: '10', Price: '10', Amount: '100' },
    { Date: '1/05/2019', Day: 'FRIDAY', Pax: '10', Price: '10', Amount: '100' },
    { Date: '1/06/2019', Day: 'SATURDAY', Pax: '10', Price: '10', Amount: '100' },
    { Date: '1/07/2019', Day: 'SUNDAY', Pax: '10', Price: '10', Amount: '100' }
    ];




    //invoice details
    $scope.itemInvoice = ["brkfstCheck", "2", "100", "200"];

   

  }
]);