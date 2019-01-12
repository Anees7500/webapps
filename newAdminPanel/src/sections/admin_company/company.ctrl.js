adminApp.controller('CompanyController', ['$scope', '$http', 'vendorassignService', 'postCategoryUrl', '$routeParams',
  'corporateReviewsUrl', 'getCompanyProfileUrl', 'getAllVendorListUrl',
  function($scope, $http ,vendorassignService, postCategoryUrl, $routeParams, corporateReviewsUrl,
   getCompanyProfileUrl, getAllVendorListUrl
   ) {



  	 // bool Logic start
     $scope.boolFunction = function (value) {
      console.log("boolFunction", value);
      $scope.ConfigurationBool = false;
      $scope.ClientRequirementBool=false;
      $scope.VendorRequirementBool=false;
      $scope.ItemCheckBool=false;
      $scope.AssignedBool=false;
      $scope.SetPasswordBool=false;
      $scope.EmpFeedbackBool=false;
      $scope.ClientMonthlyDetails=false; 
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
      // ==================== All Vender list==============

   $http.get(getAllVendorListUrl).then(function (response) {
        // console.log("response.data 555", response.data.data.vendors);
        $scope.allVendorsList = response.data.data.vendors;
        // console.log("response.data 560", $scope.allVendorsList);
      });
 // ==================== Tooltip==============
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
      
           /* $scope.toggleSelect = function(){
    angular.forEach($scope.WorkingDays, function(item){
      item.selected = event.target.checked;
    });
  };*/
 
   



      //dropdown selection
     $scope.Starting_date=[];
     $scope.Mid_of_date=['1','2','3','4','5','6','7','8','9','10','11','12',
                         '13','14','15','16','17','18','19','20','21','22',
                         '23','24','25','26','27','28','29','30','31'];
     $scope.End_of_date=[];
      
      //Assigned
      $scope.vendor_list=['Fancy Vendor','Yummy Tummy','Naveen Caters','GMR','Rang De Basanti','Buffet Lo',
      'Farooq','Raj Mahal','Savitha','Shine','Pintu','Gpfood','Priya Panjabi','Rolling Tummy','Adda','Vhs catering'
      ,'Estern_Delight','Food Planet','Pal Caterers','Golden Star Service'];
      
    //additional requirement

     $scope.menuDetails = [
        {
            'Menu':'Dal Fry',
            'Cost':'30'

        }];
    
        $scope.addNew = function(menuDetail){
            $scope.menuDetails.push({ 
                'Menu': "", 
                'Cost': "",
            });
        };
    
        $scope.remove = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.menuDetails, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            }); 
            $scope.menuDetails = newDataList;
        };
    
    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.menuDetails, function(menuDetail) {
            menuDetail.selected = $scope.selectedAll;
        });
    };    
    
    //show hide

    
     $scope.IsVisible = false;
            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }
    
    }
    ]);