clientApp.factory('clientDashboardService', ['$http','$cookies', '$httpParamSerializerJQLike',
'Notification',
function($http,$cookies, $httpParamSerializerJQLike, Notification) {
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
					Notification.success('Employee Added Successfully');
				} else {
					console.log('error logging in');
					Notification.error('Could not add employee, Please try again later');
				}
			})
			.catch(function(response) {
				// Notification.error('Username/Mobile/Email or password is incorrect');
			});
		},
		deleteEmployeeToDB : function(employee, deleteEmployeeUrl) {
			$http({
				method: 'POST',
				url: deleteEmployeeUrl,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				data: $httpParamSerializerJQLike(employee)
			}).then(function(response) {
				console.log('response delete employee', JSON.stringify(response));
				if (response.data.status == 1) {
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
