adminApp.factory('AdminCompanyServices', ['$http', '$httpParamSerializerJQLike',
    '$routeParams', 'postCompanyWorkingDaysUrl', 'postCompanyWorkingDaysUpdateUrl',
    'postCompanyInvoicingDateUrl', 'postCompanyInvoicingDateUpdateUrl', 'postCompanyAdditionalRequirementsUrl',
    'postCompanyRequirementsUrl', 'postVendorRequirementsUrl', 'postMonthlyDetailsUrl', 
    '$route', 'Notification', '$location','postMonthlyDetailsApproveUrl',
    function ($http, $httpParamSerializerJQLike, $routeParams,
        postCompanyWorkingDaysUrl, postCompanyWorkingDaysUpdateUrl,
        postCompanyInvoicingDateUrl, postCompanyInvoicingDateUpdateUrl,
        postCompanyAdditionalRequirementsUrl, postCompanyRequirementsUrl, postVendorRequirementsUrl,
        postMonthlyDetailsUrl, $route, Notification,$location,postMonthlyDetailsApproveUrl) {
        return {
            passVendorId: function (vendorId, companyId, type, postVendorAssignUrl) {
                console.log("I am in srv.js file : ", vendorId, type, companyId);
                // var rest = JSON.parse(JSON.stringify(vendorId,companyId));
                var jsonObj = {};
                jsonObj.companyId = parseInt(companyId);
                jsonObj.vendorId = vendorId;
                jsonObj.type = type;
                // var deferred = $q.defer();
                // var respMenuJson = deferred.promise;

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
                        //deferred.resolve(response.data.vendorId);
                        console.log("vendore id testing---->", response.data.vendorId);
                        Notification.success('Successfully Vendor Assigned');
                        $('#fullHeightModalRight').modal('hide');
                        // $route.reload();
                    } else {
                        // console.log('error registering');
                        deferred.reject(null);
                        Notification.error('Could not assigne vendor');
                    }
                });
                //return respMenuJson;
            },
             // ______________________UN-Assigned Vendor_______________
             unassigneVendor: function (id, unassignedVendorUrl) {
                console.log("In Services File 5555", id, unassignedVendorUrl);
                //document.getElementById('id07').style.display = 'none'
                var jsonObj = {};
                jsonObj.id = id;
                //var deferred = $q.defer();
                //var respMenuJson = deferred.promise;
                // jsonObj.companyId=companyId;
                $http({
                    method: 'POST',
                    url: unassignedVendorUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(jsonObj)
                }).then(function (response) {
                    // console.log('response', JSON.stringify(response));
                    if (response.data.status == 1) {
                        //deferred.resolve(response.data);
                        Notification.success('Successfully Unassign Vendor !!!');
                        // $route.reload();
                        // console.log('Successfully registered breakfast details ');
                        // $location.path('/admin/company/:id');
                    } else {
                        //deferred.reject(null);
                        console.log('error registering');
                        Notification.error('Could not unassigned vendor');
                    }
                });
                //return respMenuJson;
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
                        Notification.success('Successfully Saved  Category!!!');
                        // console.log('Successfully registered breakfast details ');
                        // $location.path('/dashboard/company/'+data.companyId);
                    } else {
                        console.log('error registering');

                    }
                });
            },
            saveWorkingDaysForCompany: function (data) {
                return $http({
                    method: 'POST',
                    url: postCompanyWorkingDaysUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                })
            },
            updateWorkingDaysForCompany: function (data) {
                $http({
                    method: 'POST',
                    url: postCompanyWorkingDaysUpdateUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                }).then(function (response) {
                    console.log('response', JSON.stringify(response));
                    //console.log('response', response);
                    if (response.data.status == 1) {
                        Notification.success('Successfully Saved Working days !!!');
                        // console.log('Successfully registered breakfast details ');
                        // $location.path('/dashboard/company/'+data.companyId);
                    } else {
                        console.log('error registering');

                    }
                });
            },
            saveInvoicingDateForCompany: function (data) {
                return $http({
                    method: 'POST',
                    url: postCompanyInvoicingDateUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                })
            },
            updateInvoicingDateForCompany: function (data) {
                $http({
                    method: 'POST',
                    url: postCompanyInvoicingDateUpdateUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                }).then(function (response) {
                    console.log('response', JSON.stringify(response));
                    //console.log('response', response);
                    if (response.data.status == 1) {
                        Notification.success('Successfully Saved invoicing date !!!');
                        // console.log('Successfully saved invoicing date  ');
                        // $location.path('/dashboard/company/'+data.companyId);
                    } else {
                        console.log('error registering');

                    }
                });
            },
            saveAdditionalRequirementForCompany: function (data) {
                return $http({
                    method: 'POST',
                    url: postCompanyAdditionalRequirementsUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                })
            },
            saveRequirementForCompany: function (data) {
                return $http({
                    method: 'POST',
                    url: postCompanyRequirementsUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                })
            },
            saveVendorRequirementForCompany: function (data) {
                return $http({
                    method: 'POST',
                    url: postVendorRequirementsUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                })
            },
            saveClientMonthlyDetails: function (data) {
                return $http({
                    method: 'POST',
                    url: postMonthlyDetailsUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                })
            },
            approveCompanyMonthlyDetails: function (data) {
                return $http({
                    method: 'POST',
                    url: postMonthlyDetailsApproveUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                });
            }
        }
    }
]);