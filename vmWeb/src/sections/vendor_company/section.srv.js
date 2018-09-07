// vmApp.factory('sectionService',['$http','$rootScope','$route','$httpParamSerializerJQLike','$location','Notification','addmenuUrl',
// function($http,$rootScope,$route,$httpParamSerializerJQLike,$location,Notification,addmenuUrl){
//   return {
//     saveMenu: function(menuType,dayName,companyId,list,postSaveMenuUrl)
//     {
//       // console.log("in sarvice file : ", companyId);
//       var rest = JSON.parse(JSON.stringify(list));
//       // console.log("rest : ", rest);
//       var jsonObj = {};
//       jsonObj.companyId = parseInt(companyId);
//       jsonObj.menu = rest;
//       jsonObj.menuType = menuType;
//       jsonObj.dayName = dayName;
// // console.log("menu checkkkkk in saveMenu function in srv file : ", jsonObj);
// // $route.reload();
// // console.log('response', JSON.stringify(response));
//
//         // console.log("menu json made : ", jsonObj);
//         $http({
//           method: 'POST',
//           url: postSaveMenuUrl,
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           data: $httpParamSerializerJQLike(jsonObj)
//       }).then(function(response) {
//
//           // console.log('response', JSON.stringify(response));
//           if (response.data.status == 1) {
//             $rootScope.buttonBool=true;
//               // Notification.success('Successfully Ragistered Menu');
//               // $route.reload();
//           } else {
//             $rootScope.buttonBool=false;
//               Notification.error('Error');
//               $route.reload();
//           }
//       })
//     },
// // cash and carry menu start
//     submitMenu: function(menuNodes, rmId) {
//         console.log("yo we are in service module bro id #000 SECTION");
//         // console.log("menu node passed here", menuNodes);
//         var menu = {};
//         menu.menu = menuNodes;
//         menu.restaurantId = rmId;
//
//         // console.log("made json : - ", JSON.stringify(menu));
//         $http({
//             method: 'POST',
//             url: addmenuUrl,
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             data: $httpParamSerializerJQLike(menu)
//         }).then(function(response) {
//             //console.log('response', response);
//             if (response.data.status == 1) {
//                 //console.log('Successfully added menu in db');
//             } else {
//                 //console.log('error adding menu');
//             }
//         });
//       },
// // cash and carry menu end
//         deleteVendorMenu: function(menuType,dayName,companyId,list,companyMenuId,postDeleteMenuUrl)
//         {
//           var count = Object.keys(list).length;
//           // console.log("count....",count);
//           // console.log("check ---> companyMenuId,postDeleteMenuUrl",companyMenuId,postDeleteMenuUrl);
//
//           var jsonObj = {};
//           jsonObj.companyMenuId = parseInt(companyMenuId);
//
//               $http({
//                 method: 'POST',
//                 url: postDeleteMenuUrl,
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//                 data: $httpParamSerializerJQLike(jsonObj)
//             })
//             .then(function(response) {
//
//                 // console.log('response', JSON.stringify(response));
//                 if (response.data.status == 1) {
//                     // console.log('Successfully menu deleted ');
//                     Notification.success('Successfully Menu Deleted');
//                     // $scope.saveBool=true;
//                     // $scope.updateBool=false;
//                     $rootScope.buttonBool=false;
//
//                 } else {
//                     // console.log('error registering');
//                     $rootScope.buttonBool=true;
//                     Notification.error('Error Could not delete');
//                     // $route.reload();
//                 }
//             })
//         },
//
//         updateVendorMenu: function(menuType,dayName,companyId,list,companyMenuId,postUpdateSaveMenuUrl,postDeleteMenuUrl)
//         {
//           // console.log("list=========",list);
//           var count = Object.keys(list).length;
//           // console.log("count....",count);
//
//         if(count==2)
//         {
//           // console.log("check ---> companyMenuId,postDeleteMenuUrl",companyMenuId,postDeleteMenuUrl);
//           var jsonObj = {};
//           jsonObj.companyMenuId = parseInt(companyMenuId);
//
//               $http({
//                 method: 'POST',
//                 url: postDeleteMenuUrl,
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//                 data: $httpParamSerializerJQLike(jsonObj)
//             })
//             .then(function(response) {
//
//                 // console.log('response', JSON.stringify(response));
//                 if (response.data.status == 1) {
//                     // console.log('Successfully menu deleted ');
//                     Notification.success('Successfully Menu Deleted');
//                     // $scope.saveBool=true;
//                     // $scope.updateBool=false;
//                     $rootScope.buttonBool=false;
//
//                 } else {
//                     // console.log('error registering');
//                     $rootScope.buttonBool=true;
//                     Notification.error('Error Could not delete');
//                     // $route.reload();
//                 }
//             })
//         }else{
//           // console.log("length > 0");
//           // console.log("list-< : ", len);
//           var rest = JSON.parse(JSON.stringify(list));
//           // console.log("rest : ", rest);
//
//           var jsonObj = {};
//           jsonObj.companyId = parseInt(companyId);
//           jsonObj.menu = rest;
//           jsonObj.menuType = menuType;
//           jsonObj.dayName = dayName;
//           jsonObj.companyMenuId = companyMenuId;
//         // console.log("menu checkkkkk : ", jsonObj);
//
//             $http({
//               method: 'POST',
//               url: postUpdateSaveMenuUrl,
//               headers: {
//                   'Content-Type': 'application/x-www-form-urlencoded',
//               },
//               data: $httpParamSerializerJQLike(jsonObj)
//           })
//           .then(function(response) {
//
//               // console.log('response', JSON.stringify(response));
//               if (response.data.status == 1) {
//                   // console.log('Successfully registered ');
//                   $rootScope.buttonBool=true;
//                   Notification.success('Successfully Menu Updated');
//                   // $route.reload();
//               } else {
//                   // console.log('error registering');
//                   $rootScope.buttonBool=false;
//                   Notification.error('Error Could not updated');
//                   // $route.reload();
//               }
//           })
//             }
//           }
//             // update menu end
//
//             // deleteVendorMenu: function(menuType,dayName,companyId,list,companyMenuId,postUpdateSaveMenuUrl)
//             // {
//             //   var rest = JSON.parse(JSON.stringify(list));
//             //   console.log("rest : ", rest);
//             //   var jsonObj = {};
//             //   jsonObj.companyId = parseInt(companyId);
//             //   jsonObj.menu = rest;
//             //   jsonObj.menuType = menuType;
//             //   jsonObj.dayName = dayName;
//             //   jsonObj.companyMenuId = companyMenuId;
//             // console.log("menu checkkkkk : ", jsonObj);
//             //
//             //     console.log("menu json made : ", jsonObj);
//             //     $http({
//             //       method: 'POST',
//             //       url: postUpdateSaveMenuUrl,
//             //       headers: {
//             //           'Content-Type': 'application/x-www-form-urlencoded',
//             //       },
//             //       data: $httpParamSerializerJQLike(jsonObj)
//             //   })
//             //   .then(function(response) {
//             //
//             //       console.log('response', JSON.stringify(response));
//             //       if (response.data.status == 1) {
//             //           console.log('Successfully delete ');
//             //           Notification.success('Successfully Menu Updated');
//             //       } else {
//             //           console.log('error registering');
//             //           Notification.error('Error Could not updated');
//             //           $route.reload();
//             //       }
//             //   })
//                 // }
//                 // delete menu end
//
//
//       }
//     }
// ]);
//
// // cash and carry factory method's start
// vmApp.factory('saveMenuService', ['$http', '$httpParamSerializerJQLike', '$location', 'addmenuUrl', 'Notification', '$q', 'updateMenuUrl',
//     function($http, $httpParamSerializerJQLike, $location, addmenuUrl, Notification, $q, updateMenuUrl) {
//         return {
//             submitMenu: function(node, rId, cId, dayName) {
//                 // console.log("1. yo we are in service module bro");
//                 // console.log("2. menu node passed here", node, rId, cId, dayName);
//                 var menu = {};
//                 var deferred = $q.defer();
//                 var respMenuJson = deferred.promise;
//                 // menu.menu = {
//                 //     uid: node.uid,
//                 //     menuName: node.menuName,
//                 //     isFoodItem: node.isFoodItem,
//                 //     // isEgg: node.isEgg,
//                 //     // isVeg: node.isVeg,
//                 //     // isNonVeg: node.isNonVeg,
//                 //     menuType: node.menuType,
//                 //     price: node.price,
//                 //     description: node.description,
//                 //     parentNodeId: node.parentNodeId
//                 // };
//                 menu.vendorId = parseInt(rId);
//                 menu.companyId = parseInt(cId);
//                 menu.dayName = dayName;
//                 menu.menuName = node.menuName;
//                 menu.uid = node.uid;
//                 menu.isFoodItem = node.isFoodItem;
//                 menu.menuType = node.menuType;
//                 menu.price = node.price;
//                 menu.description = node.description;
//                 menu.parentNodeId = node.parentNodeId;
//
//                 // console.log("made final json : - ", JSON.stringify(menu));
//                 $http({
//                     method: 'POST',
//                     url: addmenuUrl,
//                     headers: {
//                         'Content-Type': 'application/x-www-form-urlencoded',
//                     },
//                     data: $httpParamSerializerJQLike(menu)
//                 }).then(function(response) {
//                     // console.log('response------->', response);
//                     if (response.data.status == 1) {
//                         // console.log('Successfully added menu in db',response.data.data.menuNode);
//                         deferred.resolve(response.data.data.menuNode);
//                         Notification.success({
//                             message: 'Successfully saved menu entry',
//                             delay: 1000
//                         });
//                     } else {
//                         //console.log('error adding menu');
//                         deferred.reject(null);
//                         Notification.error('Error in saving menu item');
//                     }
//                 });
//
//                 return respMenuJson;
//             }
//         }
//     }
// ]);
//
// vmApp.factory('updateMenuService', ['$http', '$httpParamSerializerJQLike', '$location', 'Notification', '$q', 'updateMenuUrl','deleteMenuUrl',
//     function($http, $httpParamSerializerJQLike, $location, Notification, $q, updateMenuUrl,deleteMenuUrl) {
//         return {
//             updateMenu: function(node, rId) {
//                 // console.log("menu node passed here 123", node);
//                 var menuForUpdate = {};
//                 var deferred = $q.defer();
//                 var respMenuJson = deferred.promise;
//                 menuForUpdate = {
//                     uid: node.uid,
//                     menuName: node.menuName,
//                     isFoodItem: node.isFoodItem,
//                     isEgg: node.isEgg,
//                     isVeg: node.isVeg,
//                     isAlcohol: node.isAlcohol,
//                     menuType : node.menuType,
//                     price: node.price,
//                     description: node.description,
//                     parentNodeId: node.parentNodeId
//                 };
//                 menuForUpdate.restaurantId = rId;
//
//                 // menu.vendorId = parseInt(rId);
//                 // menu.companyId = parseInt(cId);
//                 // menu.dayName = dayName;
//                 // menu.menuType = node.menuType;
//
//
//                 //  tryCheck = JSON.stringify(menuForUpdate.menu.uid);
//                 // console.log("made json 2.5 : - ",JSON.stringify(menuForUpdate));
//
//                 $http({
//                     method: 'POST',
//                     url: updateMenuUrl,
//                     headers: {
//                         'Content-Type': 'application/x-www-form-urlencoded',
//                     },
//                     data: $httpParamSerializerJQLike(menuForUpdate)
//                 }).then(function(response) {
//                     // console.log('response', response);
//                     if (response.data.status == 1) {
//                         // console.log('response.data.menuNode',response.data.data.menuNode);
//                         deferred.resolve(response.data.data.menuNode);
//                         Notification.success({
//                             message: 'Successfully updated menu entry',
//                             delay: 1000
//                         });
//                     } else {
//                         //console.log('error updating menu');
//                         deferred.reject(null);
//                         Notification.error('Error in updating menu item');
//                     }
//                 });
//                 return respMenuJson;
//             },
//             deleteNode: function(node, rId, vId, day) {
//                 console.log("menu node passed here 00000", node,rId,vId,day);
//                 var menuForDelete = {};
//                 var deferred = $q.defer();
//                 var respMenuJson = deferred.promise;
//                 // menuForDelete.menu = {
//                 //     uid: node.uid,
//                 //     id:node.id
//                 // };
//                 menuForDelete.vendorId = rId;
//                 menuForDelete.companyId = vId;
//                 menuForDelete.uid = node.uid;
//                 menuForDelete.dayName = day;
//
//                 console.log("made for delete json : - ", JSON.stringify(menuForDelete));
//                 $http({
//                     method: 'POST',
//                     url: deleteMenuUrl,
//                     headers: {
//                         'Content-Type': 'application/x-www-form-urlencoded',
//                     },
//                     data: $httpParamSerializerJQLike(menuForDelete)
//                 }).then(function(response) {
//                     // console.log('my ss response.status', response.status);
//                     // console.log('response', response);
//                     // // console.log('data.data.status', data.data.status);
//                     // console.log('response.data.data.status',response.data.data);
//                     // console.log('response.data.status', response.data.status);
//                     // console.log('response.data.message', response.data.message);
//                     if (response.status == 200) {
//                         console.log('delete node response.data.menuNode',response.data.menuNode);
//                         deferred.resolve(response.data.menuNode);
//                         Notification.success({
//                             message: 'Successfully Deleted menu entry',
//                             delay: 1000
//                         });
//                     } else {
//                         //console.log('error Deleted menu');
//                         deferred.reject(null);
//                         Notification.error('Error in Deleting menu item');
//                     }
//                 });
//                 return respMenuJson;
//             }
//         }
//     }
// ]);
