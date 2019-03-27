vendorApp.service('VendorCommonDetail', ['$cookies','postRetriveAccessTokenUrl','$http','$httpParamSerializerJQLike',
     
    function($cookies,postRetriveAccessTokenUrl,$http,$httpParamSerializerJQLike ) {
    
        this.access_token = $cookies.get("vendor_access_token");
        this.refresh_token = $cookies.get("vendor_refresh_token");
        

        this.getAccessToken = function() {
            return this.access_token;
        }
        
        this.setAccessToken = function(token) {
            this.access_token = token;
        }

        this.getRefreshToken = function() {
            return this.refresh_token;
        }

        this.setRefreshToken = function(token) {
            this.refresh_token = token;
        }

        this.generateNewAccessToken = function() {
            var data = {};
            data.refreshToken = this.refresh_token;
            return $http({
                method: 'POST',
                url: postRetriveAccessTokenUrl,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $httpParamSerializerJQLike(data)
            });

        }
     


    }
]);