require('dotenv').config(); // 加载 .env 文件中的环境变量 // 加载环境变量

module.exports = { // 导出配置对象 // 导出配置
    development: { // 开发环境配置 // 开发环境
        username: process.env.DB_USER, // 数据库用户名 // 用户名
        password: process.env.DB_PASSWORD, // 数据库密码 // 密码
        database: process.env.DB_NAME, // 数据库名称 // 数据库名
        host: process.env.DB_HOST, // 数据库主机地址 // 主机地址
        port: process.env.DB_PORT, // 数据库端口号 // 端口号
        dialect: "mysql", // 数据库方言 // 方言
        timezone: "+08:00" // 时区设置 // 时区
    },
    test: { // 测试环境配置 // 测试环境
        username: process.env.DB_USER, // 数据库用户名 // 用户名
        password: process.env.DB_PASSWORD, // 数据库密码 // 密码
        database: process.env.DB_TEST_NAME || "test_post_system", // 数据库名称，默认为 "test_post_system" // 数据库名
        host: process.env.DB_HOST, // 数据库主机地址 // 主机地址
        dialect: "mysql" // 数据库方言 // 方言
    },
    production: { // 生产环境配置 // 生产环境
        username: process.env.DB_USER, // 数据库用户名 // 用户名
        password: process.env.DB_PASSWORD, // 数据库密码 // 密码
        database: process.env.DB_PROD_NAME || "prod_post_system", // 数据库名称，默认为 "prod_post_system" // 数据库名
        host: process.env.DB_HOST, // 数据库主机地址 // 主机地址
        dialect: "mysql" // 数据库方言 // 方言
    }
};






