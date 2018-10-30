(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/home/home.tpl.html',
    '<header class="header clearfix" style="position:fixed">\n' +
    '  <button type="button" id="toggleMenu" class="toggle_menu">\n' +
    '        <i class="fa fa-bars"></i>\n' +
    '    </button>\n' +
    '\n' +
    '  <div class="m-view">\n' +
    '    <h1 style="color:white;">\n' +
    '            <span class="span-logo"><a><img src="../image/fancymonklogo.png"/></a></span>Fancymonk</h1>\n' +
    '  </div>\n' +
    '\n' +
    '  <!-- <div class="fa-4x">\n' +
    '        <span class="fa-layers fa-fw" style="background:MistyRose">\n' +
    '          <i class="fas fa-envelope"></i>\n' +
    '          <span class="fa-layers-counter" style="background:Tomato">1,419</span>\n' +
    '        </span>\n' +
    '      </div> -->\n' +
    '  <div class="pull-right">\n' +
    '    <!-- <a><i class="far fa-bell w-c"></i></a>-->\n' +
    '    <a><i class="far fa-bell w-c"></i></a>\n' +
    '    <div class="dropdown notificationDropDown">\n' +
    '      <div class="dropdown">\n' +
    '        <div class="dropbtn">\n' +
    '          <notification-icon update-animation="grow" count="">\n' +
    '            <img src="../image/pp1.png" class="img-circle pp-image-header" width="40" />\n' +
    '                    </notification-icon>\n' +
    '        </div>\n' +
    '        <div class="dropdown-content">\n' +
    '          <a href=""><i style="color:black;" class="fab fa-yelp"> </i> Help</a>\n' +
    '          <a href=""><i style="color:black;" class="fas fa-cog"> </i> Setting</a>\n' +
    '          <a ng-click="signOutAdmin()"><i style="color:black;" class="fas fa-sign-out-alt"> </i> Sign out</a>\n' +
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
    '            <h5 style="margin-top: -2px;">\n' +
    '                            <img src="../image/pp1.png" class="img-circle pp-image" width="38"/>\n' +
    '                            Admin</h5>\n' +
    '            <h6 class="media-heading" style="color:white;">aman@fancymonk.com</h6>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </li><br>\n' +
    '    </ul>\n' +
    '</nav>\n' +
    '\n' +
    '<div class="wrapper" style="margin-top:50px;">\n' +
    '  <section>\n' +
    '    <!-- CONTENT -->\n' +
    '    <!-- ___________________DASHBOARD_____________________ -->\n' +
    '    <div class="outOfTime" ng-if="!timeOfDay">\n' +
    '      <p>Sorry, Booking for tomorrow is closed now</p>\n' +
    '\n' +
    '    </div>\n' +
    '    <div class="employee-list" ng-if="timeOfDay">\n' +
    '      <ul class="nav">\n' +
    '        <div class="employee-coming">\n' +
    '          <div layout="column" ng-cloak>\n' +
    '            <md-content class="md-padding">\n' +
    '              <form ng-submit="$event.preventDefault()">\n' +
    '                <md-autocomplete\n' +
    '                  md-selected-item="selectedItem"\n' +
    '                  md-search-text-change="searchTextChange(searchText)"\n' +
    '                  md-search-text="searchText"\n' +
    '                  md-selected-item-change="selectedItemChange(item)"\n' +
    '                  md-items="item in querySearch(searchText)"\n' +
    '                  md-item-text="item.display"\n' +
    '                  md-min-length="0"\n' +
    '                  placeholder="Please tell us your name">\n' +
    '                  <md-item-template>\n' +
    '                    <span md-highlight-text="searchText" md-highlight-flags="^i">{{item.display}}</span>\n' +
    '                  </md-item-template>\n' +
    '                  <md-not-found>\n' +
    '                    No states matching "{{searchText}}" were found.\n' +
    '                    <a ng-click="newState(searchText)">Create a new one!</a>\n' +
    '                  </md-not-found>\n' +
    '                </md-autocomplete>\n' +
    '              </form>\n' +
    '            </md-content>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <md-switch ng-model="comingDecision" aria-label="Switch 2" ng-true-value="\'Yes\'"\n' +
    '        ng-false-value="\'Nope\'" class="md-warn" ng-disabled="!selectedItem">\n' +
    '          Are you coming tomorrow? : {{ comingDecision }}\n' +
    '        </md-switch>\n' +
    '\n' +
    '        <md-button class="md-raised md-primary" ng-disabled="!selectedItem"\n' +
    '          ng-click="addTolist(comingDecision)">Primary</md-button>\n' +
    '\n' +
    '\n' +
    '\n' +
    '          <div class="list" >\n' +
    '            <!-- <div class="feedback-data-item"> -->\n' +
    '                 <div id="feedback">\n' +
    '                   <table class="table">\n' +
    '                     <thead>\n' +
    '                       <tr>\n' +
    '                         <th>Name</th>\n' +
    '                         <th>Date</th>\n' +
    '                         <th>Status</th>\n' +
    '                       </tr>\n' +
    '                     </thead>\n' +
    '                     <tbody>\n' +
    '                       <tr ng-repeat="e in employeeComingList ">\n' +
    '                         <td>{{e.display}}</td>\n' +
    '                         <td>{{tomorrowDate}}</td>\n' +
    '                         <td>{{e.decision}}</td>\n' +
    '                       </tr>\n' +
    '                     </tbody>\n' +
    '                     <tfoot>\n' +
    '                        <td colspan="116">\n' +
    '                         <div class="pagination">\n' +
    '                           <ul>\n' +
    '                             <li ng-class="prevPageDisabled()">\n' +
    '                               <a href ng-click="prevPage()">« Prev</a>\n' +
    '                             </li>\n' +
    '                             <li ng-repeat="n in range()" ng-class="{active: n == currentPage}" ng-click="setPage(n)">\n' +
    '                               <a>{{n+1}}</a>\n' +
    '                             </li>\n' +
    '                             <li ng-class="nextPageDisabled()">\n' +
    '                               <a href ng-click="nextPage()">Next »</a>\n' +
    '                             </li>\n' +
    '                           </ul>\n' +
    '                         </div>\n' +
    '                       </td>\n' +
    '                   </table>\n' +
    '                  </div>\n' +
    '               </div>\n' +
    '        <!-- <div class="row">\n' +
    '                    <li ng-repeat="cpny in allCompanies | filter:search1">\n' +
    '\n' +
    '                        <div class="col-sm-4 col-sm-4 col-md-4 col-lg-4">\n' +
    '                            <md-content class="md-padding" layout-xs="column" layout="row">\n' +
    '                                <div flex-xs flex-gt-xs="100" layout="column">\n' +
    '\n' +
    '                                    <md-card>\n' +
    '                                        <a class="b-clr font" href="#/admin/company/{{cpny.id}}">\n' +
    '                                            <div class="company-dp">\n' +
    '                                                <img src="http://fancymonk.com:9124/companyImages/400/{{cpny.fileName}}" class="img-c-card" />\n' +
    '                                            </div>\n' +
    '                                            <div class="title-name">\n' +
    '                        <span class="c-card-name b-clr font">\n' +
    '                  <i class="fa fa-briefcase" aria-hidden="true"></i> {{cpny.companyName | uppercase}}\n' +
    '                  </span><br>\n' +
    '                                                <h6 class="b-clr font"><span class="text-center b-clr font"><i class="fas fa-map-marker-alt"></i></span> {{cpny.address}}</h6>\n' +
    '                                            </div>\n' +
    '                                        </a>\n' +
    '                                    </md-card>\n' +
    '                                </div>\n' +
    '                            </md-content>\n' +
    '                        </div>\n' +
    '                    <li>\n' +
    '                </div> -->\n' +
    '      </ul>\n' +
    '\n' +
    '    </div>\n' +
    '  </section>\n' +
    '</div>\n' +
    '');
}]);
})();
