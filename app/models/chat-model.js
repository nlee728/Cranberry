// Dependencies

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chat" model that matches up with DB
var Chat = sequelize.define("chat", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
Chat.sync();

// Makes the Chat Model available for other files (will also create a table)
module.exports = Chat;
