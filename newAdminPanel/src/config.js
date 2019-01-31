angular.module("adminApp.config", [])
.constant("adminLoginUrl", "http://fancymonk.com:9125/api/admin/login")
.constant("companyLogoUrl", "http://fancymonk.com:9125/api/admin/corporate-companies/add-logo?companyId=")
.constant("unassignedVendorUrl", "http://fancymonk.com:9125/api/admin/unassign-vendor")
.constant("getAllCompanyToVendorUrl", "http://fancymonk.com:9125/api/vendor/corporate-companies/get-assigned-companies?vendorId=")
.constant("getAllVendorToCompanyUrl", "http://fancymonk.com:9125/api/admin/corporate-companies/get-vendor-details?companyId=")
.constant("companySignupUrl", "http://fancymonk.com:9125/api/admin/corporate-companies")
.constant("getVendorAssignUrl", "http://fancymonk.com:9125/api/admin/corporate-companies?type=all")
.constant("getVendorProfileUrl", "http://fancymonk.com:9125/api/admin/vendor?vendorId=")
.constant("getCompanyProfileUrl", "http://fancymonk.com:9125/api/common/corporate-company?companyId=")
.constant("getAllVendorListUrl", "http://fancymonk.com:9125/api/admin/vendor")
.constant("getAllCompanyUrl", "http://fancymonk.com:9125/api/admin/corporate-companies?type=all")
.constant("getUnassignedCompanyUrl", "http://fancymonk.com:9125/api/admin/corporate-companies?type=unassigned")
.constant("getAssignedCompanyUrl", "http://fancymonk.com:9125/api/admin/corporate-companies?type=assigned")
.constant("getAssignedVendor", "http://fancymonk.com:9125/api/admin/vendors?type=assigned")
.constant("getUnassignedVendor", "http://fancymonk.com:9125/api/admin/vendors?type=unassigned")
.constant("postCategoryUrl", "http://fancymonk.com:9125/api/admin/corporate-companies/update")
.constant("corporateReviewsUrl", "http://fancymonk.com:9125/api/admin/corporate-reviews?companyId=")
.constant("getItemCheckListForVendor", "http://fancymonk.com:9125/api/admin/get-item-checklist")
.constant("getItemCheckListedForVendor", "http://fancymonk.com:9125/api/admin/get-company-item-list?companyId=")
.constant("getImageUrl", "http://fancymonk.com:9124/companyImages/400/");