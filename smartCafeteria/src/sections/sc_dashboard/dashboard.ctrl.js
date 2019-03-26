empApp.controller('DashboardController', ['$scope', 'DashboardService', 'getVendorMenuList', '$http', '$location', '$cookies',
    'Notification', 'getVendorList', 'CartService', 'NavBoolService', '$httpParamSerializerJQLike', 'CommonDetails', 'companyDetails',
    '$timeout',
    function($scope, DashboardService, getVendorMenuList, $http, $location, $cookies, Notification,
        getVendorList, CartService, NavBoolService, $httpParamSerializerJQLike, CommonDetails, companyDetails,
        $timeout) {

        // ============= Logout ==================================

        // $scope.logout = function () {
        //   $cookies.remove('eId');
        //   $cookies.remove('rId');
        //   $cookies.remove('cId');
        //   $location.path('/');
        // }
        // if ($cookies.get('eId') == null) {
        //   Notification.warning("Login required!!!");
        //   $location.path('/');
        //   $route.reload();
        // }


        $scope.getNavBool = function() {
            return NavBoolService.getNavBool();
        }

        //==============================================================
        //================ DEFINITION PART START========================
        //==============================================================

        /* vendor List */
        $scope.vendorList = [];

        /* Cart items  */
        $scope.cartItems = {};
        //==============================================================
        //================ DEFINITION PART END==========================
        //==============================================================
        // console.log("getting comp dtls");
        var vendorListUrl = getVendorList + companyDetails.id;

        DashboardService.getVendors(vendorListUrl).then(function(response) {
            if (response.data.data != null) {
                $scope.vendorList = response.data.data.details;
                CartService.setVendor($scope.vendorList[0]);
                $scope.selectedVendor = CartService.getSelectedVendor();
                getMenus();
            } else {
                $scope.noVendorListMsg = "No Vendor has been deployed for this company yet";
            }
        });

        var getMenus = function() {
            // console.log("came here to find menu");
            var menuListUrl = getVendorMenuList + "?vendorToken=" + $scope.selectedVendor.authUserId +
                "&companyToken=" + companyDetails.authUserId;
            $http.get(menuListUrl).then(function(response) {
                $scope.menuNode = null;
                if (response.data.data != null) {
                    $scope.menuNode = response.data.data.menus;
                    $scope.selectedMenuNode = $scope.menuNode[0].menuNode;
                } else {
                    // console.log("found no menu ", $scope.menuNode);
                    $scope.noMenuMessage = "Vendor has not filled any menu for today.";
                }

                // console.log("selected Menu : ", JSON.stringify($scope.selectedMenuNode));
            });
        }



        //==============================================================
        //================ GET DATA FROM DB PART START==================
        //==============================================================

        /* Vendor List */


        //==============================================================
        //================ GET DATA FROM DB PART END====================
        //==============================================================


        // ===================functions=================================

        $scope.selectVendor = function(obj) {
            CartService.setVendor(obj);
            $scope.selectedVendor = CartService.getSelectedVendor();
            // console.log("new Selected Vendor : ", JSON.stringify($scope.selectedVendor));
            getMenus();

        }

        $scope.makeFavouritNReverse = function(obj) {
            obj.favourite = obj.favourite ? false : true;
        }

        $scope.checkForSubMenu = function(arr) {
            var resp = false;
            angular.forEach(arr, function(e) {
                if (!e.isFoodItem) {
                    // console.log("name : ", e.menuName);
                    resp = true;
                }
            });
            // console.log("resp : ", resp);
            return resp;
        }

        $scope.toggleSubMenu = function(obj) {
            obj.toggle = obj.toggle ? false : true;
        }

        $scope.selectNodeToDisplay = function(arr, obj, isChildNode) {
            // console.log("selected Menu by functions passed obj: ", JSON.stringify(arr));
            if (isChildNode === 1) {
                if ($scope.checkForSubMenu(arr)) {
                    $scope.toggleSubMenu(obj);
                    return;
                }
            }

            $scope.selectedMenuNode = arr;

            // console.log("selected Menu by functions: ", JSON.stringify($scope.selectedMenuNode));
        }

        $scope.cartObj = CartService.getCartObj();
        $scope.addToCart = function(itemObj) {


            $scope.cartObj = CartService.addToCart(itemObj);

        };



        $scope.addCount = function(val) {

            $scope.cartObj = CartService.addCount(val);
        }

        $scope.reduceCount = function(val) {

            $scope.cartObj = CartService.reduceCount(val);
        }

        var getAmount = function(obj) {
            return (obj.count * obj.obj.price);
        }

        var getTotalAmount = function(obj) {
            if ($scope.getCartItemSize(obj) == 0) {
                return null;
            }
            var amt = 0;
            angular.forEach(obj, function(val, key) {
                if (val != null) {
                    if (val.amount != null) {
                        amt = amt + val.amount;
                    }
                }

            });
            return amt;
        }

        $scope.getCartItemSize = function(obj) {
            CartService.getCartItemSize();
        }

        $scope.getVendorName = function(id) {
            // debugger;
            var vName = "";
            angular.forEach($scope.vendorList, function(vl) {
                // debugger;
                if (vl.vendorId == id) {
                    vName = vl.name;
                }
            });

            return vName;
        }

        $scope.gotoCheckout = function() {
            // console.log("itens hahah: ", JSON.stringify($scope.cartItems));
            console.log("items : ", JSON.stringify($scope.cartObj.cartItems));
            if ($scope.cartObj.cartItems == null || Object.keys($scope.cartObj.cartItems).length == 0) {
                Notification.warning("No menu is selected, Please select few Items to checkout");
                return;
            }

            // $cookies.put("selectedCartItems", JSON.stringify($scope.cartItems));
            $location.path("/dashboard/checkout");
        }







        //======================= Favourit Button =======================

        $scope.makeFavouritNReverse = function() {
            $scope.favourite = $scope.favourite ? false : true;
        }

        $scope.fav = function(node) {
            debugger;
            var dataForDb = {};
            dataForDb.companyId = companyId;
            dataForDb.employeeId = $cookies.get("eId");
            dataForDb.menuId = node.id;

            $http({
                method: 'POST',
                url: "http://fancymonk.com:9125/api/client/emp-favorite-menu/add",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: $httpParamSerializerJQLike(dataForDb)
            }).then(function(response) {
                // console.log('response from favorite url', JSON.stringify(response));
                // if (response.data.status == 1) {
                //     // Notification.success('Booking request has been raised..');
                //     $location.path('/dashboard/orders');
                // } else {
                //     console.log('error registering');
                // }
            });
            // DashboardService.makeMenuFavoriteAndUnfavorite(dataForDb, false);

        }

    }
    // }
]);