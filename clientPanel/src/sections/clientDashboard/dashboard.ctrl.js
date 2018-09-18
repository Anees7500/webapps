vmApp.controller('clientDashboardController', ['vendorassignService','$routeParams','$scope','Notification',
'$http','$rootScope','postVendorAssignUrl','getVendorAssignUrl','$location','$cookies','getCompanyProfileUrl',
'getUnassignedCompanyUrl','getAllVendorListUrl','postCompanyReqUrl','getCompanyReqUrl','unassignedVendorUrl',
'getVendorProfileUrl','updateCompanyReqUrl','postCompanyLoginIdUrl','corporateReviewsUrl',
'postCategoryUrl','getAllVendorToCompanyUrl','companyLogoUrl','Upload', '$timeout','$route',
function(vendorassignService,$routeParams,$scope,Notification,
  $http, $rootScope,postVendorAssignUrl,getVendorAssignUrl,$location,$cookies,getCompanyProfileUrl,
  getUnassignedCompanyUrl, getAllVendorListUrl,postCompanyReqUrl,getCompanyReqUrl,unassignedVendorUrl,
  getVendorProfileUrl,updateCompanyReqUrl,postCompanyLoginIdUrl,corporateReviewsUrl,
  postCategoryUrl,getAllVendorToCompanyUrl,companyLogoUrl,Upload, $timeout,$route)
{
  $scope.signOutAdmin = function(){
    $cookies.remove('company_name');
    $cookies.remove('company_id');
    $rootScope.adminSignOutBool=false;
    $rootScope.footerBool=false;
    $location.path('/client');
}
  var sObj = $location.search();
  if(sObj.enable != null)
  {
    enableBoools(sObj.enable)
  }
  if($cookies.get('company_name') == null)
  {
    Notification.warning("Login required!!!");
    $location.path('/client');
    $route.reload();
  }
  else
  {
    $routeParams.compId=$cookies.get('company_id');
    $rootScope.companyId=$cookies.get('company_id');
    $scope.companyPerson=$cookies.get('company_person');
    $scope.companyName=$cookies.get('company_name');
    $scope.data = {};

    $scope.category = function(data){
      $scope.data.companyId = $routeParams.compId
      vendorassignService.activeCategory(data,postCategoryUrl);
    }



$rootScope.adminSignOutBool=true;
$rootScope.footerBool=true;

var getCompProfileUrl = getCompanyProfileUrl+$routeParams.compId;
$http.get(getCompProfileUrl).then(function(response)
{
  $scope.cmpyName=response.data.data.company.companyName;
  $scope.data=response.data.data.company;
});

  var getFeedbackUrl = corporateReviewsUrl+$routeParams.compId;
  $http.get(getFeedbackUrl).then(function(response)
  {
    $scope.feedback=response.data.data.reviews;
  });

  var getAllVendorToCompany = getAllVendorToCompanyUrl+$routeParams.compId;
  $http.get(getAllVendorToCompany).then(function(response)
  {
    // console.log("getAllVendorToCompanyUrl",response.data.data.details);
    $scope.vendorList=response.data.data.details;
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

  var getCompUrl = getCompanyReqUrl+$routeParams.compId;
  $http.get(getCompUrl).then(function(response)
  {
    // console.log("response ", JSON.stringify(response));
    // $scope.companyRequirements = response.data.data.requirements;
    for(var i = 0; i <$scope.companyRequirements.length; i++){
      // console.log("in first loop");
      for(var j = 0; j <response.data.data.requirements.length; j++){
        // console.log("in second loop");
          if($scope.companyRequirements[i].dayName === response.data.data.requirements[j].dayName){
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
    if(reqObj.id==undefined){
      vendorassignService.saveReq(companyId,reqObj,postCompanyReqUrl);
    }else{
      vendorassignService.updateReq(companyId,reqObj,updateCompanyReqUrl);
    }
  }

  $scope.send = function(id,name){
    $scope.vName=name;
    $scope.unassignId=id;
    document.getElementById('id07').style.display='block'
    }

  $scope.unassignVendor = function(id){
      // console.log("id 9000",id);
      vendorassignService.unassigneVendor(id,unassignedVendorUrl)
      .then(function(returnedSaveMenu){
        // console.log("yehhhh its working 333");
        if (returnedSaveMenu !== null) {
          var getAllVendorToCompany = getAllVendorToCompanyUrl+$routeParams.compId;
          $http.get(getAllVendorToCompany).then(function(response)
          {
            // console.log("getAllVendorToCompanyUrl",response.data.data.details);
            $scope.vendorList=response.data.data.details;
          });
        }
      });
      }

  $scope.passVendorId = function(vendorId, type){
    var companyId = $routeParams.compId;
    // console.log("i am in ctrl file : ", companyId , vendorId, type);
        // alert("Company Id is "+companyId+" "+"Vendor Id is"+" "+vendorId);
      vendorassignService.passVendorId(vendorId,companyId,type,postVendorAssignUrl)
      .then(function(returnedSaveMenu){
        // console.log("yehhhh its working 333");
        if (returnedSaveMenu !== null) {
          var getAllVendorToCompany = getAllVendorToCompanyUrl+$routeParams.compId;
          $http.get(getAllVendorToCompany).then(function(response)
          {
            // console.log("getAllVendorToCompanyUrl",response.data.data.details);
            $scope.vendorList=response.data.data.details;
          });
        }
      });
    };

    $scope.companyLoginIdSet = function(password){
      var companyId = $routeParams.compId;
      vendorassignService.companyLoginIdSet(password,companyId,postCompanyLoginIdUrl)
    }

    // $scope.companySignup = function(company) {
    //     companydetailsService.companySignup(company,companySignupUrl);
    // }

  $http.get(getUnassignedCompanyUrl).then(function(response)
  {
    $scope.unassignedCompanies = response.data.data.companies;
  });

  // var getCompUrl = getCompanyReqUrl+$routeParams.compId;
  $http.get(getVendorAssignUrl).then(function(response)
  {
    $scope.particularVendorAssigned = response.data.data.companies;
    var companyId = $routeParams.compId;
    // console.log("all company list check data",$scope.particularVendorAssigned,companyId);

    // console.log("$scope.particularVendorAssigned.length check",$scope.particularVendorAssigned.length,$scope.particularVendorAssigned[0].id);

    for(i=0;i<$scope.particularVendorAssigned.length;i++)
    {
      if(companyId==$scope.particularVendorAssigned[i].id)
      {
        var vndrId=$scope.particularVendorAssigned[i].vendorId;
        // console.log("vendor Id is",vndrId);
        var getVendorProfile = getVendorProfileUrl+vndrId;
        // console.log("vendorrrrrrrr",getVendorProfile);
      }
    }
    $http.get(getVendorProfile).then(function(response)
    {
      // console.log("response ", JSON.stringify(response));
      $scope.FinalVendorAssign = response.data.data.vendor;
      // console.log("Final result ",$scope.FinalVendorAssign.name);
    })

  });

  $http.get(getAllVendorListUrl).then(function(response)
  {
    // console.log("response.data 555",response.data.data.vendors);
    $scope.allVendorsList = response.data.data.vendors;
        // console.log("response.data 560",$scope.allVendorsList);
  });

    $scope.weekday = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] ;
    // $scope.response = { time: ['Breakfast','Lunch','Snacks','Dinner'] };

    // bool Logic start
       $scope.boolFunction = function(value) {
         $scope.categoryBool = false;
         $scope.addRequirementBool = false;
         $scope.addAssignedToBool = false;
         $scope.SetLoginIdBool = false;
         $scope.FeedbackBool=false;
         $scope.LogoBool=false;
         $scope[value] = true;
       }
       $scope.boolFunction("categoryBool");
    // bool Logic end

        }
      }
        ]);
        
