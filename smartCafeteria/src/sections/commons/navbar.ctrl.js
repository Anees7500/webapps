empApp.controller('NavbarController', ['$scope', '$cookies', 'Notification', '$location', 
'$route', 'NavBarServices','NavBoolService','SMCNotifications','companyId',
'getEmployeeWalletMoney','$http',
  function ($scope, $cookies, Notification, $location, $route, 
    NavBarServices,NavBoolService, SMCNotifications, companyId, 
    getEmployeeWalletMoney, $http) {

    //========================= Logout funtion ======================
    console.log("inside navbar controller");
    $scope.name = "aman";
    $scope.logout = function () {
      $cookies.remove('eId');
      $cookies.remove('rId');
      $cookies.remove('cId');
      $location.path('/');
    }
    if ($cookies.get('eId') == null) {
      Notification.warning("Login required!!!");
      $location.path('/');
      $route.reload();
    }

    $scope.boolFunction = function (value) {
      console.log("boolFunction", value); 
      $scope.walletBool = false;
      $scope.settingsBool = false;
      $scope.termsAndPolicyBool = false;
      $scope[value] = true;

      NavBoolService.setNavBool(true);

    }

    var employeeDetails = JSON.parse($cookies.get("employeeDetails"));

    $scope.loggedInUserName = employeeDetails.firstName;
    
    console.log("emplye detls from cookies : ", JSON.stringify(employeeDetails));

    $scope.setNavBoolFalse = function()
    {
      $scope.boolFunction("someRandomBool");
      NavBoolService.setNavBool(false);
    }

    // $scope.booleans = NavbarService.boolFunction(value);
    var companyId = 1;
    // =================== Add In Favourit =============================
    $scope.addToCartReverse = function () {
      $scope.add = $scope.add ? false : true;
    }

    $scope.makeEmployeeDetailsEditable = function () {
      $scope.editEmployeeDetails = $scope.editEmployeeDetails ? false : true;
    }
   
    var makeRazorPayOptions = function (data, orderId) {
      var options = {
        "key": "rzp_test_KgnTG2Mdqgd2WX",
        "amount": (data.amount * 100),
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
          var objForUpdate = {};
          objForUpdate.wBookingId = data.wBookingId;
          if (arguments['0'] != null) {
            objForUpdate.paymentId = arguments['0'].razorpay_payment_id;
          }
          
          NavBarServices.updateWalletBooking(objForUpdate).then(function(response){
            console.log("response from update : ", JSON.stringify(response));
          });
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

    $scope.addMoneyToWallet = function(amountToBeAdded)
    {
      var dataToDb = {};
      dataToDb.companyId = companyId;
      dataToDb.employeeId = employeeDetails.employeeId;
      dataToDb.mobile = employeeDetails.mobile;
      dataToDb.amount = amountToBeAdded;

      NavBarServices.addMoneyToWallet(dataToDb).then(function(response){
          console.log("response from booking : ", JSON.stringify(response));
            if(response.data.status == 1)
            {
              dataToDb.wBookingId = response.data.data.walletBookingId;
              var params = makeRazorPayOptions(dataToDb, response.data.data.rzpOrderId);
              pay(params);
            }
        });

    }

    var getEmployeeWalletMoneyUrl = getEmployeeWalletMoney+companyId+"&employeeId="+employeeDetails.employeeId;

    $http.get(getEmployeeWalletMoneyUrl).then(function(response){
      console.log("wallet details : ", response);
      if(response.data.status == 1)
      {
        if(response.data.data != null)
        {
          $scope.walletAmount = response.data.data.walletDetails.balance;
        }
      }
    });

    // $scope.notifObj = SMCNotifications.updateVal();
    // $scope.boolFunction = function(value)
    // {
    //   $scope.booleans = NavbarService.boolFunction(value);
    // };

  

  

  }

]);