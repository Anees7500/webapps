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

        // ================================ Weekly Menu =======================================
             
    

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