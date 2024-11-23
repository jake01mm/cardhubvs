'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid'); // 引入 uuid

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // 定义关联关系
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: () => uuidv4(), // 使用 uuid 生成默认值
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};