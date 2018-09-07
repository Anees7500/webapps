vmApp.controller('SectionController',['$routeParams','$route','$location','postDeleteMenuUrl',
'sectionService','$rootScope','$cookies','$scope','$http','$routeParams','postSaveMenuUrl',
'getCompanySectionReqUrl','getDashboardMenuUrl','postUpdateSaveMenuUrl','getCompanyProfileUrl',
'getCompanyReqUrl','Notification','uuid','saveMenuService','updateMenuService','getmenuFromDbMonUrl','getmenuFromDbTueUrl',
'getCompanyProfileUrl','corporateReviewsUrl',
function($routeParams,$route,$location,postDeleteMenuUrl,
  sectionService,$rootScope, $cookies, $scope, $http,$routeParams,postSaveMenuUrl,
  getCompanySectionReqUrl,getDashboardMenuUrl,postUpdateSaveMenuUrl,getCompanyProfileUrl,
  getCompanyReqUrl,Notification,uuid,saveMenuService,updateMenuService,getmenuFromDbMonUrl,
  getmenuFromDbTueUrl,getCompanyProfileUrl,corporateReviewsUrl) {
//--------------------------button to get current location-------------------

$scope.userName=$cookies.get('username');
$scope.mail=$cookies.get('email');

var vendorId = $cookies.get('id');


// var x = document.getElementById("demo");
// $scope.getLocation=function(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition($scope.showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
//
// // function showPosition(position)
// $scope.showPosition=function(position){
//       $rootScope.sorceLatitude=position.coords.latitude;
//       $rootScope.sorceLongitude=position.coords.longitude;
//       initMap();
//       // $scope.desLatitude=$rootScope.lat;
//       // $scope.desLongitude=77.62452429999996;
//       console.log("sorce->(lat,lng)",$rootScope.sorceLatitude,$rootScope.sorceLongitude);
//     // x.innerHTML = "Latitude: " + position.coords.latitude +
//     // "<br>Longitude: " + position.coords.longitude;
// }
//---------------------------------------------------------------------------
    // function initMap(){
    // // $scope.initMap=function(){
    //   console.log("check just",$rootScope.sorceLatitude);
    //       var silkboard = {lat: $rootScope.desLatitude, lng: $rootScope.desLongitute};
    //       $rootScope.fancymonk = {lat: $rootScope.sorceLatitude, lng: $rootScope.sorceLongitude};
    //      
    // console.log("$rootScope.sorceLatitude",$rootScope.sorceLatitude);
    //
    //   // $scope.google.maps.event.trigger(map, "resize");
    //       var map = new google.maps.Map(document.getElementById('map'), {
    //         center: silkboard,
    //         zoom: 7
    //       });
    //
    //       var directionsDisplay = new google.maps.DirectionsRenderer({
    //         map: map
    //       });
    //
    //       // Set destination, origin and travel mode.
    //       var request = {
    //         destination: silkboard,
    //         origin: $rootScope.fancymonk,
    //         travelMode: 'DRIVING'
    //       };
    //
    //       // Pass the directions request to the directions service.
    //       var directionsService = new google.maps.DirectionsService();
    //       directionsService.route(request, function(response, status) {
    //         if (status == 'OK') {
    //           // Display the route on the map.
    //           directionsDisplay.setDirections(response);
    //         }
    //       });
    //     }
    // google.maps.event.addDomListener(window, 'load', initMap);

//--------------- map section end -----------------------

    if($cookies.get('id') === $rootScope.vId && undefined === $rootScope.vId)
    {
        Notification.warning("Login required!!!");
        $location.path('/login');
    }

    else
    {
var companyId = $routeParams.compId;
$scope.cId = $routeParams.compId;
      // tongal baar script start
      "use strict";var tid=setInterval(function(){if("complete"===document.readyState){clearInterval(tid);var a=document.querySelector.bind(document),b=document.querySelector(".vertical_nav"),c=document.querySelector(".wrapper"),d=document.getElementById("js-menu"),e=d.querySelectorAll(".menu--item__has_sub_menu");a(".toggle_menu").onclick=function(){b.classList.toggle("vertical_nav__opened"),c.classList.toggle("toggle-content")},a(".collapse_menu").onclick=function(){b.classList.toggle("vertical_nav__minify"),c.classList.toggle("wrapper__minify");for(var a=0;a<e.length;a++)e[a].classList.remove("menu--subitens__opened")};for(var f=0;f<e.length;f++)e[f].classList.contains("menu--item__has_sub_menu")&&e[f].querySelector(".menu--link").addEventListener("click",function(a){for(var b=0;b<e.length;b++)a.target.offsetParent!=e[b]&&e[b].classList.remove("menu--subitens__opened");a.target.offsetParent.classList.toggle("menu--subitens__opened")},!1)}},100);
      // tongal baar script end


      var getFeedbackUrl = corporateReviewsUrl+$scope.cId;
      $http.get(getFeedbackUrl).then(function(response)
      {
        $scope.feedback=response.data.data.reviews;
      });
// --------- cash and carry section  --> start

              $scope.restaurantId = $cookies.get('id');

              var unflatten = function(array, parent, tree) {
                // console.log("array, parent, tree",array, parent, tree);
                  tree = typeof tree !== 'undefined' ? tree : [];
                  parent = typeof parent !== 'undefined' ? parent : {
                      id: null
                  };
                  var children = _.filter(array, function(child) {
                      child.isInserted = true;
                      // console.log("child.menuNodes,child.menuType",child.menuNodes,child.menuType);
                      if(child.menuNodes ==null)
                      {
                        child.menuNodes = [];
                      }
                      if(child.menuType != null)
                      {
                        if(child.menuType === "veg")
                        {
                          child.isVeg = true;
                          // console.log("isVeg");
                        }
                        else if(child.menuType === "egg")
                        {
                          child.isEgg = true;
                          // console.log("isegg");
                        }
                      }
                      return child.parentId == parent.id;
                  });
                  if (!_.isEmpty(children)) {
                      // console.log("parent.id",parent.id);
                      if (parent.id == 0 || parent.id == null) {
                                tree = children;
                      } else {
                          parent['menuNodes'] = children
                      }
                      _.each(children, function(child) {
                          unflatten(array, child)
                      });
                  }
                  return tree;
              };

              var getMenuMonUrl = getmenuFromDbMonUrl+"companyId="+companyId+"&vendorId="+vendorId;
              console.log("getMenuMonUrl 2000000",getMenuMonUrl);

              var promis = $http.get(getMenuMonUrl);

              promis.then(function(response) {
                  $scope.myNode = response.data.data.menus;
                console.log("$scope.myNode.MONDAY 000000000",_.isEmpty($scope.myNode.MONDAY));
                  // for monday by default load

                  if(!_.isEmpty($scope.myNode.MONDAY))
                  {
                    console.log("yehhhh true 4545")
                    $scope.menuNodes = unflatten($scope.myNode.MONDAY);
                    console.log("menu node after update ", $scope.menuNodes);
                  }
                  else
                  {
                    $scope.menuNodes = [{

                      uid: uuid.new(),
                      menuName: "",
                      menuNodes: [],
                      isFoodItem: false
                    }];
                  }
                  // by default end monday
                });

              //add menu
              // var bigrandom = require('bigrandom');

              $scope.addsection = function(nodes, index) {

                  console.log("function(nodes, index) 0003",nodes, index);
                  var uid = uuid.new();
                  console.log("isfood item 5555",nodes[index]);
                  // console.log("var uid",uid);
                  // console.log("nodes[index]",JSON.stringify(nodes[index]));
                  // console.log("isFoodItem",isFoodItem);

                  if (nodes[index].isFoodItem) {
                    console.log("inside if");
                      nodes.splice(index + 1, 0, {
                          uid: uid,
                          menuName: "New Add Section Menu 1",
                          menuNodes: [],
                          isFoodItem: true,
                          parentNodeId: nodes[index].parentNodeId
                      });
                  } else {
                    console.log("outside if index",nodes[index]);
                      nodes.splice(index + 1, 0, {
                          uid: uid,
                          menuName: "New 2",
                          menuNodes: [],
                          isFoodItem: false,
                          parentNodeId: nodes[index].parentNodeId
                      });
                      console.log("nodes 1002",nodes);
                  }

              }

              $scope.addchild = function(node) {
                  console.log("checked value 555 : ", JSON.stringify(node));
                  var uid = uuid.new();
                  node.menuNodes.push({
                      uid: uid,
                      menuName: "",
                      menuNodes: [],
                      isFoodItem: false,
                      parentNodeId: node.uid
                  });
              }
              // add menu ends here

              $scope.submitMenu = function() {
                  sectionService.submitMenu($scope.menuNodes, $scope.restaurantId);
              }

              $scope.saveInDb = function(node, dayName) {

                // console.log("check cheeeckkkkk 1 in ctrl file",node,dayName,companyId,$scope.restaurantId)
                  saveMenuService.submitMenu(node, $scope.restaurantId,companyId,dayName)
                  .then(function(returnedSaveMenu){
                    // console.log("returnedSaveMenu 001",returnedSaveMenu);
                  checkMe();
                    if (returnedSaveMenu !== null) {
                      updateMenuNode($scope.menuNodes,returnedSaveMenu);
                    }
                  });
              }

              $scope.updateMenu = function(node)
              {
                updateMenuService.updateMenu(node, $scope.restaurantId)
                .then(function(returnedUpdatedMenu){
                  // console.log("returnedUpdatedMenu",returnedUpdatedMenu);
                  // console.log("returnedUpdatedMenu.length",returnedUpdatedMenu.length);
                  checkMe();
                  if (returnedUpdatedMenu !== null) {
                    // console.log("value that are being passed here 000: ",returnedUpdatedMenu);
                    updateMenuNode($scope.menuNodes,returnedUpdatedMenu);
                  }
                });
              };

              $scope.deleteNode = function(node,day)
              {
                // console.log("inside removve node 0002",node);
                updateMenuService.deleteNode(node, $scope.restaurantId,companyId,day)
                .then(function(deleteNodeResp){
                  // console.log("response returned from deleteNode : ",JSON.stringify(deleteNodeResp));
                  checkMe();
                  updateDelMenuNode($scope.menuNodes,node.uid,null,null);
                });
                console.log("nodes 1002",nodes);
              };

var checkMe = function(){
console.log("check Me inside");
var getMenuMonUrl = getmenuFromDbMonUrl+"companyId="+companyId+"&vendorId="+vendorId;
$http.get(getMenuMonUrl).then(function(response) {
  console.log("yeehhh",response);
$scope.myNode = response.data.data.menus;});
}

              var updateDelMenuNode = function(theObject,uid,index,mainArray) {
                  var result = null;
                  if (theObject instanceof Array) {
                      for (var i = 0; i < theObject.length; i++) {
                          result = updateDelMenuNode(theObject[i],uid,i,theObject);
                          if (result) {
                              break;
                          }
                      }
                  } else {
                      for (var prop in theObject) {
                          if (prop == 'uid') {
                              if (theObject[prop] == uid) {
                                mainArray.splice(index,1);
                                break;
                              }
                          }
                          if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                              result = updateDelMenuNode(theObject[prop],uid,null,null);
                              if (result) {
                                  break;
                              }
                          }
                      }
                  }

                  var mainMenuNodeLength = $scope.menuNodes.length;
                  // console.log("mainMenuNodeLength",$scope.menuNodes.length);
                  if(mainMenuNodeLength === 0)
                  {
                    $scope.menuNodes.push({uid: uuid.new(),menuName: "",menuNodes: [],isFoodItem: false});
                  }
                  return result;
              }

              var updateMenuNode = function(theObject,modifiedMenu) {
                // console.log("inside updateMenu 456",theObject,modifiedMenu);
                  var result = null;
                  if (theObject instanceof Array) {
                      for (var i = 0; i < theObject.length; i++) {
                          result = updateMenuNode(theObject[i],modifiedMenu);
                          if (result) {
                              break;
                          }
                      }
                  } else {
                      for (var prop in theObject) {
                          if (prop == 'uid') {
                              if (theObject[prop] == modifiedMenu.uid) {
                                theObject.id = modifiedMenu.id;
                                theObject.isInserted = true;
                              }
                          }
                          if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                              result = updateMenuNode(theObject[prop],modifiedMenu);
                              if (result) {
                                  break;
                              }
                          }
                      }
                  }
                  return result;
              }

              $scope.toggleAll = function() {
                  var toggleStatus = $scope.restaurantDataForUpdate.isAllSelected;
                  angular.forEach($scope.options, function(itm) {
                      itm.selected = toggleStatus;
                  });
              }
              $scope.optionToggled = function() {
                  $scope.restaurantDataForUpdate.isAllSelected = $scope.options.every(function(itm) {
                      return itm.selected;
                  })
              }
              $scope.expandNode = function(n, $event) {
                  // console.log("well inside expandNode",n,$event);
                  $event.stopPropagation();
                  n.toggle();
              };

$scope.callMe = function(x){
  console.log("new c 5555",x);
  if(x=="Monday"){
    console.log("$scope.myNode 5555",$scope.myNode.MONDAY);

    if(!_.isEmpty($scope.myNode.MONDAY))
    {
      $scope.menuNodes = unflatten($scope.myNode.MONDAY);
      console.log("menu node after update ", $scope.menuNodes);
    }else{
      $scope.menuNodes = [{

        uid: uuid.new(),
        menuName: "Monday Menu",
        menuNodes: [],
        isFoodItem: false
      }];
    }
  }
  if(x=="Tuesday"){
    console.log("!_.isEmpty($scope.myNode.TUESDAY) 5555",!_.isEmpty($scope.myNode.TUESDAY));

      if(!_.isEmpty($scope.myNode.TUESDAY))
    {
      $scope.menuNodes = unflatten($scope.myNode.TUESDAY);
      console.log("$scope.menuNodes 666",$scope.menuNodes);
    }
  }
  if(x=="Wednesday"){
    console.log("$scope.myNode 5555",$scope.myNode.WEDNESDAY);

    if(!_.isEmpty($scope.myNode.WEDNESDAY))
    {
      $scope.menuNodes = unflatten($scope.myNode.WEDNESDAY);
    }
  }
  if(x=="Thursday"){
    console.log("$scope.myNode 5555",$scope.myNode.THURSDAY);

    if(!_.isEmpty($scope.myNode.THURSDAY))
    {
      $scope.menuNodes = unflatten($scope.myNode.THURSDAY);
    }
  }
  if(x=="Friday"){
    console.log("$scope.myNode 5555",$scope.myNode.FRIDAY);

    if(!_.isEmpty($scope.myNode.FRIDAY))
    {
      $scope.menuNodes = unflatten($scope.myNode.FRIDAY);
    }
  }
  if(x=="Saturday"){
    console.log("$scope.myNode 5555",$scope.myNode.SATURDAY);

    if(!_.isEmpty($scope.myNode.SATURDAY))
    {
      $scope.menuNodes = unflatten($scope.myNode.SATURDAY);
    }
  }
  if(x=="Sunday"){
    console.log("$scope.myNode 5555",$scope.myNode.SUNDAY);

    if(!_.isEmpty($scope.myNode.SUNDAY))
    {
      $scope.menuNodes = unflatten($scope.myNode.SUNDAY);
    }
  }
  $scope.menuNodes = [{

      uid: uuid.new(),
      menuName: "",
      menuNodes: [],
      isFoodItem: false
  }];

}
// cash and carry section  --> end
// // _______________________***********end*************_________________________________________________

$scope.dayShow = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// $scope.daysss = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
$scope.daysss = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
$scope.type=['BREAKFAST','LUNCH','SNACKS','DINNER'];

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
  for(var i = 0; i <$scope.companyRequirements.length; i++){
    for(var j = 0; j <response.data.data.requirements.length; j++){
        if($scope.companyRequirements[i].dayName === response.data.data.requirements[j].dayName){
            $scope.companyRequirements[i] = response.data.data.requirements[j];
        }
    }
  }
});

var getCompProfileUrl = getCompanyProfileUrl+$routeParams.compId;
$http.get(getCompProfileUrl).then(function(response)
{
  $scope.cmpyName=response.data.data.company.companyName;
  if(response.data.data.company.breakfast==true){$scope.breakfast_active=true}
  if(response.data.data.company.lunch==true){$scope.lunch_active=true}
  if(response.data.data.company.snacks==true){$scope.snacks_active=true}
  if(response.data.data.company.dinner==true){$scope.dinner_active=true}
  if(response.data.data.company.cashNCarry==true){$scope.cashNCarry_active=true}
});

$rootScope.date = new Date();
var d = new Date();
d.getHours();
d.getMinutes();
d.getSeconds();

var tttime=d.getHours();
$cookies.put('tttime',tttime);
var time = $cookies.get('tttime');

//___________________________________
var dayInt=$scope.date.getDay();
for(var i=0;i<7;i++)
{
  if(dayInt===i)
  {
    $rootScope.finalDay=$scope.dayShow[i];
    // console.log("final day",$scope.finalDay);
    var companyId = $routeParams.compId;
    var getDashboardMenu=getCompanySectionReqUrl+$routeParams.compId;
    // console.log("Final Get API",getDashboardMenu);
    $http.get(getDashboardMenu).then(function(response)
    {
      // console.log("DAY CHECKING",JSON.stringify($scope.finalDay));

      // console.log("check length",response.data.data.menus.length);
      for(var i=0;i<response.data.data.menus.length;i++)
      {
        // console.log("Inside final looooppppp1 length ->",response.data.data.menus.length);
        // console.log("1 , 2, 3",$scope.finalDay,response.data.data.menus[i].dayName, response.data.data.menus[i].menuType);
        //....................................................................
        if($scope.finalDay==response.data.data.menus[i].dayName && $scope.type[0]==response.data.data.menus[i].menuType)
        {

          // console.log("",response.data.data.menus[i].menu);

          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.breakfast_item = menu;
          // console.log("Today BREAKFAST-> Successfully match......",$scope.breakfast_item);
        }else if($scope.finalDay==response.data.data.menus[i].dayName && $scope.type[1]==response.data.data.menus[i].menuType)
        {
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.lunch_item = menu;
          // console.log("Today LUNCH-> Successfully match......",$scope.lunch_item);
        }else if($scope.finalDay==response.data.data.menus[i].dayName && $scope.type[2]==response.data.data.menus[i].menuType)
        {
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.snacks_item = menu;
          // console.log("Today SNACKS-> Successfully match......",$scope.snacks_item);
        }else if($scope.finalDay==response.data.data.menus[i].dayName && $scope.type[3]==response.data.data.menus[i].menuType)
        {
          var menu=JSON.parse(response.data.data.menus[i].menu);
          $scope.dinner_item = menu;
          // console.log("Today DINNER-> Successfully match......",$scope.dinner_item);
        }
        //.....................................................................
      }
  })
  }

}


$scope.processComplete=function()
{
  $scope.enableStep4();
}

  $scope.saveMenu = function(menu,menuType,dayName) {
                    // console.log("menu  ctrl: ", JSON.stringify(menu));
                    var list=JSON.stringify(menu);
                      var companyId = $routeParams.compId;
                      // console.log("out loop menu", menu);
                      menuType = menuType;
                      dayName = dayName;
                      companyId = companyId;

                      // console.log("menuType,dayName,companyId ",menuType,dayName,companyId);
                 sectionService.saveMenu(menuType,dayName,companyId,list,postSaveMenuUrl);
      }

      $scope.deleteVendorMenu = function(index,menu,menuType,dayName) {
        // console.log('menu,menuType,dayName',index,menu,menuType,dayName);
        // console.log('mondayMenuBreakfast before slice length:', $scope.mondayMenuBreakfast.length)
        if(menuType=="BREAKFAST" && dayName== "Monday"){$scope.mondayMenuBreakfast.splice(index, 1); var list=JSON.stringify($scope.mondayMenuBreakfast);}
        if(menuType=="BREAKFAST" && dayName== "Tuesday"){$scope.tuesdayMenuBreakfast.splice(index, 1); var list=JSON.stringify($scope.tuesdayMenuBreakfast);}
        if(menuType=="BREAKFAST" && dayName== "Wednesday"){$scope.wednesdayMenuBreakfast.splice(index, 1); var list=JSON.stringify($scope.wednesdayMenuBreakfast);}
        if(menuType=="BREAKFAST" && dayName== "Thursday"){$scope.thursdayMenuBreakfast.splice(index, 1); var list=JSON.stringify($scope.thursdayMenuBreakfast);}
        if(menuType=="BREAKFAST" && dayName== "Friday"){$scope.fridayMenuBreakfast.splice(index, 1); var list=JSON.stringify($scope.fridayMenuBreakfast);}
        if(menuType=="BREAKFAST" && dayName== "Saturday"){$scope.saturdayMenuBreakfast.splice(index, 1); var list=JSON.stringify($scope.saturdayMenuBreakfast);}
        if(menuType=="BREAKFAST" && dayName== "Sunday"){$scope.sundayMenuBreakfast.splice(index, 1); var list=JSON.stringify($scope.sundayMenuBreakfast);}

        if(menuType=="LUNCH" && dayName== "Monday"){$scope.mondayMenuLunch.splice(index, 1); var list=JSON.stringify($scope.mondayMenuLunch);}
        if(menuType=="LUNCH" && dayName== "Tuesday"){$scope.tuesdayMenuLunch.splice(index, 1); var list=JSON.stringify($scope.tuesdayMenuLunch);}
        if(menuType=="LUNCH" && dayName== "Wednesday"){$scope.wednesdayMenuLunch.splice(index, 1); var list=JSON.stringify($scope.wednesdayMenuLunch);}
        if(menuType=="LUNCH" && dayName== "Thursday"){$scope.thursdayMenuLunch.splice(index, 1); var list=JSON.stringify($scope.thursdayMenuLunch);}
        if(menuType=="LUNCH" && dayName== "Friday"){$scope.fridayMenuLunch.splice(index, 1); var list=JSON.stringify($scope.fridayMenuLunch);}
        if(menuType=="LUNCH" && dayName== "Saturday"){$scope.saturdayMenuLunch.splice(index, 1); var list=JSON.stringify($scope.saturdayMenuLunch);}
        if(menuType=="LUNCH" && dayName== "Sunday"){$scope.sundayMenuLunch.splice(index, 1); var list=JSON.stringify($scope.sundayMenuLunch);}

        if(menuType=="SNACKS" && dayName== "Monday"){$scope.mondayMenuSnacks.splice(index, 1); var list=JSON.stringify($scope.mondayMenuSnacks);}
        if(menuType=="SNACKS" && dayName== "Tuesday"){$scope.tuesdayMenuSnacks.splice(index, 1); var list=JSON.stringify($scope.tuesdayMenuSnacks);}
        if(menuType=="SNACKS" && dayName== "Wednesday"){$scope.wednesdayMenuSnacks.splice(index, 1); var list=JSON.stringify($scope.wednesdayMenuSnacks);}
        if(menuType=="SNACKS" && dayName== "Thursday"){$scope.thursdayMenuSnacks.splice(index, 1); var list=JSON.stringify($scope.thursdayMenuSnacks);}
        if(menuType=="SNACKS" && dayName== "Friday"){$scope.fridayMenuSnacks.splice(index, 1); var list=JSON.stringify($scope.fridayMenuSnacks);}
        if(menuType=="SNACKS" && dayName== "Saturday"){$scope.saturdayMenuSnacks.splice(index, 1); var list=JSON.stringify($scope.saturdayMenuSnacks);}
        if(menuType=="SNACKS" && dayName== "Sunday"){$scope.sundayMenuSnacks.splice(index, 1); var list=JSON.stringify($scope.sundayMenuSnacks);}

        if(menuType=="DINNER" && dayName== "Monday"){$scope.mondayMenuDinner.splice(index, 1); var list=JSON.stringify($scope.mondayMenuDinner);}
        if(menuType=="DINNER" && dayName== "Tuesday"){$scope.tuesdayMenuDinner.splice(index, 1); var list=JSON.stringify($scope.tuesdayMenuDinner);}
        if(menuType=="DINNER" && dayName== "Wednesday"){$scope.wednesdayMenuDinner.splice(index, 1); var list=JSON.stringify($scope.wednesdayMenuDinner);}
        if(menuType=="DINNER" && dayName== "Thursday"){$scope.thursdayMenuDinner.splice(index, 1); var list=JSON.stringify($scope.thursdayMenuDinner);}
        if(menuType=="DINNER" && dayName== "Friday"){$scope.fridayMenuDinner.splice(index, 1); var list=JSON.stringify($scope.fridayMenuDinner);}
        if(menuType=="DINNER" && dayName== "Saturday"){$scope.saturdayMenuDinner.splice(index, 1); var list=JSON.stringify($scope.saturdayMenuDinner);}
        if(menuType=="DINNER" && dayName== "Sunday"){$scope.sundayMenuDinner.splice(index, 1); var list=JSON.stringify($scope.sundayMenuDinner);}


        // var list=JSON.stringify($scope.mondayMenuBreakfast);
        var companyId = $routeParams.compId;
        menuType = menuType;
        dayName = dayName;
        companyId = companyId;
        var getCompUrl = getDashboardMenuUrl+$routeParams.compId;
        $http.get(getCompUrl).then(function(response)
          {
            for(var i = 0; i <response.data.data.menus.length; i++){
              if(menuType==response.data.data.menus[i].menuType && dayName==response.data.data.menus[i].dayName)
              {
                $scope.companyMenuId = response.data.data.menus[i].id;
                // console.log("companyMenuId",$scope.companyMenuId);
                var companyMenuId= $scope.companyMenuId;
                sectionService.updateVendorMenu(menuType,dayName,companyId,list,companyMenuId,postUpdateSaveMenuUrl,postDeleteMenuUrl);
              }
            }
          });

      }

      $scope.updateVendorMenu = function(menu,menuType,dayName) {
                        // console.log("menu",menu);
                        var list=JSON.stringify(menu);
                        // console.log("list",list);
                          var companyId = $routeParams.compId;
                          // console.log("out loop menu", menu);
                          var count = Object.keys(list).length;

                          menuType = menuType;
                          dayName = dayName;
                          companyId = companyId;

                          var getCompUrl = getDashboardMenuUrl+$routeParams.compId;
                          $http.get(getCompUrl).then(function(response)
                            {
                              // console.log("response 123",response);
                              for(var i = 0; i <response.data.data.menus.length; i++){
                                  // console.log("response 123",response);
                                if(menuType==response.data.data.menus[i].menuType && dayName==response.data.data.menus[i].dayName)
                                {
                                  $scope.companyMenuId = response.data.data.menus[i].id;
                                  // console.log("companyMenuId",$scope.companyMenuId);
                                  var companyMenuId= $scope.companyMenuId;
                                  sectionService.updateVendorMenu(menuType,dayName,companyId,list,companyMenuId,postUpdateSaveMenuUrl,postDeleteMenuUrl);
                                }
                              }
                            });
                          }

// --------------------requirements update from ADMIN dashboard to VENDOR dashboard---------------------------------
$scope.day = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];

      var getCompUrl = getCompanyReqUrl+$routeParams.compId;
      $http.get(getCompUrl).then(function(response)
      {
        for(var i = 0; i <1; i++){
          for(var j = 0; j <response.data.data.requirements.length; j++){
              if($scope.day[0] == response.data.data.requirements[j].dayName){
                $scope.mon_reqqq=[];

                  $scope.mon_reqqq.push(response.data.data.requirements[j]);
              }
              if($scope.day[1] == response.data.data.requirements[j].dayName){
                $scope.tue_reqqq=[];
                  $scope.tue_reqqq.push(response.data.data.requirements[j]);
              }
              if($scope.day[2] == response.data.data.requirements[j].dayName){
                $scope.wed_reqqq=[];
                  $scope.wed_reqqq.push(response.data.data.requirements[j]);
              }
              if($scope.day[3] == response.data.data.requirements[j].dayName){
                $scope.thu_reqqq=[];
                  $scope.thu_reqqq.push(response.data.data.requirements[j]);
              }
              if($scope.day[4] == response.data.data.requirements[j].dayName){
                $scope.fri_reqqq=[];
                  $scope.fri_reqqq.push(response.data.data.requirements[j]);
              }
              if($scope.day[5] == response.data.data.requirements[j].dayName){
                $scope.sat_reqqq=[];
                  $scope.sat_reqqq.push(response.data.data.requirements[j]);
              }
              if($scope.day[6] == response.data.data.requirements[j].dayName){
                $scope.sun_reqqq=[];
                  $scope.sun_reqqq.push(response.data.data.requirements[j]);
              }
          }
        }
      });
// ----------------AUTOMATIC UPDATE COMPANY SECTION DATA END---------------

  $scope.mondayMenuBreakfast = [
          // {
          //     'dishName':'',
          //     'dishCost':'',
          //     'dishQuantity':''
          // }
        ];
  $scope.addNewMondayBreakfast = function(menu){
    // console.log("menu",menu);
              $scope.mondayMenuBreakfast.push(
                {
                  // 'dishName': "",
                  // 'dishCost': "",
                  // 'dishQuantity': "",
              }
            );
          };

  $scope.removeMondayBreakfast = function(){
    // console.log("mondayMenuBreakfast,menuType,dayName",mondayMenuBreakfast,menuType,dayName);
              var newDataList=[];
              $scope.selectedAll = false;
              angular.forEach($scope.mondayMenuBreakfast, function(selected){
                  if(!selected.selected){
                      newDataList.push(selected);
                  }
              });
              $scope.mondayMenuBreakfast = newDataList;
              // -----------------------------------------------------------
              // var list=JSON.stringify(menu);
              // console.log("list",list);
              //   var companyId = $routeParams.compId;
              //   var count = Object.keys(list).length;
              //
              //   menuType = menuType;
              //   dayName = dayName;
              //   companyId = companyId;
              //
              //   var getCompUrl = getDashboardMenuUrl+$routeParams.compId;
              //   $http.get(getCompUrl).then(function(response)
              //     {
              //       // console.log("response 123",response);
              //       for(var i = 0; i <response.data.data.menus.length; i++){
              //           // console.log("response 123",response);
              //         if(menuType==response.data.data.menus[i].menuType && dayName==response.data.data.menus[i].dayName)
              //         {
              //           $scope.companyMenuId = response.data.data.menus[i].id;
              //           console.log("companyMenuId",$scope.companyMenuId);
              //           var companyMenuId= $scope.companyMenuId;
              //           sectionService.deleteVendorMenu(menuType,dayName,companyId,list,companyMenuId,postDeleteMenuUrl);
              //         }
              //       }
              //     });
              // -----------------------------------------------------------
          };

$scope.tuesdayMenuBreakfast = [];
$scope.addNewTuesdayBreakfast = function(menu){
            $scope.tuesdayMenuBreakfast.push(
              {

              }
          );
        };
$scope.removeTuesdayBreakfast = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.tuesdayMenuBreakfast, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            });
            $scope.tuesdayMenuBreakfast = newDataList;
        };

$scope.wednesdayMenuBreakfast = [];
$scope.addNewWednesdayBreakfast = function(menu){
                    $scope.wednesdayMenuBreakfast.push(
                      {

                      }
                  );
                };
$scope.removeWednesdayBreakfast = function(){
                    var newDataList=[];
                    $scope.selectedAll = false;
                    angular.forEach($scope.wednesdayMenuBreakfast, function(selected){
                        if(!selected.selected){
                            newDataList.push(selected);
                        }
                    });
                    $scope.wednesdayMenuBreakfast = newDataList;
                };
$scope.thursdayMenuBreakfast = [];
$scope.addNewThursdayBreakfast = function(menu){
                                    $scope.thursdayMenuBreakfast.push(
                                      {

                                      }
                                  );
                                };
$scope.removeThursdayBreakfast = function(){
                                    var newDataList=[];
                                    $scope.selectedAll = false;
                                    angular.forEach($scope.thursdayMenuBreakfast, function(selected){
                                        if(!selected.selected){
                                            newDataList.push(selected);
                                        }
                                    });
                                    $scope.thursdayMenuBreakfast = newDataList;
};
$scope.fridayMenuBreakfast = [];
$scope.addNewFridayBreakfast = function(menu){
                                    $scope.fridayMenuBreakfast.push(
                                      {

                                      }
                                  );
                                };
$scope.removeFridayBreakfast = function(){
                                    var newDataList=[];
                                    $scope.selectedAll = false;
                                    angular.forEach($scope.fridayMenuBreakfast, function(selected){
                                        if(!selected.selected){
                                            newDataList.push(selected);
                                        }
                                    });
                                    $scope.fridayMenuBreakfast = newDataList;
};
$scope.saturdayMenuBreakfast = [];
$scope.addNewSaturdayBreakfast = function(menu){
                                    $scope.saturdayMenuBreakfast.push(
                                      {

                                      }
                                  );
                                };
$scope.removeSaturdayBreakfast = function(){
                                    var newDataList=[];
                                    $scope.selectedAll = false;
                                    angular.forEach($scope.saturdayMenuBreakfast, function(selected){
                                        if(!selected.selected){
                                            newDataList.push(selected);
                                        }
                                    });
                                    $scope.saturdayMenuBreakfast = newDataList;
};
$scope.sundayMenuBreakfast = [];
$scope.addNewSundayBreakfast = function(menu){
                                    $scope.sundayMenuBreakfast.push(
                                      {

                                      }
                                  );
                                };
$scope.removeSundayBreakfast = function(){
                                    var newDataList=[];
                                    $scope.selectedAll = false;
                                    angular.forEach($scope.sundayMenuBreakfast, function(selected){
                                        if(!selected.selected){
                                            newDataList.push(selected);
                                        }
                                    });
                                    $scope.sundayMenuBreakfast = newDataList;
};
$scope.mondayMenuLunch = [];

$scope.addNewMondayLunch = function(menu){
            $scope.mondayMenuLunch.push(
              {
                'dishName': "",
                'dishCost': "",
                'dishQuantity': "",
            }
          );
        };

$scope.removeMondayLunch = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.mondayMenuLunch, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            });
            $scope.mondayMenuLunch = newDataList;
        };

$scope.tuesdayMenuLunch = [];
$scope.addNewTuesdayLunch = function(menu){
          $scope.tuesdayMenuLunch.push(
            {

            }
        );
      };
$scope.removeTuesdayLunch = function(){
          var newDataList=[];
          $scope.selectedAll = false;
          angular.forEach($scope.tuesdayMenuLunch, function(selected){
              if(!selected.selected){
                  newDataList.push(selected);
              }
          });
          $scope.tuesdayMenuLunch = newDataList;
      };

$scope.wednesdayMenuLunch = [];
$scope.addNewWednesdayLunch = function(menu){
                  $scope.wednesdayMenuLunch.push(
                    {

                    }
                );
              };
$scope.removeWednesdayLunch = function(){
                  var newDataList=[];
                  $scope.selectedAll = false;
                  angular.forEach($scope.wednesdayMenuLunch, function(selected){
                      if(!selected.selected){
                          newDataList.push(selected);
                      }
                  });
                  $scope.wednesdayMenuLunch = newDataList;
              };
$scope.thursdayMenuLunch = [];
$scope.addNewThursdayLunch = function(menu){
                                  $scope.thursdayMenuLunch.push(
                                    {

                                    }
                                );
                              };
$scope.removeThursdayLunch = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.thursdayMenuLunch, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.thursdayMenuLunch = newDataList;
};
$scope.fridayMenuLunch = [];
$scope.addNewFridayLunch = function(menu){
                                  $scope.fridayMenuLunch.push(
                                    {

                                    }
                                );
                              };
$scope.removeFridayLunch = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.fridayMenuLunch, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.fridayMenuLunch = newDataList;
};
$scope.saturdayMenuLunch = [];
$scope.addNewSaturdayLunch = function(menu){
                                  $scope.saturdayMenuLunch.push(
                                    {

                                    }
                                );
                              };
$scope.removeSaturdayLunch = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.saturdayMenuLunch, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.saturdayMenuLunch = newDataList;
};
$scope.sundayMenuLunch = [];
$scope.addNewSundayLunch = function(menu){
                                  $scope.sundayMenuLunch.push(
                                    {

                                    }
                                );
                              };
$scope.removeSundayLunch = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.sundayMenuLunch, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.sundayMenuLunch = newDataList;
};
$scope.mondayMenuSnacks = [];

$scope.addNewMondaySnacks = function(menu){
            $scope.mondayMenuSnacks.push(
              {
                'dishName': "",
                'dishCost': "",
                'dishQuantity': "",
            }
          );
        };

$scope.removeMondaySnacks = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.mondayMenuSnacks, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            });
            $scope.mondayMenuSnacks = newDataList;
        };

$scope.tuesdayMenuSnacks = [];
$scope.addNewTuesdaySnacks = function(menu){
          $scope.tuesdayMenuSnacks.push(
            {

            }
        );
      };
$scope.removeTuesdaySnacks = function(){
          var newDataList=[];
          $scope.selectedAll = false;
          angular.forEach($scope.tuesdayMenuSnacks, function(selected){
              if(!selected.selected){
                  newDataList.push(selected);
              }
          });
          $scope.tuesdayMenuSnacks = newDataList;
      };

$scope.wednesdayMenuSnacks = [];
$scope.addNewWednesdaySnacks = function(menu){
                  $scope.wednesdayMenuSnacks.push(
                    {

                    }
                );
              };
$scope.removeWednesdaySnacks = function(){
                  var newDataList=[];
                  $scope.selectedAll = false;
                  angular.forEach($scope.wednesdayMenuSnacks, function(selected){
                      if(!selected.selected){
                          newDataList.push(selected);
                      }
                  });
                  $scope.wednesdayMenuSnacks = newDataList;
              };
$scope.thursdayMenuSnacks = [];
$scope.addNewThursdaySnacks = function(menu){
                                  $scope.thursdayMenuSnacks.push(
                                    {

                                    }
                                );
                              };
$scope.removeThursdaySnacks = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.thursdayMenuSnacks, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.thursdayMenuSnacks = newDataList;
};
$scope.fridayMenuSnacks = [];
$scope.addNewFridaySnacks = function(menu){
                                  $scope.fridayMenuSnacks.push(
                                    {

                                    }
                                );
                              };
$scope.removeFridaySnacks = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.fridayMenuSnacks, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.fridayMenuSnacks = newDataList;
};
$scope.saturdayMenuSnacks = [];
$scope.addNewSaturdaySnacks = function(menu){
                                  $scope.saturdayMenuSnacks.push(
                                    {

                                    }
                                );
                              };
$scope.removeSaturdaySnacks = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.saturdayMenuSnacks, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.saturdayMenuSnacks = newDataList;
};
$scope.sundayMenuSnacks = [];
$scope.addNewSundaySnacks = function(menu){
                                  $scope.sundayMenuSnacks.push(
                                    {

                                    }
                                );
                              };
$scope.removeSundaySnacks = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.sundayMenuSnacks, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.sundayMenuSnacks = newDataList;
};
$scope.mondayMenuDinner = [];

$scope.addNewMondayDinner = function(menu){
            $scope.mondayMenuDinner.push(
              {
                'dishName': "",
                'dishCost': "",
                'dishQuantity': "",
            }
          );
        };

$scope.removeMondayDinner = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.mondayMenuDinner, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            });
            $scope.mondayMenuDinner = newDataList;
        };

$scope.tuesdayMenuDinner = [];
$scope.addNewTuesdayDinner = function(menu){
          $scope.tuesdayMenuDinner.push(
            {

            }
        );
      };
$scope.removeTuesdayDinner = function(){
          var newDataList=[];
          $scope.selectedAll = false;
          angular.forEach($scope.tuesdayMenuDinner, function(selected){
              if(!selected.selected){
                  newDataList.push(selected);
              }
          });
          $scope.tuesdayMenuDinner = newDataList;
      };

$scope.wednesdayMenuDinner = [];
$scope.addNewWednesdayDinner = function(menu){
                  $scope.wednesdayMenuDinner.push(
                    {

                    }
                );
              };
$scope.removeWednesdayDinner = function(){
                  var newDataList=[];
                  $scope.selectedAll = false;
                  angular.forEach($scope.wednesdayMenuDinner, function(selected){
                      if(!selected.selected){
                          newDataList.push(selected);
                      }
                  });
                  $scope.wednesdayMenuDinner = newDataList;
              };
$scope.thursdayMenuDinner = [];
$scope.addNewThursdayDinner = function(menu){
                                  $scope.thursdayMenuDinner.push(
                                    {

                                    }
                                );
                              };
$scope.removeThursdayDinner = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.thursdayMenuDinner, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.thursdayMenuDinner = newDataList;
};
$scope.fridayMenuDinner = [];
$scope.addNewFridayDinner = function(menu){
                                  $scope.fridayMenuDinner.push(
                                    {

                                    }
                                );
                              };
$scope.removeFridayDinner = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.fridayMenuDinner, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.fridayMenuDinner = newDataList;
};
$scope.saturdayMenuDinner = [];
$scope.addNewSaturdayDinner = function(menu){
                                  $scope.saturdayMenuDinner.push(
                                    {

                                    }
                                );
                              };
$scope.removeSaturdayDinner = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.saturdayMenuDinner, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.saturdayMenuDinner = newDataList;
};
$scope.sundayMenuDinner = [];
$scope.addNewSundayDinner = function(menu){
                                  $scope.sundayMenuDinner.push(
                                    {

                                    }
                                );
                              };
$scope.removeSundayDinner = function(){
                                  var newDataList=[];
                                  $scope.selectedAll = false;
                                  angular.forEach($scope.sundayMenuDinner, function(selected){
                                      if(!selected.selected){
                                          newDataList.push(selected);
                                      }
                                  });
                                  $scope.sundayMenuDinner = newDataList;
};
//................................default bool.............................................

// bool Logic start
   $scope.boolFunction = function(value) {
     $scope.bBool=false;
     $scope.lBool=false;
     $scope.sBool=false;
     $scope.dBool=false;

                   $scope.addDeliveryBool=false;
                   $scope.addMenuBool=false;
                   $scope.breakfastBool=false;
                   $scope.lunchBool=false;
                   $scope.snacksBool=false;
                   $scope.dinnerBool=false;
                   $scope.enableStep1Bool=false;
                   $scope.enableStep2Bool=false;
                   $scope.enableStep3Bool=false;
                   $scope.enableStep4Bool=false;
                   $rootScope.barBool = false;
                   $scope.cashAndCarryBool=false;
                   $scope.requirementsBool=false;
                   $scope.feedbackBool=false;
                   $scope.billingBool=false;
     $scope[value] = true;
   }
   $scope.boolFunction("requirementsBool");

  //
  // $locationProvider.html5Mode(true);
  // console.log("$scope.q 555",$location.search().breakfast);
  var breakfast = $location.search().breakfast;
  var lunch = $location.search().lunch;
  var snacks = $location.search().snacks;
  var dinner = $location.search().dinner;
  var requirements = $location.search().requirements;
  var feedback = $location.search().feedback;

  if(breakfast=="true")
  {
    $scope.boolFunction("bBool");
  }
  if(lunch=="true")
  {
    $scope.boolFunction("lBool");
  }
  if(snacks=="true")
  {
    $scope.boolFunction("sBool");
  }
  if(dinner=="true")
  {
    $scope.boolFunction("dBool");
  }
  if(requirements=="true")
  {
    $scope.boolFunction("requirementsBool");
  }
  if(feedback=="true")
  {
    $scope.boolFunction("feedbackBool");
  }
// bool Logic end

// $scope.bBool=false;
// $scope.lBool=false;
// $scope.sBool=false;
// $scope.dBool=false;
//
//               $scope.addDeliveryBool=false;
//               $scope.addMenuBool=false;
//               $scope.breakfastBool=false;
//               $scope.lunchBool=false;
//               $scope.snacksBool=false;
//               $scope.dinnerBool=false;
//               $scope.enableStep1Bool=false;
//               $scope.enableStep2Bool=false;
//               $scope.enableStep3Bool=false;
//               $scope.enableStep4Bool=false;
//               $rootScope.barBool = false;
//               $scope.cashAndCarryBool=false;
//               $scope.requirementsBool=true;
//               $scope.feedbackBool=false;
//               $scope.billingBool=false;

//------TIME SHEDUAL-- for default----start--------
              if(6<time && 12>time){
                // console.log("in breakfast time");
                $scope.breakfastBool=true;
                $scope.lunchBool=false;
                $scope.snacksBool=false;
                $scope.dinnerBool=false;
              }else if(12<=time && 15>time){
                // console.log("in lunch time");
                $scope.breakfastBool=false;
                $scope.lunchBool=true;
                $scope.snacksBool=false;
                $scope.dinnerBool=false;
              }else if(15<=time && 20>time){
                // console.log("in snacks time");
                $scope.breakfastBool=false;
                $scope.lunchBool=false;
                $scope.snacksBool=true;
                $scope.dinnerBool=false;
              }else{
                // console.log("in dinner time");
                $scope.breakfastBool=false;
                $scope.lunchBool=false;
                $scope.snacksBool=false;
                $scope.dinnerBool=true;
              }
//------TIME SHEDUAL-- for default----end--------
// $scope.enableBillingBool=function(){
//   $scope.bBool=false;
//   $scope.lBool=false;
//   $scope.sBool=false;
//   $scope.dBool=false;
//
//   $scope.cashAndCarryBool=false;
//   $scope.addDeliveryBool=false;
//   $scope.enableStep1Bool=false;
//   $scope.enableStep2Bool=false;
//   $scope.enableStep3Bool=false;
//   $scope.enableStep4Bool=false;
//
//   $scope.step1Bool=false;
//   $scope.step2Bool=false;
//   $scope.step3Bool=false;
//
//   $scope.addMenuBool=false;
//   $scope.breakfastBool=false;
//   $scope.lunchBool=false;
//   $scope.snacksBool=false;
//   $scope.dinnerBool=false;
//
//   $scope.cashAndCarryBool=false;
//   $scope.requirementsBool=false;
//   $scope.feedbackBool=false;
//   $scope.billingBool=true;
// }
// $scope.enableFeedbackBool = function(){
//   $scope.bBool=false;
//   $scope.lBool=false;
//   $scope.sBool=false;
//   $scope.dBool=false;
//
//   $scope.cashAndCarryBool=false;
//   $scope.addDeliveryBool=false;
//   $scope.enableStep1Bool=false;
//   $scope.enableStep2Bool=false;
//   $scope.enableStep3Bool=false;
//   $scope.enableStep4Bool=false;
//
//   $scope.step1Bool=false;
//   $scope.step2Bool=false;
//   $scope.step3Bool=false;
//
//   $scope.addMenuBool=false;
//   $scope.breakfastBool=false;
//   $scope.lunchBool=false;
//   $scope.snacksBool=false;
//   $scope.dinnerBool=false;
//
//   $scope.cashAndCarryBool=false;
//   $scope.requirementsBool=false;
//   $scope.feedbackBool=true;
//   $scope.billingBool=false;
// }
// $scope.enableBBool=function()
// {
//   $scope.bBool=true;
//   $scope.lBool=false;
//   $scope.sBool=false;
//   $scope.dBool=false;
//
//   $scope.cashAndCarryBool=false;
//   $scope.addDeliveryBool=false;
//   $scope.enableStep1Bool=false;
//   $scope.enableStep2Bool=false;
//   $scope.enableStep3Bool=false;
//   $scope.enableStep4Bool=false;
//
//   $scope.step1Bool=false;
//   $scope.step2Bool=false;
//   $scope.step3Bool=false;
//
//   $scope.addMenuBool=false;
//   $scope.breakfastBool=false;
//   $scope.lunchBool=false;
//   $scope.snacksBool=false;
//   $scope.dinnerBool=false;
//
//   $scope.cashAndCarryBool=false;
//   $scope.requirementsBool=false;
//   $scope.feedbackBool=false;
//   $scope.billingBool=false;
// }
// $scope.enableLBool=function()
// {
//   $scope.bBool=false;
//   $scope.lBool=true;
//   $scope.sBool=false;
//   $scope.dBool=false;
//
//   $scope.cashAndCarryBool=false;
//   $scope.addDeliveryBool=false;
//   $scope.enableStep1Bool=false;
//   $scope.enableStep2Bool=false;
//   $scope.enableStep3Bool=false;
//   $scope.enableStep4Bool=false;
//
//   $scope.step1Bool=false;
//   $scope.step2Bool=false;
//   $scope.step3Bool=false;
//
//   $scope.addMenuBool=false;
//   $scope.breakfastBool=false;
//   $scope.lunchBool=false;
//   $scope.snacksBool=false;
//   $scope.dinnerBool=false;
//
//   $scope.cashAndCarryBool=false;
//   $scope.requirementsBool=false;
//   $scope.feedbackBool=false;
//   $scope.billingBool=false;
// }
// $scope.enableSBool=function()
// {
//   $scope.bBool=false;
//   $scope.lBool=false;
//   $scope.sBool=true;
//   $scope.dBool=false;
//
//   $scope.cashAndCarryBool=false;
//   $scope.addDeliveryBool=false;
//   $scope.enableStep1Bool=false;
//   $scope.enableStep2Bool=false;
//   $scope.enableStep3Bool=false;
//   $scope.enableStep4Bool=false;
//
//   $scope.step1Bool=false;
//   $scope.step2Bool=false;
//   $scope.step3Bool=false;
//
//   $scope.addMenuBool=false;
//   $scope.breakfastBool=false;
//   $scope.lunchBool=false;
//   $scope.snacksBool=false;
//   $scope.dinnerBool=false;
//
//   $scope.cashAndCarryBool=false;
//   $scope.requirementsBool=false;
//   $scope.feedbackBool=false;
//   $scope.billingBool=false;
// }
// $scope.enableDBool=function()
// {
//   $scope.bBool=false;
//   $scope.lBool=false;
//   $scope.sBool=false;
//   $scope.dBool=true;
//
//   $scope.cashAndCarryBool=false;
//   $scope.addDeliveryBool=false;
//   $scope.enableStep1Bool=false;
//   $scope.enableStep2Bool=false;
//   $scope.enableStep3Bool=false;
//   $scope.enableStep4Bool=false;
//
//   $scope.step1Bool=false;
//   $scope.step2Bool=false;
//   $scope.step3Bool=false;
//
//   $scope.addMenuBool=false;
//   $scope.breakfastBool=false;
//   $scope.lunchBool=false;
//   $scope.snacksBool=false;
//   $scope.dinnerBool=false;
//
//   $scope.cashAndCarryBool=false;
//   $scope.requirementsBool=false;
//   $scope.feedbackBool=false;
//   $scope.billingBool=false;
// }
// $scope.enableStep1= function(){
//   $scope.enableStep1Bool=true;
//   $scope.enableStep2Bool=false;
//   $scope.enableStep3Bool=false;
//   $scope.enableStep4Bool=false;
// }
// $scope.enableStep2= function(){
//   $scope.enableStep1Bool=false;
//   $scope.enableStep2Bool=true;
//   $scope.enableStep3Bool=false;
//   $scope.enableStep4Bool=false;
//   $scope.step1Bool=true;
// }
// $scope.enableStep3= function(){
//   $scope.enableStep1Bool=false;
//   $scope.enableStep2Bool=false;
//   $scope.enableStep3Bool=true;
//
//   $scope.enableStep4Bool=false;
//   $scope.step2Bool=true;
// }
// $scope.enableStep4= function(){
//   $scope.enableStep1Bool=false;
//   $scope.enableStep2Bool=false;
//   $scope.enableStep3Bool=false;
//   $scope.enableStep4Bool=true;
//   $scope.step3Bool=true;
// }
//
//   $scope.enableDeliverySection = function(){
//     $scope.cashAndCarryBool=false;
//     $scope.addDeliveryBool=true;
//     $scope.enableStep1Bool=true;
//     $scope.enableStep2Bool=false;
//     $scope.enableStep3Bool=false;
//     $scope.enableStep4Bool=false;
//
//     $scope.step1Bool=false;
//     $scope.step2Bool=false;
//     $scope.step3Bool=false;
//
//     $scope.addMenuBool=false;
//     $scope.breakfastBool=false;
//     $scope.lunchBool=false;
//     $scope.snacksBool=false;
//     $scope.dinnerBool=false;
//
//     $scope.cashAndCarryBool=false;
//     $scope.requirementsBool=false;
//
// initMap();
//   }
//   $scope.enableCashAndCarry = function(){
//     $scope.bBool=false;
//     $scope.lBool=false;
//     $scope.sBool=false;
//     $scope.dBool=false;
//
//     $scope.addDeliveryBool=false;
//     $scope.addMenuBool=false;
//     $scope.breakfastBool=false;
//     $scope.lunchBool=false;
//     $scope.snacksBool=false;
//     $scope.dinnerBool=false;
//     $scope.cashAndCarryBool=true;
//     $scope.requirementsBool=false;
//     $scope.feedbackBool=false;
//     $scope.billingBool=false;
//   }
//   $scope.enableRequirements = function(){
//     $scope.bBool=false;
//     $scope.lBool=false;
//     $scope.sBool=false;
//     $scope.dBool=false;
//
//     $scope.addDeliveryBool=false;
//     $scope.addMenuBool=false;
//     $scope.breakfastBool=false;
//     $scope.lunchBool=false;
//     $scope.snacksBool=false;
//     $scope.dinnerBool=false;
//     $scope.cashAndCarryBool=false;
//     $scope.requirementsBool=true;
//     $scope.feedbackBool=false;
//     $scope.billingBool=false;
//     }
//   $scope.enableMenuSection = function(){
//     $scope.bBool=false;
//     $scope.lBool=false;
//     $scope.sBool=false;
//     $scope.dBool=false;
//
//     $scope.addDeliveryBool=false;
//     $scope.addMenuBool=true;
//     $scope.breakfastBool=false;
//     $scope.lunchBool=false;
//     $scope.snacksBool=false;
//     $scope.dinnerBool=false;
//     $scope.cashAndCarryBool=false;
//     $scope.requirementsBool=false;
//     $scope.feedbackBool=false;
//     $scope.billingBool=false;
//   }
//   $scope.enableBreakfast = function(){
//     $scope.breakfastBool=true;
//     $scope.lunchBool=false;
//     $scope.snacksBool=false;
//     $scope.dinnerBool=false;
//     $scope.feedbackBool=false;
//     $scope.billingBool=false;
//   }
//   $scope.enableLunch = function(){
//     $scope.breakfastBool=false;
//     $scope.lunchBool=true;
//     $scope.snacksBool=false;
//     $scope.dinnerBool=false;
//     $scope.feedbackBool=false;
//     $scope.billingBool=false;
//   }
//   $scope.enableSnacks = function(){
//     $scope.breakfastBool=false;
//     $scope.lunchBool=false;
//     $scope.snacksBool=true;
//     $scope.dinnerBool=false;
//     $scope.feedbackBool=false;
//     $scope.billingBool=false;
//   }
//   $scope.enableDinner = function(){
//     $scope.breakfastBool=false;
//     $scope.lunchBool=false;
//     $scope.snacksBool=false;
//     $scope.dinnerBool=true;
//     $scope.feedbackBool=false;
//     $scope.billingBool=false;
//   }
  // -------UPDATE ALL(breakfast, lunch, snacks, dinner) MENU from backend-----------------------------
          var getCompUrl = getDashboardMenuUrl+$routeParams.compId;
          $http.get(getCompUrl).then(function(response)
          {
            // console.log("response ", JSON.stringify(response));
              for(var j = 0; j <response.data.data.menus.length; j++){
                // console.log("in second loop",response.data.data.menus.length);
                // console.log("1,2,3,4",$scope.type[0],response.data.data.menus[j].menuType,$scope.daysss[0],response.data.data.menus[j].dayName);
                $rootScope.buttonBool=false;
                  if($scope.type[0] === response.data.data.menus[j].menuType &&
                    $scope.daysss[0] === response.data.data.menus[j].dayName)
                    {
                      var menu = JSON.parse(response.data.data.menus[j].menu);
                      // console.log("menu check...........",menu);
                      $rootScope.buttonBool=true;
                      for(var k = 0; k<menu.length; k++)
                      {
                      // console.log("Inside if condition",menu[k]);
                      $scope.mondayMenuBreakfast.push(menu[k]);
                        // console.log($scope.mondayMenuBreakfast);
                    }
                    }
                    if($scope.type[0] === response.data.data.menus[j].menuType &&
                      $scope.daysss[1] === response.data.data.menus[j].dayName)
                      {
                        var menu = JSON.parse(response.data.data.menus[j].menu);
                        // console.log("menu check...........",menu.length);
                        for(var k = 0; k<menu.length; k++)
                        {
                        //  console.log("Inside if ----- condition",menu.length);
                        $scope.tuesdayMenuBreakfast.push(menu[k]);
                          // console.log($scope.mondayMenuBreakfast);
                      }
                      }
                      if($scope.type[0] === response.data.data.menus[j].menuType &&
                        $scope.daysss[2] === response.data.data.menus[j].dayName)
                        {
                          var menu = JSON.parse(response.data.data.menus[j].menu);
                          // console.log("menu check...........",menu.length);
                          for(var k = 0; k<menu.length; k++)
                          {
                          // console.log("Inside if condition",menu[k]);
                          $scope.wednesdayMenuBreakfast.push(menu[k]);
                            // console.log($scope.mondayMenuBreakfast);
                        }
                        }
                        if($scope.type[0] === response.data.data.menus[j].menuType &&
                          $scope.daysss[3] === response.data.data.menus[j].dayName)
                          {
                            var menu = JSON.parse(response.data.data.menus[j].menu);
                            // console.log("menu check...........",menu.length);
                            for(var k = 0; k<menu.length; k++)
                            {
                            // console.log("Inside if condition",menu[k]);
                            $scope.thursdayMenuBreakfast.push(menu[k]);
                              // console.log($scope.mondayMenuBreakfast);
                          }
                          }
                          if($scope.type[0] === response.data.data.menus[j].menuType &&
                            $scope.daysss[4] === response.data.data.menus[j].dayName)
                            {
                              var menu = JSON.parse(response.data.data.menus[j].menu);
                              // console.log("menu check...........",menu.length);
                              for(var k = 0; k<menu.length; k++)
                              {
                              // console.log("Inside if condition",menu[k]);
                              $scope.fridayMenuBreakfast.push(menu[k]);
                                // console.log($scope.mondayMenuBreakfast);
                            }
                            }
                            if($scope.type[0] === response.data.data.menus[j].menuType &&
                              $scope.daysss[5] === response.data.data.menus[j].dayName)
                              {
                                var menu = JSON.parse(response.data.data.menus[j].menu);
                                // console.log("menu check...........",menu.length);
                                for(var k = 0; k<menu.length; k++)
                                {
                                // console.log("Inside if condition",menu[k]);
                                $scope.saturdayMenuBreakfast.push(menu[k]);
                                  // console.log($scope.mondayMenuBreakfast);
                              }
                              }
                              if($scope.type[0] === response.data.data.menus[j].menuType &&
                                $scope.daysss[6] === response.data.data.menus[j].dayName)
                                {
                                  var menu = JSON.parse(response.data.data.menus[j].menu);
                                  // console.log("menu check...........",menu.length);
                                  for(var k = 0; k<menu.length; k++)
                                  {
                                  // console.log("Inside if condition",menu[k]);
                                  $scope.sundayMenuBreakfast.push(menu[k]);
                                    // console.log($scope.mondayMenuBreakfast);
                                }
                                }
                                if($scope.type[1] === response.data.data.menus[j].menuType &&
                                  $scope.daysss[0] === response.data.data.menus[j].dayName)
                                  {
                                    var menu = JSON.parse(response.data.data.menus[j].menu);
                                    // console.log("menu check...........",menu.length);
                                    for(var k = 0; k<menu.length; k++)
                                    {
                                    // console.log("Inside if condition",menu[k]);
                                    $scope.mondayMenuLunch.push(menu[k]);
                                      // console.log($scope.mondayMenuBreakfast);
                                  }
                                  }
                                  if($scope.type[1] === response.data.data.menus[j].menuType &&
                                    $scope.daysss[1] === response.data.data.menus[j].dayName)
                                    {
                                      var menu = JSON.parse(response.data.data.menus[j].menu);
                                      // console.log("menu check...........",menu.length);
                                      for(var k = 0; k<menu.length; k++)
                                      {
                                      //  console.log("Inside if ----- condition",menu.length);
                                      $scope.tuesdayMenuLunch.push(menu[k]);
                                        // console.log($scope.mondayMenuBreakfast);
                                    }
                                    }
                                    if($scope.type[1] === response.data.data.menus[j].menuType &&
                                      $scope.daysss[2] === response.data.data.menus[j].dayName)
                                      {
                                        var menu = JSON.parse(response.data.data.menus[j].menu);
                                        // console.log("menu check...........",menu.length);
                                        for(var k = 0; k<menu.length; k++)
                                        {
                                        // console.log("Inside if condition",menu[k]);
                                        $scope.wednesdayMenuLunch.push(menu[k]);
                                          // console.log($scope.mondayMenuBreakfast);
                                      }
                                      }
                                      if($scope.type[1] === response.data.data.menus[j].menuType &&
                                        $scope.daysss[3] === response.data.data.menus[j].dayName)
                                        {
                                          var menu = JSON.parse(response.data.data.menus[j].menu);
                                          // console.log("menu check...........",menu.length);
                                          for(var k = 0; k<menu.length; k++)
                                          {
                                          // console.log("Inside if condition",menu[k]);
                                          $scope.thursdayMenuLunch.push(menu[k]);
                                            // console.log($scope.mondayMenuBreakfast);
                                        }
                                        }
                                        if($scope.type[1] === response.data.data.menus[j].menuType &&
                                          $scope.daysss[4] === response.data.data.menus[j].dayName)
                                          {
                                            var menu = JSON.parse(response.data.data.menus[j].menu);
                                            // console.log("menu check...........",menu.length);
                                            for(var k = 0; k<menu.length; k++)
                                            {
                                            // console.log("Inside if condition",menu[k]);
                                            $scope.fridayMenuLunch.push(menu[k]);
                                              // console.log($scope.mondayMenuBreakfast);
                                          }
                                          }
                                          if($scope.type[1] === response.data.data.menus[j].menuType &&
                                            $scope.daysss[5] === response.data.data.menus[j].dayName)
                                            {
                                              var menu = JSON.parse(response.data.data.menus[j].menu);
                                              // console.log("menu check...........",menu.length);
                                              for(var k = 0; k<menu.length; k++)
                                              {
                                              // console.log("Inside if condition",menu[k]);
                                              $scope.saturdayMenuLunch.push(menu[k]);
                                                // console.log($scope.mondayMenuBreakfast);
                                            }
                                            }
                                            if($scope.type[1] === response.data.data.menus[j].menuType &&
                                              $scope.daysss[6] === response.data.data.menus[j].dayName)
                                              {
                                                var menu = JSON.parse(response.data.data.menus[j].menu);
                                                // console.log("menu check...........",menu.length);
                                                for(var k = 0; k<menu.length; k++)
                                                {
                                                // console.log("Inside if condition",menu[k]);
                                                $scope.sundayMenuLunch.push(menu[k]);
                                                  // console.log($scope.mondayMenuBreakfast);
                                              }
                                              }
                                              if($scope.type[2] === response.data.data.menus[j].menuType &&
                                                $scope.daysss[0] === response.data.data.menus[j].dayName)
                                                {
                                                  var menu = JSON.parse(response.data.data.menus[j].menu);
                                                  // console.log("menu check...........",menu.length);
                                                  for(var k = 0; k<menu.length; k++)
                                                  {
                                                  // console.log("Inside if condition",menu[k]);
                                                  $scope.mondayMenuSnacks.push(menu[k]);
                                                    // console.log($scope.mondayMenuBreakfast);
                                                }
                                                }
                                                if($scope.type[2] === response.data.data.menus[j].menuType &&
                                                  $scope.daysss[1] === response.data.data.menus[j].dayName)
                                                  {
                                                    var menu = JSON.parse(response.data.data.menus[j].menu);
                                                    // console.log("menu check...........",menu.length);
                                                    for(var k = 0; k<menu.length; k++)
                                                    {
                                                    //  console.log("Inside if ----- condition",menu.length);
                                                    $scope.tuesdayMenuSnacks.push(menu[k]);
                                                      // console.log($scope.mondayMenuBreakfast);
                                                  }
                                                  }
                                                  if($scope.type[2] === response.data.data.menus[j].menuType &&
                                                    $scope.daysss[2] === response.data.data.menus[j].dayName)
                                                    {
                                                      var menu = JSON.parse(response.data.data.menus[j].menu);
                                                      console.log("menu check...........",menu.length);
                                                      for(var k = 0; k<menu.length; k++)
                                                      {
                                                      // console.log("Inside if condition",menu[k]);
                                                      $scope.wednesdayMenuSnacks.push(menu[k]);
                                                        // console.log($scope.mondayMenuBreakfast);
                                                    }
                                                    }
                                                    if($scope.type[2] === response.data.data.menus[j].menuType &&
                                                      $scope.daysss[3] === response.data.data.menus[j].dayName)
                                                      {
                                                        var menu = JSON.parse(response.data.data.menus[j].menu);
                                                        // console.log("menu check...........",menu.length);
                                                        for(var k = 0; k<menu.length; k++)
                                                        {
                                                        // console.log("Inside if condition",menu[k]);
                                                        $scope.thursdayMenuSnacks.push(menu[k]);
                                                          // console.log($scope.mondayMenuBreakfast);
                                                      }
                                                      }
                                                      if($scope.type[2] === response.data.data.menus[j].menuType &&
                                                        $scope.daysss[4] === response.data.data.menus[j].dayName)
                                                        {
                                                          var menu = JSON.parse(response.data.data.menus[j].menu);
                                                          // console.log("menu check...........",menu.length);
                                                          for(var k = 0; k<menu.length; k++)
                                                          {
                                                          // console.log("Inside if condition",menu[k]);
                                                          $scope.fridayMenuSnacks.push(menu[k]);
                                                            // console.log($scope.mondayMenuBreakfast);
                                                        }
                                                        }
                                                        if($scope.type[2] === response.data.data.menus[j].menuType &&
                                                          $scope.daysss[5] === response.data.data.menus[j].dayName)
                                                          {
                                                            var menu = JSON.parse(response.data.data.menus[j].menu);
                                                            // console.log("menu check...........",menu.length);
                                                            for(var k = 0; k<menu.length; k++)
                                                            {
                                                            // console.log("Inside if condition",menu[k]);
                                                            $scope.saturdayMenuSnacks.push(menu[k]);
                                                              // console.log($scope.mondayMenuBreakfast);
                                                          }
                                                          }
                                                          if($scope.type[2] === response.data.data.menus[j].menuType &&
                                                            $scope.daysss[6] === response.data.data.menus[j].dayName)
                                                            {
                                                              var menu = JSON.parse(response.data.data.menus[j].menu);
                                                              // console.log("menu check...........",menu.length);
                                                              for(var k = 0; k<menu.length; k++)
                                                              {
                                                              // console.log("Inside if condition",menu[k]);
                                                              $scope.sundayMenuSnacks.push(menu[k]);
                                                                // console.log($scope.mondayMenuBreakfast);
                                                            }
                                                            }
                                                            if($scope.type[3] === response.data.data.menus[j].menuType &&
                                                              $scope.daysss[0] === response.data.data.menus[j].dayName)
                                                              {
                                                                var menu = JSON.parse(response.data.data.menus[j].menu);
                                                                // console.log("menu check...........",menu.length);
                                                                for(var k = 0; k<menu.length; k++)
                                                                {
                                                                // console.log("Inside if condition",menu[k]);
                                                                $scope.mondayMenuDinner.push(menu[k]);
                                                                  // console.log($scope.mondayMenuBreakfast);
                                                              }
                                                              }
                                                              if($scope.type[3] === response.data.data.menus[j].menuType &&
                                                                $scope.daysss[1] === response.data.data.menus[j].dayName)
                                                                {
                                                                  var menu = JSON.parse(response.data.data.menus[j].menu);
                                                                  // console.log("menu check...........",menu.length);
                                                                  for(var k = 0; k<menu.length; k++)
                                                                  {
                                                                  //  console.log("Inside if ----- condition",menu.length);
                                                                  $scope.tuesdayMenuDinner.push(menu[k]);
                                                                    // console.log($scope.mondayMenuBreakfast);
                                                                }
                                                                }
                                                                if($scope.type[3] === response.data.data.menus[j].menuType &&
                                                                  $scope.daysss[2] === response.data.data.menus[j].dayName)
                                                                  {
                                                                    var menu = JSON.parse(response.data.data.menus[j].menu);
                                                                    // console.log("menu check...........",menu.length);
                                                                    for(var k = 0; k<menu.length; k++)
                                                                    {
                                                                    // console.log("Inside if condition",menu[k]);
                                                                    $scope.wednesdayMenuDinner.push(menu[k]);
                                                                      // console.log($scope.mondayMenuBreakfast);
                                                                  }
                                                                  }
                                                                  if($scope.type[3] === response.data.data.menus[j].menuType &&
                                                                    $scope.daysss[3] === response.data.data.menus[j].dayName)
                                                                    {
                                                                      var menu = JSON.parse(response.data.data.menus[j].menu);
                                                                      // console.log("menu check...........",menu.length);
                                                                      for(var k = 0; k<menu.length; k++)
                                                                      {
                                                                      // console.log("Inside if condition",menu[k]);
                                                                      $scope.thursdayMenuDinner.push(menu[k]);
                                                                        // console.log($scope.mondayMenuBreakfast);
                                                                    }
                                                                    }
                                                                    if($scope.type[3] === response.data.data.menus[j].menuType &&
                                                                      $scope.daysss[4] === response.data.data.menus[j].dayName)
                                                                      {
                                                                        var menu = JSON.parse(response.data.data.menus[j].menu);
                                                                        // console.log("menu check...........",menu.length);
                                                                        for(var k = 0; k<menu.length; k++)
                                                                        {
                                                                        // console.log("Inside if condition",menu[k]);
                                                                        $scope.fridayMenuDinner.push(menu[k]);
                                                                          // console.log($scope.mondayMenuBreakfast);
                                                                      }
                                                                      }
                                                                      if($scope.type[3] === response.data.data.menus[j].menuType &&
                                                                        $scope.daysss[5] === response.data.data.menus[j].dayName)
                                                                        {
                                                                          var menu = JSON.parse(response.data.data.menus[j].menu);
                                                                          // console.log("menu check...........",menu.length);
                                                                          for(var k = 0; k<menu.length; k++)
                                                                          {
                                                                          // console.log("Inside if condition",menu[k]);
                                                                          $scope.saturdayMenuDinner.push(menu[k]);
                                                                            // console.log($scope.mondayMenuBreakfast);
                                                                        }
                                                                        }
                                                                        if($scope.type[3] === response.data.data.menus[j].menuType &&
                                                                          $scope.daysss[6] === response.data.data.menus[j].dayName)
                                                                          {
                                                                            var menu = JSON.parse(response.data.data.menus[j].menu);
                                                                            // console.log("menu check...........",menu.length);
                                                                            for(var k = 0; k<menu.length; k++)
                                                                            {
                                                                            // console.log("Inside if condition",menu[k]);
                                                                            $scope.sundayMenuDinner.push(menu[k]);
                                                                              // console.log($scope.mondayMenuBreakfast);
                                                                          }
                                                                          }

            }
          });
// ------------------------------------------------------------------------
}
}]);
