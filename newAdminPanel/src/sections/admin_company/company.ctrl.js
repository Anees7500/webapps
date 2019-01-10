adminApp.controller('CompanyController', ['$scope', '$http', 'vendorassignService', 'postCategoryUrl', '$routeParams',
  'corporateReviewsUrl', 'getCompanyProfileUrl',
  function($scope, $http ,vendorassignService, postCategoryUrl, $routeParams, corporateReviewsUrl,
   getCompanyProfileUrl
   ) {



  	 // bool Logic start
     $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.ConfigurationBool = false;
      $scope.RequirementBool=false;
      $scope.ItemCheckBool=false;
      $scope.AssignedBool=false;
      $scope.SetPasswordBool=false;
      $scope.EmpFeedbackBool=false;
      $scope.MonthlyDetailsBool=false;
      $scope.VendorMonthlyDetailsBool=false;
      $scope.DispatchDetailsBool=false;

      
      $scope[value] = true;
    }

    $scope.boolFunction("ConfigurationBool");
    $scope.data = {};
    $scope.category = function (data) {
      $scope.data.companyId = $routeParams.compId;
      console.log("Task Active Field", $scope.data.companyId);
      vendorassignService.activeCategory(data, postCategoryUrl);
    }
     // ================ feedback ====================
    var getFeedbackUrl = corporateReviewsUrl + $routeParams.compId;
    $http.get(getFeedbackUrl).then(function (response) {
      $scope.feedback = response.data.data.reviews;
    });

    // ==================== getCompProfileUrl==============

    var getCompProfileUrl = getCompanyProfileUrl + $routeParams.compId;
      $http.get(getCompProfileUrl).then(function (response) {
        $scope.cmpyName = response.data.data.company.companyName;
        $scope.data = response.data.data.company;
      });

    $scope.demo = {
      showTooltip: false,
      tipDirection: 'bottom'
    };

    $scope.demo.delayTooltip = undefined;
    $scope.$watch('demo.delayTooltip', function(val) {
      $scope.demo.delayTooltip = parseInt(val, 10) || 0;
    });
// ==================== Save password for app==============
    $scope.saveCheckListIndb = function () {
        var tempOb = {};
        tempOb.companyId = $routeParams.compId;
        tempOb.vendorId = -1;
        var jj = {};
        jj.items = $scope.itemCheckList;
        tempOb.data = JSON.stringify(jj);
        vendorassignService.saveCheckListIndb(tempOb);
      }

    // ==================== Working days==============  

$scope.WorkingDays = [ {  day: "MONDAY", Selected: false },
                       {  day: "TUESDAY", Selected: false },
                       {  day: "WEDNESDAY", Selected: false },
                       {  day: "THURSDAY", Selected: false },
                       {  day: "FRIDAY", Selected: false },
                       {  day: "SATURDAY", Selected: false },
                       {  day: "SUNDAY", Selected: false }
    ];
      
            $scope.toggleSelect = function(){
    angular.forEach($scope.WorkingDays, function(item){
      item.selected = event.target.checked;
    });
  };
 
   



      //dropdown selection
     $scope.Starting_date=['1','2','3','4','5','6','7','8','9','10'];
     $scope.Mid_of_date=['11','12','13','14','15','16','17','18','19','20'];
     $scope.End_of_date=['21','22','23','24','25','26','27','28','29','30'];
      
      //Assigned
      $scope.vendor_list=['Fancy Vendor','Yummy Tummy','Naveen Caters','GMR','Rang De Basanti','Buffet Lo',
      'Farooq','Raj Mahal','Savitha','Shine','Pintu','Gpfood','Priya Panjabi','Rolling Tummy','Adda','Vhs catering'
      ,'Estern_Delight','Food Planet','Pal Caterers','Golden Star Service'];
      
    }
    ]);