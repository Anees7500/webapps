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


  empApp.factory('SMCNotifications', ['$timeout','$http','getNotificationsUrl',
  function($timeout,$http,getNotificationsUrl){
  return {
    updateVal: function(){
      console.log("inside factory");
      var vm = {
        msgCount :0,
        notifMsgs:[]
      };
      console.log("initial val",vm.msgCount);

      (function poll () {
        $timeout(function () {
          var url = getNotificationsUrl;
          $http.get(url)
            .then(function(response){
              vm.msgCount = response.data.count;
              vm.notifMsgs = response.data.data.notifications; 
              angular.forEach(vm.notifMsgs, function(ele){
                ele.body = JSON.parse(ele.body);
              });
            },function(err){

            });

          console.log("after updating",vm.msgCount);
          poll();
        }, 300000);
      })();

      return vm;
    }
  }

}]);
