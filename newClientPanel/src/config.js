angular.module("clientApp.config", [])
.constant("loginUrl", "http://fancymonk.com:9125/api/client/login")
.constant("compId", 1)
.constant("getCompanyDetailsUrl", "http://fancymonk.com:9125/api/common/corporate-company?companyId=")
.constant("getEmployeeFeedback", "http://fancymonk.com:9125/api/admin/corporate-reviews?companyId=")
.constant("getWeeklyMenuUrl", "http://fancymonk.com:9125/api/vendor/company-menu?companyId=");
