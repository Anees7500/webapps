vendorApp.factory('VendorDashboardService', ['$http', '$httpParamSerializerJQLike', '$location',
    'Notification', '$q', 'postUpdateMenuUrl', 'postDeleteMenuUrl',
    function ($http, $httpParamSerializerJQLike, $location, Notification, $q,
        postUpdateMenuUrl, postDeleteMenuUrl) {
        return {
            updateMenu: function (node, rId) {
                // console.log("menu node passed here 123", node);
                var menuForUpdate = {};
                var deferred = $q.defer();
                var respMenuJson = deferred.promise;
                menuForUpdate = {
                    uid: node.uid,
                    menuName: node.menuName,
                    isFoodItem: node.isFoodItem,
                    isEgg: node.isEgg,
                    isVeg: node.isVeg,
                    isAlcohol: node.isAlcohol,
                    menuType: node.menuType,
                    price: node.price,
                    description: node.description,
                    parentNodeId: node.parentNodeId
                };
                menuForUpdate.restaurantId = rId;

                $http({
                    method: 'POST',
                    url: postUpdateMenuUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(menuForUpdate)
                }).then(function (response) {
                    // console.log('response', response);
                    if (response.data.status == 1) {
                        // console.log('response.data.menuNode',response.data.data.menuNode);
                        deferred.resolve(response.data.data.menuNode);
                        Notification.success({
                            message: 'Successfully updated menu entry',
                            delay: 1000
                        });
                    } else {
                        //console.log('error updating menu');
                        deferred.reject(null);
                        Notification.error('Error in updating menu item');
                    }
                });
                return respMenuJson;
            },
            deleteNode: function (node, rId, vId, day) {
                console.log("menu node passed here 00000", node, rId, vId, day);
                var menuForDelete = {};
                var deferred = $q.defer();
                var respMenuJson = deferred.promise;
                // menuForDelete.menu = {
                //     uid: node.uid,
                //     id:node.id
                // };
                menuForDelete.vendorId = rId;
                menuForDelete.companyId = vId;
                menuForDelete.uid = node.uid;
                menuForDelete.dayName = day;

                console.log("made for delete json : - ", JSON.stringify(menuForDelete));
                $http({
                    method: 'POST',
                    url: postDeleteMenuUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(menuForDelete)
                }).then(function (response) {
                    if (response.status == 200) {
                        console.log('delete node response.data.menuNode', response.data.menuNode);
                        deferred.resolve(response.data.menuNode);
                        Notification.success({
                            message: 'Successfully Deleted menu entry',
                            delay: 1000
                        });
                    } else {
                        //console.log('error Deleted menu');
                        deferred.reject(null);
                        Notification.error('Error in Deleting menu item');
                    }
                });
                return respMenuJson;
            }
        }
    }
]);

vendorApp.factory('saveMenuService', ['$http', '$httpParamSerializerJQLike', '$location', 'postAddmenuUrl',
 'Notification', '$q', 'postUpdateMenuUrl',
    function($http, $httpParamSerializerJQLike, $location, postAddmenuUrl, Notification, $q, postUpdateMenuUrl) {
        return {
            submitMenu: function(node, rId) {
                //console.log("yo we are in service module bro");
                //console.log("menu node passed here", node);
                var menu = {};
                var deferred = $q.defer();
                var respMenuJson = deferred.promise;
                menu.menu = {
                    uid: node.uid,
                    menuName: node.menuName,
                    isFoodItem: node.isFoodItem,
                    isEgg: node.isEgg,
                    isVeg: node.isVeg,
                    isAlcohol: node.isAlcohol,
                    price: node.price,
                    description: node.description,
                    parentNodeId: node.parentNodeId
                };
                menu.restaurantId = rId;

                //console.log("made json : - ", JSON.stringify(menu));
                $http({
                    method: 'POST',
                    url: postAddmenuUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(menu)
                }).then(function(response) {
                    //console.log('response', JSON.stringify(response));
                    if (response.status == 1) {
                        //console.log('Successfully added menu in db');
                        deferred.resolve(response.data.menuNode);
                        Notification.success({
                            message: 'Successfully saved menu entry',
                            delay: 1000
                        });
                    } else {
                        //console.log('error adding menu');
                        deferred.reject(null);
                        Notification.error('Error in saving menu item');
                    }
                });

                return respMenuJson;
            }
        }
    }
]);
