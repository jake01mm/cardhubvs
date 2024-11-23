'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'uuid', {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4, // 添加默认值
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'uuid', {
      type: Sequelize.UUID,
      allowNull: false,
    });
  },
};