empApp.factory('SMCNotifications', ['$timeout', '$http', 'getNotificationsUrl',
function ($timeout, $http, getNotificationsUrl) {
  return {
    updateVal: function () {
      console.log("inside factory");
      var vm = {
        msgCount: 0,
        notifMsgs: []
      };
      console.log("initial val", vm.msgCount);

      (function poll() {
        $timeout(function () {
          var url = getNotificationsUrl;
          $http.get(url)
            .then(function (response) {
              vm.msgCount = response.data.count;
              vm.notifMsgs = response.data.data.notifications;
              angular.forEach(vm.notifMsgs, function (ele) {
                ele.body = JSON.parse(ele.body);
              });
            }, function (err) {

            });

          console.log("after updating", vm.msgCount);
          poll();
        }, 300000);
      })();

      return vm;
    }
  }

}]);