vmApp.factory('vendorassignService',['$http','$q','$route','$httpParamSerializerJQLike','$location','Notification',
function($http,$q,$route,$httpParamSerializerJQLike,$location,Notification){
  return {
    passVendorId: function(vendorId,companyId,type,postVendorAssignUrl)
    {
      console.log("I am in srv.js file : ", vendorId,type,companyId);
      // var rest = JSON.parse(JSON.stringify(vendorId,companyId));
      var jsonObj = {};
      jsonObj.companyId = parseInt(companyId);
      jsonObj.vendorId = vendorId;
      jsonObj.type = type;
      var deferred = $q.defer();
      var respMenuJson = deferred.promise;

      console.log("json made : ", jsonObj);
        $http({
          method: 'POST',
          url: postVendorAssignUrl,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: $httpParamSerializerJQLike(jsonObj)
      }).then(function(response) {
          console.log('response', JSON.stringify(response));
          if (response.data.status == 1) {
            deferred.resolve(response.data.vendorId);
            console.log("vendore id testing---->",response.data.vendorId);
              Notification.success('Successfully Vendor Assigned');
              // $route.reload();
          } else {
              // console.log('error registering');
              deferred.reject(null);
              Notification.error('Could not assigne vendor');
          }
      });
      return respMenuJson;
    },
// ______________________Category_______________
activeCategory: function(data,postCategoryUrl){
  console.log("In Services File DATA",data,postCategoryUrl);
  $http({
    method: 'POST',
    url: postCategoryUrl,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: $httpParamSerializerJQLike(data)
}).then(function(response) {
    console.log('response', JSON.stringify(response));
    //console.log('response', response);
    if (response.data.status == 1) {
      Notification.success('Successfully Saved !!!');
        // console.log('Successfully registered breakfast details ');
        // $location.path('/admin/company/:id');
    } else {
        console.log('error registering');
        Notification.error('Could not save company details');
    }
});
},
// ______________________UN-Assigned Vendor_______________
unassigneVendor: function(id,unassignedVendorUrl){
  console.log("In Services File 5555",id,unassignedVendorUrl);
  document.getElementById('id07').style.display='none'
  var jsonObj = {};
  jsonObj.id=id;
  var deferred = $q.defer();
  var respMenuJson = deferred.promise;
  // jsonObj.companyId=companyId;
  $http({
    method: 'POST',
    url: unassignedVendorUrl,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: $httpParamSerializerJQLike(jsonObj)
}).then(function(response) {
    // console.log('response', JSON.stringify(response));
    if (response.data.status == 1) {
      deferred.resolve(response.data);
      Notification.success('Successfully Unassign Vendor !!!');
      // $route.reload();
        // console.log('Successfully registered breakfast details ');
        // $location.path('/admin/company/:id');
    } else {
        deferred.reject(null);
        console.log('error registering');
        Notification.error('Could not unassigned vendor');
    }
});
      return respMenuJson;
},
//............................breakfast........................
    saveReq: function(companyId,weekdaylogic,postCompanyReqUrl)
    {
      console.log("in sarvice file : ", weekdaylogic.breakfast,weekdaylogic.breakfastPrice,weekdaylogic.dayName);
      // var rest = JSON.parse(JSON.stringify(weekdaylogic));
      var jsonObj = {};
      weekdaylogic.companyId = parseInt(companyId);
      // jsonObj.breakfast = weekdaylogic.breakfast;
      // jsonObj.lunch = weekdaylogic.lunch;
      // jsonObj.snacks = weekdaylogic.snacks;
      // jsonObj.dinner = weekdaylogic.dinner;
      // jsonObj.breakfastPrice = weekdaylogic.breakfastPrice;
      // jsonObj.lunchPrice = weekdaylogic.lunchPrice;
      // jsonObj.snacksPrice = weekdaylogic.snacksPrice;
      // jsonObj.dinnerPrice = weekdaylogic.dinnerPrice;
      // jsonObj.dayName = weekdaylogic.dayName;

        console.log("breakfast json made : ", weekdaylogic);
        $http({
          method: 'POST',
          url: postCompanyReqUrl,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: $httpParamSerializerJQLike(weekdaylogic)
      }).then(function(response) {
          console.log('response', JSON.stringify(response));
          //console.log('response', response);
          if (response.data.status === 1) {
            Notification.success('Successfully save company details !!!');
              // console.log('Successfully registered breakfast details ');
              // $route.reload();
              var saveReqBool = false;
              // $location.path('/admin/company/:id');
          } else {
              console.log('error registering');
              Notification.error('Could not save company details');
          }
      });
    },
// ..................................................................
companyLoginIdSet: function(password,companyId,postCompanyLoginIdUrl)
{
  // var rest = JSON.parse(JSON.stringify(company));
  // console.log("breakfast json made : ", rest);
  var jsonObj = {};
  jsonObj.password = password;
  jsonObj.companyId = companyId;
  console.log("ssssss->>>>>>",JSON.stringify(jsonObj));
  $http({
    method: 'POST',
    url: postCompanyLoginIdUrl,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: $httpParamSerializerJQLike(jsonObj)
  }).then(function(response) {
        console.log('response', JSON.stringify(response));
        //console.log('response', response);
        if (response.data.status == 1) {
            // console.log('Successfully registered company loginId ');
            Notification.success('Successfully Set Company Password');
            // $location.path('/admin/company/:id');
        } else {
            console.log('error registering');
            Notification.error('Could not update password');
        }
    });
  },
//............................UPDATE REQ........................
    updateReq: function(companyId,weekdaylogic,updateCompanyReqUrl)
    {
      // console.log("in sarvice file : ", weekdaylogic);
      // var rest = JSON.parse(JSON.stringify(weekdaylogic));
      var jsonObj = {};
      weekdaylogic.companyId = parseInt(companyId);
      // jsonObj.breakfast = weekdaylogic.breakfast;
      // jsonObj.lunch = weekdaylogic.lunch;
      // jsonObj.snacks = weekdaylogic.snacks;
      // jsonObj.dinner = weekdaylogic.dinner;
      // jsonObj.breakfastPrice = weekdaylogic.breakfastPrice;
      // jsonObj.lunchPrice = weekdaylogic.lunchPrice;
      // jsonObj.snacksPrice = weekdaylogic.snacksPrice;
      // jsonObj.dinnerPrice = weekdaylogic.dinnerPrice;
      // jsonObj.dayName = weekdaylogic.dayName;


        console.log("breakfast json made : ", weekdaylogic);
        $http({
          method: 'POST',
          url: updateCompanyReqUrl,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: $httpParamSerializerJQLike(weekdaylogic)
      }).then(function(response) {
          console.log('response', JSON.stringify(response));
          //console.log('response', response);
          if (response.data.status == 1) {
              // console.log("data",response.data.data.id);
              // console.log("weekdaylogic---->",weekdaylogic.id);
                weekdaylogic.id = response.data.data.id;
              Notification.success('Successfully Requirements Updated');
          } else {
              console.log('error registering');
              Notification.error('Could not update requirements');
          }
      });
    },
// ..................................................................

//............................lunch........................
lunchSave: function (companyId, weekdaylogic, postCompanyReqUrl)
{
  console.log("in sarvice file : ", weekdaylogic.lunch,weekdaylogic.lunchPrice,weekdaylogic.dayName);
  // var rest = JSON.parse(JSON.stringify(weekdaylogic));
  var jsonObj = {};
  jsonObj.companyId = parseInt(companyId);
  jsonObj.lunch = weekdaylogic.lunch;
  jsonObj.lunchPrice = weekdaylogic.lunchPrice;
  jsonObj.dayName = weekdaylogic.dayName;

    console.log("lunch json made : ", jsonObj);
    $http({
      method: 'POST',
      url: postCompanyReqUrl,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: $httpParamSerializerJQLike(jsonObj)
  }).then(function(response) {
      console.log('response', JSON.stringify(response));
      //console.log('response', response);
      if (response.data.status == 1) {
          console.log('Successfully registered breakfast details ');
          // Notification.success('Successfully submit the company details');
          // $location.path('/admin/company/:id');
      } else {
          console.log('error registering');
          // Notification.error('Could not add a company details');
      }
  });
},
// ..................................................................
//............................snacks........................
snacksSave: function(companyId,weekdaylogic,postCompanyReqUrl)
{
  console.log("in sarvice file : ", weekdaylogic.snacks,weekdaylogic.snacksPrice,weekdaylogic.dayName);
  // var rest = JSON.parse(JSON.stringify(weekdaylogic));
  var jsonObj = {};
  jsonObj.companyId = parseInt(companyId);
  jsonObj.snacks = weekdaylogic.snacks;
  jsonObj.snacksPrice = weekdaylogic.snacksPrice;
  jsonObj.dayName = weekdaylogic.dayName;

    console.log("snacks json made : ", jsonObj);
    $http({
      method: 'POST',
      url: postCompanyReqUrl,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: $httpParamSerializerJQLike(jsonObj)
  }).then(function(response) {
      console.log('response', JSON.stringify(response));
      //console.log('response', response);
      if (response.data.status == 1) {
          console.log('Successfully registered snacks details ');
          // Notification.success('Successfully submit the company details');
          // $location.path('/admin/company/:id');
      } else {
          console.log('error registering');
          // Notification.error('Could not add a company details');
      }
  });
},
// ..................................................................
//............................dinner........................
dinnerSave: function(companyId,weekdaylogic,postCompanyReqUrl)
{
  console.log("in sarvice file : ", weekdaylogic.dinner,weekdaylogic.dinnerPrice,weekdaylogic.dayName);
  // var rest = JSON.parse(JSON.stringify(weekdaylogic));
  var jsonObj = {};
  jsonObj.companyId = parseInt(companyId);
  jsonObj.dinner = weekdaylogic.dinner;
  jsonObj.dinnerPrice = weekdaylogic.dinnerPrice;
  jsonObj.dayName = weekdaylogic.dayName;

    console.log("dinner json made : ", jsonObj);
    $http({
      method: 'POST',
      url: postCompanyReqUrl,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: $httpParamSerializerJQLike(jsonObj)
  }).then(function(response) {
      console.log('response', JSON.stringify(response));
      //console.log('response', response);
      if (response.data.status == 1) {
          console.log('Successfully registered dinner details ');
          // Notification.success('Successfully submit the company details');
          // $location.path('/admin/company/:id');
      } else {
          console.log('error registering');
          // Notification.error('Could not add a company details');
      }
  });
},
// ..................................................................
//.........................Cash and Carry............................
cashNCarrySave: function (companyId, weekdaylogic, postCompanyReqUrl) {
    console.log("in sarvice file : ", weekdaylogic.cashNCarry, weekdaylogic.cashNCarryPrice, weekdaylogic.dayName);
    // var rest = JSON.parse(JSON.stringify(weekdaylogic));
    var jsonObj = {};
    jsonObj.companyId = parseInt(companyId);
    jsonObj.cashNCarry = weekdaylogic.cashNCarry;
    jsonObj.cashNCarryPrice = weekdaylogic.cashNCarryPrice;
    jsonObj.dayName = weekdaylogic.dayName;

    console.log("cashNCarry json made : ", jsonObj);
    $http({
        method: 'POST',
        url: postCompanyReqUrl,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: $httpParamSerializerJQLike(jsonObj)
    }).then(function (response) {
        console.log('response', JSON.stringify(response));
        //console.log('response', response);
        if (response.data.status == 1) {
            console.log('Successfully registered cashNCarry details ');
            // Notification.success('Successfully submit the company details');
            // $location.path('/admin/company/:id');
        } else {
            console.log('error registering');
            // Notification.error('Could not add a company details');
        }
    });
},
//...................................................................
//.......................Mid-Night Snacks............................
midNightSnacksSave: function (companyId, weekdaylogic, postCompanyReqUrl) {
    console.log("in sarvice file : ", weekdaylogic.midNightSnacks, weekdaylogic.midNightSnacksPrice, weekdaylogic.dayName);

    // var rest = JSON.parse(JSON.stringify(weekdaylogic));
    var jsonObj = {};
    jsonObj.companyId = parseInt(companyId);
    jsonObj.midNightSnacks = weekdaylogic.midNightSnacks;
    jsonObj.midNightSnacksPrice = weekdaylogic.midNightSnacksPrice;
    jsonObj.dayName = weekdaylogic.dayName;

    console.log("midNightSnacks json made : ", jsonObj);
    $http({
        method: 'POST',
        url: postCompanyReqUrl,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: $httpParamSerializerJQLike(jsonObj)
    }).then(function (response) {
        console.log('response', JSON.stringify(response));
        //console.log('response', response);
        if (response.data.status == 1) {
            console.log('Successfully registered midNightSnacks details ');
            // Notification.success('Successfully submit the company details');
            // $location.path('/admin/company/:id');
        } else {
            console.log('error registering');
            // Notification.error('Could not add a company details');
        }
    });
},
//...................................................................

  }
}]);
