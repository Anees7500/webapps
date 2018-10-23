clientApp.controller('ClientDashboardController', ['$scope',
    function ($scope) {

        
        console.log("hello i am isnide login contriller");
        $scope.Data = [{Data: 1, img: "calendar", data: "Days"},
            {Data: 1, img: "calendar", data: "Days"}];

        $scope.Days = [
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY",
            "FRIDAY",
            "SATURDAY",
            "SUNDAY"
        ];
        $scope.Menu = [
            {Menu: 1, menu: "Breakfast", Person1: " Person", Price1: "Price"},
            {Menu: 2, menu: "Lunch", Person1: " Person", Price1: "Price"},
            {Menu: 3, menu: "Snacks", Person1: " Person", Price1: "Price"},
            {Menu: 4, menu: "Dinner", Person1: " Person", Price1: "Price"},
            {Menu: 5, menu: "Cash & Carry", Person1: " Person", Price1: "Price"},
            {Menu: 6, menu: "Mid-Night Snacks", Person1: " Person", Price1: "Price"}
        ];

        $scope.Customers = [
            {Person: "23", Price: "100 "},
            {Person: "45", Price: "110 "},
            {Person: "56", Price: "130 "},
            {Person: "78", Price: "140 "},
            {Person: "21", Price: "150 "},
            {Person: "21", Price: "150 "},
            {Person: "76", Price: "160 "}
        ];

        $scope.Feedback = [
            {
                Feedback: 1,
                feedback: "pallavi",
                overAllRating: "3",
                presentationRating: "4",
                qualityRating: "2",
                quantityRating: "3",
                tasteRating: "4",
                mobile: "9981045016",
                date: "27/03/1992",
                comment: "hahaha"
            },
            {
                Feedback: 1,
                feedback: "pallavi",
                overAllRating: "3",
                presentationRating: "4",
                qualityRating: "2",
                quantityRating: "3",
                tasteRating: "4",
                mobile: "9981045016",
                date: "27/03/1992",
                comment: "hahaha"
            }
        ];


    }

]);
