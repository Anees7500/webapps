vmApp.controller('ProfileController',['$scope','$location','$routeParams','$cookies','getCompanyProfileUrl',
'$rootScope','$http','Notification','getAllCompanyUrl','getVendorProfileUrl','$route','getBreakfastMenu','getLunchMenu',
'getSnacksMenu','getDinnerMenu',
function($scope,$location,$routeParams,$cookies,getCompanyProfileUrl,$rootScope,$http,Notification,
  getAllCompanyUrl,getVendorProfileUrl,$route,getBreakfastMenu,getLunchMenu,getSnacksMenu,getDinnerMenu)
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

    var getCompProfileUrl = getCompanyProfileUrl+$routeParams.cId;
    $http.get(getCompProfileUrl).then(function(response)
    {
      $scope.cmpyName=response.data.data.company.companyName;
    });

// breakfats menu get
    var getBreakfastMenuUrl = getBreakfastMenu+$routeParams.cId;
    $http.get(getBreakfastMenuUrl).then(function(response)
    {
      $scope.breakfastData=response.data.data.menus.length;
      for(i=0;i<$scope.breakfastData;i++){
        if(response.data.data.menus[i].dayName=="Monday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.breakfast_item_mon=menu;
        }
        if(response.data.data.menus[i].dayName=="Tuesday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.breakfast_item_tue=menu;
        }
        if(response.data.data.menus[i].dayName=="Wednesday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.breakfast_item_wed=menu;
        }
        if(response.data.data.menus[i].dayName=="Thursday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.breakfast_item_thu=menu;
        }
        if(response.data.data.menus[i].dayName=="Friday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.breakfast_item_fri=menu;
        }
        if(response.data.data.menus[i].dayName=="Saturday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.breakfast_item_sat=menu;
        }
        if(response.data.data.menus[i].dayName=="Sunday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.breakfast_item_sun=menu;
        }
      }
    });
// end breakfast menu
// lunch menu get
    var getLunchMenuUrl = getLunchMenu+$routeParams.cId;
    $http.get(getLunchMenuUrl).then(function(response)
    {
      $scope.lunchData=response.data.data.menus.length;
      for(i=0;i<$scope.lunchData;i++){
        if(response.data.data.menus[i].dayName=="Monday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.lunch_item_mon=menu;
        }
        if(response.data.data.menus[i].dayName=="Tuesday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.lunch_item_tue=menu;
        }
        if(response.data.data.menus[i].dayName=="Wednesday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.lunch_item_wed=menu;
        }
        if(response.data.data.menus[i].dayName=="Thursday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.lunch_item_thu=menu;
        }
        if(response.data.data.menus[i].dayName=="Friday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.lunch_item_fri=menu;
        }
        if(response.data.data.menus[i].dayName=="Saturday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.lunch_item_sat=menu;
        }
        if(response.data.data.menus[i].dayName=="Sunday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.lunch_item_sun=menu;
        }
      }
    });
// end lunch menu
// snacks menu get
    var getSnacksMenuUrl = getSnacksMenu+$routeParams.cId;
    $http.get(getSnacksMenuUrl).then(function(response)
    {
      $scope.snacksData=response.data.data.menus.length;
      for(i=0;i<$scope.snacksData;i++){
        if(response.data.data.menus[i].dayName=="Monday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.snacks_item_mon=menu;
        }
        if(response.data.data.menus[i].dayName=="Tuesday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.snacks_item_tue=menu;
        }
        if(response.data.data.menus[i].dayName=="Wednesday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.snacks_item_wed=menu;
        }
        if(response.data.data.menus[i].dayName=="Thursday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.snacks_item_thu=menu;
        }
        if(response.data.data.menus[i].dayName=="Friday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.snacks_item_fri=menu;
        }
        if(response.data.data.menus[i].dayName=="Saturday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.snacks_item_sat=menu;
        }
        if(response.data.data.menus[i].dayName=="Sunday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.snacks_item_sun=menu;
        }
      }
    });
// end snack menu
// dinner menu get
    var getDinnerMenuUrl = getDinnerMenu+$routeParams.cId;
    $http.get(getDinnerMenuUrl).then(function(response)
    {
      $scope.dinnerData=response.data.data.menus.length;
      for(i=0;i<$scope.dinnerData;i++){
        if(response.data.data.menus[i].dayName=="Monday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.dinner_item_mon=menu;
        }
        if(response.data.data.menus[i].dayName=="Tuesday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.dinner_item_tue=menu;
        }
        if(response.data.data.menus[i].dayName=="Wednesday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.dinner_item_wed=menu;
        }
        if(response.data.data.menus[i].dayName=="Thursday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.dinner_item_thu=menu;
        }
        if(response.data.data.menus[i].dayName=="Friday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.dinner_item_fri=menu;
        }
        if(response.data.data.menus[i].dayName=="Saturday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.dinner_item_sat=menu;
        }
        if(response.data.data.menus[i].dayName=="Sunday"){
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.dinner_item_sun=menu;
        }
      }
    });
// end dinner menu
    var getVendorDetails = getVendorProfileUrl+$routeParams.vId;
    $http.get(getVendorDetails).then(function(response)
        {
          $rootScope.vendorName = response.data.data.vendor.name;
        });

        // bool Logic start
           $scope.boolFunction = function(value) {
             $scope.breakfastBool=false;
             $scope.lunchBool=false;
             $scope.snacksBool=false;
             $scope.dinnerBool=false;
             $scope.cashCarryBool=false;
             $scope[value] = true;
           }
           $scope.boolFunction("breakfastBool");
        // bool Logic end
  }
}]);


























