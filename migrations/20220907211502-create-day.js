'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('days', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dayOfWeek: {
        type: Sequelize.STRING
      },
      dateofWeek: {
        type: Sequelize.DATE
      },
      scheduleId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'schedules',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('days')
  }
}
