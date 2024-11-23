const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

// 用户注册
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // 检查用户名或邮箱是否已存在
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: '邮箱已被注册' });
    }

    // 哈希加密密码
    const hashedPassword = await bcrypt.hash(password, 10);

    // 创建用户
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: '注册成功',
      user: {
        uuid: newUser.uuid,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '服务器错误' });
  }
};

// 用户登录
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 查找用户
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: '用户不存在' });
    }

    // 验证密码
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: '密码错误' });
    }

    // 生成 JWT
    const token = jwt.sign(
      { id: user.id, uuid: user.uuid, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      message: '登录成功',
      token,
      user: {
        uuid: user.uuid,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '服务器错误' });
  }
};