adminApp.controller('CompanyController', ['$scope', '$http', 'AdminCompanyServices', 'postCategoryUrl', '$routeParams',
  'corporateReviewsUrl', 'getCompanyProfileUrl', 'getAllVendorListUrl', 'getItemCheckListForVendor',
  'getItemCheckListedForVendor', 'Excel', '$timeout', 'getCompanyWorkingDaysUrl', 'getCompanyInvoicingDate',
  'getCompanyAdditionalRequirements', 'getCompanyRequirements', 'getVendorRequirements', 'getMonthlyDetailsUrl',
  'getMonthsForMonthlyDetailsUrl',
  function ($scope, $http, AdminCompanyServices, postCategoryUrl, $routeParams, corporateReviewsUrl,
    getCompanyProfileUrl, getAllVendorListUrl, getItemCheckListForVendor,
    getItemCheckListedForVendor, Excel, $timeout, getCompanyWorkingDaysUrl,
    getCompanyInvoicingDate, getCompanyAdditionalRequirements, getCompanyRequirements,
    getVendorRequirements, getMonthlyDetailsUrl, getMonthsForMonthlyDetailsUrl
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

    //==============================================================
    //================ DEFINITION PART START========================
    //==============================================================


    //==============================================================
    /** Configuration Section Start*/
    //==============================================================


    /* Category */
    $scope.categories = [
      { displayName: "Breakfast", dbName: "breakfast" },
      { displayName: "Lunch", dbName: "lunch" },
      { displayName: "Snacks", dbName: "snacks" },
      { displayName: "Dinner", dbName: "dinner" },
      { displayName: "Mid-Night Snacks", dbName: "midNightSnacks" },
      { displayName: "Early Morning Snacks", dbName: "earlyMorningSnacks" },
      { displayName: "Cash & Carry", dbName: "cashNCarry" }
    ];

    /* Working Days */
    $scope.workingDays = [
      { day: "Monday", selected: false, dbName: "monday" },
      { day: "Tuesday", selected: false, dbName: "tuesday" },
      { day: "Wednesday", selected: false, dbName: "wednesday" },
      { day: "Thursday", selected: false, dbName: "thursday" },
      { day: "Friday", selected: false, dbName: "friday" },
      { day: "Saturday", selected: false, dbName: "saturday" },
      { day: "Sunday", selected: false, dbName: "sunday" }
    ];

    /* Invoicing Date */
    $scope.invoicingDate = {};

    $scope.Mid_of_date = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
    '13', '14', '15', '16', '17', '18', '19', '20', '21', '22',
    '23', '24', '25', '26', '27', '28', '29', '30', '31'];

    /* Additional Requirements */
    $scope.additionalReqDetails = {
      breakfast:
      {
        arrVal: [
          {
            'columnName': 'breakfast',
            'disabled': true
          }]
      },
      lunch:
      {
        arrVal: [
          {
            'columnName': 'lunch',
            'disabled': true
          }]
      },
      snacks:
      {
        arrVal: [
          {
            'columnName': 'snacks',
            'disabled': true
          }]
      },
      dinner:
      {
        arrVal: [
          {
            'columnName': 'dinner',
            'disabled': true
          }]
      },
      midNightSnacks:
      {
        arrVal: [
          {
            'columnName': 'midNightSnacks',
            'disabled': true
          }]
      },
      earlyMorningSnacks:
      {
        arrVal: [
          {
            'columnName': 'earlyMorningSnacks',
            'disabled': true
          }]
      }
    };

    //==============================================================
    /** Configuration Section End*/
    //==============================================================

    //==============================================================
    /** Requirement Section Start*/
    //==============================================================
    
    /* Client Requirement */
    $scope.clientRequirement = {};

    /* Vendor Requirement */
    $scope.vendorRequirement = {};

    //==============================================================
    /** Configuration Section End*/
    //==============================================================

    //==============================================================
    /** Item Check List */
    //==============================================================
    $scope.selectedItemCheckList = [];

    //==============================================================
    /** Assigned Start */
    //==============================================================

    //==============================================================
    /** Assigned End */
    //==============================================================


    //==============================================================
    /** Monthly Details Start */
    //==============================================================

    /* Client Monthly Details */
    $scope.clientMonthlyDetails = {};


    //==============================================================
    /** Monthly Details End */
    //==============================================================



    //==============================================================
    //================ DEFINITION PART END==========================
    //==============================================================


    //==============================================================
    //================ GET DATA FROM DB PART START==================
    //==============================================================


    
    //==============================================================
    /** Configuration Section Start*/
    //==============================================================

    /* Company Profile and Category */
    var getCompProfileUrl = getCompanyProfileUrl + $routeParams.compId;
    $http.get(getCompProfileUrl).then(function (response) {
      $scope.cmpyName = response.data.data.company.companyName;
      $scope.cmpyAddress = response.data.data.company.address;
      $scope.data = response.data.data.company;
    });

    /* Working Days */
     var getCompanyWorkingDaysUrl = getCompanyWorkingDaysUrl + $routeParams.compId;
    //  console.log("working day url : ", getCompanyWorkingDaysUrl);
     $http.get(getCompanyWorkingDaysUrl).then(function (response) {
       var tempWorkingDaysArrObj = {};
       if (response.data.data.workingDays.length == 1) {
         tempWorkingDaysArrObj = response.data.data.workingDays[0];
         $scope.workingDaysDbRowId = tempWorkingDaysArrObj.id;
       }
       for (var i = 0; i < $scope.workingDays.length; i++) {
         if (tempWorkingDaysArrObj[$scope.workingDays[i].dbName]) {
           $scope.workingDays[i].selected = true;
         }
       }
     });

    /* Invoicing Date */
    var invoicingDateUrl = getCompanyInvoicingDate + $routeParams.compId;
    $http.get(invoicingDateUrl).then(function (response) {
      if (response.data.status == 1) {
        $scope.invoicingDateDbRowId = response.data.data.invoicingDate.id;
        $scope.invoicingDate.firstOfNextMonth = response.data.data.invoicingDate.firstOfNextMonth;
        $scope.invoicingDate.monthEnd = response.data.data.invoicingDate.monthEnd;
        $scope.invoicingDate.midOfMonth = response.data.data.invoicingDate.midOfMonth;
      }
    });

    /* Additional Requirements */
    var additionalRequirementsUrl = getCompanyAdditionalRequirements + $routeParams.compId;
    $http.get(additionalRequirementsUrl).then(function (response) {
      if (response.data.status == 1) {
        var reqArr = response.data.data.additionalRequirements;
        if (reqArr.length > 0) {
          $scope.companyAdditionalRequirementBoolean = true;
        }
        angular.forEach(reqArr, function (item) {
          $scope.additionalReqDetails[item.type].additionalReqToggle = true;
          var dbSavedAdditionalReqArr = JSON.parse(item.requirement);
          $scope.additionalReqDetails[item.type].arrVal.push.apply($scope.additionalReqDetails[item.type].arrVal, dbSavedAdditionalReqArr);
          $scope.additionalReqDetails[item.type].additionaRequirementDbRowId = item.id;
        });
        // console.log("additional req = ", JSON.stringify($scope.additionalReqDetails));
      }
    });
    
    //==============================================================
    /** Configuration Section End*/
    //==============================================================

    
    //==============================================================
    /** Requirement Section Start*/
    //==============================================================

    /* Client Requirement */
    var companyRequirementsUrl = getCompanyRequirements + $routeParams.compId;
    $http.get(companyRequirementsUrl).then(function (response) {

      if (response.data.status == 1) {
        var reqArr = response.data.data.requirements;
        angular.forEach(reqArr, function (item) {
          $scope.clientRequirement[item.type] = JSON.parse(item.requirement);
          $scope.clientRequirement[item.type].companyRequirementDbRowId = item.id;
        });
        // console.log("compay requirements : ",JSON.stringify($scope.clientRequirement));
      }
    });

    /* Vendor Requirement */
     var vendorRequirementsUrl = getVendorRequirements + $routeParams.compId;
     $http.get(vendorRequirementsUrl).then(function (response) {
       if (response.data.status == 1) {
         var reqArr = response.data.data.requirements;
         angular.forEach(reqArr, function (item) {
           $scope.vendorRequirement[item.type] = JSON.parse(item.requirement);
           $scope.vendorRequirement[item.type].companyVendorRequirementDbRowId = item.id;
         });
       }
     });
    //==============================================================
    /** Requirement Section End*/
    //==============================================================

    //==============================================================
    /** Employee Feedback Start */
    //==============================================================
     var getFeedbackUrl = corporateReviewsUrl + $routeParams.compId;
     $http.get(getFeedbackUrl).then(function (response) {
       $scope.feedback = response.data.data.reviews;
     });
    //==============================================================
    /** Employee Feedback End */
    //==============================================================

    
    //==============================================================
    /** Monthly Requirement Start */
    //==============================================================

    /* get months for monthly details i.e current and previous*/
    $http.get(getMonthsForMonthlyDetailsUrl).then(function (response) {
      $scope.monthsForMonthlyDetails = response.data.data.months;
      $scope.selectedMonthForMonthlyDetails = $scope.monthsForMonthlyDetails.current;
    });

    /* Client Monthly Details */
    var getMonthlyDetails = function () {
      var monthlyDetailsUrl = getMonthlyDetailsUrl + $routeParams.compId +
        "&month=" + $scope.selectedMonthForMonthlyDetails.name + "&year=" + $scope.selectedMonthForMonthlyDetails.year;
      $http.get(monthlyDetailsUrl).then(function (response) {

        if (response.data.status == 1) {
          $scope.clientMonthlyDetails = response.data.data.monthlyDetails;
          angular.forEach($scope.clientMonthlyDetails, function (value, key) {
            // $scope.clientMonthlyDetails[key].details = JSON.parse(value.details);
            angular.forEach($scope.clientMonthlyDetails[key].details, function (i) {
              angular.forEach($scope.clientRequirement, function (v, k) {

                if(i[k] != null)
                {
                  // var kSize = Object.keys(i[k].dtls).length;
                  // var cRSize = Object.keys(v[i.day]).length;
                  // if(kSize != cRSize)
                  // {

                  // }
                }
                else{
                  if (v[i.day] != null) {
                    var amountVal = 0;
                    i[k] = {};
                    i[k].dtls = v[i.day];
                    angular.forEach(v[i.day], function (y, x) {
                      // i[k].arr.push(y);
                      amountVal = amountVal + (y.pax * y.price);
                    });
                    i[k].amount = amountVal;
                  }
                  else {
                    var amountVal = 0;
                    i[k] = {};
                    i[k].dtls = {};
                    console.log("key value : ", key);
                    angular.forEach($scope.additionalReqDetails[k].arrVal, function (a) {
                      var tObj = {};
                      tObj.pax = 0;
                      tObj.price = 0;
                      i[k].dtls[a.columnName] = tObj;
                      // i[k].arr.push(tObj);
                    });
                    i[k].amount = amountVal;
                  }
                }
                
              });
            });
          });
          console.log("monthly details with dates ", JSON.stringify($scope.clientMonthlyDetails));
        }
      });
    }

   //==============================================================
   /** Monthly Requirement End */
   //==============================================================
     


    //==============================================================
    //================ GET DATA FROM DB PART END====================
    //==============================================================


    //==============================================================
    //================ POST DATA TO DB PART START===================
    //==============================================================

    //==============================================================
    /** Configuration Section Start*/
    //==============================================================

    /* Category */
    $scope.saveCategory = function (data) {
      data.companyId = $routeParams.compId;
      // console.log("Task Active Field", $scope.data.companyId);
      AdminCompanyServices.activeCategory(data, postCategoryUrl);
    }

    /* Working Days */
    $scope.saveCompanyWorkingDays = function () {
      var dbObjToSave = {};
      dbObjToSave.companyId = $routeParams.compId;
      for (var i = 0; i < $scope.workingDays.length; i++) {
        dbObjToSave[$scope.workingDays[i].dbName] = $scope.workingDays[i].selected;
      }
      AdminCompanyServices.saveWorkingDaysForCompany(dbObjToSave).then(function (response) {
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
      AdminCompanyServices.updateWorkingDaysForCompany(dbObjToSave);
    }

    /* Invoicing Date */
    $scope.saveCompanyInvoicingDate = function (dbObjToSave) {
      dbObjToSave.companyId = $routeParams.compId;
      AdminCompanyServices.saveInvoicingDateForCompany(dbObjToSave).then(function (response) {
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

    /* Additional Requirements */
    $scope.saveAdditionalRequirements = function (obj, type) {
      var dbArr = [];
      for (var i = 1; i < obj.arrVal.length; i++) {
        if (obj.arrVal[i].columnName !== "") {
          dbArr.push(obj.arrVal[i]);
        }
      }
      var dbObjToSave = {};
      dbObjToSave.companyId = $routeParams.compId;
      dbObjToSave.type = type;
      dbObjToSave.requirement = JSON.stringify(dbArr);

      AdminCompanyServices.saveAdditionalRequirementForCompany(dbObjToSave).then(function (response) {
        if (response.data.status == 1) {
          obj.additionaRequirementDbRowId = response.data.data.id;
          // Notification.success('Successfully Saved !!!');
        }
        else {
          console.log('error saving invoicing date');
        }
      });
    }

    //==============================================================
    /** Configuration Section End*/
    //==============================================================

    //==============================================================
    /** Requirement Section Start*/
    //==============================================================

    /* Client Requirement */
    $scope.saveCompanyRequirements = function (obj, type) {
      var dbObjToSave = {};
      dbObjToSave.companyId = $routeParams.compId;
      dbObjToSave.type = type;
      dbObjToSave.requirement = JSON.stringify(obj);

      AdminCompanyServices.saveRequirementForCompany(dbObjToSave).then(function (response) {
        if (response.data.status == 1) {
          obj.companyRequirementDbRowId = response.data.data.id;
          // Notification.success('Successfully Saved !!!');
        }
        else {
          console.log('error saving invoicing date');
        }
      });

    }

    /* Vendor Requirement */
    $scope.saveVendorRequirements = function (obj, type) {
      var dbObjToSave = {};
      dbObjToSave.companyId = $routeParams.compId;
      dbObjToSave.type = type;
      dbObjToSave.requirement = JSON.stringify(obj);

      AdminCompanyServices.saveVendorRequirementForCompany(dbObjToSave).then(function (response) {
        if (response.data.status == 1) {
          obj.companyVendorRequirementDbRowId = response.data.data.id;
          // Notification.success('Successfully Saved !!!');
        }
        else {
          console.log('error saving invoicing date');
        }
      });
    }

    //==============================================================
    /** Requirement Section End*/
    //==============================================================

    //==============================================================
    /** Monthly Details Start*/
    //==============================================================

    /* Client Monthly Details */
    $scope.saveClientMonthlyDetails = function (obj) {
      var tempWeekArr = obj.details;
      var newWeekArr = [];
      angular.forEach(tempWeekArr, function(weekEle){
        var weekDetailObj = {};
        weekDetailObj.date = weekEle.date;
        weekDetailObj.day = weekEle.day;
        weekDetailObj[$scope.tempCategoryForClientMonthlyDtls.dbName] = weekEle[$scope.tempCategoryForClientMonthlyDtls.dbName];
        newWeekArr.push(weekDetailObj);
      });
      // console.log("passed obj : ", JSON.stringify(newWeekArr));
      var dbObjToSave = {};
      dbObjToSave.companyId = $routeParams.compId;
      dbObjToSave.type = $scope.tempCategoryForClientMonthlyDtls.dbName;
      dbObjToSave.month = $scope.selectedMonthForMonthlyDetails.name;
      dbObjToSave.year = $scope.selectedMonthForMonthlyDetails.year;
      dbObjToSave.week = $scope.selectedWeekForMonthlyDetails;

      dbObjToSave.requirement = JSON.stringify(newWeekArr);

      AdminCompanyServices.saveClientMonthlyDetails(dbObjToSave).then(function (response) {
        if (response.data.status == 1) {
          if(obj.dbRowId == null)
          {
            obj.dbRowId = {}
          }
          obj.dbRowId[dbObjToSave.type] = response.data.data.id;
          // Notification.success('Successfully Saved !!!');

          console.log("after saving : ", JSON.stringify($scope.clientMonthlyDetails));
        }
        else {
          console.log('error saving invoicing date');
        }
      });
    }
    //==============================================================
    /** Monthly Details End*/
    //==============================================================

    //==============================================================
    //================ POST DATA TO DB PART END=====================
    //==============================================================


    
    //==============================================================
    //================ FUNCTIONS START==============================
    //==============================================================
    
    /* Invoicing Date */
    $scope.selectAll = function () {
      angular.forEach($scope.workingDays, function (item) {
        item.selected = event.target.checked;
      });
    }

    /* Additional Requirement */
    $scope.addNewRow = function (menuDetails) {
      menuDetails.push({
        'columnName': ""
      });
    };
    $scope.remove = function (menuDetails, $index) {
      menuDetails.splice($index, 1);
    };

    /* Client Monthly Details */
    $scope.selectMonthForMonthlyDetails = function (obj) {
      $scope.selectedMonthForMonthlyDetails = obj;
      $scope.selectedWeekForMonthlyDetails = "week1";
      getMonthlyDetails();
    }
    $scope.selectWeekForMonthlyDetails = function (weekName) {
      $scope.selectedWeekForMonthlyDetails = weekName;
    }
    $scope.assignCategoryForClientMonthlyDtls = function (obj) {
      $scope.tempCategoryForClientMonthlyDtls = {};
      $scope.tempCategoryForClientMonthlyDtls.dbName = obj.dbName;
      $scope.tempCategoryForClientMonthlyDtls.displayName = obj.displayName;
    }

    //==============================================================
    //================ FUNCTIONS END==============================
    //==============================================================

    

    $scope.exportData = function () {
      $('#feedback').tableExport({ type: 'json', escape: 'false' });
    };
    $scope.exportToExcel = function (tableId) { // ex: '#my-table'
      var exportHref = Excel.tableToExcel(tableId, 'WireWorkbenchDataExport');
      $timeout(function () { location.href = exportHref; }, 500); // trigger download
    }

    

    

    


    

    


   

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

    


    // ==================== Item check list ==============             

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