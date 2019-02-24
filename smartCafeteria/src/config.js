angular.module("empApp.config", [])
.constant("postEmployeeLogin", "http://fancymonk.com:9125/api/client/employee-login")
.constant("postEmployeeUpdatePassword", "http://fancymonk.com:9125/api/client/update-password")
.constant("getVendorList", "http://fancymonk.com:9125/api/client/get-cnc-vendors?companyId=")
.constant("getVendorMenuList", "http://fancymonk.com:9124/api/vendor/cash-n-carry/get-formatted-menu")
.constant("postSmartCafeteriaBookingUrl", "http://fancymonk.com:9125/api/client/smart-cafeteria/add-booking");
