angular.module("ceApp.config", [])
.constant("postEmployeeLogin", "http://fancymonk.com:9125/api/client/employee-login")
.constant("postEmployeeUpdatePassword", "http://fancymonk.com:9125/api/client/update-password")
.constant("getWeeklyMenuUrl", "http://fancymonk.com:9125/api/vendor/company-menu?companyId=");