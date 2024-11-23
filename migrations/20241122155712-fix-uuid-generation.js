'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'uuid', {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.literal('(UUID())'), // 数据库级别的 UUID 生成器（或使用 Sequelize.UUIDV4）
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'uuid', {
      type: Sequelize.UUID,
      allowNull: false,
    });
  },
};