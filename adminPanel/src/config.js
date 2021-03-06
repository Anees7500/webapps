angular.module("vmApp.config", [])
.constant("postCategoryUrl", "http://fancymonk.com:9125/api/admin/corporate-companies/update")
.constant("companyLogoUrl", "http://fancymonk.com:9125/api/admin/corporate-companies/add-logo?companyId=")
.constant("unassignedVendorUrl", "http://fancymonk.com:9125/api/admin/unassign-vendor")
.constant("getAllCompanyToVendorUrl", "http://fancymonk.com:9125/api/vendor/corporate-companies/get-assigned-companies?vendorId=")
.constant("getAllVendorToCompanyUrl", "http://fancymonk.com:9125/api/admin/corporate-companies/get-vendor-details?companyId=")
.constant("companySignupUrl", "http://fancymonk.com:9125/api/admin/corporate-companies")
.constant("adminLoginUrl", "http://fancymonk.com:9125/api/admin/login")
.constant("postCompanyLoginIdUrl", "http://fancymonk.com:9125/api/admin/company/signup") 
.constant("postCompanyReqUrl", "http://fancymonk.com:9125/api/admin/corporate-companies-requirements")
.constant("updateCompanyReqUrl", "http://fancymonk.com:9125/api/admin/companies-requirement/update")
.constant("postVendorAssignUrl", "http://fancymonk.com:9125/api/admin/assign-vendor")
.constant("getVendorAssignUrl", "http://fancymonk.com:9125/api/admin/corporate-companies?type=all")
.constant("getVendorProfileUrl", "http://fancymonk.com:9125/api/admin/vendor?vendorId=")
.constant("getCompanyProfileUrl", "http://fancymonk.com:9125/api/common/corporate-company?companyId=")
.constant("getAllVendorListUrl", "http://fancymonk.com:9125/api/admin/vendor")
.constant("getAllCompanyUrl", "http://fancymonk.com:9125/api/admin/corporate-companies?type=all")
.constant("getUnassignedCompanyUrl", "http://fancymonk.com:9125/api/admin/corporate-companies?type=unassigned")
.constant("getAssignedCompanyUrl", "http://fancymonk.com:9125/api/admin/corporate-companies?type=assigned")
.constant("getAssignedVendor", "http://fancymonk.com:9125/api/admin/vendors?type=assigned")
.constant("getUnassignedVendor", "http://fancymonk.com:9125/api/admin/vendors?type=unassigned")
.constant("corporateReviewsUrl", "http://fancymonk.com:9125/api/admin/corporate-reviews?companyId=")
.constant("getTodayStatusUrl", "http://fancymonk.com:9125/api/admin/food-track?dayDate=")
.constant("getBreakfastMenu", "http://fancymonk.com:9125/api/admin/company-menu?menuType=breakfast&companyId=")
.constant("getLunchMenu", "http://fancymonk.com:9125/api/admin/company-menu?menuType=lunch&companyId=")
.constant("getSnacksMenu", "http://fancymonk.com:9125/api/admin/company-menu?menuType=snacks&companyId=")
.constant("getDinnerMenu", "http://fancymonk.com:9125/api/admin/company-menu?menuType=dinner&companyId=")
.constant("getCompanyReqUrl", "http://fancymonk.com:9125/api/common/company-requirement?companyId=")
.constant("getVendorCompanyReqUrl", "http://fancymonk.com:9125/api/common/vendor-company-requirement?companyId=")
.constant("postVendorCompanyReqUrl", "http://fancymonk.com:9125/api/admin/vendor-corporate-companies-requirements")
.constant("updateVendorCompanyReqUrl", "http://fancymonk.com:9125/api/admin/vendor-companies-requirement/update")
.constant("getItemCheckListForVendor", "http://fancymonk.com:9125/api/admin/get-item-checklist")
.constant("postVendorCheckListToDb", "http://fancymonk.com:9125/api/admin/add-vendor-item-map")
.constant("getItemCheckListedForVendor", "http://fancymonk.com:9125/api/admin/get-company-item-list?companyId=");
