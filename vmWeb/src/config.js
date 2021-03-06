angular.module("vmApp.config", [])
.constant("postCategoryUrl", "http://fancymonk.com:9124/api/admin/corporate-companies/update")
.constant("companyLogoUrl", "http://fancymonk.com:9124/api/admin/corporate-companies/add-logo?companyId=")
.constant("unassignedVendorUrl", "http://fancymonk.com:9124/api/admin/unassign-vendor")
.constant("getAllCompanyToVendorUrl", "http://fancymonk.com:9124/api/vendor/corporate-companies/get-assigned-companies?vendorId=")
.constant("getAllVendorToCompanyUrl", "http://fancymonk.com:9124/api/admin/corporate-companies/get-vendor-details?companyId=")
.constant("companySignupUrl", "http://fancymonk.com:9124/api/admin/corporate-companies")
.constant("postSaveMenuUrl", "http://fancymonk.com:9124/api/vendor/corporate-menu")
.constant("adminLoginUrl", "http://fancymonk.com:9124/api/admin/login")
.constant("postUpdateSaveMenuUrl", "http://fancymonk.com:9124/api/vendor/corporate-menu/update")
.constant("postDeleteMenuUrl", "http://fancymonk.com:9124/api/vendor/corporate-menu/delete")
.constant("postCompanyLoginIdUrl", "http://fancymonk.com:9124/api/admin/company/signup")
.constant("signupEmailUrl", "http://fancymonk.com:9124/api/vendor/select?email=")
.constant("signupUsernameUrl", "http://fancymonk.com:9124/api/vendor/select?username=")
.constant("signupMobUrl", "http://fancymonk.com:9124/api/vendor/select?mobile=")
.constant("signupUrl", "http://fancymonk.com:9124/api/vendor/signup")
.constant("loginUrl", "http://fancymonk.com:9124/api/vendor/login")
.constant("postCompanyReqUrl", "http://fancymonk.com:9124/api/admin/corporate-companies-requirements")
.constant("updateCompanyReqUrl", "http://fancymonk.com:9124/api/admin/companies-requirement/update")
.constant("postVendorAssignUrl", "http://fancymonk.com:9124/api/admin/assign-vendor")
.constant("getVendorAssignUrl", "http://fancymonk.com:9124/api/admin/corporate-companies?type=all")
.constant("getVendorProfileUrl", "http://fancymonk.com:9124/api/admin/vendor?vendorId=")
.constant("getCompanyProfileUrl", "http://fancymonk.com:9124/api/common/corporate-company?companyId=")
.constant("getAllVendorListUrl", "http://fancymonk.com:9124/api/admin/vendor")
.constant("getDashboardMenuUrl", "http://fancymonk.com:9124/api/vendor/company-menu?companyId=")
.constant("getAllCompanyUrl", "http://fancymonk.com:9124/api/admin/corporate-companies?type=all")
.constant("getUnassignedCompanyUrl", "http://fancymonk.com:9124/api/admin/corporate-companies?type=unassigned")
.constant("getAssignedCompanyUrl", "http://fancymonk.com:9124/api/admin/corporate-companies?type=assigned")
.constant("getCompanySectionReqUrl", "http://fancymonk.com:9124/api/vendor/company-menu?companyId=")
.constant("getAssignedVendor", "http://fancymonk.com:9124/api/admin/vendors?type=assigned")
.constant("getUnassignedVendor", "http://fancymonk.com:9124/api/admin/vendors?type=unassigned")
.constant("addmenuUrl", "http://fancymonk.com:9124/api/vendor/cash-n-carry/add-menu")
.constant("deleteMenuUrl", "http://fancymonk.com:9124/api/vendor/cash-n-carry/delete-menus")
.constant("getmenuFromDbMonUrl", "http://fancymonk.com:9124/api/vendor/cash-n-carry/get-all-menu?")
.constant("getmenuFromDbTueUrl", "http://fancymonk.com:9124/api/vendor/cash-n-carry/get-menu?")
.constant("updateMenuUrl", "http://fancymonk.com:9124/api/vendor/cash-n-carry/update-menu")
.constant("getBreakfastMenu", "http://fancymonk.com:9124/api/admin/company-menu?menuType=breakfast&companyId=")
.constant("getLunchMenu", "http://fancymonk.com:9124/api/admin/company-menu?menuType=lunch&companyId=")
.constant("getSnacksMenu", "http://fancymonk.com:9124/api/admin/company-menu?menuType=snacks&companyId=")
.constant("getDinnerMenu", "http://fancymonk.com:9124/api/admin/company-menu?menuType=dinner&companyId=")
.constant("corporateReviewsUrl", "http://fancymonk.com:9124/api/admin/corporate-reviews?companyId=")
.constant("getTodayStatusUrl", "http://fancymonk.com:9124/api/admin/food-track?dayDate=")
.constant("getCompanyReqUrl", "http://fancymonk.com:9124/api/common/company-requirement?companyId=")
.constant("clientLoginServiceUrl", "http://fancymonk.com:9124/api/corporate/login");
