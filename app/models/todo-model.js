// Dependencies

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Todo" model that matches up with DB
var Todo = sequelize.define("todolist", {
  text: Sequelize.STRING,
  completed: Sequelize.BOOLEAN
});

// Syncs with DB
Todo.sync();

// Makes the Chat Model available for other files (will also create a table)
module.exports = Todo;
