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

