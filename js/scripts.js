// object constuctor

function Place(locationName, timeOfYear, landmarks) {
  this.locationName = locationName;
  this.timeOfYear = timeOfYear;
  this.landmarks = landmarks;
}





let place1 = new Place("Seatlle", "April", "Space Needle");
let place2 = new Place("Portland", "August", "Burnside skate park");
let place3 = new Place("Salem", "August", "State Capitol");
let place4 = new Place("New York", "May", "The Stock Exchange");
let place5 = new Place("London", "June", "Apple Records");


// UI logic
$(function () {
  $("#Seattle").on("click", function () {
    $("#sea").text(place1);
    console.log("click");
    $("#sea").slideToggle()
  });
});


// // "$ = JQuery; interchangable"
// $(function() { // updated syntax: (document).ready
//   $(".clickable.section1").on("click", function() {
//     $("#content1").slideToggle()
//     $("#hide1").fadeToggle()
//     $("#show1").slideToggle()
//   })
//   $(".clickable.section2").on("click", function() {
//     $("#content2").slideToggle()
//     $("#hide2").fadeToggle()
//     $("#show2").slideToggle()
//   })
// })