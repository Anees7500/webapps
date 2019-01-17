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
      $scope.CompanySettingsBool=false;
      $scope.EmpFeedbackBool=false;
      $scope.ClientMonthlyDetailsBool=false; 
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
      //  var getAllVendorToCompany = getAllVendorToCompanyUrl + $routeParams.compId;
      // $http.get(getAllVendorToCompany).then(function (response) {
      //   console.log("getAllVendorToCompanyUrl", response.data.data.details);
      //   $scope.vendorList = response.data.data.details;
      // });

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
                       {   day: "TUESDAY", Selected: false },
                       {   day: "WEDNESDAY", Selected: false },
                       {  day: "THURSDAY", Selected: false },
                       {   day: "FRIDAY", Selected: false },
                       {   day: "SATURDAY", Selected: false },
                       {  day: "SUNDAY", Selected: false }
    ];
    $scope.WkingDayGetVl = function () {
                
                for (var i = 0; i < $scope.WorkingDays.length; i++) {
                    if ($scope.WorkingDays[i].Selected) {
                        var dayName = $scope.WorkingDays[i].day;
                       
                        console.log("WorkingDays in selectbox",$scope.WorkingDays[i]);
                    }
                }
              }
 
   



      //dropdown selection
     $scope.Mid_of_date=['1','2','3','4','5','6','7','8','9','10','11','12',
                         '13','14','15','16','17','18','19','20','21','22',
                         '23','24','25','26','27','28','29','30','31'];
      
      
    //additional requirement

     $scope.menuDetails = [
        {
            'ColumnName':'Dal Fry'

        }];

    
        $scope.addNew = function(menuDetail){
            $scope.menuDetails.push({ 
                'Menu': "", 
                'Cost': "",
                'Action':"",
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
    
    //show hide for additional requirement checkbox

    
     $scope.IsVisible = false;
            $scope.ShowHide = function (data) {    
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }
    

    }
    ]);