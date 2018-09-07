(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/home/home.tpl.html',
    '<div class="home">\n' +
    '    <div class="home-landing-screen">\n' +
    '    </div>\n' +
    '    <div class="home-form-container">\n' +
    '      <h1 class="title-style">Vendor Management</h1>\n' +
    '        <p class="homeP">Not a Member yet? <br>Signup Now!</p>\n' +
    '        <div class="home-form">\n' +
    '            <a href="#!login"> <button type="submit">Login</button> </a>\n' +
    '            <a href="#!signup"> <button type="submit">Signup</button> </a>\n' +
    '        </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/invoice/invoice.tpl.html',
    '<style>\n' +
    'body{background-color: #f2f3f5;}\n' +
    '.vertical_nav{width: 350px;}\n' +
    '.wrapper {\n' +
    '    margin-left: 350px;\n' +
    '}\n' +
    '</style>\n' +
    '<header class="header clearfix" style="position:fixed">\n' +
    '    <button type="button" id="toggleMenu" class="toggle_menu">\n' +
    '      <i class="fa fa-bars"></i>\n' +
    '    </button>\n' +
    '\n' +
    '    <div class="m-view"><h1 style="color:white;">\n' +
    '      <span class="span-logo"><a><img src="../image/fancymonklogo.png"/></a></span>Fancymonk</h1>\n' +
    '    </div>\n' +
    '          <div class="pull-right">\n' +
    '                <div class="dropdown notificationDropDown" data-ng-controller="AdminController">\n' +
    '                  <div class="dropdown">\n' +
    '                    <div class="dropbtn">\n' +
    '                      <notification-icon update-animation="grow" count="">\n' +
    '                        <img src="../image/pp1.png" class="img-circle pp-image-header" width="40"/>\n' +
    '                      </notification-icon>\n' +
    '                    </div>\n' +
    '                    <div class="dropdown-content">\n' +
    '                      <a href=""><i style="color:black;" class="fa fa-yelp"> </i> Help</a>\n' +
    '                      <a href=""><i style="color:black;" class="fa fa-cog"> </i> Setting</a>\n' +
    '                      <a ng-click="signOutAdmin()"><i style="color:black;" class="fa fa-sign-out"> </i> Sign out</a>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '           </div>\n' +
    '</header>\n' +
    '\n' +
    '<nav class="vertical_nav">\n' +
    '  <form class="ng-pristine ng-valid"><br><br>\n' +
    '  <input type="text" ng-model="search1" class="searchNewInv ng-pristine ng-valid ng-empty ng-touched" name="search" placeholder="Search..." aria-invalid="false" style="">\n' +
    '</form>\n' +
    '<br><br>\n' +
    '\n' +
    '  <ul id="js-menu" class="menu">\n' +
    '      <div class="list-group" ng-repeat="data in invoice | filter:search1">\n' +
    '        <li>\n' +
    '          <a ng-click="callInvoice(data.invoiceNo)" class="list-group-item">INV. # {{data.invoiceNo}}\n' +
    '            <span style="float:right;color:#6c7684;">{{data.time}}</span>\n' +
    '            <br>{{data.item.length}}<br><span style="color:#7b8cea">{{data.userName}}</span>\n' +
    '            <span style="float:right;"><i class="fas fa-rupee-sign" aria-hidden="true"></i> {{data.total | number : 2}}</span>\n' +
    '          </a>\n' +
    '        </li>\n' +
    '      </div>\n' +
    '  </ul>\n' +
    '\n' +
    '</nav>\n' +
    '\n' +
    '<div class="wrapper" style="margin-top:50px;">\n' +
    '  <section>\n' +
    '\n' +
    '    <!-- <div class="col-sm-2 col-sm-2 col-md-2 col-lg-2" style="min-height:50px; background-color:gray; text-align:center;" ng-if="data.breakfast"> -->\n' +
    '      <md-button onclick="document.getElementById(\'id01\').style.display=\'block\'" style="width:auto; background-color:white;">Create New Invoice</md-button>\n' +
    '    <!-- </div> -->\n' +
    '\n' +
    '    <div class="invoice-show">\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="col-md-10" style="background-color:white; min-height:50px;">\n' +
    '            <h5><b>Invoice</b><span class="dark-text" style="float:right;">CUSTOMER DETAILS</span></h5>\n' +
    '            <h5><span class="dark-text"># INV-1120</span><span style="float:right;"><b>Liftop</b></span></h5>\n' +
    '            <h6 class="dark-text">11:20 PM<span class="dark-text" style="float:right;">liftop@gmail.com</span></h6>\n' +
    '          </div>\n' +
    '            <div class="col-md-2 printer">\n' +
    '              <!-- <button type="button" ng-click="print()" style="" class="printer-btn">PRINT -->\n' +
    '                <!-- <img src="img/printer.png" alt="enter" height="18" width="18"></button> -->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '            <table class="table">\n' +
    '              <thead>\n' +
    '                <tr>\n' +
    '                  <th class="dark-text">Description</th>\n' +
    '                  <th class="dark-text text-center">QUANTITY</th>\n' +
    '                  <th class="dark-text text-center">UNIT PRICE - <i class="fa fa-inr" aria-hidden="true"></i></th>\n' +
    '                  <th class="dark-text text-right">Total Price</th>\n' +
    '                </tr>\n' +
    '              </thead>\n' +
    '              <tbody>\n' +
    '                <tr>\n' +
    '                  <td>Lunch</td>\n' +
    '                  <td class="text-center">200</td>\n' +
    '                  <td class="text-center">5000.00</td>\n' +
    '                  <td class="text-right">5000.00</td>\n' +
    '                </tr>\n' +
    '                <tr>\n' +
    '                  <td>Snacks</td>\n' +
    '                  <td class="text-center">100</td>\n' +
    '                  <td class="text-center">8000.00</td>\n' +
    '                  <td class="text-right">2000.00</td>\n' +
    '                </tr>\n' +
    '              </tbody>\n' +
    '            </table>\n' +
    '\n' +
    '            <table class="set">\n' +
    '              <tbody>\n' +
    '                  <tr>\n' +
    '                    <td class="text-left">Sub Total</td>\n' +
    '                    <td class="text-right"><i class="fas fa-rupee-sign" aria-hidden="true"></i> 3000</td>\n' +
    '                  </tr>\n' +
    '                  <tr>\n' +
    '                    <td class="text-left">Tax(9%)</td>\n' +
    '                    <td class="text-right"><i class="fas fa-rupee-sign" aria-hidden="true"></i> 200.00</td>\n' +
    '                  </tr>\n' +
    '                  <tr>\n' +
    '                    <td class="text-left">Discount(9%)</td>\n' +
    '                    <td class="text-right"><i class="fas fa-rupee-sign" aria-hidden="true"></i> -100.00</td>\n' +
    '                  </tr>\n' +
    '                  <tr>\n' +
    '                    <td><br></td>\n' +
    '                  </tr>\n' +
    '                  <tr>\n' +
    '                    <td class="text-left"><b>Grand Total</b></td>\n' +
    '                    <td class="text-right"><b><i class="fas fa-rupee-sign" aria-hidden="true"></i> 2500000.00</b></td>\n' +
    '                  </tr>\n' +
    '              </tbody>\n' +
    '            </table>\n' +
    '          </div>\n' +
    '\n' +
    '    <div id="id01" class="modal">\n' +
    '      <form class="modal-content animate" style="margin:1% 32%;" action="/action_page.php">\n' +
    '        <div class="imgcontainer">\n' +
    '          <span onclick="document.getElementById(\'id01\').style.display=\'none\'" class="close" title="Close Modal">&times;</span>\n' +
    '        </div>\n' +
    '        <h3 class="text-center">Vendor Assign For Breakfast</h2>\n' +
    '        <div class="container">\n' +
    '          <form>\n' +
    '          <div style="padding:10px;">\n' +
    '          <input type="text" ng-model="vendorSearch" class="vendorSearch" name="search" placeholder="Search...">\n' +
    '          </div>\n' +
    '          </form>\n' +
    '            <div class="card" style="padding-top: 36px; padding-bottom: 0px;">\n' +
    '               <ul class="nav">\n' +
    '                <li ng-repeat="vendor in allVendorsList | filter:vendorSearch">\n' +
    '                  <a ng-click="passVendorId(vendor.id,\'breakfast\');" href="" onclick="document.getElementById(\'id01\').style.display=\'none\'" class="thumbnail" style="color:black;width:100%;">{{vendor.name}}</a>\n' +
    '                </li>\n' +
    '               </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '      </form>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '  </section>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/vendor_company/section.tpl.html',
    '<header class="header clearfix" style="position:fixed">\n' +
    '\n' +
    '  <button type="button" id="toggleMenu" class="toggle_menu">\n' +
    '      <i class="fas fa-bars"></i>\n' +
    '    </button>\n' +
    '\n' +
    '  <div class="m-view">\n' +
    '    <h1 style="color:white;">\n' +
    '      <span class="span-logo"><a><img src="../image/fancymonklogo.png"/></a></span>Fancymonk</h1>\n' +
    '  </div>\n' +
    '  <div class="pull-right" ng-if="dashboardSingOutBool=true">\n' +
    '    <div class="dropdown notificationDropDown" ng-if="dashboardSingOutBool" data-ng-controller="DashboardController">\n' +
    '\n' +
    '      <div class="dropdown">\n' +
    '        <div class="dropbtn">\n' +
    '          <notification-icon update-animation="grow" count="">\n' +
    '            <img src="image/pp1.png" class="img-circle pp-image-header" width="40" height="" />\n' +
    '          </notification-icon>\n' +
    '        </div>\n' +
    '        <div class="dropdown-content">\n' +
    '\n' +
    '          <a href="" data-toggle="popover" data-trigger="hover" data-content="Some content"><i style="color:black;" class="fab fa-yelp"> </i> Help</a>\n' +
    '          <a ng-click="signOut()"><i style="color:black;" class="fas fa-sign-out-alt"> </i> Sign out</a>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</header>\n' +
    '\n' +
    '<nav class="vertical_nav">\n' +
    '\n' +
    '  <ul id="js-menu" class="menu">\n' +
    '    <li>\n' +
    '      <div class="background-dp">\n' +
    '        <div class="background-dp-color">\n' +
    '          <div class="media-body">\n' +
    '            <span class="wrd-brk">\n' +
    '                   <h5 style="margin-top: -2px;">\n' +
    '                   <img src="../image/pp1.png" class="img-circle pp-image" width="38"/>\n' +
    '                  </i> {{userName | uppercase}}</h5>\n' +
    '                   <h6 class="media-heading" style="color:white;">{{mail}}</h6>\n' +
    '                 </span>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </li><br>\n' +
    '    <li class="menu--item">\n' +
    '      <a href="" ng-click="boolFunction(\'requirementsBool\')" class="menu--link">\n' +
    '        <i class="menu--icon fas fa-tasks" aria-hidden="true"></i>\n' +
    '        <span class="menu--label">Requirements</span>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li class="menu--item" ng-if="breakfast_active">\n' +
    '      <a href="" ng-click="boolFunction(\'bBool\')" class="menu--link">\n' +
    '        <i class="menu--icon fas fa-utensils" aria-hidden="true"></i>\n' +
    '        <span class="menu--label">Breakfast</span>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li class="menu--item" ng-if="lunch_active">\n' +
    '      <a href="" ng-click="boolFunction(\'lBool\')" class="menu--link">\n' +
    '        <i class="menu--icon fas fa-utensils" aria-hidden="true"></i>\n' +
    '        <span class="menu--label">Lunch</span>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li class="menu--item" ng-if="snacks_active">\n' +
    '      <a href="" ng-click="boolFunction(\'sBool\')" class="menu--link">\n' +
    '        <i class="menu--icon fas fa-utensils" aria-hidden="true"></i>\n' +
    '        <span class="menu--label">Snacks</span>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li class="menu--item" ng-if="dinner_active">\n' +
    '      <a href="" ng-click="boolFunction(\'dBool\')" class="menu--link">\n' +
    '        <i class="menu--icon fas fa-utensils" aria-hidden="true"></i>\n' +
    '        <span class="menu--label">Dinner</span>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li class="menu--item dropdown position" ng-if="cashNCarry_active">\n' +
    '      <span class="menu--link">\n' +
    '        <a class="menu--link"><i class="menu--icon fab fa-cuttlefish"></i>\n' +
    '        <span class="menu--label dropbtn">Cash N Carry <i class="fa fa-caret-down"></i></span></a>\n' +
    '      <div class="dropdown-content pos-c">\n' +
    '        <a href="#/dashboard/company/{{cId}}/monday">Monday<span class="icon-cNc"><i class="fa fa-caret-right" aria-hidden="true"></i></span></a>\n' +
    '        <a href="#/dashboard/company/{{cId}}/tuesday">Tuesday<span class="icon-cNc"><i class="fa fa-caret-right" aria-hidden="true"></i></span></a>\n' +
    '        <a href="#/dashboard/company/{{cId}}/wednesday">Wednesday<span class="icon-cNc"><i class="fa fa-caret-right" aria-hidden="true"></i></span></a>\n' +
    '        <a href="#/dashboard/company/{{cId}}/thursday">Thursday<span class="icon-cNc"><i class="fa fa-caret-right" aria-hidden="true"></i></span></a>\n' +
    '        <a href="#/dashboard/company/{{cId}}/friday">Friday<span class="icon-cNc"><i class="fa fa-caret-right" aria-hidden="true"></i></span></a>\n' +
    '        <a href="#/dashboard/company/{{cId}}/saturday">Saturday<span class="icon-cNc"><i class="fa fa-caret-right" aria-hidden="true"></i></span></a>\n' +
    '        <a href="#/dashboard/company/{{cId}}/sunday">Sunday<span class="icon-cNc"><i class="fa fa-caret-right" aria-hidden="true"></i></span></a>\n' +
    '      </div>\n' +
    '      </span>\n' +
    '    </li>\n' +
    '    <!-- <li class="menu--item" ng-if="cashNCarry_active">\n' +
    '      <a href="" ng-click="enableBillingBool()" class="menu--link">\n' +
    '        <i class="menu--icon far fa-money-bill-alt" aria-hidden="true"></i>\n' +
    '        <span class="menu--label">Cash N Carry Billing</span>\n' +
    '      </a>\n' +
    '    </li>-->\n' +
    '    <li class="menu--item">\n' +
    '      <a href="" ng-click="boolFunction(\'feedbackBool\')" class="menu--link">\n' +
    '        <i class="menu--icon fas fa-street-view"></i>\n' +
    '        <span class="menu--label">Feedback</span>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <br><br>\n' +
    '    <!-- <li class="">\n' +
    '      <a href="" ng-click="" class="">\n' +
    '        <span class="menu--label"><h5 class="text-center"><i class="far fa-clock"></i> {{finalDay}} <span> {{date | date:\'dd, MMM yyyy\'}}</span></h5></span>\n' +
    '      </a>\n' +
    '    </li> -->\n' +
    '  </ul>\n' +
    '</nav>\n' +
    '\n' +
    '<div class="wrapper" style="margin-top:50px;">\n' +
    '  <section>\n' +
    '    <!--.................SECTION...................-->\n' +
    '    <div class="company-dashboard" ng-if="billingBool">\n' +
    '      <div class="title-baar">\n' +
    '        <h5><a href="#!/dashboard"><i class="fa fa-home w-clr" aria-hidden="true"></i></a> <a class="w-clr" href="#!/dashboard"> home</a> <a class="w-clr">/</a> <a class="w-clr" href="#!/dashboard">{{cmpyName | lowercase}}</a> <a class="w-clr">/</a>\n' +
    '      <a class="w-clr" href="">cash n carry billing</a></h5>\n' +
    '      </div><br><br>\n' +
    '      <div style="background-color:pink; min-height:500px;"></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="company-dashboard" ng-if="feedbackBool">\n' +
    '\n' +
    '      <!-- Employee Feedback -->\n' +
    '      <!-- <div class="company-dashboard" style="background-color:white;"> -->\n' +
    '\n' +
    '        <div class="title-baar">\n' +
    '          <h5><a href="#!/admin"><i class="fa fa-home w-clr" aria-hidden="true"></i></a> <a class="w-clr" href="#!/admin"> home</a> <a class="w-clr">/</a> <a href="#!/admin" class="w-clr">{{cmpyName | lowercase}}</a> <a class="w-clr">/</a> <a href="" class="w-clr">employee feedback</a></h5>\n' +
    '        </div><br><br><br>\n' +
    '        <div class="container">\n' +
    '\n' +
    '        <table class="table table-hover" style="background-color:white;">\n' +
    '          <thead>\n' +
    '            <tr>\n' +
    '              <th>Name</th>\n' +
    '              <th>Overall Rating</th>\n' +
    '              <th>Presentation Rating</th>\n' +
    '              <th>Quality Rating</th>\n' +
    '              <th>Quantity Rating</th>\n' +
    '              <th>Taste Rating</th>\n' +
    '              <th>Contact</th>\n' +
    '              <th>Comment</th>\n' +
    '              <th>Menu</th>\n' +
    '              <th>Date & Time</th>\n' +
    '            </tr>\n' +
    '          </thead>\n' +
    '          <tbody>\n' +
    '            <tr ng-repeat="feed in feedback.slice().reverse()">\n' +
    '              <td>{{feed.reviewerName}}</td>\n' +
    '              <td>{{feed.overAllRating}}</td>\n' +
    '              <td>{{feed.presentationRating}}</td>\n' +
    '              <td>{{feed.qualityRating}}</td>\n' +
    '              <td>{{feed.quantityRating}}</td>\n' +
    '              <td>{{feed.tasteRating}}</td>\n' +
    '              <td>{{feed.mobile}}</td>\n' +
    '              <td>\n' +
    '                <!-- <a data-toggle="popover" title="{{feed.comment}}" data-content="Some content inside the popover">\n' +
    '                  <i class="fa fa-commenting fa-2x" style="color:#848181;" aria-hidden="true"></i></a> -->\n' +
    '                  <ul class="nav nav-pills nav-stacked">\n' +
    '                    <li class="dropdown">\n' +
    '                      <a class="dropdown-toggle" data-toggle="dropdown">\n' +
    '                        <i class="far fa-comment-alt fa-2x" style="color:#848181;" aria-hidden="true"></i></a>\n' +
    '                      <div class="dropdown-menu">\n' +
    '                        <h6 class="comment-padd">{{feed.comment}}\n' +
    '                        </h6>\n' +
    '                      </div>\n' +
    '                    </li>\n' +
    '                  </ul>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <!-- <a data-toggle="popover" title="{{feed.reviewedMenu}}" data-content="Some content inside the popover"><i class="fa fa-comments-o fa-2x" style="color:#848181;" aria-hidden="true"></i></a> -->\n' +
    '                <ul class="nav nav-pills nav-stacked">\n' +
    '                  <li class="dropdown">\n' +
    '                    <a class="dropdown-toggle" data-toggle="dropdown" href=""><i class="fas fa-utensils fa-2x" style="color:#848181;" aria-hidden="true"></i></a>\n' +
    '                    <div class="dropdown-menu">\n' +
    '                      <h6 class="comment-padd">{{feed.reviewedMenu}}\n' +
    '                      </h6>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                </ul>\n' +
    '              </td>\n' +
    '              <td>{{feed.createdAt}}</td>\n' +
    '            </tr>\n' +
    '          </tbody>\n' +
    '        </table>\n' +
    '      </div>\n' +
    '      <!-- </div> -->\n' +
    '      <!--feedback end-->\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- cash and carry start -->\n' +
    '    <div class="company-dashboard" ng-if="cashAndCarryBool">\n' +
    '      <div class="title-baar">\n' +
    '        <h5><a href="#!/dashboard"><i class="fa fa-home w-clr" aria-hidden="true"></i></a> <a class="w-clr" href="#!/dashboard"> home</a> <a class="w-clr">/</a> <a class="w-clr" href="#!/dashboard">{{cmpyName | lowercase}}</a> <a class="w-clr">/</a>\n' +
    '      <a class="w-clr" href="">cash & carry</a></h5>\n' +
    '      </div><br><br>\n' +
    '\n' +
    '      <!-- Angular Material Design Start-->\n' +
    '      <div ng-cloak>\n' +
    '        <md-content>\n' +
    '          <md-tabs md-dynamic-height md-border-bottom>\n' +
    '            <md-tab ng-repeat="x in daysss track by $id(x)" label="{{x}}" ng-click="callMe(x)">\n' +
    '              <!-- <md-tab label="monday"> -->\n' +
    '              <md-content class="md-padding">\n' +
    '                <div class="menuSection">\n' +
    '                  <script type="text/ng-template" id="nodes_renderer.html">\n' +
    '                    <div>\n' +
    '                      <br>\n' +
    '                      <a class="btn btn-clear btn-xs" ng-if="node.menuNodes.length>0" ng-click="expandNode(this,$event)">\n' +
    '                        <!--data-ng-show="item.items.length"-->\n' +
    '                        <i class="fa" ng-class="{\'fa-chevron-right\': collapsed, \'fa-chevron-down\': !collapsed}"></i>\n' +
    '                      </a>\n' +
    '\n' +
    '                      <div class=\'form-group\'>\n' +
    '                        <input class=\'form-control\' placeholder=\'Menu Heading / Menu / Sub-Menu\' ng-disabled="node.isInserted" ng-model="node.menuName" focus>\n' +
    '                      </div>\n' +
    '\n' +
    '                      <div ng-if="$parentNodeScope">\n' +
    '                        <label ng-if="(node.menuNodes.length === 0) || (node.menuNodes == null)" class="menu-label">is Food Item:</lebel>\n' +
    '                              <input type="checkbox" ng-disabled="node.isInserted" ng-model="node.isFoodItem" ng-init="isFoodItem=isFoodItem" />\n' +
    '                              <div ng-if="node.isFoodItem">\n' +
    '                                  <label class="menu-label">is Veg:</label>\n' +
    '                        <input type="radio" ng-disabled="node.isInserted" ng-model="node.menuType" value="veg" />\n' +
    '                        <br>\n' +
    '                        <label class="menu-label">is Non-Veg:</label>\n' +
    '                        <input type="radio" ng-disabled="node.isInserted" ng-model="node.menuType" value="nonveg" />\n' +
    '                        <br>\n' +
    '                        <label class="menu-label">is Egg Item:</label>\n' +
    '                        <input type="radio" ng-disabled="node.isInserted" ng-model="node.menuType" value="egg" />\n' +
    '                        <br>\n' +
    '                        <label class="menu-label">Price:\n' +
    '                                  <input type="number" class=\'form-control\' ng-disabled="node.isInserted" ng-model=\'node.price\' focus>\n' +
    '                                  </label>\n' +
    '                        <br>\n' +
    '                        <label class="menu-label">Menu Item:\n' +
    '                                      <input class=\'form-control\' ng-disabled="node.isInserted" ng-model=\'node.description\' focus>\n' +
    '                                  </label>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                    <!-- <button class=\'btn btn-primary\' ng-click=\'addsection($nodes,$index)\'>{{}}</button> -->\n' +
    '                    <input type="submit" class="btn btn-danger" value="Add Menu" ng-click="addsection($nodes,$index)">\n' +
    '                    <input type="submit" ng-if="!node.isFoodItem" class="btn btn-danger" value="Add Sub-menu" ng-click="addchild(node)">\n' +
    '                    <input type="submit" ng-if="!node.id" class="btn btn-danger" value="Save" ng-click="saveInDb(node, x)">\n' +
    '                    <input type="submit" ng-if="node.isInserted" class="btn btn-danger" value="Edit" ng-click="node.isInserted=false">\n' +
    '                    <input type="submit" ng-if="(node.id) && (!node.isInserted)" class="btn btn-danger" value="Update" ng-click="updateMenu(node)">\n' +
    '                    <input type="submit" ng-if="node.isInserted" class="btn btn-danger" value="Remove" ng-click="deleteNode(node, x)">\n' +
    '\n' +
    '                </div>\n' +
    '                <ul ui-tree-nodes="" ng-model="node.menuNodes" ng-init=\'$nodes = node.menuNodes\' ng-class="{hidden: collapsed,displayed:!collapsed}">\n' +
    '                  <li ng-repeat="node in node.menuNodes" collapsed="false" ui-tree-node ng-include="\'nodes_renderer.html\'">\n' +
    '                  </li>\n' +
    '                </ul>\n' +
    '                </script>\n' +
    '                <div ui-tree>\n' +
    '                  <ul ui-tree-nodes ng-model="menuNodes" id="tree-root" ng-init=\'$nodes = menuNodes\'>\n' +
    '                    <li ng-repeat="node in menuNodes" ui-tree-node ng-include="\'nodes_renderer.html\'"></li>\n' +
    '                  </ul>\n' +
    '                </div>\n' +
    '\n' +
    '      </div>\n' +
    '      <div class="menuPreview"></div>\n' +
    '      </md-content>\n' +
    '      </md-tab>\n' +
    '      </md-tabs>\n' +
    '      </md-content>\n' +
    '    </div>\n' +
    '    <!-- Angular Material Design End -->\n' +
    '\n' +
    '\n' +
    '</div>\n' +
    '<!-- cash & carry end -->\n' +
    '\n' +
    '<!-- breakfast -->\n' +
    '<div class="company-dashboard" ng-if="bBool">\n' +
    '  <div class="title-baar">\n' +
    '    <h5><a href="#!/dashboard"><i class="fa fa-home w-clr" aria-hidden="true"></i></a> <a class="w-clr" href="#!/dashboard"> home</a> <a class="w-clr">/</a> <a class="w-clr" href="#!/dashboard">{{cmpyName | lowercase}}</a> <a class="w-clr">/</a>\n' +
    '      <a class="w-clr" href="">breakfast</a></h5>\n' +
    '  </div><br><br>\n' +
    '  <!--++++++++++++++++++++++ aaa ++++++++++++++++++  -->\n' +
    '  <div class="container">\n' +
    '    <div ng-cloak>\n' +
    '      <md-content>\n' +
    '        <md-tabs md-dynamic-height md-border-bottom>\n' +
    '          <!----------------------------------------------------------------------  -->\n' +
    '          <!-- <md-tab label="breakfast">\n' +
    '                          <md-content class="md-padding">\n' +
    '                            <md-content>\n' +
    '                              <md-tabs md-dynamic-height md-border-bottom> -->\n' +
    '          <!--<<<<<<<<<<<<<<<<<<       md-tabs   >>>>>>>>>>>>>>>>>>>>>>>>> -->\n' +
    '          <md-tab label="Monday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in mon_reqqq">\n' +
    '                    <td>{{req.breakfast}}</td>\n' +
    '                    <td>{{req.breakfastPrice}}</td>\n' +
    '                    <td>Rs {{req.breakfast*req.breakfastPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in mon_reqqq" ng-if="!check.breakfast" style="color:#88888c;">\n' +
    '                  There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in mon_reqqq" ng-if="check.breakfast">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewMondayBreakfast()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <!-- <th><span class="rmv"><a ng-click="removeMondayBreakfast()"><i class="fas fa-trash" aria-hidden="true"></i></a></span></th> -->\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="breakfast_monday in mondayMenuBreakfast track by $index">\n' +
    '                                <td>\n' +
    '                                  <!-- <md-checkbox name="check" ng-model="breakfast_monday.selected"></md-checkbox> -->\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,breakfast_monday,type[0],daysss[0])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                  <td>\n' +
    '                                    <input type="text" class="form-control" ng-model="breakfast_monday.dishName" required/></td>\n' +
    '                                  <td>\n' +
    '                                    <input type="number" class="form-control" ng-model="breakfast_monday.dishCost" required/></td>\n' +
    '                                  <td>\n' +
    '                                    <input type="number" class="form-control" ng-model="breakfast_monday.dishQuantity" required/>\n' +
    '                                  </td>\n' +
    '                              </tr>\n' +
    '\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="mondayMenuBreakfast.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="mondayMenuBreakfast.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(mondayMenuBreakfast,type[0],daysss[0])">\n' +
    '                            <input type="submit" ng-if="mondayMenuBreakfast.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(mondayMenuBreakfast,type[0],daysss[0])">\n' +
    '                          </div>\n' +
    '\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Tuesday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in tue_reqqq">\n' +
    '                    <td>{{req.breakfast}}</td>\n' +
    '                    <td>{{req.breakfastPrice}}</td>\n' +
    '                    <td>Rs {{req.breakfast*req.breakfastPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="t in tue_reqqq" ng-if="!t.breakfast" style="color:#88888c;">\n' +
    '                  There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="t in tue_reqqq" ng-if="t.breakfast">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewTuesdayBreakfast()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="breakfast_tuesday in tuesdayMenuBreakfast">\n' +
    '                                <td>\n' +
    '                                  <!-- <input type="checkbox" ng-model="breakfast_tuesday.selected"/> -->\n' +
    '                                  <!-- <md-checkbox name="check" ng-model="breakfast_tuesday.selected"></md-checkbox> -->\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,breakfast_tuesday,type[0],daysss[1])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="breakfast_tuesday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="breakfast_tuesday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="breakfast_tuesday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="tuesdayMenuBreakfast.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="tuesdayMenuBreakfast.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(tuesdayMenuBreakfast,type[0],daysss[1])">\n' +
    '                            <!--ng-if="!buttonBool" -->\n' +
    '                            <input type="submit" ng-if="tuesdayMenuBreakfast.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(tuesdayMenuBreakfast,type[0],daysss[1])">\n' +
    '                            <!--ng-if="buttonBool" -->\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Wednesday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in wed_reqqq">\n' +
    '                    <td>{{req.breakfast}}</td>\n' +
    '                    <td>{{req.breakfastPrice}}</td>\n' +
    '                    <td>Rs {{req.breakfast*req.breakfastPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in wed_reqqq" ng-if="!check.breakfast" style="color:#88888c;">\n' +
    '                  There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in wed_reqqq" ng-if="check.breakfast">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewWednesdayBreakfast()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="breakfast_wednesday in wednesdayMenuBreakfast">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,breakfast_wednesday,type[0],daysss[2])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="breakfast_wednesday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="breakfast_wednesday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="breakfast_wednesday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="wednesdayMenuBreakfast.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="wednesdayMenuBreakfast.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(wednesdayMenuBreakfast,type[0],daysss[2])">\n' +
    '                            <input type="submit" ng-if="wednesdayMenuBreakfast.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(wednesdayMenuBreakfast,type[0],daysss[2])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Thursday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in thu_reqqq">\n' +
    '                    <td>{{req.breakfast}}</td>\n' +
    '                    <td>{{req.breakfastPrice}}</td>\n' +
    '                    <td>Rs {{req.breakfast*req.breakfastPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in thu_reqqq" ng-if="!check.breakfast" style="color:#88888c;">\n' +
    '                  There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in thu_reqqq" ng-if="check.breakfast">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewThursdayBreakfast()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="breakfast_thursday in thursdayMenuBreakfast">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,breakfast_thursday,type[0],daysss[3])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="breakfast_thursday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="breakfast_thursday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="breakfast_thursday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="thursdayMenuBreakfast.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="thursdayMenuBreakfast.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(thursdayMenuBreakfast,type[0],daysss[3])">\n' +
    '                            <input type="submit" ng-if="thursdayMenuBreakfast.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(thursdayMenuBreakfast,type[0],daysss[3])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Friday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in fri_reqqq">\n' +
    '                    <td>{{req.breakfast}}</td>\n' +
    '                    <td>{{req.breakfastPrice}}</td>\n' +
    '                    <td>Rs {{req.breakfast*req.breakfastPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in fri_reqqq" ng-if="!check.breakfast" style="color:#88888c;">\n' +
    '                  There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in fri_reqqq" ng-if="check.breakfast">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewFridayBreakfast()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="breakfast_friday in fridayMenuBreakfast">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,breakfast_friday,type[0],daysss[4])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="breakfast_friday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="breakfast_friday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="breakfast_friday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="fridayMenuBreakfast.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="fridayMenuBreakfast.length<1" class="btn btn-mybtn" value="Save" ng-click="saveMenu(fridayMenuBreakfast,type[0],daysss[4])">\n' +
    '                            <input type="submit" ng-if="fridayMenuBreakfast.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(fridayMenuBreakfast,type[0],daysss[4])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Saturday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in sat_reqqq">\n' +
    '                    <td>{{req.breakfast}}</td>\n' +
    '                    <td>{{req.breakfastPrice}}</td>\n' +
    '                    <td>Rs {{req.breakfast*req.breakfastPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in sat_reqqq" ng-if="!check.breakfast" style="color:#88888c;">\n' +
    '                  There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in sat_reqqq" ng-if="check.breakfast">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewSaturdayBreakfast()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="breakfast_saturday in saturdayMenuBreakfast">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,breakfast_saturday,type[0],daysss[5])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                  <td>\n' +
    '                                    <input type="text" class="form-control" ng-model="breakfast_saturday.dishName" required/></td>\n' +
    '                                  <td>\n' +
    '                                    <input type="number" class="form-control" ng-model="breakfast_saturday.dishCost" required/></td>\n' +
    '                                  <td>\n' +
    '                                    <input type="number" class="form-control" ng-model="breakfast_saturday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="saturdayMenuBreakfast.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="saturdayMenuBreakfast.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(saturdayMenuBreakfast,type[0],daysss[5])">\n' +
    '                            <input type="submit" ng-if="saturdayMenuBreakfast.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(saturdayMenuBreakfast,type[0],daysss[5])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Sunday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in sun_reqqq">\n' +
    '                    <td>{{req.breakfast}}</td>\n' +
    '                    <td>{{req.breakfastPrice}}</td>\n' +
    '                    <td>Rs {{req.breakfast*req.breakfastPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in sun_reqqq" ng-if="!check.breakfast" style="color:#88888c;">\n' +
    '                  There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in sun_reqqq" ng-if="check.breakfast">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewSundayBreakfast()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="breakfast_sunday in sundayMenuBreakfast">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,breakfast_sunday,type[0],daysss[6])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="breakfast_sunday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="breakfast_sunday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="breakfast_sunday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="sundayMenuBreakfast.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="sundayMenuBreakfast.length<1" class="btn btn-mybtn" value="Save" ng-click="saveMenu(sundayMenuBreakfast,type[0],daysss[6])">\n' +
    '                            <input type="submit" ng-if="sundayMenuBreakfast.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(sundayMenuBreakfast,type[0],daysss[6])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <!--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<             md-tabs       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->\n' +
    '          <!-- </md-tabs>\n' +
    '                </md-content>\n' +
    '              </md-content>\n' +
    '            </md-tab> -->\n' +
    '          <!------------------------------------------ Breakfast End ----------------------------------------------------------------  -->\n' +
    '        </md-tabs>\n' +
    '      </md-content>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++ -->\n' +
    '</div>\n' +
    '<!-- end -->\n' +
    '<!-- lunch -->\n' +
    '<div class="company-dashboard" ng-if="lBool">\n' +
    '  <div class="title-baar">\n' +
    '    <h5><a href="#!/dashboard"><i class="fa fa-home w-clr" aria-hidden="true"></i></a> <a class="w-clr" href="#!/dashboard"> home</a> <a class="w-clr">/</a> <a class="w-clr" href="#!/dashboard">{{cmpyName | lowercase}}</a> <a class="w-clr">/</a>\n' +
    '      <a class="w-clr" href="">lunch</a></h5>\n' +
    '  </div><br><br>\n' +
    '\n' +
    '  <!--+++++++++++++++++++++++++++++++++++ bbb ++++++++++++++++++++++++++++++++++++++++++++++++  -->\n' +
    '  <div class="container">\n' +
    '    <div ng-cloak>\n' +
    '      <md-content>\n' +
    '        <md-tabs md-dynamic-height md-border-bottom>\n' +
    '          <!------------------------------------------ Lunch Start -------------------------------------------------  -->\n' +
    '          <!-- <md-tab label="lunch">\n' +
    '                            <md-content class="md-padding">\n' +
    '                              <md-content>\n' +
    '                                <md-tabs md-dynamic-height md-border-bottom> -->\n' +
    '          <!--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<             md-tabs       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->\n' +
    '          <md-tab label="Monday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in mon_reqqq">\n' +
    '                    <td>{{req.lunch}}</td>\n' +
    '                    <td>{{req.lunchPrice}}</td>\n' +
    '                    <td>Rs {{req.lunch*req.lunchPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in mon_reqqq" ng-if="!check.lunch" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in mon_reqqq" ng-if="check.lunch">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewMondayLunch()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_monday in mondayMenuLunch">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_monday,type[1],daysss[0])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_monday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_monday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_monday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="mondayMenuLunch.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="mondayMenuLunch.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(mondayMenuLunch,type[1],daysss[0])">\n' +
    '                            <input type="submit" ng-if="mondayMenuLunch.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(mondayMenuLunch,type[1],daysss[0])">\n' +
    '                          </div>\n' +
    '                          <!-- <div class="form-group">\n' +
    '                                             <input type="submit" class="btn btn-success" value="Save" ng-click="saveMenu(mondayMenuLunch,type[1],daysss[0])">\n' +
    '                                             <input type="submit" class="btn btn-info" value="Update" ng-click="updateVendorMenu(mondayMenuLunch,type[1],daysss[0])">\n' +
    '                                                 <input ng-hide="lunch_monday.length" type="button" class="btn btn-danger pull-right" ng-click="removeMondayLunch()" value="Remove">\n' +
    '                                                 <input type="submit" class="btn btn-primary addnew pull-right" value="Add New">\n' +
    '                                             </div> -->\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Tuesday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in tue_reqqq">\n' +
    '                    <td>{{req.lunch}}</td>\n' +
    '                    <td>{{req.lunchPrice}}</td>\n' +
    '                    <td>Rs {{req.lunch*req.lunchPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in tue_reqqq" ng-if="!check.lunch" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in tue_reqqq" ng-if="check.lunch">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewTuesdayLunch()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_tuesday in tuesdayMenuLunch">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_tuesday,type[1],daysss[1])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_tuesday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_tuesday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_tuesday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="tuesdayMenuLunch.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="tuesdayMenuLunch.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(tuesdayMenuLunch,type[1],daysss[1])">\n' +
    '                            <input type="submit" ng-if="tuesdayMenuLunch.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(tuesdayMenuLunch,type[1],daysss[1])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Wednesday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in wed_reqqq">\n' +
    '                    <td>{{req.lunch}}</td>\n' +
    '                    <td>{{req.lunchPrice}}</td>\n' +
    '                    <td>Rs {{req.lunch*req.lunchPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in wed_reqqq" ng-if="!check.lunch" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in wed_reqqq" ng-if="check.lunch">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewWednesdayLunch()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_wednesday in wednesdayMenuLunch">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_wednesday,type[1],daysss[2])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_wednesday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_wednesday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_wednesday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="wednesdayMenuLunch.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="wednesdayMenuLunch.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(wednesdayMenuLunch,type[1],daysss[2])">\n' +
    '                            <input type="submit" ng-if="wednesdayMenuLunch.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(wednesdayMenuLunch,type[1],daysss[2])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Thursday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in thu_reqqq">\n' +
    '                    <td>{{req.lunch}}</td>\n' +
    '                    <td>{{req.lunchPrice}}</td>\n' +
    '                    <td>Rs {{req.lunch*req.lunchPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in thu_reqqq" ng-if="!check.lunch" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in thu_reqqq" ng-if="check.lunch">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewThursdayLunch()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_thursday in thursdayMenuLunch">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_thursday,type[1],daysss[3])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_thursday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_thursday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_thursday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="thursdayMenuLunch.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="thursdayMenuLunch.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(thursdayMenuLunch,type[1],daysss[3])">\n' +
    '                            <input type="submit" ng-if="thursdayMenuLunch.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(thursdayMenuLunch,type[1],daysss[3])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Friday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in fri_reqqq">\n' +
    '                    <td>{{req.lunch}}</td>\n' +
    '                    <td>{{req.lunchPrice}}</td>\n' +
    '                    <td>Rs {{req.lunch*req.lunchPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in fri_reqqq" ng-if="!check.lunch" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in fri_reqqq" ng-if="check.lunch">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewFridayLunch()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_friday in fridayMenuLunch">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_friday,type[1],daysss[4])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_friday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_friday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_friday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="fridayMenuLunch.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="fridayMenuLunch.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(fridayMenuLunch,type[1],daysss[4])">\n' +
    '                            <input type="submit" ng-if="fridayMenuLunch.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(fridayMenuLunch,type[1],daysss[4])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Saturday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in sat_reqqq">\n' +
    '                    <td>{{req.lunch}}</td>\n' +
    '                    <td>{{req.lunchPrice}}</td>\n' +
    '                    <td>Rs {{req.lunch*req.lunchPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in sat_reqqq" ng-if="!check.lunch" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in sat_reqqq" ng-if="check.lunch">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewSaturdayLunch()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_saturday in saturdayMenuLunch">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_saturday,type[1],daysss[5])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_saturday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_saturday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_saturday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="saturdayMenuLunch.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="saturdayMenuLunch.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(saturdayMenuLunch,type[1],daysss[5])">\n' +
    '                            <input type="submit" ng-if="saturdayMenuLunch.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(saturdayMenuLunch,type[1],daysss[5])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Sunday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in sun_reqqq">\n' +
    '                    <td>{{req.lunch}}</td>\n' +
    '                    <td>{{req.lunchPrice}}</td>\n' +
    '                    <td>Rs {{req.lunch*req.lunchPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in sun_reqqq" ng-if="!check.lunch" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in sun_reqqq" ng-if="check.lunch">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewSundayLunch()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_sunday in sundayMenuLunch">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_sunday,type[1],daysss[6])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_sunday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_sunday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_sunday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="sundayMenuLunch.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="sundayMenuLunch.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(sundayMenuLunch,type[1],daysss[6])">\n' +
    '                            <input type="submit" ng-if="sundayMenuLunch.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(sundayMenuLunch,type[1],daysss[6])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <!--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<             md-tabs       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->\n' +
    '          <!-- </md-tabs>\n' +
    '                  </md-content>\n' +
    '                </md-content>\n' +
    '              </md-tab> -->\n' +
    '          <!------------------------------------------ LUNCH END ----------------------------------------------------------------  -->\n' +
    '        </md-tabs>\n' +
    '      </md-content>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->\n' +
    '\n' +
    '</div>\n' +
    '<!-- end -->\n' +
    '<!-- lunch -->\n' +
    '<div class="company-dashboard" ng-if="sBool">\n' +
    '  <div class="title-baar">\n' +
    '    <h5><a href="#!/dashboard"><i class="fa fa-home w-clr" aria-hidden="true"></i></a> <a class="w-clr" href="#!/dashboard"> home</a> <a class="w-clr">/</a> <a class="w-clr" href="#!/dashboard">{{cmpyName | lowercase}}</a> <a class="w-clr">/</a>\n' +
    '      <a class="w-clr" href="">snacks</a></h5>\n' +
    '  </div><br><br>\n' +
    '\n' +
    '  <!--++++++++++++++++++++++++++++++++++++ ccc +++++++++++++++++++++++++++++++++++++++++++++++  -->\n' +
    '  <div class="container">\n' +
    '    <div ng-cloak>\n' +
    '      <md-content>\n' +
    '        <md-tabs md-dynamic-height md-border-bottom>\n' +
    '          <!------------------------------------------ Snacks Start -------------------------------------------------  -->\n' +
    '          <!-- <md-tab label="snacks">\n' +
    '                            <md-content class="md-padding">\n' +
    '                              <md-content>\n' +
    '                                <md-tabs md-dynamic-height md-border-bottom> -->\n' +
    '          <!--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<             md-tabs       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->\n' +
    '          <md-tab label="Monday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in mon_reqqq">\n' +
    '                    <td>{{req.snacks}}</td>\n' +
    '                    <td>{{req.snacksPrice}}</td>\n' +
    '                    <td>Rs {{req.snacks*req.snacksPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in mon_reqqq" ng-if="!check.snacks" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in mon_reqqq" ng-if="check.snacks">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewMondaySnacks()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_monday in mondayMenuSnacks">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_monday,type[2],daysss[0])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_monday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_monday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_monday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="mondayMenuSnacks.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="mondayMenuSnacks.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(mondayMenuSnacks,type[2],daysss[0])">\n' +
    '                            <input type="submit" ng-if="mondayMenuSnacks.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(mondayMenuSnacks,type[2],daysss[0])">\n' +
    '                          </div>\n' +
    '\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Tuesday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in tue_reqqq">\n' +
    '                    <td>{{req.snacks}}</td>\n' +
    '                    <td>{{req.snacksPrice}}</td>\n' +
    '                    <td>Rs {{req.snacks*req.snacksPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in tue_reqqq" ng-if="!check.snacks" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in tue_reqqq" ng-if="check.snacks">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewTuesdaySnacks()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_tuesday in tuesdayMenuSnacks">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_monday,type[2],daysss[1])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_tuesday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_tuesday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_tuesday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="tuesdayMenuSnacks.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="tuesdayMenuSnacks.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(tuesdayMenuSnacks,type[2],daysss[1])">\n' +
    '                            <input type="submit" ng-if="tuesdayMenuSnacks.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(tuesdayMenuSnacks,type[2],daysss[1])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Wednesday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in wed_reqqq">\n' +
    '                    <td>{{req.snacks}}</td>\n' +
    '                    <td>{{req.snacksPrice}}</td>\n' +
    '                    <td>Rs {{req.snacks*req.snacksPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in wed_reqqq" ng-if="!check.snacks" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in wed_reqqq" ng-if="check.snacks">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewWednesdaySnacks()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_wednesday in wednesdayMenuSnacks">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_wednesday,type[2],daysss[2])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_wednesday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_wednesday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_wednesday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="wednesdayMenuSnacks.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="wednesdayMenuSnacks.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(wednesdayMenuSnacks,type[2],daysss[2])">\n' +
    '                            <input type="submit" ng-if="wednesdayMenuSnacks.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(wednesdayMenuSnacks,type[2],daysss[2])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Thursday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in thu_reqqq">\n' +
    '                    <td>{{req.snacks}}</td>\n' +
    '                    <td>{{req.snacksPrice}}</td>\n' +
    '                    <td>Rs {{req.snacks*req.snacksPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in thu_reqqq" ng-if="!check.snacks" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in thu_reqqq" ng-if="check.snacks">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewThursdaySnacks()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_thursday in thursdayMenuSnacks">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_thursday,type[2],daysss[3])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_thursday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_thursday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_thursday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="thursdayMenuSnacks.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="thursdayMenuSnacks.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(thursdayMenuSnacks,type[2],daysss[3])">\n' +
    '                            <input type="submit" ng-if="thursdayMenuSnacks.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(thursdayMenuSnacks,type[2],daysss[3])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Friday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in fri_reqqq">\n' +
    '                    <td>{{req.snacks}}</td>\n' +
    '                    <td>{{req.snacksPrice}}</td>\n' +
    '                    <td>Rs {{req.snacks*req.snacksPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in fri_reqqq" ng-if="!check.snacks" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in fri_reqqq" ng-if="check.snacks">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewFridaySnacks()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_friday in fridayMenuSnacks">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_friday,type[2],daysss[4])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_friday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_friday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_friday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="fridayMenuSnacks.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="fridayMenuSnacks.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(fridayMenuSnacks,type[2],daysss[4])">\n' +
    '                            <input type="submit" ng-if="fridayMenuSnacks.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(fridayMenuSnacks,type[2],daysss[4])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Saturday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in sat_reqqq">\n' +
    '                    <td>{{req.snacks}}</td>\n' +
    '                    <td>{{req.snacksPrice}}</td>\n' +
    '                    <td>Rs {{req.snacks*req.snacksPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in sat_reqqq" ng-if="!check.snacks" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in sat_reqqq" ng-if="check.snacks">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewSaturdaySnacks()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_saturday in saturdayMenuSnacks">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_saturday,type[2],daysss[5])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_saturday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_saturday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_saturday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="saturdayMenuSnacks.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="saturdayMenuSnacks.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(saturdayMenuSnacks,type[2],daysss[5])">\n' +
    '                            <input type="submit" ng-if="saturdayMenuSnacks.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(saturdayMenuSnacks,type[2],daysss[5])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Sunday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in sun_reqqq">\n' +
    '                    <td>{{req.snacks}}</td>\n' +
    '                    <td>{{req.snacksPrice}}</td>\n' +
    '                    <td>Rs {{req.snacks*req.snacksPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in sun_reqqq" ng-if="!check.snacks" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in sun_reqqq" ng-if="check.snacks">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewSundaySnacks()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_sunday in sundayMenuSnacks">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_sunday,type[2],daysss[6])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_sunday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_sunday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_sunday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="sundayMenuSnacks.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="sundayMenuSnacks.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(sundayMenuSnacks,type[2],daysss[6])">\n' +
    '                            <input type="submit" ng-if="sundayMenuSnacks.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(sundayMenuSnacks,type[2],daysss[6])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <!--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<             md-tabs       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->\n' +
    '          <!-- </md-tabs>\n' +
    '                  </md-content>\n' +
    '                </md-content>\n' +
    '              </md-tab> -->\n' +
    '          <!------------------------------------------ SNACKS END ------------------------------------- -->\n' +
    '        </md-tabs>\n' +
    '      </md-content>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->\n' +
    '\n' +
    '</div>\n' +
    '<!-- end -->\n' +
    '<!-- Dinner -->\n' +
    '<div class="company-dashboard" ng-if="dBool">\n' +
    '  <div class="title-baar">\n' +
    '    <h5><a href="#!/dashboard"><i class="fa fa-home w-clr" aria-hidden="true"></i></a> <a class="w-clr" href="#!/dashboard"> home</a> <a class="w-clr">/</a> <a class="w-clr" href="#!/dashboard">{{cmpyName | lowercase}}</a> <a class="w-clr">/</a>\n' +
    '      <a class="w-clr" href="">dinner</a></h5>\n' +
    '  </div><br><br>\n' +
    '\n' +
    '  <!--+++++++++++++++++++++++++++++++++++ ddd ++++++++++++++++++++++++++++++++++++++++++++++++  -->\n' +
    '  <div class="container">\n' +
    '    <div ng-cloak>\n' +
    '      <md-content>\n' +
    '        <md-tabs md-dynamic-height md-border-bottom>\n' +
    '          <!------------------------------------------ dinner Start -------------------------------------------------  -->\n' +
    '          <!-- <md-tab label="dinner">\n' +
    '                            <md-content class="md-padding">\n' +
    '                              <md-content>\n' +
    '                                <md-tabs md-dynamic-height md-border-bottom> -->\n' +
    '          <!--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<             md-tabs       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->\n' +
    '          <md-tab label="Monday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in mon_reqqq">\n' +
    '                    <td>{{req.dinner}}</td>\n' +
    '                    <td>{{req.dinnerPrice}}</td>\n' +
    '                    <td>Rs {{req.dinner*req.dinnerPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in mon_reqqq" ng-if="!check.dinner" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in mon_reqqq" ng-if="check.dinner">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewMondayDinner()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_monday in mondayMenuDinner">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_monday,type[3],daysss[0])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_monday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_monday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_monday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="mondayMenuDinner.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="mondayMenuDinner.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(mondayMenuDinner,type[3],daysss[0])">\n' +
    '                            <input type="submit" ng-if="mondayMenuDinner.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(mondayMenuDinner,type[3],daysss[0])">\n' +
    '                          </div>\n' +
    '\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Tuesday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in tue_reqqq">\n' +
    '                    <td>{{req.dinner}}</td>\n' +
    '                    <td>{{req.dinnerPrice}}</td>\n' +
    '                    <td>Rs {{req.dinner*req.dinnerPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in tue_reqqq" ng-if="!check.dinner" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in tue_reqqq" ng-if="check.dinner">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewTuesdayDinner()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_tuesday in tuesdayMenuDinner">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_tuesday,type[3],daysss[1])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_tuesday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_tuesday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_tuesday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="tuesdayMenuDinner.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="tuesdayMenuDinner.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(tuesdayMenuDinner,type[3],daysss[1])">\n' +
    '                            <input type="submit" ng-if="tuesdayMenuDinner.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(tuesdayMenuDinner,type[3],daysss[1])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Wednesday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in wed_reqqq">\n' +
    '                    <td>{{req.dinner}}</td>\n' +
    '                    <td>{{req.dinnerPrice}}</td>\n' +
    '                    <td>Rs {{req.dinner*req.dinnerPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in wed_reqqq" ng-if="!check.dinner" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in wed_reqqq" ng-if="check.dinner">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewWednesdayDinner()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_wednesday in wednesdayMenuDinner">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_wednesday,type[3],daysss[2])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_wednesday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_wednesday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_wednesday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="wednesdayMenuDinner.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="wednesdayMenuDinner.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(wednesdayMenuDinner,type[3],daysss[2])">\n' +
    '                            <input type="submit" ng-if="wednesdayMenuDinner.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(wednesdayMenuDinner,type[3],daysss[2])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Thursday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in thu_reqqq">\n' +
    '                    <td>{{req.dinner}}</td>\n' +
    '                    <td>{{req.dinnerPrice}}</td>\n' +
    '                    <td>Rs {{req.dinner*req.dinnerPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in thu_reqqq" ng-if="!check.dinner" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in thu_reqqq" ng-if="check.dinner">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewThursdayDinner()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_thursday in thursdayMenuDinner">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_thursday,type[3],daysss[3])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_thursday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_thursday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_thursday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="thursdayMenuDinner.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="thursdayMenuDinner.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(thursdayMenuDinner,type[3],daysss[3])">\n' +
    '                            <input type="submit" ng-if="thursdayMenuDinner.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(thursdayMenuDinner,type[3],daysss[3])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Friday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in fri_reqqq">\n' +
    '                    <td>{{req.dinner}}</td>\n' +
    '                    <td>{{req.dinnerPrice}}</td>\n' +
    '                    <td>Rs {{req.dinner*req.dinnerPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in fri_reqqq" ng-if="!check.dinner" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in fri_reqqq" ng-if="check.dinner">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewFridayDinner()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_friday in fridayMenuDinner">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_friday,type[3],daysss[4])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_friday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_friday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_friday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="fridayMenuDinner.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="fridayMenuDinner.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(fridayMenuDinner,type[3],daysss[4])">\n' +
    '                            <input type="submit" ng-if="fridayMenuDinner.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(fridayMenuDinner,type[3],daysss[4])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Saturday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in sat_reqqq">\n' +
    '                    <td>{{req.dinner}}</td>\n' +
    '                    <td>{{req.dinnerPrice}}</td>\n' +
    '                    <td>Rs {{req.dinner*req.dinnerPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in sat_reqqq" ng-if="!check.dinner" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in sat_reqqq" ng-if="check.dinner">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewSaturdayDinner()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_saturday in saturdayMenuDinner">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_saturday,type[3],daysss[5])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_saturday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_saturday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_saturday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="saturdayMenuDinner.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="saturdayMenuDinner.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(saturdayMenuDinner,type[3],daysss[5])">\n' +
    '                            <input type="submit" ng-if="saturdayMenuDinner.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(saturdayMenuDinner,type[3],daysss[5])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <md-tab label="Sunday">\n' +
    '            <md-content class="md-padding">\n' +
    '              <br>\n' +
    '              <table class="table table-striped table-bordered">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Number of Person</th>\n' +
    '                    <th>Price / Person</th>\n' +
    '                    <th>Total Price</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="req in sun_reqqq">\n' +
    '                    <td>{{req.dinner}}</td>\n' +
    '                    <td>{{req.dinnerPrice}}</td>\n' +
    '                    <td>Rs {{req.dinner*req.dinnerPrice}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '              </table>\n' +
    '              <br>\n' +
    '              <h3 ng-repeat="check in sun_reqqq" ng-if="!check.dinner" style="color:#88888c;">\n' +
    '                    There is no requirement for this day!!</h3>\n' +
    '              <div class="container" ng-repeat="check in sun_reqqq" ng-if="check.dinner">\n' +
    '                <div class="row">\n' +
    '                  <div class="col-md-12">\n' +
    '                    <div class="">\n' +
    '                      <div class="">\n' +
    '                        <form ng-submit="addNewSundayDinner()">\n' +
    '                          <table class="table">\n' +
    '                            <thead>\n' +
    '                              <tr>\n' +
    '                                <th></th>\n' +
    '                                <th>Menu</th>\n' +
    '                                <th>Cost</th>\n' +
    '                                <th>Quantity</th>\n' +
    '                              </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                              <tr ng-repeat="lunch_sunday in sundayMenuDinner">\n' +
    '                                <td>\n' +
    '                                  <span class="rmv"><a ng-click="deleteVendorMenu($index,lunch_sunday,type[3],daysss[6])"><i class="fas fa-trash" aria-hidden="true"></i></a></span>\n' +
    '                                </td>\n' +
    '                                <td>\n' +
    '                                  <input type="text" class="form-control" ng-model="lunch_sunday.dishName" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_sunday.dishCost" required/></td>\n' +
    '                                <td>\n' +
    '                                  <input type="number" class="form-control" ng-model="lunch_sunday.dishQuantity" required/></td>\n' +
    '                              </tr>\n' +
    '                            </tbody>\n' +
    '                          </table>\n' +
    '\n' +
    '                          <div class="form-group">\n' +
    '                            <button type="submit" ng-if="sundayMenuDinner.length>=1" class="btn btn-danger pull-right"><i class="fa fa-plus" aria-hidden="true"></i></button>\n' +
    '                            <input type="submit" ng-if="sundayMenuDinner.length<1" class="btn btn-mybtn" value="Add Menu" ng-click="saveMenu(mondayMenuDinner,type[3],daysss[6])">\n' +
    '                            <input type="submit" ng-if="sundayMenuDinner.length>=1" class="btn btn-mybtn" value="Update" ng-click="updateVendorMenu(mondayMenuDinner,type[3],daysss[6])">\n' +
    '                          </div>\n' +
    '                        </form>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '\n' +
    '          <!--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<             md-tabs       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->\n' +
    '          <!-- </md-tabs>\n' +
    '                  </md-content>\n' +
    '                </md-content>\n' +
    '              </md-tab> -->\n' +
    '          <!------------------------------------------ Dinner END ----------------------------------------------------------------  -->\n' +
    '        </md-tabs>\n' +
    '      </md-content>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->\n' +
    '\n' +
    '</div>\n' +
    '<!-- end -->\n' +
    '\n' +
    '<!-- Requirements start -->\n' +
    '<div class="company-dashboard" ng-if="requirementsBool">\n' +
    '  <div class="title-baar">\n' +
    '    <h5><a href="#!/dashboard"><i class="fa fa-home w-clr" aria-hidden="true"></i></a> <a class="w-clr" href="#!/dashboard"> home</a> <a class="w-clr">/</a> <a class="w-clr" href="">{{cmpyName | lowercase}}</a> <a class="w-clr">/</a>\n' +
    '           <a class="w-clr" href="">requirements</a></h5>\n' +
    '  </div><br><br>\n' +
    '\n' +
    '  <div class="container">\n' +
    '    <!-- Excel shit start-->\n' +
    '    <table class="table table-striped table-bordered">\n' +
    '      <thead>\n' +
    '        <tr>\n' +
    '          <th>Type</th>\n' +
    '          <th>Breakfast (no. of employee)</th>\n' +
    '          <th>Lunch (no. of employee)</th>\n' +
    '          <th>Snacks (no. of employee)</th>\n' +
    '          <th>Dinner (no. of employee)</th>\n' +
    '        </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '        <tr ng-repeat="reqObj in companyRequirements">\n' +
    '          <td>{{reqObj.dayName}}</td>\n' +
    '          <td>{{reqObj.breakfast}}</td>\n' +
    '          <td>{{reqObj.lunch}}</td>\n' +
    '          <td>{{reqObj.snacks}}</td>\n' +
    '          <td>{{reqObj.dinner}}</td>\n' +
    '        </tr>\n' +
    '      </tbody>\n' +
    '    </table>\n' +
    '    <!-- Excel shit end-->\n' +
    '    <!-- Angular Material Design -->\n' +
    '    <div ng-cloak>\n' +
    '      <md-content ng-if="false">\n' +
    '        <md-tabs md-dynamic-height md-border-bottom>\n' +
    '          <md-tab ng-repeat="reqObj in companyRequirements" label="{{reqObj.dayName}}">\n' +
    '            <md-content class="md-padding">\n' +
    '              <table class="table" style="margin-top:25px;">\n' +
    '                <tr>\n' +
    '                  <th>Day</th>\n' +
    '                  <th>Number of Person</th>\n' +
    '                  <th>Price/Person</th>\n' +
    '                  <th></th>\n' +
    '                </tr>\n' +
    '                <tr>\n' +
    '                  <td>Breakfast</td>\n' +
    '                  <td>{{reqObj.breakfast}}</td>\n' +
    '                  <td>{{reqObj.breakfastPrice}}</td>\n' +
    '                </tr>\n' +
    '                <tr>\n' +
    '                  <td>Lunch</td>\n' +
    '                  <td>{{reqObj.lunch}}</td>\n' +
    '                  <td>{{reqObj.lunchPrice}}</td>\n' +
    '                </tr>\n' +
    '                <tr>\n' +
    '                  <td>Snacks</td>\n' +
    '                  <td>{{reqObj.snacks}}</td>\n' +
    '                  <td>{{reqObj.snacksPrice}}</td>\n' +
    '                </tr>\n' +
    '                <tr>\n' +
    '                  <td>Dinner</td>\n' +
    '                  <td>{{reqObj.dinner}}</td>\n' +
    '                  <td>{{reqObj.dinnerPrice}}</td>\n' +
    '                </tr>\n' +
    '\n' +
    '              </table>\n' +
    '            </md-content>\n' +
    '          </md-tab>\n' +
    '        </md-tabs>\n' +
    '      </md-content>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '\n' +
    '</div>\n' +
    '<!-- end -->\n' +
    '\n' +
    '<!-- CONTENT END -->\n' +
    '</section>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/vendor_dashboard/dashboard.tpl.html',
    '<header class="header clearfix" style="position:fixed">\n' +
    '  <button type="button" id="toggleMenu" class="toggle_menu">\n' +
    '      <i class="fa fa-bars"></i>\n' +
    '    </button>\n' +
    '  <div class="m-view">\n' +
    '    <h1 style="color:white;">\n' +
    '      <span class="span-logo"><a><img src="../image/fancymonklogo.png"/></a></span>Fancymonk</h1>\n' +
    '  </div>\n' +
    '  <div class="pull-right">\n' +
    '    <div class="dropdown notificationDropDown" data-ng-controller="DashboardController">\n' +
    '\n' +
    '      <div class="dropdown">\n' +
    '        <div class="dropbtn">\n' +
    '          <notification-icon update-animation="grow" count="">\n' +
    '            <img src="image/pp1.png" class="img-circle pp-image-header" width="40" height="" />\n' +
    '          </notification-icon>\n' +
    '        </div>\n' +
    '        <div class="dropdown-content">\n' +
    '\n' +
    '          <a href="" data-toggle="popover" data-trigger="hover" data-content="Some content"><i style="color:black;" class="fab fa-yelp"> </i> Help</a>\n' +
    '          <a ng-click="signOut()"><i style="color:#666666;" class="fas fa-sign-out-alt"> </i> Sign out</a>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</header>\n' +
    '\n' +
    '<nav class="vertical_nav">\n' +
    '  <ul id="js-menu" class="menu">\n' +
    '    <li>\n' +
    '      <div class="background-dp">\n' +
    '        <div class="background-dp-color">\n' +
    '          <div class="media-body">\n' +
    '            <span class="wrd-brk">\n' +
    '                      <h5 style="margin-top: -4px;">\n' +
    '                       <img src="../image/pp1.png" class="img-circle pp-image" width="38"/> {{userName | uppercase}}\n' +
    '                     </h5>\n' +
    '                      <h6 class="media-heading" style="color:white;">{{mail}}</h6>\n' +
    '                    </span>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </li><br>\n' +
    '    <li class="">\n' +
    '      <a href="" class="menu--link">\n' +
    '        <i class="menu--icon  fas fa-user"></i>\n' +
    '        <span class="menu--label">{{name}}</span>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li class="">\n' +
    '      <a href="" class="menu--link">\n' +
    '        <i class="menu--icon fas fa-phone-volume"></i>\n' +
    '        <span class="menu--label">{{mobile}}</span>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</nav>\n' +
    '\n' +
    '\n' +
    '<div class="wrapper" style="margin-top:50px;">\n' +
    '  <section>\n' +
    '    <!-- ___________________DASHBOARD_____________________ -->\n' +
    '    <div class="company-dashboard">\n' +
    '      <div class="title-baar">\n' +
    '        <h5><a href="#!/dashboard"><i class="fa fa-home w-clr" aria-hidden="true"></i></a> <a class="w-clr" href="">home</a>\n' +
    '        <!-- <h9><a href="" class="typewrite text-center" data-period="2000" data-type=\'[ "Welcome..", "We are happy to work with you.."]\'>\n' +
    '          <span class="wrap"></span>\n' +
    '        </a></h9> -->\n' +
    '      </h5></div><br>\n' +
    '      <ul class="nav">\n' +
    '        <form><br>\n' +
    '          <input type="text" ng-model="search1" class="searchNew" name="search" placeholder="Search...">\n' +
    '        </form>\n' +
    '\n' +
    '        <li ng-repeat="cpny in companies | filter:search1">\n' +
    '          <div class="col-sm-4 col-sm-4 col-md-4 col-lg-4">\n' +
    '            <md-content class="md-padding" layout-xs="column" layout="row">\n' +
    '              <div flex-xs flex-gt-xs="100" layout="column">\n' +
    '\n' +
    '                <md-card>\n' +
    '                  <a class="b-clr font" href="#/dashboard/company/{{cpny.id}}">\n' +
    '                    <div class="company-dp">\n' +
    '                      <img src="http://fancymonk.com:9124/companyImages/400/{{cpny.fileName}}" class="img-c-card" />\n' +
    '                    </div>\n' +
    '                    <div class="title-name">\n' +
    '                      <span class="c-card-name b-clr font">\n' +
    '                                <i class="fas fa-users"></i> {{cpny.companyName | uppercase}}\n' +
    '                                </span><br>\n' +
    '                      <h6 class="b-clr font"><span class="text-center"><i class="fas fa-map-marker-alt"></i></span> {{cpny.address}}</h6>\n' +
    '                    </div>\n' +
    '                  </a>\n' +
    '                </md-card>\n' +
    '\n' +
    '              </div>\n' +
    '            </md-content>\n' +
    '          </div>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '\n' +
    '  </section>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/vendor_login/login.tpl.html',
    '<div class="container login-con">\n' +
    '  <div class="row">\n' +
    '    <h3 style="color:white;"><span class="i-cls"><img src="../image/logo.png" class="img-login" width="50px;"/>Fancymonk</span></h3>\n' +
    '  </div>\n' +
    '  <div class="body-cls">\n' +
    '    <div class="row">\n' +
    '      <div class="col-sm-0 col-md-8 col-lg-8">\n' +
    '        <div class="cls-login part-a">\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="col-sm-12 col-md-4 col-lg-4 part-b">\n' +
    '\n' +
    '        <div class="form sign-in">\n' +
    '          <h6><img src="../image/new25.gif" width="60px;"/></h6>\n' +
    '          <h2><span class="i-cls">Welcome back,</span></h2>\n' +
    '          <form role="form" name="loginForm">\n' +
    '            <label class="label-vendor">\n' +
    '          <span class="text-center">Username / Email / Mobile</span>\n' +
    '          <input class="input-style input-chng" required ng-model="user.value" type="text" />\n' +
    '        </label>\n' +
    '            <label class="label-vendor">\n' +
    '          <span>Password</span>\n' +
    '          <input class="input-style input-chng" type="password" id="inputPassword" required ng-model="user.password" />\n' +
    '        </label>\n' +
    '            <p class="forgot-pass">Forgot password?</p>\n' +
    '            <button type="submit" class="submit" ng-click="login(user)">Sign In</button>\n' +
    '          </form>\n' +
    '          <button type="button" class="fb-btn">Wanna be our <span>partner ?</span></button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <h5 class="website">www.fancymonk.com</h5>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/vendor_signup/signup.tpl.html',
    '<div class="signup-body">\n' +
    '  <div class="signup">\n' +
    '      <form role="form" name="signupForm">\n' +
    '          <div class="form-group-login">\n' +
    '              <label for="label">Name</label>\n' +
    '              <br>\n' +
    '              <input type="text" placeholder="Enter name" name="name" class="form-control" required ng-model="user.name">\n' +
    '\n' +
    '              <br>\n' +
    '              <label for="label">Username</label>\n' +
    '              <br>\n' +
    '              <input type="text" placeholder="Enter username" name="username" style="color:black;" class="form-control" username-available required ng-model="user.username">\n' +
    '              <div ng-if="signupForm.$pending.usernameExists">checking....</div>\n' +
    '              <div ng-if="signupForm.$error.usernameExists">username exists already</div>\n' +
    '\n' +
    '              <br>\n' +
    '              <label for="label">Email</label>\n' +
    '              <br>\n' +
    '              <input type="email" name="email" email-available placeholder="Enter email address" style="color:black;" class="form-control" required ng-model="user.email">\n' +
    '              <div ng-if="signupForm.$pending.emailExists">checking....</div>\n' +
    '              <div ng-if="signupForm.$error.emailExists">email already registered</div>\n' +
    '              <span class="error" ng-if="signupForm.$error.email">Not valid email!</span>\n' +
    '\n' +
    '              <br>\n' +
    '              <label for="label">Mobile Number</label>\n' +
    '              <br>\n' +
    '              <input type="number" name="mobile" placeholder="Enter mobile number" mobilenumber-available ng-minlength="10" style="color:black;" ng-maxlength="10" class="form-control" required ng-model="user.mobile">\n' +
    '              <div ng-if="signupForm.$pending.mobilenumberExists">checking....</div>\n' +
    '              <div ng-if="signupForm.$error.mobilenumberExists">number already registered</div>\n' +
    '              <span class="error" ng-if="(signupForm.mobile.$error.minlength || signupForm.mobile.$error.maxlength)">Not valid Mobile number!</span>\n' +
    '\n' +
    '              <br>\n' +
    '              <label for="label">Password</label>\n' +
    '              <br>\n' +
    '              <input type="password" name="password" style="color:black;" placeholder="password" id="password1" ng-minlength="5" ng-pattern="" class="form-control" required ng-model="user.password">\n' +
    '              <span class="error" ng-if="(signupForm.password.$error.minlength)">Password length should be at least 5 characters </span>\n' +
    '\n' +
    '              <br>\n' +
    '\n' +
    '              <label for="label">Retype Password</label>\n' +
    '              <br>\n' +
    '              <input type="password" placeholder="password" id="password2" style="color:black;" class="form-control" pw-check="user.password" required ng-model="user.retypepassword">\n' +
    '              <div ng-if="signupForm.$error.pwmatch">Passwords don\'t match</div>\n' +
    '              <br>\n' +
    '          </div>\n' +
    '          <button class="btn btn-default submit-button" type="submit" ng-click="signup(user)">Submit</button>\n' +
    '      </form>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
