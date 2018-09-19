// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("chat", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  operatorsAliases: {
    $and: Sequelize.Op.and,
    $or: Sequelize.Op.or,
    $eq: Sequelize.Op.eq,
    $gt: Sequelize.Op.gt,
    $lt: Sequelize.Op.lt,
    $lte: Sequelize.Op.lte,
    $like: Sequelize.Op.like
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
