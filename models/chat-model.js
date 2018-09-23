module.exports = function(sequelize, DataTypes) {
  var Chat = sequelize.define("Chat", {
        message:  DataTypes.STRING,
  });

Chat.associate = function(models) {
  Chat.belongsTo(models.User);
};
return Chat;
};