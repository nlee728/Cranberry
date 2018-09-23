module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
        text: DataTypes.TEXT,
        completed:  DataTypes.BOOLEAN,
  });
 Todo.associate = function(models) {
   Todo.belongsTo(models.User);
  };
  return Todo;
};
