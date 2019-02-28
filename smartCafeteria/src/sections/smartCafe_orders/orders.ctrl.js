empApp.controller('OrdersController', ['$scope','$http','getSmartCafeteriaOrders','getVendorList',
  function($scope,$http, getSmartCafeteriaOrders,getVendorList) {
  


        $scope.activeBookingBool = true;
        var companyId = 1;
        //get active Bookings
        var activeBookingListUrl = getSmartCafeteriaOrders + "?companyId="+1+"&bookerId="+77+"&type=pending";
        $http.get(activeBookingListUrl).then(function (response) {
          $scope.activeBookingList = response.data.data.bookings;
        });

        var allBookingListUrl = getSmartCafeteriaOrders + "?companyId="+1+"&bookerId="+77+"&type=all";
        $http.get(allBookingListUrl).then(function (response) {
          $scope.allBookingList = response.data.data.bookings;
        });

        var vendorListUrl = getVendorList + companyId;
        $http.get(vendorListUrl).then(function (response) {
          $scope.vendorList = response.data.data.details;
          // $scope.selectedVendor = $scope.vendorList[0];
          // getMenus();
          // console.log("selected vendor : ", JSON.stringify($scope.selectedVendor));
        });

        var getVendorName = function(id)
        {
          // debugger;
          var vName = "";
          // console.log("vendor list obj : ", $scope.vendorList);
          // console.log("vendor list : ", JSON.stringify($scope.vendorList )); 
          angular.forEach($scope.vendorList, function(vl){
            // console.log("vendor list  ele : ", JSON.stringify(vl )); 
            if(vl.vendorId == id)
            {
              vName =  vl.name;
            }
          });

          return vName;
        }

        $scope.getVendorCombinations = function(menuArr)
        {
          // debugger;
          var vendorList = [];
          var vendorNameCombination = "";
          for(var i=0; i< menuArr.length -1; i++)
          {
           var ele = menuArr[i];
            if(!vendorList.includes(ele.vendorId))
            {
              vendorNameCombination = getVendorName(ele.menuObj.vendorId)+"-"+ vendorNameCombination;
              vendorList.push(ele.vendorId);
            }
          }
          console.log("hahahaha : ", vendorNameCombination);
          return vendorNameCombination.substring(0, vendorNameCombination.length - 1);
        }

        $scope.getMenuForOrdersPage = function(menuArr)
        {
          var menuCombo = "";
          angular.forEach(menuArr, function(ele){
            // debugger;
            menuCombo = (ele.quantity+" x "+ele.menuObj.menuName)+", "+menuCombo;
          });
          console.log("menu Combo : ", menuCombo);
          return menuCombo.substring(0, menuCombo.length - 2);
        }

        $scope.getBookingStatusForUser = function(booking)
        {
          var respStatus;
          if(booking.status == 'USERREQUESTED')
          {
            respStatus = 'PENDING';
          }
          else if(booking.status == 'ACCEPTED')
          {
            respStatus = booking.status;
          }
          else if(booking.status == 'REJECTED')
          {
            respStatus = booking.status;
          }
          else if(booking.status == 'DELIVERED')
          {
            respStatus = 'COMPLETED';
          }
          return respStatus;
        }
        //================ Ratingfeedback ============================
        var maxRating = 5;
        $scope.stars = [].constructor(maxRating);
        $scope.ratingParameters = [
        
          {
            name: "Taste",
            rating: 4
    
          },
          {
            name: "Quality",
            rating: 4
          }
        ];
    
        $scope.rateBy = function (j, star) {
          console.log("hhhsh cdhbdsjhs : ", star);
          console.log("hhhshs : ", JSON.stringify($scope.stars));
          j.rating = star;
    
        }

        
  }

  ]);