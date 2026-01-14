const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

exports.main = async (event, context) => {
  try {
    // 这里可以添加清理逻辑，比如清除session等
    // 目前只是返回成功
    return {
      success: true,
      message: '退出成功',
    };
  } catch (error) {
    console.error('退出失败:', error);
    return {
      success: false,
      message: error.message || '退出失败',
    };
  }
};
