'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Day.belongsTo(models.Schedule, { foreignKey: 'scheduleId' })
      Day.hasMany(models.Exercise, { foreignKey: 'dayId' })
    }
  }
  Day.init(
    {
      dayOfWeek: DataTypes.STRING,
      dateofWeek: DataTypes.DATEONLY,
      scheduleId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'schedules',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Day',
      tableName: 'days'
    }
  )
  return Day
}
