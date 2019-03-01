vendorApp.controller('DashboardController', ['$scope', '$http', 'VendorDashboardService', '$cookies', 'Notification',
    '$location', '$route', 'getSmartCafeteriaOrders', 'getCompanyProfileUrl', 'getCorporateReviewsUrl',
    '$routeParams', '$rootScope', '$filter', 'getmenuFromDbUrl',
    function ($scope, $http, VendorDashboardService, $cookies, Notification, $location,
        $route, getSmartCafeteriaOrders, getCompanyProfileUrl, getCorporateReviewsUrl,
        $routeParams, $rootScope, $filter, getmenuFromDbUrl) {

            // $scope.sortingOrder = sortingOrder;
           
        var vendorId = 1;
        // var companyId = 1;

        // $scope.menuNodes = [];
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
    //     var unflatten = function(array, parent, tree) {
    //         // //console.log("value passed here : ",array);
    //           tree = typeof tree !== 'undefined' ? tree : [];
    //           parent = typeof parent !== 'undefined' ? parent : {
    //               id: null
    //           };
    //           //
    //     var children = _.filter(array, function(child) {
    //         child.isInserted = true;
    //         if(child.menuNodes ==null)
    //         {
    //           child.menuNodes = [];
    //         }
    //         if(child.menuType != null)
    //         {
    //           if(child.menuType === "veg")
    //           {
    //             child.isVeg = true;
    //           }
    //           else if(child.menuType === "egg")
    //           {
    //             child.isEgg = true;
    //           }
    //         }
    //         return child.parentId == parent.id;
    //     });
    //     if (!_.isEmpty(children)) {
    //         if (parent.id == 0 || parent.id == null) {
    //             // //console.log("Children value after first check : ",JSON.stringify(children));
    //             // children.isInserted = true;
    //             // //console.log("Children value after Enhancement : ",JSON.stringify(children));
    //             tree = children;
    //         } else {
    //             parent['menuNodes'] = children
    //         }
    //         _.each(children, function(child) {
    //             unflatten(array, child)
    //         });
    //     }
    //     // //console.log(tree)
    //     return tree;
    // };
    // var getMenuUrl = getmenuFromDbUrl + $routeParams.compId;
    // $http.get(getMenuUrl).then(function(response) {
    //     //console.log("menu response from db : ", JSON.stringify(response));
    //     if(!_.isEmpty(response.data.data))
    //     {
    //       $scope.menuNodes = unflatten(response.data.data);
    //     }
    //     // //console.log('nested json : ',JSON.stringify());
    // });
    // $scope.addsection = function(nodes, index) {
    //     // //console.log("index :-", index)
    //     // //console.log("nodes val", JSON.stringify(nodes));
    //     // //console.log("nodes checked val", nodes[index].checked);

    //     var uid = uuid.new();
    //     // if(nodes[index].parentNodeId==null)
    //     // {
    //     //   //console.log("hahaha this is working ");
    //     //   id = $scope.restaurantId+"-"+(nodes.length+1);
    //     // }
    //     // else {
    //     //   id = nodes[index].parentNodeId +"-"+(nodes.length +1);
    //     // }

    //     if (nodes[index].isFoodItem) {
    //         // //console.log("previous one had checked that box");
    //         nodes.splice(index + 1, 0, {
    //             uid: uid,
    //             menuName: "New",
    //             menuNodes: [],
    //             isFoodItem: true,
    //             parentNodeId: nodes[index].parentNodeId
    //         });
    //     } else {
    //         nodes.splice(index + 1, 0, {
    //             uid: uid,
    //             menuName: "New",
    //             menuNodes: [],
    //             isFoodItem: false,
    //             parentNodeId: nodes[index].parentNodeId
    //         });
    //     }

    // }

    // $scope.addchild = function(node) {
    //     // //console.log("checked value : ", $scope.checked);
    //     var uid = uuid.new();
    //     node.menuNodes.push({
    //         uid: uid,
    //         menuName: "New",
    //         menuNodes: [],
    //         isFoodItem: false,
    //         parentNodeId: node.uid
    //     });
    // }
    //     // ================================= confirmed Oders =================================

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
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.feedback[i] ];
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



    }
]); 