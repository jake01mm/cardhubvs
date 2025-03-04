require('dotenv').config(); // 加载环境变量配置
const app = require('./src/app'); // 导入应用实例

const PORT = process.env.PORT || 3000; // 设置默认端口

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});