adminApp.controller('VendorController',['$scope','$routeParams','$rootScope', 'getAllCompanyToVendorUrl',
  '$http','getVendorProfileUrl',
function($scope,$routeParams,$rootScope,getAllCompanyToVendorUrl,$http,getVendorProfileUrl)
{

 
    // tongal baar script end

		var vendorId = $routeParams.venId;
    $scope.vId = vendorId;
    console.log("$scope.vId 600",$scope.vId);

  var getVendorDetails = getVendorProfileUrl+vendorId;
  $http.get(getVendorDetails).then(function(response)
      {
        $rootScope.vendorName = response.data.data.vendor.name;
      });


      var getCompanies = getAllCompanyToVendorUrl+vendorId;
  		$http.get(getCompanies).then(function(response)  {
  		      $scope.companies = response.data.data.companies;
  		});

  }

]);
