angular.module("myApp.config", [])
.constant("postLoginUrl", "http://fancymonk.com:9125/api/corporate/login")
.constant("getAllEmployeeDataUrl", "http://fancymonk.com:9125/api/client/get-all-employee-data?companyId=")
.constant("getAllEployeeListUrl", "http://fancymonk.com:9125/api/common/get-all-employees?companyId=")
.constant("postAddEmployeeUrl", "http://fancymonk.com:9125/api/client/add-employee")
.constant("getCompanyDetailUrl", "http://fancymonk.com:9125/api/common/corporate-company?companyId=")
.constant("getCompanyFeedbackUrl", "http://fancymonk.com:9125/api/admin/corporate-reviews?companyId=")
.constant("getCompanyRequirementUrl", "http://fancymonk.com:9125/api/common/company-requirement?companyId=");
