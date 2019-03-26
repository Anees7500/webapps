salesApp.controller('catMapCtrl',['$scope', '$http',
function ($scope, $http) {
    console.log("hello we are in");


        var orgchart = new getOrgChart(document.getElementById("people"), {
          primaryFields: ["Name", "title","phone","mail"],  
          photoFields: ["pic"],
          scale:0.5,        
          color:"neutralgrey", 
          dataSource: [
            { id: 1, parentId: null, Name: "Amber McKenzie",title:"ceo" , phone:9620274719, mail:"amber@gmail.com",pic: "http://getorgchart.com/GetOrgChart/getorgchart-demos/images/f-18.jpg"},
            { id: 2, parentId: 1, Name: "Ava Field", title:"po", phone:9620274720, mail:"ava@gmail.com",pic: "http://getorgchart.com/GetOrgChart/getorgchart-demos/images/f-1.jpg"},
            { id: 3, parentId: 1, Name: "Evie Johnson",title:"hr", phone:9620274721, mail:"evie@gmail.com", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bNOKMtztsIzceDL_IZJeMchM4jzd9HqeEAg3KC1XxhsFyIxx1A"},
            { id: 4, parentId: 2, Name: "Amber McKenzie",title:"cfo" , phone:9620274719, mail:"amber@gmail.com",pic: "http://getorgchart.com/GetOrgChart/getorgchart-demos/images/f-18.jpg"},
            { id: 5, parentId: 2, Name: "Anna",title:"md" , phone:9620274719, mail:"amber@gmail.com",pic: "https://previews.123rf.com/images/jlpfeifer/jlpfeifer1605/jlpfeifer160500097/57744119-single-young-professional-blond-woman-wearing-eyeglasses-at-brown-wooden-desk-with-open-laptop-and-c.jpg"},
            { id: 6, parentId: 3, Name: "Rohit", title:"tl", phone:9620274720, mail:"ava@gmail.com",pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMePekjqflU5-fBs2Yv0Cweh1rIvjzEq3LTe8lYZ7VmBaKword"},
            { id: 7, parentId: 3, Name: "Johnson",title:"ed", phone:9620274721, mail:"evie@gmail.com", pic: "http://bustamantefinancialsolutions.com/images/uploads/_case_study/young_professional.jpg"}
     
          ]
        });
}
]);