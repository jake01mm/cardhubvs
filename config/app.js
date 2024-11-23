const cors = require('cors'); // 用于跨域资源共享
const helmet = require('helmet'); // 提供 HTTP 头安全性
const compression = require('compression'); // 压缩 HTTP 响应
const express = require('express'); // 引入 express 模块



// 配置函数
const configureApp = (app) => {
  app.use(cors()); // 允许跨域请求
  app.use(helmet()); // 增强安全性
  app.use(compression()); // 压缩 HTTP 响应
  app.use(express.json()); // 解析 JSON 格式请求体
  app.use(express.urlencoded({ extended: true })); // 解析 URL 编码请求体
};

module.exports = configureApp;