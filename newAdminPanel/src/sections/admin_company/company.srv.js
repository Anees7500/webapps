adminApp.factory('vendorassignService', ['$http','$httpParamSerializerJQLike', '$routeParams',
    function ($http, $httpParamSerializerJQLike , $routeParams ) {
        return {
            passVendorId: function (vendorId, companyId, type, postVendorAssignUrl) {
                console.log("I am in srv.js file : ", vendorId, type, companyId);
                // var rest = JSON.parse(JSON.stringify(vendorId,companyId));
                var jsonObj = {};
                jsonObj.companyId = parseInt(companyId);
                jsonObj.vendorId = vendorId;
                jsonObj.type = type;
                var deferred = $q.defer();
                var respMenuJson = deferred.promise;

                console.log("json made : ", jsonObj); 
                
                $http({
                    method: 'POST',
                    url: postVendorAssignUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(jsonObj)
                }).then(function (response) {
                    console.log('response', JSON.stringify(response));
                    if (response.data.status == 1) {
                        deferred.resolve(response.data.vendorId);
                        console.log("vendore id testing---->", response.data.vendorId);
                        // Notification.success('Successfully Vendor Assigned');
                        // $route.reload();
                    } else {
                        // console.log('error registering');
                        deferred.reject(null);
                        Notification.error('Could not assigne vendor');
                    }
                });
                return respMenuJson;
            },
            // ______________________Category_______________
           activeCategory: function (data, postCategoryUrl) {
                console.log("In Services File DATA", data, postCategoryUrl);
                $http({
                    method: 'POST',
                    url: postCategoryUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                }).then(function (response) {
                    console.log('response', JSON.stringify(response));
                    //console.log('response', response);
                    if (response.data.status == 1) {
                        // Notification.success('Successfully Saved !!!');
                        // console.log('Successfully registered breakfast details ');
                        // $location.path('/admin/company/:id');
                    } else {
                        console.log('error registering');
                        
                    }
                });
            },

        }
    }
]);