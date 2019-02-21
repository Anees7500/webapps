angular.module("empApp.config", [])
.constant("getVendorList", "http://fancymonk.com:9125/api/client/get-cnc-vendors?companyId=")
.constant("getVendorMenuList", "http://fancymonk.com:9124/api/vendor/cash-n-carry/get-formatted-menu")
.constant("postEmployeeLogin", "http://fancymonk.com:9125/api/client/employee-login")
.constant("postEmployeeUpdatePassword", "http://fancymonk.com:9125/api/client/update-password")
.constant("getVendorMenuList", "http://fancymonk.com:9125/api/vendor/cash-n-carry/get-formatted-menu?vendorId=1&companyId=1");
