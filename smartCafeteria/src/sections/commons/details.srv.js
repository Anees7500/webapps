empApp.service('CommonDetails', ['$cookies', '$http',
    'postRetriveAccessTokenUrl', '$httpParamSerializerJQLike', 'companyId', 'getCompanyDetails',
    function($cookies, $http, postRetriveAccessTokenUrl, $httpParamSerializerJQLike, companyId, getCompanyDetails) {
        // debugger;
        this.access_token = $cookies.get("sc_access_token");
        this.refresh_token = $cookies.get("sc_refresh_token");


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
        this.getCompanyDetails = function() {
            return this.companyDetails;
        }
        this.setCompanyDetails = function(compDtls) {
            this.companyDetails = compDtls;
        }

        this.getCompanyDetailsFromDb = function() {
            return $http({
                method: 'GET',
                url: getCompanyDetails + companyId,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.access_token
                }
            });
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

        var callRefreshApi = function() {
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