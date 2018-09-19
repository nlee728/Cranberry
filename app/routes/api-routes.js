//Dependencies
var Chat = require("../models/chat-model.js");
var User = require("../models/user-model.js");
var Todo = require("../models/todo-model.js");

// Routes
module.exports = function(app) {

  // Get all chats
  app.get("/api/all-chats", function(req, res) {

    Chat.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add a chat
  app.post("/api/new-chat", function(req, res) {

    console.log("Chat Data:");
    console.log(req.body);

    Chat.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chat
      res.end();
    });
  });

   // Get all users
   app.get("/api/all-users", function(req, res) {

    User.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add a user
  app.post("/api/new-user", function(req, res) {

    console.log("User Data:");
    console.log(req.body);

    User.create({
      name: req.body.name,
      email: req.body.email,
      pw: req.body.pw
    }).then(function(results) {
      // `results` here would be the newly created user
      res.end();
    });
  });
};