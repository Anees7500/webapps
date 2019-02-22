adminApp.controller('VendorController', ['$scope', '$routeParams', '$rootScope', 'getAllCompanyToVendorUrl',
  '$http', 'getVendorProfileUrl', 'getImageUrl', '$cookies', '$location', '$route', 'Notification',
  function ($scope, $routeParams, $rootScope, getAllCompanyToVendorUrl, $http, getVendorProfileUrl,
     getImageUrl, $cookies, $location, $route, Notification) {


    // tongal baar script end
    // =============== log out ================//
  //   $scope.logout = function(){
  //     $cookies.remove('id');    
  //      $location.path('/');
  // }
  // if ($cookies.get('id') == null) {
  //   Notification.warning("Login required!!!");
  //   $location.path('/');
  //   $route.reload();
  // } 

    var vendorId = $routeParams.venId;
    $scope.vId = vendorId;
    console.log("$scope.vId 600", $scope.vId);

    var getVendorDetails = getVendorProfileUrl + vendorId;
    $http.get(getVendorDetails).then(function (response) {
      $rootScope.vendorName = response.data.data.vendor.name;
    });


    var getCompanies = getAllCompanyToVendorUrl + vendorId;
    $http.get(getCompanies).then(function (response) {
      $scope.companies = response.data.data.companies;
      for (var i = 0; i < $scope.companies.length; i++) {
        $scope.companies[i].fileName = getImageUrl + $scope.companies[i].fileName;
      }
    });

  }

]);
