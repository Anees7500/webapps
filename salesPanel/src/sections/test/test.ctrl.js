salesApp.controller('testController', ['$scope','$http',
  function ($scope,$http) {
      
    console.log("hello aniket we are in"); 

  $http.get("http://fancymonk.com:9125/api/admin/company-invoice/generate?companyId=1&month=february&year=2019")
  .then(function(response) {   

    $scope.myWelcome = response.data.data;
    console.log("my excel data of Fancymonk",$scope.myWelcome);

    $scope.InvoicesData =  response.data.data.invoiceXlsx; 
    $scope.newArray = $scope.InvoicesData.slice(0,5);    
    console.log("my excel data of Invoices", $scope.newArray);

  },function(reason){
    console.log("Error : ",reason);

  });

    $scope.exportJsonDataToExcel = function(){
   
      var workbook = new kendo.ooxml.Workbook({
        sheets: [
          {
            // Column settings (width)
            columns: [
              { autoWidth: true },
              { autoWidth: true }
            ],
            // Title of the sheet
            title: "Customers",
            // Rows of the sheet
            rows: [
              // First row (header)
              {
                cells: [
                  // First cell
                  { value: "Date" },
                  // Second cell
                  { value: "Day" }
                ]
              },             
              {
                cells: [
                  // First cell
                  { value: $scope.newArray[0].date },
                  // Second cell
                  { value: $scope.newArray[0].day }
                ] 
              }
            ]
          }
        ]
      });
      kendo.saveAs({
          dataURI: workbook.toDataURL(),
          fileName: "Test.xlsx"
      });
    }
  }

  
   
]);