$("document").ready(function() {
  $("#favorite-things").submit(function(){
    event.preventDefault();
    var color = $("#color").val();
    var band =  $("#band").val();
    var food =  $("#food").val();

    var favArray = [color, band, food]; //creates our array
    var sndArray = []; // makes an empty array
    sndArray.push(favArray[1]); // add item #1 in our original array into our empty array
    sndArray.push(favArray[0]);
    sndArray.push(favArray[2]);
    alert(sndArray); // displays the new order of our array
    $("#result").append("<li>"+sndArray[0]+"</li>"); // put first array item in webpage as the first bullet in a list
    $("ul").append("<li>"+sndArray[1]+"</li>");
    $("#result").prepend("<li>"+sndArray[2]+"</li>");
  }); //closes .submit
}); // closes doc.ready
