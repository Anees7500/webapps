clientApp.controller('ClientDashboardCtrl',['$scope','$http','$rootScope','$cookies','getCompanyDetailsUrl','getEmployeeFeedback',
'$routeParams', 'Notification', 'getWeeklyMenuUrl','getCompanyRequirements','getCompanyAdditionalRequirements',function($scope,$http,$rootScope,$cookies,getCompanyDetailsUrl,getEmployeeFeedback,
  $routeParams, Notification,getWeeklyMenuUrl,getCompanyRequirements,getCompanyAdditionalRequirements)
{
  $scope.enableBooleans = function(value) {
    $scope.categoryBool = false;
    $scope.requirementBool = false;
    $scope.feedbackBool = false;
    $scope.manageEmployeeBool = false;
    $scope.employeeCountBool = false;
    $scope.weeklyMenuBool = false;
    $scope[value] = true;
}
  $scope.enableBooleans("categoryBool");
  
  // sidebar menu active
$scope.activeMenu='category';


// category section
var compId = 1;
var CompanyDetailsUrl = getCompanyDetailsUrl + compId;
$http.get(CompanyDetailsUrl).then (function(response){
  $scope.data = response.data.data.company;
  console.log("CHECK DATA", $scope.data);

});

$scope.categories = [
  { displayName: "Breakfast", dbName: "breakfast" },
  { displayName: "Lunch", dbName: "lunch" },
  { displayName: "Snacks", dbName: "snacks" },
  { displayName: "Dinner", dbName: "dinner" },
  { displayName: "Mid-Night Snacks", dbName: "midNightSnacks" },
  { displayName: "Early Morning Snacks", dbName: "earlyMorningSnacks" },
  { displayName: "Cash & Carry", dbName: "cashNCarry" }];

// Employee feedback
$scope.EmployeeFeedbackDetails = ['Name','Overall Rating','Presentation Rating','Quality Rating',
'Quantity Rating','Taste Rating','Contact','Comment','Date & Time'];

var EmployeeFeedback = getEmployeeFeedback + compId;
    $http.get(EmployeeFeedback).then(function(response) {
      $scope.feedback = response.data.data.reviews;
      $scope.feedback = $scope.feedback.reverse();

   console.log("employee feedback : ", $scope.feedback);
   $scope.viewby = 10;
  $scope.totalItems = $scope.feedback.length;
  console.log("hey show me feedback length",$scope.totalItems);
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5; 
  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };
$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1;
}

    });
    
//manage employee

    $scope.selectSession = [{ label:'BREACKFAST', value: 1 },
    { label: 'LUNCH', value: 2 },
    { label: 'SNACKS',value: 3 },
    { label: 'DINNER',value: 4 },
    { label: 'MID NIGHT SNACKS',value: 5 },
    { label: 'EARLY MORNING SNACKS', value: 6 },
    { label: 'CASH & CARRY', value: 7 } ];

   $scope.employeeList = [];
    $scope.addEmp = function(item){
    debugger;
      var newItem = {};
      newItem.empID = item.empID;
      newItem.empFname = item.empFname;
      newItem.empLname = item.empLname;
      newItem.empMobNum = item.empMobNum;
      newItem.type = item.type;
      if ($scope.employeeList == null) {
        $scope.employeeList = [];
      }
      if (!$scope.employeeList.some(function(element) {
          return element.empID === item.empID;
        })) {
          $scope.employeeList.push(newItem);
          console.log("empList",$scope.employeeList);
      } 
      else
       {
           Notification.error("Employee is already added");

              console.log("user already added");
      }

    };

    $scope.deleteRow = function(index){
      $scope.employeeList.pop(index);
    }


    // WwwklyMenu
    $scope.weeklyMenu = ["dal", "chawal", "sabji", "pickle", "curd", "paneer", "biryani",
   "juice", "salad", "desert"];

  $scope.weekMenuSorted = {};
  $scope.weekMenuSorted.BREAKFAST= {};
  $scope.weekMenuSorted.LUNCH= {};
  $scope.weekMenuSorted.SNACKS= {};
  $scope.weekMenuSorted.DINNER= {};

   var WeeklyMenuUrl = getWeeklyMenuUrl + compId;
   $http.get(WeeklyMenuUrl).then(function(response){
   var weeklyMenuDetails = response.data.data.menus;
  //  console.log("show me menuDetails:" ,weeklyMenuDetails);
  //  $scope.menuType = response.data.data.menus[0].menu;
  //  console.log("show me menuDetails:" , $scope.menuType);
    // var weeklength = weeklyMenuDetails.length;
    //  console.log("weeklength",weeklength);
     for(var i=0; i<weeklyMenuDetails.length; i++){
      var tem = weeklyMenuDetails[i];
      tem.menu = JSON.parse(tem.menu);
      // console.log("hii checking menu" ,tem)
      if(tem.menuType === "BREAKFAST"){
        makeWeekDayWiseJson(tem, "BREAKFAST", $scope.weekMenuSorted)
      }
      if(tem.menuType === "LUNCH"){
        makeWeekDayWiseJson(tem, "LUNCH", $scope.weekMenuSorted) 
      }
      if(tem.menuType === "SNACKS"){
        makeWeekDayWiseJson(tem, "SNACKS", $scope.weekMenuSorted)  
      }
      if(tem.menuType === "DINNER"){
        (tem, "DINNER", $scope.weekMenuSorted)  
      }
     }
    //  console.log(" soretd new json ", $scope.weekMenuSorted);
    //  console.log(" soretd new json ", JSON.stringify($scope.weekMenuSorted));
   });

function makeWeekDayWiseJson (tem, menutype, obj){
  if(obj[menutype].Monday != null)
  {
  }else{
    obj[menutype].Monday = {};
  }

  if(obj[menutype].Tuesday != null)
  {
  } else
  {
    obj[menutype].Tuesday = {};
  }

  if(obj[menutype].Wednesday != null)
  {
  }else{
    obj[menutype].Wednesday = {};
  }

  if(obj[menutype].Thursday != null)
  {
  }else{
    obj[menutype].Thursday = {};
  }

  if(obj[menutype].Friday != null)
  {
  }else{
    obj[menutype].Friday = {};
  }

  if(obj[menutype].Saturday != null)
  {
  }else{
    obj[menutype].Saturday = {};
  }

  if(obj[menutype].Sunday != null)
  {
  }else{
    obj[menutype].Sunday = {};
  }
  if (tem.dayName == "Monday") {
    obj[menutype].Monday = tem;
  }
  if (tem.dayName == "Tuesday") {
    obj[menutype].Tuesday = tem;
  }
  if (tem.dayName == "Wednesday") {
    obj[menutype].Wednesday = tem;
  }
  if (tem.dayName == "Thursday") {
    obj[menutype].Thursday = tem;
  }
  if (tem.dayName == "Friday") {
    obj[menutype].Friday = tem;
  }
  if (tem.dayName == "Saturday") {
    obj[menutype].Saturday = tem;
  }
  if (tem.dayName == "Sunday") {
    obj[menutype].Sunday = tem;
  }

}
$scope.showHideWeekMenu = function(val, k) {
     console.log("weekmenu  show");
     angular.forEach($scope.weekMenuSorted, function(value, key){
       if(key != k)
       {
        value.visible = false;
       }
      
     });
      val.visible = val.visible ? false : true;

      $scope.defaultIndex = true;
      var keyName = Object.keys(val)[0];
      $scope.menuItemList = val[keyName].menu;
    }
$scope.menuItem = function(v){
  console.log("menuData",v);
  $scope.defaultIndex = false;
  $scope.menuItemList = v.menu;
}



// requirement
$scope.Days = [ "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
$scope.clientRequirement = {};
var companyRequirementsUrl = getCompanyRequirements +  compId;
$http.get(companyRequirementsUrl).then(function(response){
  if (response.data.status == 1) {
    var reqArr = response.data.data.requirements;
    angular.forEach(reqArr, function (item) {
      $scope.clientRequirement[item.type] = JSON.parse(item.requirement);
      console.log("show me data", $scope.clientRequirement);
      $scope.clientRequirement[item.type].companyRequirementDbRowId = item.id;
    });
    // console.log("compay requirements : ",JSON.stringify($scope.clientRequirement));
  }
});

var AdditionalRequirementsUrl = getCompanyAdditionalRequirements + compId;
$http.get(AdditionalRequirementsUrl).then(function(response){
if(response.data.status == 1){
  var reqArr = response.data.data.additionalRequirements;
  // console.log("additinal requirement",reqArr);
  if (reqArr.length > 0) {
    $scope.companyAdditionalRequirementBoolean = true;
  }
  angular.forEach(reqArr, function (item) {
    $scope.additionalReqDetails[item.type].additionalReqToggle = true;
    var dbSavedAdditionalReqArr = JSON.parse(item.requirement);
    $scope.additionalReqDetails[item.type].arrVal.push.apply($scope.additionalReqDetails[item.type].arrVal, dbSavedAdditionalReqArr);
    $scope.additionalReqDetails[item.type].additionaRequirementDbRowId = item.id;
  });
  console.log("additional req = ", JSON.stringify($scope.additionalReqDetails));

}
});
$scope.additionalReqDetails = {
  breakfast:
  {
    arrVal: [
      {
        'columnName': 'breakfast',
        'disabled': true
      }]
  },
  lunch:
  {
    arrVal: [
      {
        'columnName': 'lunch',
        'disabled': true
      }]
  },
  snacks:
  {
    arrVal: [
      {
        'columnName': 'snacks',
        'disabled': true
      }]
  },
  dinner:
  {
    arrVal: [
      {
        'columnName': 'dinner',
        'disabled': true
      }]
  },
  midNightSnacks:
  {
    arrVal: [
      {
        'columnName': 'midNightSnacks',
        'disabled': true
      }]
  },
  earlyMorningSnacks:
  {
    arrVal: [
      {
        'columnName': 'earlyMorningSnacks',
        'disabled': true
      }]
  }
};




}
]);