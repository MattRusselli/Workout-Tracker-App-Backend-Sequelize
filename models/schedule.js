'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.belongsTo(models.User, { foreignKey: 'userId' })
      Schedule.hasMany(models.Day, { foreignKey: 'scheduleId' })
    }
  }
  Schedule.init(
    {
      scheduleName: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Schedule',
      tableName: 'schedules'
    }
  )
  return Schedule
}
