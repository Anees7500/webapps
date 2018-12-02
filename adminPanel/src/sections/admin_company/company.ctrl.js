vmApp.controller('CompanyController', ['vendorassignService', '$routeParams', '$scope', 'Notification',
  '$http', '$rootScope', 'postVendorAssignUrl', 'getVendorAssignUrl', '$location', '$cookies', 'getCompanyProfileUrl',
  'getUnassignedCompanyUrl', 'getAllVendorListUrl', 'postCompanyReqUrl', 'getCompanyReqUrl', 'unassignedVendorUrl',
  'getVendorProfileUrl', 'updateCompanyReqUrl', 'postCompanyLoginIdUrl', 'corporateReviewsUrl',
  'postCategoryUrl', 'getAllVendorToCompanyUrl', 'companyLogoUrl', 'Upload', '$timeout', 'getVendorCompanyReqUrl',
  'getItemCheckListForVendor', 'getItemCheckListedForVendor',
  function(vendorassignService, $routeParams, $scope, Notification,
    $http, $rootScope, postVendorAssignUrl, getVendorAssignUrl, $location, $cookies, getCompanyProfileUrl,
    getUnassignedCompanyUrl, getAllVendorListUrl, postCompanyReqUrl, getCompanyReqUrl, unassignedVendorUrl,
    getVendorProfileUrl, updateCompanyReqUrl, postCompanyLoginIdUrl, corporateReviewsUrl,
    postCategoryUrl, getAllVendorToCompanyUrl, companyLogoUrl, Upload, $timeout, getVendorCompanyReqUrl,
    getItemCheckListForVendor, getItemCheckListedForVendor) {

    // console.log("aman here : ");
    var sObj = $location.search();
    if (sObj.enable != null) {
      enableBoools(sObj.enable)
    }
    console.log("query param : ", sObj.bools);
    if ($cookies.get('admin_username') == null) {
      Notification.warning("Login required!!!");
      $location.path('/adminlogin');
      $route.reload();
    } else {
      $rootScope.companyId = $routeParams.compId;
      $scope.data = {};
      $scope.category = function(data) {
        $scope.data.companyId = $routeParams.compId;
        console.log("Task Active Field", $scope.data.companyId);
        vendorassignService.activeCategory(data, postCategoryUrl);
      }


      // _____________logo image upload____________
      $scope.uploadFiles = function(file, errFiles) {
        console.log("ctrl file 1100", file);
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
          var getUploadLogo = companyLogoUrl + $scope.companyId;
          file.upload = Upload.upload({
            url: getUploadLogo,
            data: {
              file: file
            }
          });

          file.upload.then(function(response) {
            $timeout(function() {
              file.result = response.data;
            });
          }, function(response) {
            if (response.status > 0)
              $scope.errorMsg = response.status + ': ' + response.data;
          }, function(evt) {
            file.progress = Math.min(100, parseInt(100.0 *
              evt.loaded / evt.total));
          });
        }
      }
      // _____________________end_____________
      $rootScope.adminSignOutBool = true;
      $rootScope.footerBool = true;

      var getCompProfileUrl = getCompanyProfileUrl + $routeParams.compId;
      $http.get(getCompProfileUrl).then(function(response) {
        $scope.cmpyName = response.data.data.company.companyName;
        $scope.data = response.data.data.company;
      });

      var getFeedbackUrl = corporateReviewsUrl + $routeParams.compId;
      $http.get(getFeedbackUrl).then(function(response) {
        $scope.feedback = response.data.data.reviews;
      });

      var getAllVendorToCompany = getAllVendorToCompanyUrl + $routeParams.compId;
      $http.get(getAllVendorToCompany).then(function(response) {
        console.log("getAllVendorToCompanyUrl", response.data.data.details);
        $scope.vendorList = response.data.data.details;
      });



      $scope.companyRequirements = [];
      var mondayObj = {};
      mondayObj.dayName = "MONDAY";

      var tuesdayObj = {};
      tuesdayObj.dayName = "TUESDAY";

      var wednesdayObj = {};
      wednesdayObj.dayName = "WEDNESDAY";

      var thursdayObj = {};
      thursdayObj.dayName = "THURSDAY";

      var fridayObj = {};
      fridayObj.dayName = "FRIDAY";

      var saturdayObj = {};
      saturdayObj.dayName = "SATURDAY";

      var sundayObj = {};
      sundayObj.dayName = "SUNDAY";

      $scope.companyRequirements.push(mondayObj);
      $scope.companyRequirements.push(tuesdayObj);
      $scope.companyRequirements.push(wednesdayObj);
      $scope.companyRequirements.push(thursdayObj);
      $scope.companyRequirements.push(fridayObj);
      $scope.companyRequirements.push(saturdayObj);
      $scope.companyRequirements.push(sundayObj);

      var getCompUrl = getCompanyReqUrl + $routeParams.compId;
      $http.get(getCompUrl).then(function(response) {
        // console.log("response ", JSON.stringify(response));
        // $scope.companyRequirements = response.data.data.requirements;
        for (var i = 0; i < $scope.companyRequirements.length; i++) {
          // console.log("in first loop");
          for (var j = 0; j < response.data.data.requirements.length; j++) {
            // console.log("in second loop");
            if ($scope.companyRequirements[i].dayName === response.data.data.requirements[j].dayName) {
              $scope.companyRequirements[i] = response.data.data.requirements[j];
              // $rootScope.activeSaveBool="false";
              // $rootScope.activeUpdateBool="true";
            }
          }
        }
        // console.log("companyRequirements ", JSON.stringify($scope.companyRequirements));
      });

      $scope.saveRequirement = function(reqObj) {
        // console.log("current sndp==== : ", reqObj.id);
        var companyId = $routeParams.compId;
        if (reqObj.id === undefined) {
          vendorassignService.saveReq(companyId, reqObj, postCompanyReqUrl);
        } else {
          vendorassignService.updateReq(companyId, reqObj, updateCompanyReqUrl);
        }
      }

      // ======================================
      // Vendor part
      // =========================================

      $scope.vendorCompanyRequirements = [];
      var mondayObj = {};
      mondayObj.dayName = "MONDAY";

      var tuesdayObj = {};
      tuesdayObj.dayName = "TUESDAY";

      var wednesdayObj = {};
      wednesdayObj.dayName = "WEDNESDAY";

      var thursdayObj = {};
      thursdayObj.dayName = "THURSDAY";

      var fridayObj = {};
      fridayObj.dayName = "FRIDAY";

      var saturdayObj = {};
      saturdayObj.dayName = "SATURDAY";

      var sundayObj = {};
      sundayObj.dayName = "SUNDAY";

      $scope.vendorCompanyRequirements.push(mondayObj);
      $scope.vendorCompanyRequirements.push(tuesdayObj);
      $scope.vendorCompanyRequirements.push(wednesdayObj);
      $scope.vendorCompanyRequirements.push(thursdayObj);
      $scope.vendorCompanyRequirements.push(fridayObj);
      $scope.vendorCompanyRequirements.push(saturdayObj);
      $scope.vendorCompanyRequirements.push(sundayObj);

      var getVendorCompUrl = getVendorCompanyReqUrl + $routeParams.compId;
      $http.get(getVendorCompUrl).then(function(response) {
        // console.log("response ", JSON.stringify(response));
        // $scope.companyRequirements = response.data.data.requirements;
        for (var i = 0; i < $scope.vendorCompanyRequirements.length; i++) {
          // console.log("in first loop");
          for (var j = 0; j < response.data.data.requirements.length; j++) {
            // console.log("in second loop");
            if ($scope.vendorCompanyRequirements[i].dayName === response.data.data.requirements[j].dayName) {
              $scope.vendorCompanyRequirements[i] = response.data.data.requirements[j];
              // $rootScope.activeSaveBool="false";
              // $rootScope.activeUpdateBool="true";
            }
          }
        }
        // console.log("companyRequirements ", JSON.stringify($scope.companyRequirements));
      });

      $scope.saveVendorRequirement = function(reqObj) {
        // console.log("current sndp==== : ", reqObj.id);
        var companyId = $routeParams.compId;
        if (reqObj.id === undefined) {
          vendorassignService.saveVendorReq(companyId, reqObj);
        } else {
          vendorassignService.updateVendorReq(companyId, reqObj);
        }
      }

      $scope.send = function(id, name) {
        $scope.vName = name;
        $scope.unassignId = id;
        document.getElementById('id07').style.display = 'block'
      }
      // ................ UN-Assigned Vendor..... //
      $scope.unassignVendor = function(id) {
        console.log("id 9000", id);
        vendorassignService.unassigneVendor(id, unassignedVendorUrl)
          .then(function(returnedSaveMenu) {
            console.log("yehhhh its working 333");
            if (returnedSaveMenu !== null) {
              var getAllVendorToCompany = getAllVendorToCompanyUrl + $routeParams.compId;
              $http.get(getAllVendorToCompany).then(function(response) {
                console.log("getAllVendorToCompanyUrl", response.data.data.details);
                $scope.vendorList = response.data.data.details;
              });
            }
          });
      }

      $scope.passVendorId = function(vendorId, type) {
        var companyId = $routeParams.compId;
        console.log("vendor pass id : ", companyId, vendorId, type);
        // alert("Company Id is "+companyId+" "+"Vendor Id is"+" "+vendorId);
        vendorassignService.passVendorId(vendorId, companyId, type, postVendorAssignUrl)
          .then(function(returnedSaveMenu) {
            console.log("yehhhh its working 333");
            if (returnedSaveMenu !== null) {
              var getAllVendorToCompany = getAllVendorToCompanyUrl + $routeParams.compId;
              $http.get(getAllVendorToCompany).then(function(response) {
                console.log("getAllVendorToCompanyUrl", response.data.data.details);
                $scope.vendorList = response.data.data.details;
              });
            }
          });
      };

      $scope.companyLoginIdSet = function(client) {
        var companyId = $routeParams.compId;
        vendorassignService.companyLoginIdSet(client, companyId, postCompanyLoginIdUrl)
      }

      // $scope.companySignup = function(company) {
      //     companydetailsService.companySignup(company,companySignupUrl);
      // }

      $http.get(getUnassignedCompanyUrl).then(function(response) {
        $scope.unassignedCompanies = response.data.data.companies;
      });

      // var getCompUrl = getCompanyReqUrl+$routeParams.compId;
      $http.get(getVendorAssignUrl).then(function(response) {
        $scope.particularVendorAssigned = response.data.data.companies;
        var companyId = $routeParams.compId;
        // console.log("all company list check data",$scope.particularVendorAssigned,companyId);

        // console.log("$scope.particularVendorAssigned.length check",$scope.particularVendorAssigned.length,$scope.particularVendorAssigned[0].id);

        for (i = 0; i < $scope.particularVendorAssigned.length; i++) {
          if (companyId === $scope.particularVendorAssigned[i].id) {
            var vndrId = $scope.particularVendorAssigned[i].vendorId;
            // console.log("vendor Id is",vndrId);
            var getVendorProfile = getVendorProfileUrl + vndrId;
            // console.log("vendorrrrrrrr",getVendorProfile);
          }
        }
        $http.get(getVendorProfile).then(function(response) {
          // console.log("response ", JSON.stringify(response));
          $scope.FinalVendorAssign = response.data.data.vendor;
          // console.log("Final result ",$scope.FinalVendorAssign.name);
        })

      });

      $http.get(getAllVendorListUrl).then(function(response) {
        console.log("response.data 555", response.data.data.vendors);
        $scope.allVendorsList = response.data.data.vendors;
        console.log("response.data 560", $scope.allVendorsList);
      });

      $scope.weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      // $scope.response = { time: ['Breakfast','Lunch','Snacks','Dinner'] };

      // bool Logic start
      $scope.boolFunction = function(value) {
        $scope.categoryBool = false;
        $scope.addRequirementBool = false;
        $scope.addAssignedToBool = false;
        $scope.SetLoginIdBool = false;
        $scope.FeedbackBool = false;
        $scope.LogoBool = false;
        $scope.monthBool = false;
        $scope.vendormonthBool = false;
        $scope.dispatchdetails = false;
        $scope.itemCheckListBool = false;
        $scope[value] = true;
      }
      $scope.boolFunction("categoryBool");
      // bool Logic end

      //item check list code starts from here
      $scope.selectedItemCheckList = [];
      $http.get(getItemCheckListForVendor).then(function(response) {
        $scope.itemCheckList = response.data.data.items;
      });

      // console.log("response form url : ", getItemCheckListedForVendor);
      $http.get(getItemCheckListedForVendor+$routeParams.compId).then(function(response) {
        console.log("response form listed : ", JSON.stringify(response));
        if (response.data.data.items != null) {
          console.log("hello world");
          for(var i=0; i<$scope.itemCheckList.length;i++)
          {
            var itemEle = $scope.itemCheckList[i];
            console.log("item element : ", JSON.stringify(itemEle));
            for(var j=0; j<response.data.data.items.length;j++)
            {
              var dbItem = response.data.data.items[j];
              if(itemEle.id == dbItem.id)
              {
                itemEle.quantity = dbItem.quantity;
                itemEle.enabled = dbItem.enabled;
              }
            }
          }
        }
      });

      $scope.toggle = function(item, list) {
        if(item.enabled)
        {
          item.enabled = false;
          item.quantity = null;
        }
        else {
          item.enabled = true;
        }
        // var idx = list.indexOf(item);
        // if (idx > -1) {
        //   list.splice(idx, 1);
        // } else {
        //   list.push(item);
        // }
        //
        // console.log("selected List : ", JSON.stringify($scope.selectedItemCheckList));
      };

      $scope.exists = function(item, list) {
        return item.enabled;
      };

      $scope.getQuantity = function(item, list) {
         var val = list.some(function(element) {
          if(element.id === item.id)
          {

            return element.quantity;
          }
        });

        console.log("quantiit value : ", val);
        return val;
      };

      $scope.saveCheckListIndb = function() {
        var tempOb = {};
        tempOb.companyId = $routeParams.compId;
        tempOb.vendorId = -1;
        var jj = {};
        jj.items = $scope.itemCheckList;
        tempOb.data = JSON.stringify(jj);
        vendorassignService.saveCheckListIndb(tempOb);
      }

    }

  }
]);
