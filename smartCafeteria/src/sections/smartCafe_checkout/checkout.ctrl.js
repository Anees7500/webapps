empApp.controller('CheckoutController', ['$scope','$cookies','Notification','$location',
'CartService','companyId','CheckOutService',
  function($scope,$cookies,Notification, $location,CartService,companyId,CheckOutService) {
    $scope.cartObj = CartService.getCartObj();

    console.log("in srv cart : ", JSON.stringify($scope.cartObj.cartItems));

  
    $scope.addCount = function (val) {
      $scope.cartObj = CartService.addCount(val);
    }

    $scope.reduceCount = function (val) {
      $scope.cartObj = CartService.reduceCount(val);
    }

    var makeRazorPayOptions = function (data, orderId) {
      var options = {
        "key": "rzp_test_KgnTG2Mdqgd2WX",
        "amount": (data.totalAmount * 100),
        "name": "Fancymonk",
        "description": "Smart Cafeteria",
        "order_id": orderId,
        "prefill": {
          "name": "Aman Telkar",
          "email": "fancymonk@razorpay.com",
          "phone": "9739420527"
        },
        "notes": {
          "address": " Hello"
        },
        "theme": {
          "color": "lightseagreen"
        },
        handler: function () {
          // alert('Payment successful')
          console.log("after payment success ", JSON.stringify(arguments));
          var updateObj = {};
          updateObj.bookingId = $scope.bookingResponse.bookingId;
          updateObj.status = "USERREQUESTED";
          CheckOutService.updateBookings(updateObj);

          updateObj.status = "CONFIRMED";
          if (arguments['0'] != null) {
            updateObj.paymentId = arguments['0'].razorpay_payment_id;
          }
          CheckOutService.updatePayments(updateObj);
        }
      };
      return options;
    }

    var pay = function (params) {
      $.getScript('https://checkout.razorpay.com/v1/checkout.js', function () {
        var rzp = new Razorpay(params);
        rzp.open();
      });
    };


    var getMenuForBookings = function () {
      var bookingMenuArr = [];
      angular.forEach(this.cartItems, function (cartValue, cartKey) {
        if (cartKey != 'totalAmount') {
          var temp = {};
          temp.menuId = cartKey;
          temp.quantity = cartValue.count;

          bookingMenuArr.push(temp);
        }
      });
      return bookingMenuArr;
    }
    $scope.checkout = function () {
      var objForDb = {};
      objForDb.companyId = companyId;
      objForDb.employeeId = "FM002";
      objForDb.menu = JSON.stringify(getMenuForBookings());
      objForDb.paymentType = "ONLINE";
      objForDb.mobile = "9388338322";
      objForDb.totalAmount = $scope.cartObj.cartItems.totalAmount;
      CheckOutService.saveBookings(objForDb).then(function (response) {
        if (response.data.status == 1) {
          $scope.bookingResponse = response.data.data;
          if (objForDb.paymentType === "ONLINE") {
            var params = makeRazorPayOptions(objForDb, response.data.data.rzpOrderId);
            pay(params);
          }
        }
        else {

        }
      });
    }

    // $scope.searchButtonText = "Search";
    // $scope.test = "true";

    // $scope.search = function () {
    //     $scope.enable = "false";
    //     $scope.test = "true";
    //     $scope.searchButtonText = "Searching";
    //     // Do your searching here
        
    //     $timeout(function(){
    //         $scope.enable = "true";
    //         $scope.searchButtonText = "Search";
    //     }, 2000);
    // }
  
    
  }

]);