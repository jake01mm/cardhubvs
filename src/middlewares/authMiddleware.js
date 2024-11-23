const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: '未提供授权令牌' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: '授权令牌格式错误' });
  }

  try {
    // 验证 Token 并解析用户信息
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 将用户信息附加到 req.user
    req.user = decoded;

    // 打印调试信息
    console.log('Decoded user:', req.user);

    next();
  } catch (err) {
    console.error(err);
    return res.status(403).json({ error: '无效的授权令牌' });
  }
};

module.exports = authMiddleware;