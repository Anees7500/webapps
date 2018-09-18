rtApp.factory('retailCompanyService', ['$http','$httpParamSerializerJQLike','$location','getCompanyDetailUrl','GetRetailMenuUrl',
  function($http, $httpParamSerializerJQLike,$location,getCompanyDetailUrl,GetRetailMenuUrl) {
    return {
        getCompanyDetail: function(compName) {
            console.log("in side service retail");
            console.log("passsed value : ", compName);
            return $http.get(getCompanyDetailUrl+compName);
        },
        getCompanyMenu: function(companyId, vendorId, dayName) {
            console.log("in side menu service");
            console.log("url : ", GetRetailMenuUrl);
            console.log("passsed value : ", companyId, vendorId, dayName);
            return $http.get(GetRetailMenuUrl+"vendorId="+vendorId+"&companyId="+ companyId +"&dayName=WEDNESDAY");
            // return $http.get(GetRetailMenuUrl+"vendorId="+vendorId+"&companyId="+ companyId +"&dayName="+dayName);
        }

		}
}]);
