vendorApp.controller('DashboardController', ['$scope', '$http', 'VendorDashboardService', '$cookies', 'Notification',
    '$location', '$route', 'getSmartCafeteriaOrders', 'getCompanyProfileUrl', 'getCorporateReviewsUrl',
    '$routeParams', '$rootScope', '$filter', 'getmenuFromDbMonUrl', 'getCompanySectionReqUrl', 'uuid',
    'saveMenuService',
    function ($scope, $http, VendorDashboardService, $cookies, Notification, $location,
        $route, getSmartCafeteriaOrders, getCompanyProfileUrl, getCorporateReviewsUrl,
        $routeParams, $rootScope, $filter, getmenuFromDbMonUrl, getCompanySectionReqUrl,
        uuid, saveMenuService) {

        // $scope.sortingOrder = sortingOrder;

        var vendorId = 1;
        // var companyId = 1;

        $scope.menuNodes = [];
        $scope.menuNodes = [{

            // uid: uuid.new(),
            uid: 'ggd',
            menuName: "First",
            menuNodes: [],
            isFoodItem: false
        }];

        var getCompProfileUrl = getCompanyProfileUrl + $routeParams.compId;
        $http.get(getCompProfileUrl).then(function (response) {
            $scope.cmpyName = response.data.data.company.companyName;
            $scope.cmpyAddress = response.data.data.company.address;
            $scope.data = response.data.data.company;
        });
        // ====================== bool function =============================
        $scope.boolFunction = function (value) {
            console.log("boolFunction", value);

            $scope.pendingOdersBool = false;
            $scope.confirmedOdersBool = false;
            $scope.cancelOdersBool = false;
            $scope.completedOdersBool = false;
            $scope.paymentStatusBool = false;
            $scope.feedbackBool = false;
            $scope.setWeeklyMenuBool = false;
            $scope.extraCode = false;
            $scope[value] = true;
        }
        $scope.boolFunction("pendingOdersBool");

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
        //================================ Cancel Oders ====================================
        $scope.cancelOderHistroy = [
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
                // console.log("child.menuNodes,child.menuType",child.menuNodes,child.menuType);
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
                _.each(children, function (child) {
                    unflatten(array, child)
                });
            }
            return tree;
        };



        // var getMenuMonUrl = getmenuFromDbMonUrl + "companyId=" + 1 + "&vendorId=" + vendorId;
        // console.log("getMenuMonUrl 2000000", getMenuMonUrl);

        // var promis = $http.get(getMenuMonUrl);

        // promis.then(function (response) {
        //     $scope.myNode = response.data.data.menus;
        //     // console.log("$scope.myNode.MONDAY 000000000",_.isEmpty($scope.myNode.MONDAY));
        //     // for monday by default load

        //     if (!_.isEmpty($scope.myNode.MONDAY)) {
        //         console.log("yehhhh true 4545")
        //         $scope.menuNodes = unflatten($scope.myNode.MONDAY);
        //         console.log("menu node after update ", $scope.menuNodes);
        //     }
        //     else {
        //         $scope.menuNodes = [{

        //             uid: uuid.new(),
        //             menuName: "",
        //             menuNodes: [],
        //             isFoodItem: false
        //         }];
        //     }
        //     // by default end monday
        // });

        //add menu
        // var bigrandom = require('bigrandom');

        $scope.addsection = function (nodes, index) {

            // console.log("function(nodes, index) 0003",nodes, index);
            var uid = uuid.new();
            // console.log("isfood item 5555",nodes[index]);
            // console.log("var uid",uid);
            // console.log("nodes[index]",JSON.stringify(nodes[index]));
            // console.log("isFoodItem",isFoodItem);

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
        // add menu ends here

        $scope.submitMenu = function () {
            sectionService.submitMenu($scope.menuNodes, $scope.restaurantId);
        }

        // $scope.myfun = function(n) {
        //   console.log("check m 1",n)
        // }

        $scope.saveInDb = function (node, dayName) {
            // console.log("check cheeeckkkkk 1 in ctrl file",node)

            saveMenuService.submitMenu(node, $scope.restaurantId, companyId, dayName)
                .then(function (returnedSaveMenu) {
                    // console.log("returnedSaveMenu 001",returnedSaveMenu);
                    checkMe();
                    if (returnedSaveMenu !== null) {
                        updateMenuNode($scope.menuNodes, returnedSaveMenu);
                    }
                });
        }

        $scope.updateMenu = function (node) {
            VendorDashboardService.updateMenu(node, $scope.restaurantId)
                .then(function (returnedUpdatedMenu) {
                    // console.log("returnedUpdatedMenu",returnedUpdatedMenu);
                    // console.log("returnedUpdatedMenu.length",returnedUpdatedMenu.length);
                    checkMe();
                    if (returnedUpdatedMenu !== null) {
                        // console.log("value that are being passed here 000: ",returnedUpdatedMenu);
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
            var getMenuMonUrl = getmenuFromDbMonUrl + "companyId=" + companyId + "&vendorId=" + vendorId;
            $http.get(getMenuMonUrl).then(function (response) {
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


        // $scope.menuNodes = [{
        //
        //     uid: uuid.new(),
        //     menuName: "",
        //     menuNodes: [],
        //     isFoodItem: false
        // }];

        // cash and carry section  --> end


        $scope.dayShow = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // $scope.daysss = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
        $scope.daysss = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $scope.type = ['BREAKFAST', 'LUNCH', 'SNACKS', 'DINNER'];

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

        // var getCompUrl = getCompanyReqUrl+$routeParams.compId;
        // $http.get(getCompUrl).then(function(response)
        // {
        //   for(var i = 0; i <$scope.companyRequirements.length; i++){
        //     for(var j = 0; j <response.data.data.requirements.length; j++){
        //       if($scope.companyRequirements[i].dayName === response.data.data.requirements[j].dayName){
        //         $scope.companyRequirements[i] = response.data.data.requirements[j];
        //       }
        //     }
        //   }
        // });

        var getCompProfileUrl = getCompanyProfileUrl + $routeParams.compId;
        $http.get(getCompProfileUrl).then(function (response) {
            $scope.cmpyName = response.data.data.company.companyName;
            if (response.data.data.company.breakfast == true) { $scope.breakfast_active = true }
            if (response.data.data.company.lunch == true) { $scope.lunch_active = true }
            if (response.data.data.company.snacks == true) { $scope.snacks_active = true }
            if (response.data.data.company.dinner == true) { $scope.dinner_active = true }
            if (response.data.data.company.cashNCarry == true) { $scope.cashNCarry_active = true }
        });

        $rootScope.date = new Date();
        var d = new Date();
        d.getHours();
        d.getMinutes();
        d.getSeconds();

        var tttime = d.getHours();
        $cookies.put('tttime', tttime);
        var time = $cookies.get('tttime');

        //___________________________________
        var dayInt = $scope.date.getDay();
        for (var i = 0; i < 7; i++) {
            if (dayInt === i) {
                $rootScope.finalDay = $scope.dayShow[i];
                // console.log("final day",$scope.finalDay);
                var companyId = $routeParams.compId;
                var getDashboardMenu = getCompanySectionReqUrl + $routeParams.compId;
                // console.log("Final Get API",getDashboardMenu);
                $http.get(getDashboardMenu).then(function (response) {
                    // console.log("DAY CHECKING",JSON.stringify($scope.finalDay));

                    // console.log("check length",response.data.data.menus.length);
                    for (var i = 0; i < response.data.data.menus.length; i++) {
                        // console.log("Inside final looooppppp1 length ->",response.data.data.menus.length);
                        // console.log("1 , 2, 3",$scope.finalDay,response.data.data.menus[i].dayName, response.data.data.menus[i].menuType);
                        //....................................................................
                        if ($scope.finalDay == response.data.data.menus[i].dayName && $scope.type[0] == response.data.data.menus[i].menuType) {

                            // console.log("",response.data.data.menus[i].menu);

                            var menu = JSON.parse(response.data.data.menus[i].menu);
                            $scope.breakfast_item = menu;
                            // console.log("Today BREAKFAST-> Successfully match......",$scope.breakfast_item);
                        } else if ($scope.finalDay == response.data.data.menus[i].dayName && $scope.type[1] == response.data.data.menus[i].menuType) {
                            var menu = JSON.parse(response.data.data.menus[i].menu);
                            $scope.lunch_item = menu;
                            // console.log("Today LUNCH-> Successfully match......",$scope.lunch_item);
                        } else if ($scope.finalDay == response.data.data.menus[i].dayName && $scope.type[2] == response.data.data.menus[i].menuType) {
                            var menu = JSON.parse(response.data.data.menus[i].menu);
                            $scope.snacks_item = menu;
                            // console.log("Today SNACKS-> Successfully match......",$scope.snacks_item);
                        } else if ($scope.finalDay == response.data.data.menus[i].dayName && $scope.type[3] == response.data.data.menus[i].menuType) {
                            var menu = JSON.parse(response.data.data.menus[i].menu);
                            $scope.dinner_item = menu;
                            // console.log("Today DINNER-> Successfully match......",$scope.dinner_item);
                        }
                        //.....................................................................
                    }
                })
            }
            // else {
            // }
        }


        $scope.processComplete = function () {
            $scope.enableStep4();
        }

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

        $scope.makeConfirmedOders = function (obj) {
            obj.confirmed = obj.confirmed ? false : true;
        }
        // ================================= Employee Feedback =================================

        var getFeedbackUrl = getCorporateReviewsUrl + $routeParams.compId;
        $http.get(getFeedbackUrl).then(function (response) {
            $scope.feedback = response.data.data.reviews;

            $scope.reverse = false;
            $scope.filteredItems = [];
            $scope.groupedItems = [];
            $scope.itemsPerPage = 7;
            $scope.pagedItems = [];
            $scope.currentPage = 0;

            $scope.search = function () {

                $scope.currentPage = 0;
                // now group by pages
                $scope.groupToPages();
            };

            // calculate page in place
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

        //================================ Pending Oders ====================================
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
$scope.activeMenu = 'PendingOders'; 



}
]); 