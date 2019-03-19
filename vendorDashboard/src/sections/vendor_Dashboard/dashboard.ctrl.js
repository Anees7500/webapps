vendorApp.controller('DashboardController', ['$scope', '$http', 'VendorDashboardService', '$cookies', 'Notification',
    '$location', '$route', 'getSmartCafeteriaOrders', 'getCompanyProfileUrl', 'getCorporateReviewsUrl',
    '$routeParams', '$rootScope', '$filter', 'getmenuFromDbMonUrl', 'getCompanySectionReqUrl', 'uuid',
    'saveMenuService','updateMenuService',
    function ($scope, $http, VendorDashboardService, $cookies, Notification, $location,
        $route, getSmartCafeteriaOrders, getCompanyProfileUrl, getCorporateReviewsUrl,
        $routeParams, $rootScope, $filter, getmenuFromDbMonUrl, getCompanySectionReqUrl,
        uuid, saveMenuService,updateMenuService) {

        // $scope.sortingOrder = sortingOrder;

        var vendorId = 1;
        var companyId = $routeParams.compId;
        // var companyId = 1;
    

        var getCompProfileUrl = getCompanyProfileUrl + $routeParams.compId;
        $http.get(getCompProfileUrl).then(function (response) {
            $scope.cmpyName = response.data.data.company.companyName;
            $scope.cmpyAddress = response.data.data.company.address;
            $scope.data = response.data.data.company;
        });
        // ====================== bool function =============================
        $scope.boolFunction = function (value) {
            console.log("boolFunction", value);

            $scope.pendingOrdersBool = false;
            $scope.confirmedOrdersBool = false;
            $scope.cancelOrdersBool = false;
            $scope.completedOrdersBool = false;
            $scope.paymentStatusBool = false;
            $scope.feedbackBool = false;
            $scope.setWeeklyMenuBool = false;
            $scope.extraCode = false;
            $scope[value] = true;
        }
        $scope.boolFunction("pendingOrdersBool");

        // =============================== set menu =========================================
        $scope.workingDays = [
            { day: "Monday", selected: false, dbName: "monday" },
            { day: "Tuesday", selected: false, dbName: "tuesday" },
            { day: "Wednesday", selected: false, dbName: "wednesday" },
            { day: "Thursday", selected: false, dbName: "thursday" },
            { day: "Friday", selected: false, dbName: "friday" },
            { day: "Saturday", selected: false, dbName: "saturday" },
            { day: "Sunday", selected: false, dbName: "sunday" }
        ];
        //================================ Cancel Orders ====================================
        $scope.cancelOrderHistroy = [
            { menuItemName: "Egg Burji Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "10/02/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji", menuItemCount: "1", totalAmount: "110", orderOn: "21/02/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "2/03/2018", paymentMode: "Cash on", paymentStatus: "Received", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "10/02/2019", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji", menuItemCount: "1", totalAmount: "110", orderOn: "12/01/2019", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "10/04/2018", paymentMode: "Cash on", paymentStatus: "Received", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "1/05/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji", menuItemCount: "1", totalAmount: "110", orderOn: "11/07/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "10/12/2018", paymentMode: "Cash on", paymentStatus: "Received", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "3/04/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji", menuItemCount: "1", totalAmount: "110", orderOn: "16/05/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" }
        ];
        $scope.itemsPerPage = 7;
        $scope.cancelOrderHistroyPage = [];
        $scope.search = function () {
            $scope.currentPage = 0;
            $scope.groupToPages();
        };
        $scope.groupToPages = function () {
            $scope.cancelOrderHistroyPage = [];
            for (var i = 0; i < $scope.cancelOrderHistroy.length; i++) {
                if (i % $scope.itemsPerPage === 0) {
                    $scope.cancelOrderHistroyPage[Math.floor(i / $scope.itemsPerPage)] = [$scope.cancelOrderHistroy[i]];
                } else {
                    $scope.cancelOrderHistroyPage[Math.floor(i / $scope.itemsPerPage)].push($scope.cancelOrderHistroy[i]);
                }
            }
        };
        $scope.ranges = function (start, end) {
            var ret = [];
            if (!end) {
                end = start;
                start = 0;
            }
            for (var i = start; i < end; i++) {
                ret.push(i);
            }
            return ret;
        };
        $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };
        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.cancelOrderHistroyPage.length - 1) {
                $scope.currentPage++;
            }
        };
        $scope.setPages = function () {
            $scope.currentPage = this.n;
        };
        $scope.search();

        //================================ Payment Summary ====================================
        $scope.paymentSummary = [
            { data: "Today", totalAmount: "10,000" },
            { data: "This Week", totalAmount: "70,000" },
            { data: "This Month", totalAmount: "2,10,000" },
            { data: "This Quarter", totalAmount: "8,40,000" },
            { data: "This Year", totalAmount: "22,50,000" }
        ]

        // ================================ Weekly Menu ========================================
        $scope.restaurantId = $cookies.get('id');

        var unflatten = function (array, parent, tree) {
            // console.log("array, parent, tree",array, parent, tree);
            tree = typeof tree !== 'undefined' ? tree : [];
            parent = typeof parent !== 'undefined' ? parent : {
                id: null
            };
            var children = _.filter(array, function (child) {
                child.isInserted = true;
                if (child.menuNodes == null) {
                    child.menuNodes = [];
                }
                if (child.menuType != null) {
                    if (child.menuType === "veg") {
                        child.isVeg = true;
                        // console.log("isVeg");
                    }
                    else if (child.menuType === "egg") {
                        child.isEgg = true;

                    }
                }
                return child.parentId == parent.id;
            });
            if (!_.isEmpty(children)) {
                if (parent.id == 0 || parent.id == null) {
                    tree = children;
                } else {
                    parent['menuNodes'] = children
                }
                _.each(children, function (child) {
                    unflatten(array, child)
                });
            }
            return tree;
        };



        var getWeeklyMenuUrl = getmenuFromDbMonUrl + "companyId=" + 1 + "&vendorId=" + vendorId;
        // $scope.weekMenuSorted = {};
        // $scope.weekMenuSorted.MONDAY = {};
        // $scope.weekMenuSorted.TUESDAY = {};
        // $scope.weekMenuSorted.WEDNESDAY = {};
        // $scope.weekMenuSorted.THURSDAY = {};
        // $scope.weekMenuSorted.FRIDAY = {};
        // $scope.weekMenuSorted.SATURDAY = {};
        // $scope.weekMenuSorted.SUNDAY = {};

        $http.get(getWeeklyMenuUrl).then(function (response) {
            // $scope.menuDayName = response.data.data.menus.MONDAY;
            // $scope.menuDayName1 = response.data.data.menus.TUESDAY;
            console.log("getWeeklyMenuUrl 2000000", $scope.menuDayName);
        });


        var promis = $http.get(getWeeklyMenuUrl);

        promis.then(function (response) {
            $scope.myNode = response.data.data.menus;
            if (!_.isEmpty($scope.myNode.TUESDAY)) {
                console.log("yehhhh true 4545")
                $scope.menuNodes = unflatten($scope.myNode.TUESDAY);
                console.log("menu node after update ", JSON.stringify($scope.menuNodes));

            }
            else {
                $scope.menuNodes = [{

                    uid: uuid.new(),
                    menuName: "",
                    menuNodes: [],
                    isFoodItem: false
                }];
            }
        });

        $scope.addsection = function (nodes, index) {
            var uid = uuid.new();

            if (nodes[index].isFoodItem) {
                console.log("inside if");
                nodes.splice(index + 1, 0, {
                    uid: uid,
                    menuName: "",
                    menuNodes: [],
                    isFoodItem: true,
                    parentNodeId: nodes[index].parentNodeId
                });
            } else {
                console.log("outside if index", nodes[index]);
                nodes.splice(index + 1, 0, {
                    uid: uid,
                    menuName: "",
                    menuNodes: [],
                    isFoodItem: false,
                    parentNodeId: nodes[index].parentNodeId
                });
                console.log("nodes 1002", nodes);
            }
        }

        $scope.addchild = function (node) {

            if (node.decisionCollapse) {
                $scope.toggleCollapse(node);
            }
            // console.log("checked value 555 : ", JSON.stringify(node));
            var uid = uuid.new();
            node.menuNodes.push({
                uid: uid,
                menuName: "",
                menuNodes: [],
                isFoodItem: false,
                parentNodeId: node.uid
            });
        }

        $scope.submitMenu = function () {
            sectionService.submitMenu($scope.menuNodes, $scope.restaurantId);
        }

        $scope.saveInDb = function (node, dayName) {

            saveMenuService.submitMenu(node, $scope.restaurantId, companyId, dayName)
                .then(function (returnedSaveMenu) {
                    checkMe();
                    if (returnedSaveMenu !== null) {
                        updateMenuNode($scope.menuNodes, returnedSaveMenu);
                    }
                });
        }

        $scope.updateMenu = function (node) {
            VendorDashboardService.updateMenu(node, $scope.restaurantId)
                .then(function (returnedUpdatedMenu) {
                    checkMe();
                    if (returnedUpdatedMenu !== null) {
                        updateMenuNode($scope.menuNodes, returnedUpdatedMenu);
                    }
                });
        };

        $scope.deleteNode = function (node, day) {
            // console.log("inside removve node 0002",node);
            VendorDashboardService.deleteNode(node, $scope.restaurantId, companyId, day)
                .then(function (deleteNodeResp) {
                    // console.log("response returned from deleteNode : ",JSON.stringify(deleteNodeResp));
                    checkMe();
                    updateDelMenuNode($scope.menuNodes, node.uid, null, null);
                });
            // console.log("nodes 1002",nodes);
        };

        var checkMe = function () {
            console.log("check Me inside");
            var getWeeklyMenuUrl = getmenuFromDbMonUrl + "companyId=" + companyId + "&vendorId=" + vendorId;
            $http.get(getWeeklyMenuUrl).then(function (response) {
                console.log("yeehhh", response);
                $scope.myNode = response.data.data.menus;
            });
        }

        var updateDelMenuNode = function (theObject, uid, index, mainArray) {
            var result = null;
            if (theObject instanceof Array) {
                for (var i = 0; i < theObject.length; i++) {
                    result = updateDelMenuNode(theObject[i], uid, i, theObject);
                    if (result) {
                        break;
                    }
                }
            } else {
                for (var prop in theObject) {
                    if (prop == 'uid') {
                        if (theObject[prop] == uid) {
                            mainArray.splice(index, 1);
                            break;
                        }
                    }
                    if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                        result = updateDelMenuNode(theObject[prop], uid, null, null);
                        if (result) {
                            break;
                        }
                    }
                }
            }

            var mainMenuNodeLength = $scope.menuNodes.length;
            // console.log("mainMenuNodeLength",$scope.menuNodes.length);
            if (mainMenuNodeLength === 0) {
                $scope.menuNodes.push({ uid: uuid.new(), menuName: "", menuNodes: [], isFoodItem: false });
            }
            return result;
        }

        var updateMenuNode = function (theObject, modifiedMenu) {
            // console.log("inside updateMenu 456",theObject,modifiedMenu);
            var result = null;
            if (theObject instanceof Array) {
                for (var i = 0; i < theObject.length; i++) {
                    result = updateMenuNode(theObject[i], modifiedMenu);
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
                        result = updateMenuNode(theObject[prop], modifiedMenu);
                        if (result) {
                            break;
                        }
                    }
                }
            }
            return result;
        }

        $scope.toggleAll = function () {
            var toggleStatus = $scope.restaurantDataForUpdate.isAllSelected;
            angular.forEach($scope.options, function (itm) {
                itm.selected = toggleStatus;
            });
        }
        $scope.optionToggled = function () {
            $scope.restaurantDataForUpdate.isAllSelected = $scope.options.every(function (itm) {
                return itm.selected;
            })
        }
        $scope.toggleCollapse = function (node) {
            console.log("node: ", node);

            if (node.decisionCollapse) {
                node.decisionCollapse = false;
            }
            else {
                node.decisionCollapse = true;
            }
        };

        $scope.cId = $routeParams.compId;
        $scope.saveMenu = function (menu, menuType, dayName) {
            // console.log("menu  ctrl: ", JSON.stringify(menu));
            var list = JSON.stringify(menu);
            var companyId = $routeParams.compId;
            // console.log("out loop menu", menu);


            menuType = menuType;
            dayName = dayName;
            companyId = companyId;

            // console.log("menuType,dayName,companyId ",menuType,dayName,companyId);
            sectionService.saveMenu(menuType, dayName, companyId, list, postSaveMenuUrl);
        }

        $scope.deleteVendorMenu = function (index, menu, menuType, dayName) {
            // console.log('menu,menuType,dayName',index,menu,menuType,dayName);
            // console.log('mondayMenuBreakfast before slice length:', $scope.mondayMenuBreakfast.length)
            if (menuType == "BREAKFAST" && dayName == "Monday") { $scope.mondayMenuBreakfast.splice(index, 1); var list = JSON.stringify($scope.mondayMenuBreakfast); }
            if (menuType == "BREAKFAST" && dayName == "Tuesday") { $scope.tuesdayMenuBreakfast.splice(index, 1); var list = JSON.stringify($scope.tuesdayMenuBreakfast); }
            if (menuType == "BREAKFAST" && dayName == "Wednesday") { $scope.wednesdayMenuBreakfast.splice(index, 1); var list = JSON.stringify($scope.wednesdayMenuBreakfast); }
            if (menuType == "BREAKFAST" && dayName == "Thursday") { $scope.thursdayMenuBreakfast.splice(index, 1); var list = JSON.stringify($scope.thursdayMenuBreakfast); }
            if (menuType == "BREAKFAST" && dayName == "Friday") { $scope.fridayMenuBreakfast.splice(index, 1); var list = JSON.stringify($scope.fridayMenuBreakfast); }
            if (menuType == "BREAKFAST" && dayName == "Saturday") { $scope.saturdayMenuBreakfast.splice(index, 1); var list = JSON.stringify($scope.saturdayMenuBreakfast); }
            if (menuType == "BREAKFAST" && dayName == "Sunday") { $scope.sundayMenuBreakfast.splice(index, 1); var list = JSON.stringify($scope.sundayMenuBreakfast); }

            if (menuType == "LUNCH" && dayName == "Monday") { $scope.mondayMenuLunch.splice(index, 1); var list = JSON.stringify($scope.mondayMenuLunch); }
            if (menuType == "LUNCH" && dayName == "Tuesday") { $scope.tuesdayMenuLunch.splice(index, 1); var list = JSON.stringify($scope.tuesdayMenuLunch); }
            if (menuType == "LUNCH" && dayName == "Wednesday") { $scope.wednesdayMenuLunch.splice(index, 1); var list = JSON.stringify($scope.wednesdayMenuLunch); }
            if (menuType == "LUNCH" && dayName == "Thursday") { $scope.thursdayMenuLunch.splice(index, 1); var list = JSON.stringify($scope.thursdayMenuLunch); }
            if (menuType == "LUNCH" && dayName == "Friday") { $scope.fridayMenuLunch.splice(index, 1); var list = JSON.stringify($scope.fridayMenuLunch); }
            if (menuType == "LUNCH" && dayName == "Saturday") { $scope.saturdayMenuLunch.splice(index, 1); var list = JSON.stringify($scope.saturdayMenuLunch); }
            if (menuType == "LUNCH" && dayName == "Sunday") { $scope.sundayMenuLunch.splice(index, 1); var list = JSON.stringify($scope.sundayMenuLunch); }

            if (menuType == "SNACKS" && dayName == "Monday") { $scope.mondayMenuSnacks.splice(index, 1); var list = JSON.stringify($scope.mondayMenuSnacks); }
            if (menuType == "SNACKS" && dayName == "Tuesday") { $scope.tuesdayMenuSnacks.splice(index, 1); var list = JSON.stringify($scope.tuesdayMenuSnacks); }
            if (menuType == "SNACKS" && dayName == "Wednesday") { $scope.wednesdayMenuSnacks.splice(index, 1); var list = JSON.stringify($scope.wednesdayMenuSnacks); }
            if (menuType == "SNACKS" && dayName == "Thursday") { $scope.thursdayMenuSnacks.splice(index, 1); var list = JSON.stringify($scope.thursdayMenuSnacks); }
            if (menuType == "SNACKS" && dayName == "Friday") { $scope.fridayMenuSnacks.splice(index, 1); var list = JSON.stringify($scope.fridayMenuSnacks); }
            if (menuType == "SNACKS" && dayName == "Saturday") { $scope.saturdayMenuSnacks.splice(index, 1); var list = JSON.stringify($scope.saturdayMenuSnacks); }
            if (menuType == "SNACKS" && dayName == "Sunday") { $scope.sundayMenuSnacks.splice(index, 1); var list = JSON.stringify($scope.sundayMenuSnacks); }

            if (menuType == "DINNER" && dayName == "Monday") { $scope.mondayMenuDinner.splice(index, 1); var list = JSON.stringify($scope.mondayMenuDinner); }
            if (menuType == "DINNER" && dayName == "Tuesday") { $scope.tuesdayMenuDinner.splice(index, 1); var list = JSON.stringify($scope.tuesdayMenuDinner); }
            if (menuType == "DINNER" && dayName == "Wednesday") { $scope.wednesdayMenuDinner.splice(index, 1); var list = JSON.stringify($scope.wednesdayMenuDinner); }
            if (menuType == "DINNER" && dayName == "Thursday") { $scope.thursdayMenuDinner.splice(index, 1); var list = JSON.stringify($scope.thursdayMenuDinner); }
            if (menuType == "DINNER" && dayName == "Friday") { $scope.fridayMenuDinner.splice(index, 1); var list = JSON.stringify($scope.fridayMenuDinner); }
            if (menuType == "DINNER" && dayName == "Saturday") { $scope.saturdayMenuDinner.splice(index, 1); var list = JSON.stringify($scope.saturdayMenuDinner); }
            if (menuType == "DINNER" && dayName == "Sunday") { $scope.sundayMenuDinner.splice(index, 1); var list = JSON.stringify($scope.sundayMenuDinner); }


            // var list=JSON.stringify($scope.mondayMenuBreakfast);
            var companyId = $routeParams.compId;
            menuType = menuType;
            dayName = dayName;
            companyId = companyId;
            var getCompUrl = getDashboardMenuUrl + $routeParams.compId;
            $http.get(getCompUrl).then(function (response) {
                for (var i = 0; i < response.data.data.menus.length; i++) {
                    if (menuType == response.data.data.menus[i].menuType && dayName == response.data.data.menus[i].dayName) {
                        $scope.companyMenuId = response.data.data.menus[i].id;
                        // console.log("companyMenuId",$scope.companyMenuId);
                        var companyMenuId = $scope.companyMenuId;
                        sectionService.updateVendorMenu(menuType, dayName, companyId, list, companyMenuId, postUpdateSaveMenuUrl, postDeleteMenuUrl);
                    }
                }
            });

        }

        $scope.updateVendorMenu = function (menu, menuType, dayName) {
            // console.log("menu",menu);
            var list = JSON.stringify(menu);
            // console.log("list",list);
            var companyId = $routeParams.compId;
            // console.log("out loop menu", menu);
            var count = Object.keys(list).length;

            menuType = menuType;
            dayName = dayName;
            companyId = companyId;

            var getCompUrl = getDashboardMenuUrl + $routeParams.compId;
            $http.get(getCompUrl).then(function (response) {
                // console.log("response 123",response);
                for (var i = 0; i < response.data.data.menus.length; i++) {
                    // console.log("response 123",response);
                    if (menuType == response.data.data.menus[i].menuType && dayName == response.data.data.menus[i].dayName) {
                        $scope.companyMenuId = response.data.data.menus[i].id;
                        // console.log("companyMenuId",$scope.companyMenuId);
                        var companyMenuId = $scope.companyMenuId;
                        sectionService.updateVendorMenu(menuType, dayName, companyId, list, companyMenuId, postUpdateSaveMenuUrl, postDeleteMenuUrl);
                    }
                }
            });
        }

        // ================================= confirmed Oders =================================

        $scope.makeConfirmedOrders = function (obj) {
            obj.confirmed = obj.confirmed ? false : true;
        }
        // ================================= Employee Feedback =================================

        var getFeedbackUrl = getCorporateReviewsUrl + $routeParams.compId;
        $http.get(getFeedbackUrl).then(function (response) {
            $scope.feedback = response.data.data.reviews;

            $scope.itemsPerPage = 7;
            $scope.pagedItems = [];
            $scope.search = function () {
                $scope.currentPage = 0;
                $scope.groupToPages();
            };
            $scope.groupToPages = function () {
                $scope.pagedItems = [];
                for (var i = 0; i < $scope.feedback.length; i++) {
                    if (i % $scope.itemsPerPage === 0) {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.feedback[i]];
                    } else {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.feedback[i]);
                    }
                }
            };
            $scope.range = function (start, end) {
                var ret = [];
                if (!end) {
                    end = start;
                    start = 0;
                }
                for (var i = start; i < end; i++) {
                    ret.push(i);
                }
                return ret;
            };
            $scope.prevPage = function () {
                if ($scope.currentPage > 0) {
                    $scope.currentPage--;
                }
            };
            $scope.nextPage = function () {
                if ($scope.currentPage < $scope.pagedItems.length - 1) {
                    $scope.currentPage++;
                }
            };
            $scope.setPage = function () {
                $scope.currentPage = this.n;
            };
            $scope.search();


        });

        //================================ Pending Orders ====================================
        var activeBookingListUrl = getSmartCafeteriaOrders + "?companyId=" + 1 + "&bookerId=" + 77 + "&type=pending";
        $http.get(activeBookingListUrl).then(function (response) {
            $scope.activeBookingList = response.data.data.bookings;
        });

        $scope.getVendorCombinations = function (menuArr) {
            // debugger;
            var vendorList = [];
            var vendorNameCombination = "";
            for (var i = 0; i < menuArr.length - 1; i++) {
                var ele = menuArr[i];
                if (!vendorList.includes(ele.vendorId)) {
                    vendorNameCombination = getVendorName(ele.menuObj.vendorId) + "-" + vendorNameCombination;
                    vendorList.push(ele.vendorId);
                }
            }
            // console.log("hahahaha : ", vendorNameCombination);
            return vendorNameCombination.substring(0, vendorNameCombination.length - 1);
        }

        $scope.getMenuForOrdersPage = function (menuArr) {
            var menuCombo = "";
            angular.forEach(menuArr, function (ele) {
                // debugger;
                menuCombo = (ele.quantity + " x " + ele.menuObj.menuName) + ", " + menuCombo;
            });
            // console.log("menu Combo : ", menuCombo);
            return menuCombo.substring(0, menuCombo.length - 2);
        }


        // to active side menu
        $scope.activeMenu = 'PendingOrders';



    }
]); 