vmApp.controller('DashboardController',['$scope','$location','$cookies','$rootScope','$http','Notification','getAllCompanyUrl','getVendorProfileUrl','$route',
'getAllCompanyToVendorUrl','$httpParamSerializerJQLike',
function($scope,$location,$cookies,$rootScope,$http,Notification,getAllCompanyUrl,
  getVendorProfileUrl,$route,getAllCompanyToVendorUrl,$httpParamSerializerJQLike) {
// Pubnub
// Pubnub.init({
//     publishKey: 'pub-c-41191e23-fd27-47c6-bf01-770b9d1e6cb9',
//     subscribeKey: 'sub-c-15b3a7ac-2db7-11e8-9288-daa582a09445'
// });

// Pubnub.publish(
//     {
//         message: {
//             such: 'Hello!'
//         },
//         channel: 'myChannel'
//     },
//     function (status, response) {
//         if (status.error) {
//             console.log(status)
//         } else {
//             console.log("message Published w/ timetoken", response.timetoken)
//         }
//     }
// );
// $scope.s cores = $pubnubChannel('myChannel')
console.log("$scope.scores",$scope.scores);

//  end
	$scope.signOut = function(){
		//console.log("Yo i am gonna signOut");
		$cookies.remove('id');
		$cookies.remove('token');
		$cookies.remove('username');
		$cookies.remove('email');
		// $rootScope.barBool = false;
		$rootScope.dashboardSingOutBool=false;
		$rootScope.footerBool=false;
		$rootScope.vId = false;
		// $rootScope.notifBool = false;
		$location.path('/vendor');
	}

	$rootScope.vId = $cookies.get('id');
	$scope.userName=$cookies.get('username');
	$scope.mail=$cookies.get('email');


	if($cookies.get('username') == null)
	{
		// console.log("before Notification");
		Notification.warning("Login required!!!");
		$rootScope.dashboardSingOutBool=false;
		$rootScope.footerBool=false;

		$location.path('/login');
		$route.reload();
	}
	else
	 {
    var authUserId=$cookies.get('authUserId');
		$scope.name=$cookies.get('name');
		$scope.mobile=$cookies.get('mobile');

		// tongal baar script start
		"use strict";var tid=setInterval(function(){if("complete"===document.readyState){clearInterval(tid);var a=document.querySelector.bind(document),b=document.querySelector(".vertical_nav"),c=document.querySelector(".wrapper"),d=document.getElementById("js-menu"),e=d.querySelectorAll(".menu--item__has_sub_menu");a(".toggle_menu").onclick=function(){b.classList.toggle("vertical_nav__opened"),c.classList.toggle("toggle-content")},a(".collapse_menu").onclick=function(){b.classList.toggle("vertical_nav__minify"),c.classList.toggle("wrapper__minify");for(var a=0;a<e.length;a++)e[a].classList.remove("menu--subitens__opened")};for(var f=0;f<e.length;f++)e[f].classList.contains("menu--item__has_sub_menu")&&e[f].querySelector(".menu--link").addEventListener("click",function(a){for(var b=0;b<e.length;b++)a.target.offsetParent!=e[b]&&e[b].classList.remove("menu--subitens__opened");a.target.offsetParent.classList.toggle("menu--subitens__opened")},!1)}},100);
		// tongal baar script end

// typwritter animation start
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
		// animation end


		//console.log("username : " ,$cookies.get('username'));
		$scope.username = $cookies.get('username');
		var vendorId = $cookies.get('id');
		// console.log("-------->>>>>>>>>",vendorId);
		// $rootScope.barBool = true;
		// $rootScope.dashboardSingOutBool=true;
		$rootScope.footerBool=true;

    // console.log("---->",$rootScope.allCompanies)

		var getCompanies = getAllCompanyToVendorUrl+vendorId;
		// $http.get(getCompanies).then(function(response) {
		//       $scope.companies = response.data.data.companies;
		// });

    $http({
        method: 'GET',
        url: getCompanies,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'type': 'vendor',
            'scm': 'fancymonk',
            'Authorization': "Bearer "+authUserId,
        },
    }).then(function(response){
      console.log("response 101",response);
      $scope.companies = response.data.data.companies;
    });


			// $http.get(getAllCompanyUrl).then(function(response)
			// 		{
			// 			$rootScope.allCompanies = [];
			// 			// console.log('length:',response.data.data.companies.length);
			// 			for(var i=0; i<response.data.data.companies.length; i++)
			// 			{
			// 				// console.log("in for loop",response.data.data.companies[i]);
			// 				if(response.data.data.companies[i].vendorId==vendorId)
			// 				{
			// 					// console.log("push company",response.data.data.companies[i]);
			// 					$scope.allCompanies.push(response.data.data.companies[i]);
			// 						$rootScope.lat=response.data.data.companies[i].lat;
			// 						// console.log("in dashboard controller",$rootScope.lat);
			// 				}
			// 			}
			// 		});
	}

}]);
