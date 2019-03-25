empApp.factory('SMCNotifications', ['$timeout', '$http', 'getNotificationsUrl',
    '$cookies', 'CommonDetails', 'getCurrentTimestampUrl',
    function($timeout, $http, getNotificationsUrl, $cookies, CommonDetails, getCurrentTimestampUrl) {
        return {
            updateVal: function() {
                console.log("inside factory");
                var vm = {
                    msgCount: 0,
                    notifMsgs: []
                };
                console.log("initial val", vm.msgCount);

                (function poll() {
                    $timeout(function() {
                        var url = getNotificationsUrl;
                        $http.get(url)
                            .then(function(response) {
                                vm.msgCount = response.data.count;
                                vm.notifMsgs = response.data.data.notifications;
                                angular.forEach(vm.notifMsgs, function(ele) {
                                    ele.body = JSON.parse(ele.body);
                                });
                            }, function(err) {

                            });

                        console.log("after updating", vm.msgCount);
                        poll();
                    }, 300000);
                })();

                return vm;
            },
            checkForToken: function() {
                // debugger;
                (function poll() {
                    var pollingTimestamp = 30000;
                    $timeout(function() {
                        // debugger;
                        var lastFetchedTimestamp = $cookies.get("lastFetchedTimestamp");
                        var sc_access_token_expiry = $cookies.get("sc_access_token_expiry");
                        // debugger;
                        if (lastFetchedTimestamp == null) {
                            $http.get(getCurrentTimestampUrl).then(function(response) {
                                lastFetchedTimestamp = response.data.data.currentTimestamp;
                                $cookies.put("lastFetchedTimestamp", lastFetchedTimestamp);
                            });
                        }

                        var pollingTime = sc_access_token_expiry - lastFetchedTimestamp;
                        if (pollingTime < 300000) {
                            // debugger;
                            var tokenPromise = CommonDetails.generateNewAccessToken().then(function(tokenResponse) {
                                console.log("refresh resposne : ", JSON.stringify(tokenResponse));
                                if (tokenResponse.data.data != null) {
                                    $cookies.put("sc_access_token", tokenResponse.data.data.access_token);
                                    $cookies.put("sc_access_token_expiry", tokenResponse.data.data.expires_in);
                                    console.log("updated accesstoken");
                                }
                            });
                            pollingTimestamp = 30000;
                        } else {
                            console.log("Did not update access");
                            pollingTimestamp = 30000;
                        }
                        // poll();
                    }, pollingTimestamp);
                })();
            }
        }

    }
]);