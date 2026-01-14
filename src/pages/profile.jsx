// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { useToast, Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Settings, Target, Award, Clock, LogOut, Edit3 } from 'lucide-react';

// @ts-ignore;
import LeftNav from '@/components/LeftNav';
export default function Profile(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [activeTab, setActiveTab] = useState('profile');
  const userData = {
    name: '禅心行者',
    email: 'zen@example.com',
    level: '中级修行者',
    avatar: '🧘',
    tags: ['正念实践', '经典诵读']
  };
  const stats = {
    meditationMinutes: 180,
    scriptureCount: 3,
    courseCount: 2,
    learningDays: 24
  };
  const achievements = [{
    id: 1,
    name: '初心者',
    icon: '🌱',
    description: '完成首次冥想',
    unlocked: true
  }, {
    id: 2,
    name: '坚持者',
    icon: '🔥',
    description: '连续冥想7天',
    unlocked: true
  }, {
    id: 3,
    name: '学者',
    icon: '📚',
    description: '完成3门课程',
    unlocked: false
  }, {
    id: 4,
    name: '经师',
    icon: '📖',
    description: '诵读10部经典',
    unlocked: false
  }];
  const handleLogout = () => {
    toast({
      title: '已退出登录',
      description: '期待下次与您相见'
    });
  };
  return <div className="min-h-screen bg-[#F5F7FA] flex">
      {/* 左侧导航 */}
      <LeftNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* 主内容区 */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          {/* 页面标题 */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">我的</h1>
            <p className="text-gray-600">个人中心，修行记录</p>
          </div>

          {/* 用户信息 */}
          <Card className="bg-white mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6C47FF] to-[#8B5CF6] rounded-full flex items-center justify-center text-2xl">
                    {userData.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h2 className="text-xl font-bold text-gray-800">{userData.name}</h2>
                      <span className="px-2 py-1 bg-[#F0E6FF] text-[#6C47FF] rounded-full text-xs font-medium">
                        {userData.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{userData.email}</p>
                    <div className="flex space-x-2">
                      {userData.tags.map((tag, index) => <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Edit3 className="w-4 h-4 mr-2" />
                  编辑资料
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 学习数据 */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">{stats.meditationMinutes}</div>
                <div className="text-sm text-gray-600">冥想总时长(分钟)</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">{stats.scriptureCount}</div>
                <div className="text-sm text-gray-600">诵读经文部数</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">{stats.courseCount}</div>
                <div className="text-sm text-gray-600">完成课程门数</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">{stats.learningDays}</div>
                <div className="text-sm text-gray-600">学习天数</div>
              </CardContent>
            </Card>
          </div>

          {/* 最近成就 */}
          <Card className="bg-white mb-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">最近成就</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map(achievement => <div key={achievement.id} className={`flex items-center space-x-3 p-3 rounded-lg ${achievement.unlocked ? 'bg-[#F0E6FF]' : 'bg-gray-100 opacity-50'}`}>
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <div className="font-medium text-gray-800">{achievement.name}</div>
                      <div className="text-sm text-gray-600">{achievement.description}</div>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* 功能入口 */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="justify-start h-auto py-4">
              <Settings className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">设置</div>
                <div className="text-xs text-gray-500">个性化您的修行体验</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto py-4">
              <Target className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">学习目标</div>
                <div className="text-xs text-gray-500">设定您的修行计划</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto py-4">
              <Award className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">我的成就</div>
                <div className="text-xs text-gray-500">查看所有成就徽章</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto py-4">
              <Clock className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">学习记录</div>
                <div className="text-xs text-gray-500">回顾您的修行历程</div>
              </div>
            </Button>
          </div>

          {/* 退出登录 */}
          <div className="mt-8 text-center">
            <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              退出登录
            </Button>
          </div>
        </div>
      </div>
    </div>;
}