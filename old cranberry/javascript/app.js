        //LOGIN
$.get("/api/all-users", function(data) {
//list all friend's names in friends list tab
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      $("#friends-list").prepend(data.name);
    }
  }
});

 // Capture Signup Button Click
 $("#login-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newChat object
  var currentUser = {
    name: $("#login-username-input").val().trim(),
    email: $("#login-email-input").val().trim(),
    pw: $("#login-pw-input").val().trim()
  };

  console.log(currentUser);

    // Change the HTML to reflect the user's name
    $("#name-display").text("Hey there, " + currentUser.name);
});

    
    //SIGN UP
$.get("/api/all-users", function(data) {

  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      $("#friends-list").prepend(data.name);
    }
  }
});

 // Capture Login Button Click
 $("#signup-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newChat object
  var newUser = {
    name: $("#username-input").val().trim(),
    email: $("#email-input").val().trim(),
    pw: $("#pw-input").val().trim()
  };

  console.log(newUser);

    // Change the HTML to reflect the user's name
    $("#name-display").text("Hey there, " + newUser.name);
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


// CHAT
$.get("/api/all-chats", function(data) {

  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chat");

      row.append("<p>" + data[i].author + " wrote:  </p>")
      .append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chatbox").prepend(row);
    }
  }
});

// When user chats (clicks addBtn)
$("#chat-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChat object
  var newChat = {
    author: currentUser.name,
    body: $("#message").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newChat);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new-chat", newChat)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("chat");

      row.append("<p>" + newChat.currentUser.name + " said: </p>");
      row.append("<p>" + newChat.body + "</p>");
      row.append("<p>At " + moment(newChat.created_at).format("h:mma on dddd") + "</p>");

      $("#chatbox").prepend(row);
    });

  // Empty each input box by replacing the value with an empty string
  $("#message").val("");
});
