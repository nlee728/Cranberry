  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC92DrbxO7k9qQkk7_Pk3W8XFr47XACWcw",
    authDomain: "cranberry-9c1f7.firebaseapp.com",
    databaseURL: "https://cranberry-9c1f7.firebaseio.com",
    projectId: "cranberry-9c1f7",
    storageBucket: "",
    messagingSenderId: "580674378498"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  //LOGIN
  // Initial Login Values
  var name = "";
  var email = "";
  var pw = 0;

  // Capture Login Button Click
  $("#login-btn").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#username-input").val().trim();
    email = $("#email-input").val().trim();
    pw = $("#pw-input").val().trim();

    // Code for handling the push
    database.ref("UserList/" + name).push({
      name: name,
      email: email,
      pw: pw,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.logging the last user's data
    console.log(sv.name);
    console.log(sv.email);
    console.log(sv.pw);

    // Change the HTML to reflect
    $("#name-display").text("Hey there, " + sv.name);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


//Add Tank PopUp Form
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Login Popup Form
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
function update() {
  $('#clock').html(moment().format('D MMMM YYYY H:mm:ss a'));
}
setInterval(update, 1000);

//PROGRESS BAR
function move() {
  var elem = document.getElementById("myBar"); 
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
      if (width >= 100) {
          clearInterval(id);
      } else {
          width++; 
          elem.style.width = width + '%'; 
          elem.innerHTML = width * 1 + '%';
      }
  }
}

// //TO DO LIST
//   var list = JSON.parse(localStorpw.getItem("todolist"));

//     if (!Array.isArray(list)) {
//       list = [];
//     }

//     function putOnPpw() {
//       $("#todo-list").empty(); // empties out the html

//       var insideList = JSON.parse(localStorpw.getItem("todolist"));

//       if (!Array.isArray(insideList)) {
//         insideList = [];
//       }

//       // render our insideList todos to the ppw
//       for (var i = 0; i < insideList.length; i++) {
//         var p = $("<p>").text(insideList[i]);
//         var b = $("<button class='delete'>").text("x").attr("data-index", i);
//         p.prepend(b);
//         $("#todo-list").prepend(p);
//       }
//     }

//     // render our todos on ppw load
//     putOnPpw();

//     $(document).on("click", "button.delete", function() {
//       var todolist = JSON.parse(localStorpw.getItem("todolist"));
//       var currentIndex = $(this).attr("data-index");

//       // Deletes the item marked for deletion
//       todolist.splice(currentIndex, 1);
//       list = todolist;

//       localStorpw.setItem("todolist", JSON.stringify(todolist));

//       putOnPpw();
//     });

//     $("input[type='submit']").on("click", function(event) {
//       event.preventDefault();
//       // Setting the input value to a variable and then clearing the input
//       var val = $("input[type='text']").val();
//       $("input[type='text']").val("");

//       // Adding our new todo to our local list variable and adding it to local storpw
//       list.push(val);
//       localStorpw.setItem("todolist", JSON.stringify(list));

//       putOnPpw();
//     });

