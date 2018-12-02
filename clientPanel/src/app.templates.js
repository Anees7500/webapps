(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/clientDashboard/dashboard.tpl.html',
    '<!---Header part-->\n' +
    '<div class="header clearfix" style="position:fixed">\n' +
    '  <div class="">\n' +
    '    <div class="row">\n' +
    '      <div class="col-md-2  ">\n' +
    '        <img class="logo-image1 " src="../../image/fancymonklogo.png" />\n' +
    '     <p> Fancymonk </p>\n' +
    '      </div>\n' +
    '      <div class="col-md-8"></div>\n' +
    '      <div class="col-md-2 ">\n' +
    '        <div class="dropdown pull-right">\n' +
    '          <b class="fa fa-align-justify "></b>\n' +
    '          <div class="dropdown-content">\n' +
    '            <a href="#" class="fa fa-question-circle"><i class="dropdown-text">Help</i></a>\n' +
    '            <a ng-click="logout()" class="fa fa-sign-out"><i class="dropdown-text">Log Out</i></a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<!---Header End-->\n' +
    '\n' +
    '<div class="main_page" layout="column" ng-cloak>\n' +
    '  <section layout="row" flex>\n' +
    '    <md-sidenav class="md-sidenav-left"  md-component-id="left" md-is-locked-open="$mdMedia(\'gt-md\')">\n' +
    '    <div class="background-dp">\n' +
    '      <div class="background-dp-color ">\n' +
    '       <img class ="image" src="../../image/pp1.png"/>\n' +
    '       <h6>{{companyDetails.companyName}}</p></h6><br><br><br><br>\n' +
    '       <div class="vertical-menu">\n' +
    '        <a class="text" ng-click="enableBooleans(\'categoryBool\')"><i class="fa fa-sitemap"> </i>\n' +
    '          <span class="part">Category</span></a></br>\n' +
    '          <a class="text" ng-click="enableBooleans(\'requirementBool\')"><i class="fa fa-reorder " ></i>\n' +
    '            <span class="part" >Requirements</span></a></br>\n' +
    '            <a class="text" ng-click="enableBooleans(\'feedbackBool\')"><i class="fa fa-street-view" ></i>\n' +
    '              <span class="part" >Employees Feedback</span></a></br>\n' +
    '              <a class="text" ng-click="enableBooleans(\'manageEmployee\')"><i class="fa fa-group" ></i>\n' +
    '                <span class="part" >Manage employee </span></a></br>\n' +
    '                <a class="text" ng-click="enableBooleans(\'employeeCount\')"><i class="fa fa-cubes" ></i>\n' +
    '                  <span class="part" >Employee count</span></a></br>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </md-sidenav>\n' +
    '\n' +
    '          <div class="list-data" ng-if="categoryBool">\n' +
    '           <ul class="list-data-item">\n' +
    '             <li class="list-data-item-a"><b class="catagory"><md-checkbox  disabled="disabled" ng-model="companyDetail.breakfast" aria-label="Finished?" >Breackfast\n' +
    '             </md-checkbox></b></li>\n' +
    '             <li class="list-data-item-a"><b class="catagory"><md-checkbox disabled="disabled"  ng-model="companyDetail.lunch" aria-label="Finished?">Lunch\n' +
    '             </md-checkbox></b></li>\n' +
    '             <li class="list-data-item-a"><b class="catagory"><md-checkbox disabled="disabled" ng-model="companyDetail.snacks" aria-label="Finished?">snacks\n' +
    '             </md-checkbox></b></li>\n' +
    '             <li class="list-data-item-a"><b class="catagory"><md-checkbox disabled="disabled" ng-model="companyDetail.dinner" aria-label="Finished?">Dinner\n' +
    '             </md-checkbox></b></li>\n' +
    '             <li class="list-data-item-a"><b class="catagory"><md-checkbox disabled="disabled" ng-model="companyDetail.midNightSnacks" aria-label="Finished?">Mid night snacks\n' +
    '             </md-checkbox></b></li>\n' +
    '             <li class="list-data-item-a"><b class="catagory"><md-checkbox disabled="disabled" ng-model="companyDetail.earlyMorningSnacks" aria-label="Finished?">Early Morning snacks\n' +
    '             </md-checkbox></b></li>\n' +
    '             <li class="list-data-item-a"><b class="catagory"><md-checkbox disabled="disabled" ng-model="companyDetail.cashNCarry" aria-label="Finished?">Cash & carry\n' +
    '             </md-checkbox></b></li>\n' +
    '           </ul>\n' +
    '         </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '<!-- =====================  Requirement ===================== -->\n' +
    '<div class="Requirements-data-item" ng-if="requirementBool">\n' +
    '  <div>\n' +
    '    <div class="col-md-12">\n' +
    '      <div class="col-sm-3">\n' +
    '        <div class="wrapper"></br>\n' +
    '          <div class="col-md-12 " ng-repeat="m in Data">\n' +
    '            <table id="client">\n' +
    '              <tr>\n' +
    '                <td><b class="fa fa-calendar">Calender</td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <th>Days</th>\n' +
    '              </tr>\n' +
    '              <tr ng-repeat="m in Days">\n' +
    '                <td>{{m}}</td>\n' +
    '              </tr>\n' +
    '            </table></br></br>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="col-lg-9 ">\n' +
    '        <div class="col-md-12 ">\n' +
    '          <div class="col-sm-4" ng-repeat="(key, value) in companyRequirements"></br>\n' +
    '            <table id="client">\n' +
    '              <tr>\n' +
    '                <td><b class="fa fa-cutlery"></b></td>\n' +
    '                <td>{{key}}</td>\n' +
    '              </tr>\n' +
    '              <tr>\n' +
    '                <th><b class="fa fa-user-circle-o">Person</b></th>\n' +
    '                <th><b class="fa fa-rupee">Price</b></th>\n' +
    '              </tr>\n' +
    '              <tr ng-repeat="v in value">\n' +
    '                <td>{{v.count}}</td>\n' +
    '                <td>{{v.price}}</td>\n' +
    '              </tr>\n' +
    '            </table></br>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '  <!--   ==================== MAHAGE EMPLOYEE ==================== -->\n' +
    '\n' +
    ' <div class="manageEmployee-list"  ng-if="manageEmployee">\n' +
    '      <div class="manage-employee">\n' +
    '        <div class="form">\n' +
    '        <form  ng-submit="addNewEmployeeData()" >\n' +
    '          <md-input-container>\n' +
    '          <label ><b class="text12">Employee Id</b></label>\n' +
    '          <input class="text13" type="text" placeholder="Enter Employee Id" ng-model="item.employeeId" required />\n' +
    '        </md-input-container>\n' +
    '         <md-input-container>\n' +
    '          <label ><b class="text12">Firstname</b></label>\n' +
    '          <input type="text" placeholder="Enter Firstname"  ng-model="item.firstName" required />\n' +
    '        </md-input-container></br>\n' +
    '        <md-input-container>\n' +
    '          <label ><b class="text12">Lastname</b></label>\n' +
    '          <input type="text" placeholder="Enter Lastname"  ng-model="item.lastName" required />\n' +
    '        </md-input-container>\n' +
    '        <md-input-container>\n' +
    '          <label ><b class="text12">Moblie number</b></label>\n' +
    '          <input type="tel" id="phone" placeholder="Enter mobile number" name="phone" ng-model="item.mobile"required/>\n' +
    '        </md-input-container>\n' +
    '        </br>\n' +
    '        <md-button class="md-raised md-warn"   ng-click="addEmpDtls(item)"  ng-disabled="!(!!item.employeeId && !!item.firstName && !!item.lastName && !!item.mobile)">Add Employee</md-button>\n' +
    '      </form>\n' +
    '    </div></div>\n' +
    '      <div class="list" >\n' +
    '       <table class="table">\n' +
    '         <thead>\n' +
    '           <tr>\n' +
    '            <th>Employee Id</th>\n' +
    '            <th>First Name</th>\n' +
    '            <th>Last Name</th>\n' +
    '            <th>Mobile Number</th>\n' +
    '\n' +
    '          </tr>\n' +
    '        </thead>\n' +
    '        <tbody>\n' +
    '         <tr ng-repeat="e in employeeList ">\n' +
    '          <td>{{e.employeeId}}</td>\n' +
    '          <td>{{e.firstName}}</td>\n' +
    '          <td>{{e.lastName}}</td>\n' +
    '          <td>{{e.mobile}}</td>\n' +
    '          <td>\n' +
    '            <i class="fa fa-trash" ng-click=""></i>\n' +
    '          </td>\n' +
    '        </tr>\n' +
    '      </tbody>\n' +
    '      <tfoot>\n' +
    '        <td colspan="50">\n' +
    '         <div class="pagination">\n' +
    '           <ul>\n' +
    '             <li ng-class="prevPageDisabled()">\n' +
    '               <a href ng-click="prevPage()">« Prev</a>\n' +
    '             </li>\n' +
    '             <li ng-repeat="n in range()" ng-class="{active: n == currentPage}" ng-click="setPage(n)">\n' +
    '               <a>{{n+1}}</a>\n' +
    '             </li>\n' +
    '             <li ng-class="nextPageDisabled()">\n' +
    '               <a href ng-click="nextPage()">Next »</a>\n' +
    '             </li>\n' +
    '           </ul>\n' +
    '         </div>\n' +
    '       </td>\n' +
    '     </table>\n' +
    '   </div></div>\n' +
    '<!-- ================================= FEEDBACK LIST =========================== -->\n' +
    '\n' +
    '     <div class="feedback-list"  ng-if="feedbackBool">\n' +
    '       <!-- <div class="feedback-data-item"> -->\n' +
    '            <div id="feedback">\n' +
    '              <table class="table">\n' +
    '                <thead>\n' +
    '                  <tr>\n' +
    '                    <th>Name</th>\n' +
    '                    <th>Overall Rating</th>\n' +
    '                    <th>Presentation Rating</th>\n' +
    '                    <th>Quality Rating</th>\n' +
    '                    <th>Quantity Rating</th>\n' +
    '                    <th>Taste Rating</th>\n' +
    '                    <th>Contact</th>\n' +
    '                    <th>Comment</th>\n' +
    '                    <th>Date & Time</th>\n' +
    '                  </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                  <tr ng-repeat="f in pagedItems ">\n' +
    '                    <td>{{f.reviewerName}}</td>\n' +
    '                    <td>{{f.presentationRating}}</td>\n' +
    '                    <td>{{f.qualityRating}}</td>\n' +
    '                    <td>{{f.tasteRating}}</td>\n' +
    '                    <td>{{f.quantityRating}}</td>\n' +
    '                    <td>{{f.overAllRating}}</td>\n' +
    '                     <td>{{f.mobile}}</td>\n' +
    '                   <td>\n' +
    '                <div>\n' +
    '                  <span class="badge badge-notify" ng-if="f.comment.length > 0">1</span>\n' +
    '                  <div ng-if="f.comment.length > 0">\n' +
    '                    <md-tooltip  ng-bind="f.comment" md-visible="showTooltip">{{f.comment}}</md-tooltip>\n' +
    '                    <span class="fa fa-comments-o" style="font-size:17px"></span>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '                    <td>{{f.createdAt}}</td>\n' +
    '                  </tr>\n' +
    '                </tbody>\n' +
    '                <tfoot>\n' +
    '                   <td colspan="116">\n' +
    '                    <div class="pagination">\n' +
    '                      <ul>\n' +
    '                        <li ng-class="prevPageDisabled()">\n' +
    '                          <a href ng-click="prevPage()">« Prev</a>\n' +
    '                        </li>\n' +
    '                        <li ng-repeat="n in range()" ng-class="{active: n == currentPage}" ng-click="setPage(n)">\n' +
    '                          <a>{{n+1}}</a>\n' +
    '                        </li>\n' +
    '                        <li ng-class="nextPageDisabled()">\n' +
    '                          <a href ng-click="nextPage()">Next »</a>\n' +
    '                        </li>\n' +
    '                      </ul>\n' +
    '                    </div>\n' +
    '                  </td>\n' +
    '              </table>\n' +
    '             </div>\n' +
    '          </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '<!-- ======================= employeeCount ==================================== -->\n' +
    '<div class="employeeCount"  ng-if="employeeCount">\n' +
    '  <div class="list2">\n' +
    '   <div ng-repeat="list in dateList ">\n' +
    '     <div class ="employee-list"> {{list.Date}}  <i type="button"  ng-click="ShowHide(list,dateList)" >Count {{list.Count}} <a class="fa fa-caret-down"></a></i></div>\n' +
    '     <div ng-show = "list.isVisible">\n' +
    '      <div class="list2" >\n' +
    '       <table class="table">\n' +
    '         <thead>\n' +
    '           <tr>\n' +
    '            <th>Employee Id</th>\n' +
    '            <th>First Name</th>\n' +
    '            <th>Last Name</th>\n' +
    '            <th>Mobile Number</th>\n' +
    '          </tr>\n' +
    '        </thead>\n' +
    '        <tbody>\n' +
    '         <tr ng-repeat="e in list.employeeComingList">\n' +
    '          <td>{{e.employeeId}}</td>\n' +
    '          <td>{{e.firstName}}</td>\n' +
    '          <td>{{e.lastName}}</td>\n' +
    '          <td>{{e.mobile}}</td>\n' +
    '        </tr>\n' +
    '      </tbody>\n' +
    '      <tfoot>\n' +
    '        <td colspan="116">\n' +
    '         <div class="pagination">\n' +
    '           <ul>\n' +
    '             <li ng-class="prevPageDisabled()">\n' +
    '               <a href ng-click="prevPage()">« Prev</a>\n' +
    '             </li>\n' +
    '             <li ng-repeat="n in range()" ng-class="{active: n == currentPage}" ng-click="setPage(n)">\n' +
    '               <a>{{n+1}}</a>\n' +
    '             </li>\n' +
    '             <li ng-class="nextPageDisabled()">\n' +
    '               <a href ng-click="nextPage()">Next »</a>\n' +
    '             </li>\n' +
    '           </ul>\n' +
    '         </div>\n' +
    '       </td>\n' +
    '     </table>\n' +
    '   </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '</div>\n' +
    '</div>\n' +
    '</section>\n' +
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
  $templateCache.put('sections/clientLogin/login.tpl.html',
    '<div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="header-part1">\n' +
    '                <h3 align="center" style="color:white;">\n' +
    '                    <span class="i-cls"></span><img src="../image/logo.png" class="img-login" width="50px;"/>Fancymonk</span>\n' +
    '                </h3>\n' +
    '            </div>\n' +
    '            <div class="login-part1">\n' +
    '                <div class="col-md-4 col-sm-12 col-xs-12 ">\n' +
    '                    <div class="col-md-12 ">\n' +
    '                        <h1 class="text-center">Login</h1>\n' +
    '                    </div>\n' +
    '                    <div class="col-md-12 ">\n' +
    '                        <form class="login-form" action="">\n' +
    '                            <label for=""><span ng-show="user.companyName.$touched && user.companyName.$error.required">First name is required.</span></label>\n' +
    '                            <input class="input-part" type="text" name="" id="" required ng-model="user.companyName" placeholder="username" class="email">\n' +
    '                            \n' +
    '                            <label for=""></label>\n' +
    '                            <input class="input-part" type="password" name="" id="" required ng-model="user.password" placeholder="password" class="pass">\n' +
    '                            <br><br>\n' +
    '                        <!-- <div class="col-md-6">\n' +
    '                            <a href="#" data-target="#pwdModal" data-toggle="modal">\n' +
    '                                <p class="text-right Forget">Forget Password</p>\n' +
    '                            </a>\n' +
    '                        </div> -->\n' +
    '                          <button class="submit-button" ng-click="login(user)" type="submit">Sign IN</button>\n' +
    '                        </form>\n' +
    '                        <!-- <p class="text-center">Not a member yet? <a href="">Sign Up</a></p> -->\n' +
    '\n' +
    '                        <h4 align="center"><a class="www" href="http://fancymonk.com/"><p>www.fancymonk.com</p></a></h4>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-8 ">\n' +
    '                    <img class="food-logo" src="image/new4.gif">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            \n' +
    '        </div>\n' +
    '</div>\n' +
    '\n' +
    '  \n' +
    '');
}]);
})();
