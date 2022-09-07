'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Exercise.belongsTo(models.Day, { foreignKey: 'dayId' })
    }
  }
  Exercise.init(
    {
      exerciseName: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      sets: DataTypes.INTEGER,
      reps: DataTypes.INTEGER,
      dayId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'days',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Exercise',
      tableName: 'exercises'
    }
  )
  return Exercise
}
