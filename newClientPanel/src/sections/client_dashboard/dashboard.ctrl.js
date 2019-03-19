clientApp.controller('ClientDashboardCtrl',['$scope','$http','$rootScope','$cookies','getCompanyDetailsUrl','getEmployeeFeedback',
'$routeParams', 'Notification', 'getWeeklyMenuUrl', function($scope,$http,$rootScope,$cookies,getCompanyDetailsUrl,getEmployeeFeedback,$routeParams, Notification,getWeeklyMenuUrl)
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
var getCompanyDetailsUrl = getCompanyDetailsUrl + compId;
$http.get(getCompanyDetailsUrl).then (function(response){
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

var getEmployeeFeedback = getEmployeeFeedback + compId;
    $http.get(getEmployeeFeedback).then(function(response) {
      $scope.feedback = response.data.data.reviews;
      $scope.feedback = $scope.feedback.reverse();

      console.log("employee feedback : ", $scope.feedback);
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

   var getWeeklyMenuUrl = getWeeklyMenuUrl + compId;
   $http.get(getWeeklyMenuUrl).then(function(response){
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
     console.log(" soretd new json ", JSON.stringify($scope.weekMenuSorted));
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
$scope.showHideWeekMenu = function(val) {
     console.log("weekmenu  show");
     angular.forEach($scope.weekMenuSorted, function(value, key){
      value.visible = false;
     });
      val.visible = val.visible ? false : true;
    }


}
]);