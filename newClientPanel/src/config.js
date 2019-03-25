angular.module("clientApp.config", [])
.constant("clientLoginUrl", "http://fancymonk.com:9125/api/client/login")
.constant("compId", 1)
.constant("getCompanyDetailsUrl", "http://fancymonk.com:9125/api/common/corporate-company?companyId=")
.constant("getEmployeeFeedback", "http://fancymonk.com:9125/api/admin/corporate-reviews?companyId=")
.constant("getWeeklyMenuUrl", "http://fancymonk.com:9125/api/vendor/company-menu?companyId=")
.constant("getCompanyRequirements", "http://fancymonk.com:9125/api/admin/get-company-requirements?companyId=")
.constant("getCompanyAdditionalRequirements", "http://fancymonk.com:9125/api/admin/get-company-additional-requirements?companyId=");
