// ceApp.factory('ClientLoginService', ['$http', '$httpParamSerializerJQLike','$location',
//     '$rootScope', '$cookies',
//     function($http, $httpParamSerializerJQLike, $location, $rootScope, $cookies) {
//         return { 
//             login: function(clientCredential,LoginClientUrl) {
//               console.log("client credential message ",clientCredential);
//                 $http({
//                     method: 'POST',
//                     url: LoginClientUrl,
//                     headers: {
//                         'Content-Type': 'application/x-www-form-urlencoded',
//                         'type': 'clientPanel',
//                         'scm': 'fancymonk',
//                         'Authorization': 'Basic WVhCd1FHWmhibU41Ylc5dWEyRmhZV0Z1OjE1OjJDOjJBOkZFOjUxOkQwOkM3OjNCOjQ2OjFGOkREOjk2Ojk0OkFGOjkyOkE2OjFGOjUyOjBEOkUz',
//                     },

//                     data: $httpParamSerializerJQLike(clientCredential)
//                 }).then(function(response) {
//                   console.log("response logins ", JSON.stringify(response)); 
//                     if (response.data.status == 1) {
//                         $rootScope.companyDetails = response.data.data.company;
//                         $cookies.put("clientPanelCompanyId", response.data.data.company.id);
//                         $location.path('/epmloyees');
//                     } else {
//                          // Notification.error('Username/Mobile/Email or password is incorrect');
//                     }
//                 })
//                 .catch(function(response) {
//                   // Notification.error('Server is down please try again latter');
//                 });
//             }
//         }
//     }
// ]);
