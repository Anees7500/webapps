vmApp.controller('VendorController',['$scope','$location','$routeParams','$cookies','getAllCompanyToVendorUrl',
'$rootScope','$http','Notification','getAllCompanyUrl','getVendorProfileUrl',
'$route',
function($scope,$location,$routeParams,$cookies,getAllCompanyToVendorUrl,$rootScope,$http,
  Notification,getAllCompanyUrl,getVendorProfileUrl,$route)
{

  if($cookies.get('admin_username') == null)
  {
    Notification.warning("Login required!!!");
    $location.path('/adminlogin');
    $route.reload();
  }
  else
  {
    // tongal baar script start
    "use strict";var tid=setInterval(function(){if("complete"===document.readyState){clearInterval(tid);var a=document.querySelector.bind(document),b=document.querySelector(".vertical_nav"),c=document.querySelector(".wrapper"),d=document.getElementById("js-menu"),e=d.querySelectorAll(".menu--item__has_sub_menu");a(".toggle_menu").onclick=function(){b.classList.toggle("vertical_nav__opened"),c.classList.toggle("toggle-content")},a(".collapse_menu").onclick=function(){b.classList.toggle("vertical_nav__minify"),c.classList.toggle("wrapper__minify");for(var a=0;a<e.length;a++)e[a].classList.remove("menu--subitens__opened")};for(var f=0;f<e.length;f++)e[f].classList.contains("menu--item__has_sub_menu")&&e[f].querySelector(".menu--link").addEventListener("click",function(a){for(var b=0;b<e.length;b++)a.target.offsetParent!==e[b]&&e[b].classList.remove("menu--subitens__opened");a.target.offsetParent.classList.toggle("menu--subitens__opened")},!1)}},100);
    // tongal baar script end

		var vendorId = $routeParams.venId;
    $scope.vId = vendorId;
    console.log("$scope.vId 600",$scope.vId);
		// console.log("-------->>>>>>>>>",vendorId);

  var getVendorDetails = getVendorProfileUrl+vendorId;
  $http.get(getVendorDetails).then(function(response)
      {
        $rootScope.vendorName = response.data.data.vendor.name;
      });


      var getCompanies = getAllCompanyToVendorUrl+vendorId;
  		$http.get(getCompanies).then(function(response) {
  		      $scope.companies = response.data.data.companies;
  		});

  }

}]);
