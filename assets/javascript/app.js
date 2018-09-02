//Add Tank PopUp Form
// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal2 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

//WEATHER
 var APIKey = "b852c360abb57c59030d087b033e8db3";
 var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
   "zip=27713,us&units=imperial&appid=" + APIKey;

 // AJAX call to the OpenWeatherMap API
 $.ajax({
   url: queryURL,
   method: "GET"
 })
    .then(function(response) {
    $("#weather").text(response.main.temp + " °F and " + response.weather[0].description);

   });

   
//CLOCK
function show(time) {
    $("#clock").append(`<p>${time}</p>`);
}
show(moment().format('MMMM Do YYYY, h:mm:ss a'));


// //PROFILE FORM
//  // Capture Button Click
//   $("#add-user").on("click", function(event) {
//     // prevent page from refreshing when form tries to submit itself
//     event.preventDefault();

//     // Capture user inputs and store them into variables
//     var name = $("#name-input").val().trim();
//     var email = $("#email-input").val().trim();
//     var age = $("#age-input").val().trim();
//     var comment = $("#comment-input").val().trim();

//     // Console log each of the user inputs to confirm we are receiving them
//     console.log(name);
//     console.log(email);
//     console.log(age);
//     console.log(comment);

//     // Replaces the content in the "recent-member" div with the new info
//     $("#name-display").text(name);
//     $("#email-display").text(email);
//     $("#age-display").text(age);
//     $("#comment-display").text(comment);

//     // Clear localStorage
//     localStorage.clear();

//     // Store all content into localStorage
//     localStorage.setItem("name", name);
//     localStorage.setItem("email", email);
//     localStorage.setItem("age", age);
//     localStorage.setItem("comment", comment);
//   });

//   // By default display the content from localStorage
//   $("#name-display").text(localStorage.getItem("name"));
//   $("#email-display").text(localStorage.getItem("email"));
//   $("#age-display").text(localStorage.getItem("age"));
//   $("#comment-display").text(localStorage.getItem("comment"));


// //TO DO LIST
//   var list = JSON.parse(localStorage.getItem("todolist"));

//     if (!Array.isArray(list)) {
//       list = [];
//     }

//     function putOnPage() {
//       $("#todo-list").empty(); // empties out the html

//       var insideList = JSON.parse(localStorage.getItem("todolist"));

//       if (!Array.isArray(insideList)) {
//         insideList = [];
//       }

//       // render our insideList todos to the page
//       for (var i = 0; i < insideList.length; i++) {
//         var p = $("<p>").text(insideList[i]);
//         var b = $("<button class='delete'>").text("x").attr("data-index", i);
//         p.prepend(b);
//         $("#todo-list").prepend(p);
//       }
//     }

//     // render our todos on page load
//     putOnPage();

//     $(document).on("click", "button.delete", function() {
//       var todolist = JSON.parse(localStorage.getItem("todolist"));
//       var currentIndex = $(this).attr("data-index");

//       // Deletes the item marked for deletion
//       todolist.splice(currentIndex, 1);
//       list = todolist;

//       localStorage.setItem("todolist", JSON.stringify(todolist));

//       putOnPage();
//     });

//     $("input[type='submit']").on("click", function(event) {
//       event.preventDefault();
//       // Setting the input value to a variable and then clearing the input
//       var val = $("input[type='text']").val();
//       $("input[type='text']").val("");

//       // Adding our new todo to our local list variable and adding it to local storage
//       list.push(val);
//       localStorage.setItem("todolist", JSON.stringify(list));

//       putOnPage();
//     });

