const express = require('express');
const configureApp = require('../config/app'); // 导入中间件配置函数
const userRoutes = require('./routes/userRoutes'); // 导入用户路由
const userProfileRoutes = require('./routes/userProfileRoutes');

const app = express();

// 调用配置函数，注册全局中间件
configureApp(app);

// 配置路由
app.use('/api/users', userRoutes);

// 用户个人资料路由
app.use('/api/profiles', userProfileRoutes);






module.exports = app;