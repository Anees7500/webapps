clientApp.factory('clientDashboardService', ['$http','$cookies',
    function($http,$cookies) {
        return {
            getCompanyInformation: function(dashboardServiceUrl) {
              // console.log("clientPanel",clientPanel);
              $http.get(dashboardServiceUrl).
					  then(function(response) {
					  	
					    // this callback will be called asynchronously when the response is available
					  }, function(response) {
					    // this callback will be called asynchronously if an error occurs or server returns response with an error status.
					  });

					}
				};
					var items = [];
	              for (var i=0; i<50; i++) {
	                items.push({ id: i, name: "name "+ i, description: "description " + i });
	              }

	            return {
	                get: function(offset, limit) {
	                  return items.slice(offset, offset+limit);
	                },
	                total: function() {
	                  return items.length;
	                }
	              };
			}
		]);

