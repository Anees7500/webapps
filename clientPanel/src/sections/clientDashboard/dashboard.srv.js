clientApp.factory('clientDashboardService', ['$http','$cookies', '$httpParamSerializerJQLike',
	function($http,$cookies, $httpParamSerializerJQLike) {
		return {
			getCompanyInformation: function(dashboardServiceUrl) {
              // console.log("clientPanel",clientPanel);
              $http.get(dashboardServiceUrl).
              then(function(response) {

					    // this callback will be called asynchronously when the response is available
					}, function(response) {
					    // this callback will be called asynchronously if an error occurs or server returns response with an error status.
					});

          },

          addEmployeeToDB : function(employee, employeeAddUrl) {
		        $http({
		            method: 'POST',
		            url: employeeAddUrl,
		            headers: {
		              'Content-Type': 'application/x-www-form-urlencoded',
		            },
		            data: $httpParamSerializerJQLike(employee)
		          }).then(function(response) {
            console.log('response add employee', JSON.stringify(response));
            if (response.data.status == 1) {
              // Notification.success('Welcome You Are In Admin Penal');
              // $cookies.put('admin_username', response.data.message);
              // $cookies.put('token',response.data.data[0].token);
              // $cookies.put('id',response.data.data[0].id);
              // $cookies.put('email',response.data.data[0].email);
              // $location.path('/admin');

            } else {
              console.log('error logging in');
              // Notification.error('Username/Mobile/Email or password is incorrect');
            }
          })
          .catch(function(response) {
            // Notification.error('Username/Mobile/Email or password is incorrect');
          });
      }
      };
  }
  ]);

