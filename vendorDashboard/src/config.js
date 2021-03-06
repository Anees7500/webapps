angular.module("vendorApp.config", [])
.constant("vendorId", 1)
.constant("companyDetails", {"id":1,"authUserId":"f44b0535-1f14-4d89-aef6-c6e96b72cfc0"})
.constant("clientToken", "WVhCd1FHWmhibU41Ylc5dWEyRmhZV0Z1OjE1OjJDOjJBOkZFOjUxOkQwOkM3OjNCOjQ2OjFGOkREOjk2Ojk0OkFGOjkyOkE2OjFGOjUyOjBEOkUz")
.constant("clientId", "YXBwQGZhbmN5bW9ua2FhYWFu")
.constant("getCorporateReviewsUrl", "http://fancymonk.com:9126/api/admin/corporate-reviews?companyId=")
.constant("companySignupUrl", "http://fancymonk.com:9125/api/admin/corporate-companies")
.constant("loginUrl", "http://fancymonk.com:9126/api/vendor/login")
.constant("deleteMenuUrl", "http://fancymonk.com:9126/api/vendor/cash-n-carry/delete-menus")
.constant("getmenuFromDbMonUrl", "http://fancymonk.com:9126/api/vendor/cash-n-carry/get-formatted-menu?")
.constant("postSaveMenuUrl", "http://fancymonk.com:9125/api/vendor/corporate-menu")
.constant("postUpdateSaveMenuUrl", "http://fancymonk.com:9125/api/vendor/corporate-menu/update")
.constant("getImageUrl", "http://fancymonk.com:9124/companyImages/400/")
.constant("getVendorProfileUrl", "http://fancymonk.com:9126/api/admin/vendor?vendorId=")
.constant("getmenuFromDbUrl", "https://fancymonk.com:9125/menu?restaurantId=")
.constant("getCompanySectionReqUrl", "http://fancymonk.com:9125/api/vendor/company-menu?companyId=")
.constant("postDeleteMenuUrl", "http://fancymonk.com:9125/api/vendor/cash-n-carry/delete-menus")
.constant("postUpdateMenuUrl", "http://fancymonk.com:9125/api/vendor/cash-n-carry/update-menu")
.constant("postAddmenuUrl", "https://fancymonk.com:9125/r4estaurantmanager/addmenu")
.constant("getCompanyReqUrl", "http://fancymonk.com:9125/api/common/company-requirement?companyId=")
.constant("getCompanyProfileUrl", "http://fancymonk.com:9126/api/common/corporate-company?companyId=")
.constant("getSmartCafeteriaOrders", "http://fancymonk.com:9126/api/client/smart-cafeteria/get-booking")
.constant("postSmartCafeteriaBookingUrl", "http://fancymonk.com:9125/api/client/smart-cafeteria/add-booking")
.constant("postSmartCafeBookingUpdateUrl", "http://fancymonk.com:9125/api/client/smart-cafeteria/update-booking")
.constant("getVendorMenuList", "http://fancymonk.com:9125/api/vendor/cash-n-carry/get-formatted-menu")
.constant("getAllCompanyToVendorUrl", "http://fancymonk.com:9126/api/vendor/corporate-companies/get-assigned-companies?vendorId=")
.constant("postRetriveAccessTokenUrl", "http://fancymonk.com:9126/api/oauth/refresh-token")
.constant("getCurrentTimestampUrl", "http://fancymonk.com:9126/api/common/get-current-timestamp");
