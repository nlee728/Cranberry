module.exports = function(sequelize, DataTypes) {
  var Workouts = sequelize.define("Workouts", {
    workout_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 300]
      }
    },
    reps: {
      type: DataTypes.INTEGER,
      isInt: true
    },
    time: {
      type: DataTypes.TIME
    }
  });

  Workouts.associate = function(models) {
    Workouts.belongsTo(models.User);
  };
  return Workouts;
};