const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();
const _ = db.command;

exports.main = async (event, context) => {
  console.log('登录请求参数:', event);
  
  const { email, password } = event;

  try {
    // 查询用户
    const result = await db
      .collection('users')
      .where({
        email: email,
      })
      .get();

    console.log('查询结果:', result);

    if (result.data.length === 0) {
      console.log('用户不存在');
      return {
        success: false,
        message: '用户不存在',
      };
    }

    const user = result.data[0];

    // 验证密码（实际项目中应该使用加密存储）
    if (user.password !== password) {
      console.log('密码错误');
      return {
        success: false,
        message: '密码错误',
      };
    }

    // 返回用户信息（不包含密码）
    const { password: pwd, ...userInfo } = user;

    console.log('登录成功:', userInfo);
    return {
      success: true,
      data: userInfo,
      message: '登录成功',
    };
  } catch (error) {
    console.error('登录失败:', error);
    return {
      success: false,
      message: error.message || '登录失败',
    };
  }
};
