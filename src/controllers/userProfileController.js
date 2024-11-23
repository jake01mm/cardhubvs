const { UserProfile, User } = require('../../models');

// 查看公共个人资料
exports.getPublicProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({
      where: { username },
      include: {
        model: UserProfile,
        as: 'profile', // 确保别名一致
        attributes: ['first_name', 'last_name', 'vip'], // 返回公开字段
      },
      attributes: ['username'],
    });

    if (!user) {
      return res.status(404).json({ error: '用户不存在' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '服务器错误' });
  }
};

// 查看私人个人资料
exports.getPrivateProfile = async (req, res) => {
    try {
      console.log('Request user:', req.user); // 确保此处包含 id
  
      const profile = await UserProfile.findOne({
        where: { user_id: req.user.id }, // 使用 req.user.id 进行查询
      });
  
      if (!profile) {
        return res.status(404).json({ error: '个人资料不存在' });
      }
  
      res.json(profile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: '服务器错误' });
    }
  };

// 更新私人个人资料
exports.updateProfile = async (req, res) => {
  try {
    const { first_name, last_name, avatar_url, bio, birthday, location } = req.body;

    const profile = await UserProfile.findOne({
      where: { user_id: req.user.id },
    });

    if (!profile) {
      return res.status(404).json({ error: '个人资料不存在' });
    }

    await profile.update({ first_name, last_name, avatar_url, bio, birthday, location });

    res.json({ message: '个人资料已更新', profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '服务器错误' });
  }
};