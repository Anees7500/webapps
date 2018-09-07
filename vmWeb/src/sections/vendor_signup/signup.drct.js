vmApp.directive('usernameAvailable', ['$timeout', '$q', '$http', 'signupUsernameUrl','signupEmailUrl','signupMobUrl',
    function($timeout,$q,$http,signupUsernameUrl,signupEmailUrl,signupMobUrl) {
        return {
            restrict: 'AE',
            require: 'ngModel',
            link: function(scope, elm, attr, model) {
                model.$asyncValidators.usernameExists = function(val) {
                    return $http.get(signupUsernameUrl + val).then(function(res) {
                        +$timeout(function() {
                            // console.log('Response check---> ', JSON.parse(JSON.stringify(res)));
                            // console.log('Response msg===not available ', res.data.message, 'not available');
                            var boolVal;
                            if (res.data.exist) {
                                boolVal = true;
                            } else {
                                boolVal = false;
                            }
                            model.$setValidity('usernameExists', !boolVal); //!!res.data
                        }, 1000);
                    });
                };
            }
        }
    }
]);

vmApp.directive('emailAvailable', ['$timeout', '$q', '$http', 'signupEmailUrl',
    function($timeout, $q, $http, signupEmailUrl) {
        return {
            restrict: 'AE',
            require: 'ngModel',
            link: function(scope, elm, attr, model) {
                model.$asyncValidators.emailExists = function(val) {
                    return $http.get(signupEmailUrl + val).then(function(res) {
                        +$timeout(function() {
                            var boolVal;
                            if (res.data.exist) {
                                boolVal = true;
                            } else {
                                boolVal = false;
                            }
                            model.$setValidity('emailExists', !boolVal);
                        }, 1000);
                    });
                };
            }
        }
    }
]);

vmApp.directive('mobilenumberAvailable', ['$timeout', '$q', '$http', 'signupMobUrl',
    function($timeout, $q, $http, signupMobUrl) {
        return {
            restrict: 'AE',
            require: 'ngModel',
            link: function(scope, elm, attr, model) {
                model.$asyncValidators.mobilenumberExists = function(val) {
                    return $http.get(signupMobUrl + val).then(function(res) {
                        +$timeout(function() {
                            var boolVal;
                            if (res.data.exist) {
                                boolVal = true;
                            } else {
                                boolVal = false;
                            }
                            model.$setValidity('mobilenumberExists', !boolVal);
                        }, 1000);
                    });
                };
            }
        }
    }
]);
vmApp.directive('pwCheck', [function() {
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, model) {
            //console.log("well at least we are inside directice");
            var checker = function() {
                //get the value of the first password
                var e1 = scope.$eval(attrs.ngModel);
                //get the value of the other password
                var e2 = scope.$eval(attrs.pwCheck);
                return e1 == e2;
            };
            scope.$watch(checker, function(n) {
                model.$setValidity("pwmatch", n);
            });
        }

    }
}]);
