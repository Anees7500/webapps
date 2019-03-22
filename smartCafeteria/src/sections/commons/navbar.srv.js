empApp.service('NavbarService', function () {



  // var cartServiceObj = {};
  // ================== boolfunction ======================
  this.boolFunction = function (value) {
    console.log("boolFunction", value);
    this.walletBool = false;
    this.settingsBool = false;
    this.termsAndPolicyBool = false;
    this[value] = true;

    return this;
  }
  //================ Setting Employee Details ============================


  // =================== Edit Button ======================
  this.makeEmployeeDetailsEditable = function (employeeDetails) {
    this.editEmployeeDetails = $scope.favourite ? false : true;
  }
  this.getNavbarObj = function () {
    return this;
  }

});


empApp.factory('NavBarServices', ['$http', 'postSCWalletBookingUrl','$httpParamSerializerJQLike',
'postSCWalletBookingUpdateUrl',
  function ($http, postSCWalletBookingUrl, $httpParamSerializerJQLike, 
    postSCWalletBookingUpdateUrl) {
    return {
      addMoneyToWallet: function (dataForDb) {
        return $http({
          method: 'POST',
          url: postSCWalletBookingUrl,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'type': 'smartCafeteria',
            'scm': 'fancymonk',
            'Authorization': 'Basic WVhCd1FHWmhibU41Ylc5dWEyRmhZV0Z1OjE1OjJDOjJBOkZFOjUxOkQwOkM3OjNCOjQ2OjFGOkREOjk2Ojk0OkFGOjkyOkE2OjFGOjUyOjBEOkUz',
          },
          data: $httpParamSerializerJQLike(dataForDb)
        });
      },
      updateWalletBooking: function(data)
      {
        return $http({
          method: 'POST',
          url: postSCWalletBookingUpdateUrl,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: $httpParamSerializerJQLike(data)
      });
      }
    }

  }]);
