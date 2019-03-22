angular.module("vendorApp.config", [])
.constant("vendorId", 1)
.constant("getCorporateReviewsUrl", "http://fancymonk.com:9125/api/admin/corporate-reviews?companyId=")
.constant("companySignupUrl", "http://fancymonk.com:9125/api/admin/corporate-companies")
.constant("loginUrl", "http://fancymonk.com:9125/api/vendor/login")
.constant("deleteMenuUrl", "http://fancymonk.com:9125/api/vendor/cash-n-carry/delete-menus")
.constant("getmenuFromDbMonUrl", "http://fancymonk.com:9125/api/vendor/cash-n-carry/get-all-menu?")
.constant("postSaveMenuUrl", "http://fancymonk.com:9125/api/vendor/corporate-menu")
.constant("postUpdateSaveMenuUrl", "http://fancymonk.com:9125/api/vendor/corporate-menu/update")
.constant("getImageUrl", "http://fancymonk.com:9124/companyImages/400/")
.constant("getVendorProfileUrl", "http://fancymonk.com:9125/api/admin/vendor?vendorId=")
.constant("getmenuFromDbUrl", "https://fancymonk.com:9125/menu?restaurantId=")
.constant("getCompanySectionReqUrl", "http://fancymonk.com:9125/api/vendor/company-menu?companyId=")
.constant("postDeleteMenuUrl", "http://fancymonk.com:9125/api/vendor/cash-n-carry/delete-menus")
.constant("postUpdateMenuUrl", "http://fancymonk.com:9125/api/vendor/cash-n-carry/update-menu")
.constant("postAddmenuUrl", "https://fancymonk.com:9125/r4estaurantmanager/addmenu")
.constant("getCompanyReqUrl", "http://fancymonk.com:9125/api/common/company-requirement?companyId=")
.constant("getCompanyProfileUrl", "http://fancymonk.com:9125/api/common/corporate-company?companyId=")
.constant("getSmartCafeteriaOrders", "http://fancymonk.com:9125/api/client/smart-cafeteria/get-booking")
.constant("postSmartCafeteriaBookingUrl", "http://fancymonk.com:9125/api/client/smart-cafeteria/add-booking")
.constant("postSmartCafeBookingUpdateUrl", "http://fancymonk.com:9125/api/client/smart-cafeteria/update-booking")
.constant("getVendorMenuList", "http://fancymonk.com:9125/api/vendor/cash-n-carry/get-formatted-menu")
.constant("getAllCompanyToVendorUrl", "http://fancymonk.com:9125/api/vendor/corporate-companies/get-assigned-companies?vendorId=");
