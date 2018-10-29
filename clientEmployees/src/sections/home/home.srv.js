ceApp.factory('homeService', ['$http', '$httpParamSerializerJQLike',
    function($http,$httpParamSerializerJQLike) {
        return {
            addDetail: function(params,url) {
                $http({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'type': 'clientPanel',
                        'scm': 'fancymonk',
                        'Authorization': 'Basic WVhCd1FHWmhibU41Ylc5dWEyRmhZV0Z1OjE1OjJDOjJBOkZFOjUxOkQwOkM3OjNCOjQ2OjFGOkREOjk2Ojk0OkFGOjkyOkE2OjFGOjUyOjBEOkUz',
                    },

                    data: $httpParamSerializerJQLike(params)
                }).then(function(response) {
                  console.log("response logins ",response);
                    if (response.data.status == 1) {
                        // $location.path('/dashboard');
                    } else {
                    }
                })
                .catch(function(response) {

                });
            }
        }
    }
]);
