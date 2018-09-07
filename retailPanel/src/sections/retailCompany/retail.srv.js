rtApp.factory('retailCompanyService', ['$http','$httpParamSerializerJQLike','$location','getCompanyDetailUrl',
  function($http, $httpParamSerializerJQLike,$location,getCompanyDetailUrl) {
    return {
        getCompanyDetail: function(compName) {
            console.log("in side service retail");
            console.log("passsed value : ", compName);
            return $http.get(getCompanyDetailUrl+compName);
        },

        getCompanyMenu:function(compName) {
            console.log("in side service retail");
            console.log("passsed value : ", compName);
            return $http.get(getCompanyDetailUrl+compName);
        }
    }
}]);
