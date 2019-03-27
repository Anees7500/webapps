vendorApp.controller('NavbarController', ['$scope', '$http', '$cookies', 'Notification', '$location', '$route', 'NavbarService','VendorCommonDetail','getCurrentTimestampUrl',
  function ($scope, $http, $cookies, Notification, $location, $route, NavbarService,VendorCommonDetail,getCurrentTimestampUrl) {

    $scope.logout = function () {
        $cookies.remove('vendorname'); 
        $cookies.remove('token');
        $cookies.remove('vendorId');
        $cookies.remove('email');
        $cookies.remove('name');
        $cookies.remove('mobile');
        $cookies.remove('authUserId');
        $location.path('/');
    }
    // if ($cookies.get('vendorId') == null) {
    //     Notification.warning("Login required!!!");
    //     $location.path('/');
    //     $route.reload();
    // }

    // =======================================Refresh New Token======================================

    var serviceTokenTimeSatmp = parseInt($cookies.get("vendor_expires_in"));
    
    setInterval(function() {          
      $http.get(getCurrentTimestampUrl).then(function(res){        
        $scope.currentServerTime = res.data.data.currentTimestamp;
        console.log("second toke time",$scope.currentServerTime);
        if((serviceTokenTimeSatmp <  $scope.currentServerTime) ||(serviceTokenTimeSatmp ==  $scope.currentServerTime)){ 
          
          VendorCommonDetail.generateNewAccessToken().then(function(tokenResponse) {
            console.log("token resposne : ", tokenResponse);
            if (tokenResponse.data.data != null) {
                $cookies.put("vendor_access_token", tokenResponse.data.data.access_token);
                $cookies.put("vendor_expires_in", tokenResponse.data.data.expires_in);
                
            }
        });
          alert("not equal");
        }
      },function(){

      })
   }, 300000);
    // ========================================================================================

  }
]);
