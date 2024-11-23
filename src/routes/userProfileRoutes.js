const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {
  getPublicProfile,
  getPrivateProfile,
  updateProfile,
  getAvailableAvatars,
  updateAvatarSelection,
} = require('../controllers/userProfileController'); // 确保导入函数名称正确



// 公共路由：查看用户公开资料
router.get('/public/:username', getPublicProfile); // 确保 getPublicProfile 已定义

// 私人路由：查看个人资料
router.get('/private', authMiddleware, getPrivateProfile); // 如果未定义，可注释测试

// 私人路由：更新个人资料
router.put('/private', authMiddleware, updateProfile); // 确保 updateProfile 已定义

// 获取预定义头像列表
router.get('/available-avatars', authMiddleware,getAvailableAvatars);

router.put('/private/avatar-select', authMiddleware, updateAvatarSelection);

module.exports = router;