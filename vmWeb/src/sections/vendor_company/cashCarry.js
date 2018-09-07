// // --------- cash and carry section  --> start
//
//               $scope.restaurantId = $cookies.get('id');
//
//               var unflatten = function(array, parent, tree) {
//                 // console.log("array, parent, tree",array, parent, tree);
//                   tree = typeof tree !== 'undefined' ? tree : [];
//                   parent = typeof parent !== 'undefined' ? parent : {
//                       id: null
//                   };
//                   var children = _.filter(array, function(child) {
//                       child.isInserted = true;
//                       // console.log("child.menuNodes,child.menuType",child.menuNodes,child.menuType);
//                       if(child.menuNodes ==null)
//                       {
//                         child.menuNodes = [];
//                       }
//                       if(child.menuType != null)
//                       {
//                         if(child.menuType === "veg")
//                         {
//                           child.isVeg = true;
//                           // console.log("isVeg");
//                         }
//                         else if(child.menuType === "egg")
//                         {
//                           child.isEgg = true;
//                           // console.log("isegg");
//                         }
//                       }
//                       return child.parentId == parent.id;
//                   });
//                   if (!_.isEmpty(children)) {
//                       // console.log("parent.id",parent.id);
//                       if (parent.id == 0 || parent.id == null) {
//                                 tree = children;
//                       } else {
//                           parent['menuNodes'] = children
//                       }
//                       _.each(children, function(child) {
//                           unflatten(array, child)
//                       });
//                   }
//                   return tree;
//               };
//
//
//
//               var getMenuMonUrl = getmenuFromDbMonUrl+"companyId="+companyId+"&vendorId="+vendorId;
//               console.log("getMenuMonUrl 2000000",getMenuMonUrl);
//
//               var promis = $http.get(getMenuMonUrl);
//
//               promis.then(function(response) {
//                   $scope.myNode = response.data.data.menus;
//                 console.log("$scope.myNode.MONDAY 000000000",_.isEmpty($scope.myNode.MONDAY));
//                   // for monday by default load
//
//                   if(!_.isEmpty($scope.myNode.MONDAY))
//                   {
//                     console.log("yehhhh true 4545")
//                     $scope.menuNodes = unflatten($scope.myNode.MONDAY);
//                     console.log("menu node after update ", $scope.menuNodes);
//                   }
//                   else
//                   {
//                     $scope.menuNodes = [{
//
//                       uid: uuid.new(),
//                       menuName: "",
//                       menuNodes: [],
//                       isFoodItem: false
//                     }];
//                   }
//                   // by default end monday
//                 });
//
//               //add menu
//               // var bigrandom = require('bigrandom');
//
//
//
//
//               $scope.addsection = function(nodes, index) {
//                
//                   console.log("function(nodes, index) 0003",nodes, index);
//                   var uid = uuid.new();
//                   console.log("isfood item 5555",nodes[index]);
//                   // console.log("var uid",uid);
//                   // console.log("nodes[index]",JSON.stringify(nodes[index]));
//                   // console.log("isFoodItem",isFoodItem);
//
//                   if (nodes[index].isFoodItem) {
//                     console.log("inside if");
//                       nodes.splice(index + 1, 0, {
//                           uid: uid,
//                           menuName: "New Add Section Menu 1",
//                           menuNodes: [],
//                           isFoodItem: true,
//                           parentNodeId: nodes[index].parentNodeId
//                       });
//                   } else {
//                     console.log("outside if index",nodes[index]);
//                       nodes.splice(index + 1, 0, {
//                           uid: uid,
//                           menuName: "New 2",
//                           menuNodes: [],
//                           isFoodItem: false,
//                           parentNodeId: nodes[index].parentNodeId
//                       });
//                       console.log("nodes 1002",nodes);
//                   }
//
//               }
//
//               $scope.addchild = function(node) {
//                   console.log("checked value 555 : ", JSON.stringify(node));
//                   var uid = uuid.new();
//                   node.menuNodes.push({
//                       uid: uid,
//                       menuName: "",
//                       menuNodes: [],
//                       isFoodItem: false,
//                       parentNodeId: node.uid
//                   });
//               }
//               // add menu ends here
//
//               $scope.submitMenu = function() {
//                   sectionService.submitMenu($scope.menuNodes, $scope.restaurantId);
//               }
//
//               // $scope.myfun = function(n) {
//               //   console.log("check m 1",n)
//               // }
//
//               $scope.saveInDb = function(node, dayName) {
//
//                 // console.log("check cheeeckkkkk 1 in ctrl file",node,dayName,companyId,$scope.restaurantId)
//                   saveMenuService.submitMenu(node, $scope.restaurantId,companyId,dayName)
//                   .then(function(returnedSaveMenu){
//                     // console.log("returnedSaveMenu 001",returnedSaveMenu);
//                   checkMe();
//                     if (returnedSaveMenu !== null) {
//                       updateMenuNode($scope.menuNodes,returnedSaveMenu);
//                     }
//                   });
//               }
//
//               $scope.updateMenu = function(node)
//               {
//                 updateMenuService.updateMenu(node, $scope.restaurantId)
//                 .then(function(returnedUpdatedMenu){
//                   // console.log("returnedUpdatedMenu",returnedUpdatedMenu);
//                   // console.log("returnedUpdatedMenu.length",returnedUpdatedMenu.length);
//                   checkMe();
//                   if (returnedUpdatedMenu !== null) {
//                     // console.log("value that are being passed here 000: ",returnedUpdatedMenu);
//                     updateMenuNode($scope.menuNodes,returnedUpdatedMenu);
//                   }
//                 });
//               };
//
//               $scope.deleteNode = function(node,day)
//               {
//                 // console.log("inside removve node 0002",node);
//                 updateMenuService.deleteNode(node, $scope.restaurantId,companyId,day)
//                 .then(function(deleteNodeResp){
//                   // console.log("response returned from deleteNode : ",JSON.stringify(deleteNodeResp));
//                   checkMe();
//                   updateDelMenuNode($scope.menuNodes,node.uid,null,null);
//                 });
//                 console.log("nodes 1002",nodes);
//               };
//
// var checkMe = function(){
// console.log("check Me inside");
// var getMenuMonUrl = getmenuFromDbMonUrl+"companyId="+companyId+"&vendorId="+vendorId;
// $http.get(getMenuMonUrl).then(function(response) {
//   console.log("yeehhh",response);
// $scope.myNode = response.data.data.menus;});
// }
//
//               var updateDelMenuNode = function(theObject,uid,index,mainArray) {
//                   var result = null;
//                   if (theObject instanceof Array) {
//                       for (var i = 0; i < theObject.length; i++) {
//                           result = updateDelMenuNode(theObject[i],uid,i,theObject);
//                           if (result) {
//                               break;
//                           }
//                       }
//                   } else {
//                       for (var prop in theObject) {
//                           if (prop == 'uid') {
//                               if (theObject[prop] == uid) {
//                                 mainArray.splice(index,1);
//                                 break;
//                               }
//                           }
//                           if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
//                               result = updateDelMenuNode(theObject[prop],uid,null,null);
//                               if (result) {
//                                   break;
//                               }
//                           }
//                       }
//                   }
//
//                   var mainMenuNodeLength = $scope.menuNodes.length;
//                   // console.log("mainMenuNodeLength",$scope.menuNodes.length);
//                   if(mainMenuNodeLength === 0)
//                   {
//                     $scope.menuNodes.push({uid: uuid.new(),menuName: "",menuNodes: [],isFoodItem: false});
//                   }
//                   return result;
//               }
//
//               var updateMenuNode = function(theObject,modifiedMenu) {
//                 // console.log("inside updateMenu 456",theObject,modifiedMenu);
//                   var result = null;
//                   if (theObject instanceof Array) {
//                       for (var i = 0; i < theObject.length; i++) {
//                           result = updateMenuNode(theObject[i],modifiedMenu);
//                           if (result) {
//                               break;
//                           }
//                       }
//                   } else {
//                       for (var prop in theObject) {
//                           if (prop == 'uid') {
//                               if (theObject[prop] == modifiedMenu.uid) {
//                                 theObject.id = modifiedMenu.id;
//                                 theObject.isInserted = true;
//                               }
//                           }
//                           if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
//                               result = updateMenuNode(theObject[prop],modifiedMenu);
//                               if (result) {
//                                   break;
//                               }
//                           }
//                       }
//                   }
//                   return result;
//               }
//
//               $scope.toggleAll = function() {
//                   var toggleStatus = $scope.restaurantDataForUpdate.isAllSelected;
//                   angular.forEach($scope.options, function(itm) {
//                       itm.selected = toggleStatus;
//                   });
//               }
//               $scope.optionToggled = function() {
//                   $scope.restaurantDataForUpdate.isAllSelected = $scope.options.every(function(itm) {
//                       return itm.selected;
//                   })
//               }
//               $scope.expandNode = function(n, $event) {
//                   // console.log("well inside expandNode",n,$event);
//                   $event.stopPropagation();
//                   n.toggle();
//               };
//
// $scope.callMe = function(x){
//   console.log("new c 5555",x);
//   if(x=="Monday"){
//     console.log("$scope.myNode 5555",$scope.myNode.MONDAY);
//
//     if(!_.isEmpty($scope.myNode.MONDAY))
//     {
//       $scope.menuNodes = unflatten($scope.myNode.MONDAY);
//       console.log("menu node after update ", $scope.menuNodes);
//     }else{
//       $scope.menuNodes = [{
//
//         uid: uuid.new(),
//         menuName: "Monday Menu",
//         menuNodes: [],
//         isFoodItem: false
//       }];
//     }
//   }
//   if(x=="Tuesday"){
//     console.log("!_.isEmpty($scope.myNode.TUESDAY) 5555",!_.isEmpty($scope.myNode.TUESDAY));
//
//       if(!_.isEmpty($scope.myNode.TUESDAY))
//     {
//       $scope.menuNodes = unflatten($scope.myNode.TUESDAY);
//     }
//   }
//   if(x=="Wednesday"){
//     console.log("$scope.myNode 5555",$scope.myNode.WEDNESDAY);
//
//     if(!_.isEmpty($scope.myNode.WEDNESDAY))
//     {
//       $scope.menuNodes = unflatten($scope.myNode.WEDNESDAY);
//     }
//   }
//   if(x=="Thursday"){
//     console.log("$scope.myNode 5555",$scope.myNode.THURSDAY);
//
//     if(!_.isEmpty($scope.myNode.THURSDAY))
//     {
//       $scope.menuNodes = unflatten($scope.myNode.THURSDAY);
//     }
//   }
//   if(x=="Friday"){
//     console.log("$scope.myNode 5555",$scope.myNode.FRIDAY);
//
//     if(!_.isEmpty($scope.myNode.FRIDAY))
//     {
//       $scope.menuNodes = unflatten($scope.myNode.FRIDAY);
//     }
//   }
//   if(x=="Saturday"){
//     console.log("$scope.myNode 5555",$scope.myNode.SATURDAY);
//
//     if(!_.isEmpty($scope.myNode.SATURDAY))
//     {
//       $scope.menuNodes = unflatten($scope.myNode.SATURDAY);
//     }
//   }
//   if(x=="Sunday"){
//     console.log("$scope.myNode 5555",$scope.myNode.SUNDAY);
//
//     if(!_.isEmpty($scope.myNode.SUNDAY))
//     {
//       $scope.menuNodes = unflatten($scope.myNode.SUNDAY);
//     }
//   }
//   $scope.menuNodes = [{
//
//       uid: uuid.new(),
//       menuName: "",
//       menuNodes: [],
//       isFoodItem: false
//   }];
//
// }
// // cash and carry section  --> end
// // _______________________***********end*************_________________________________________________
