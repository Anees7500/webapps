angular.module("salesApp.config", [])
.constant("getCompanyProfileUrl", "http://fancymonk.com:9125/api/common/corporate-company?companyId=")
.constant("getImageUrl", "http://fancymonk.com:9124/companyImages/400/")
.constant("getAllCompanyUrl", "http://fancymonk.com:9125/api/admin/corporate-companies?type=all")
.constant("getAllVendorListUrl", "http://fancymonk.com:9125/api/admin/vendor")
.constant("getAssignedCompanyUrl", "http://fancymonk.com:9125/api/admin/corporate-companies?type=assigned")
.constant("getCorporateReviewsUrl", "http://fancymonk.com:9125/api/admin/corporate-reviews?companyId=");
