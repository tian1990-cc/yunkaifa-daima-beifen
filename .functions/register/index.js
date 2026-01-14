const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();
const _ = db.command;

exports.main = async (event, context) => {
  console.log('注册请求参数:', event);
  
  const { username, email, password } = event;

  try {
    // 检查邮箱是否已存在
    const existingUser = await db
      .collection('users')
      .where({
        email: email,
      })
      .get();

    console.log('检查邮箱是否存在:', existingUser);

    if (existingUser.data.length > 0) {
      console.log('邮箱已被注册');
      return {
        success: false,
        message: '该邮箱已被注册',
      };
    }

    // 创建新用户
    const newUser = {
      username,
      email,
      password, // 实际项目中应该加密存储
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    console.log('准备创建用户:', newUser);
    const result = await db.collection('users').add({
      data: newUser,
    });

    console.log('用户创建成功:', result);

    // 初始化用户统计数据
    const statsResult = await db.collection('meditation_stats').add({
      data: {
        userId: result._id,
        totalMinutes: 0,
        streakDays: 0,
        sessionsCount: 0,
        lastSessionDate: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });

    console.log('统计数据创建成功:', statsResult);

    const { password: pwd, ...userInfo } = newUser;

    console.log('注册成功:', { ...userInfo, _id: result._id });
    return {
      success: true,
      data: { ...userInfo, _id: result._id },
      message: '注册成功',
    };
  } catch (error) {
    console.error('注册失败:', error);
    return {
      success: false,
      message: error.message || '注册失败',
    };
  }
};
