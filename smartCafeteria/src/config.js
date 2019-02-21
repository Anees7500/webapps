angular.module("empApp.config", [])
.constant("postEmployeeLogin", "http://fancymonk.com:9125/api/client/employee-login")
.constant("postEmployeeUpdatePassword", "http://fancymonk.com:9125/api/client/update-password")
.constant("getVendorMenuList", "http://fancymonk.com:9125/api/vendor/cash-n-carry/get-formatted-menu?vendorId=1&companyId=1");
