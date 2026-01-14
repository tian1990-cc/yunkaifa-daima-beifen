// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { useToast, Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Play, Clock, Users, Star } from 'lucide-react';

// @ts-ignore;
import LeftNav from '@/components/LeftNav';
export default function Courses(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [activeTab, setActiveTab] = useState('course');
  const [courseType, setCourseType] = useState('all');
  const courses = [{
    id: 1,
    title: '正念冥想入门',
    instructor: '慧明法师',
    duration: 12,
    period: '7天',
    participants: 2345,
    progress: 67,
    level: 'beginner',
    icon: '🧘',
    enrolled: true
  }, {
    id: 2,
    title: '深度放松冥想',
    instructor: '静心禅师',
    duration: 21,
    period: '14天',
    participants: 1567,
    progress: 0,
    level: 'intermediate',
    icon: '🌿',
    enrolled: false
  }, {
    id: 3,
    title: '智慧禅修进阶',
    instructor: '智海法师',
    duration: 30,
    period: '21天',
    participants: 892,
    progress: 0,
    level: 'advanced',
    icon: '💎',
    enrolled: false
  }];
  const getLevelColor = level => {
    switch (level) {
      case 'beginner':
        return 'bg-[#C8E6C9] text-[#2E7D32]';
      case 'intermediate':
        return 'bg-[#BBDEFB] text-[#1565C0]';
      case 'advanced':
        return 'bg-[#E1BEE7] text-[#7B1FA2]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };
  const getLevelText = level => {
    switch (level) {
      case 'beginner':
        return '初级';
      case 'intermediate':
        return '中级';
      case 'advanced':
        return '高级';
      default:
        return '';
    }
  };
  return <div className="min-h-screen bg-[#F5F7FA] flex">
      {/* 左侧导航 */}
      <LeftNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* 主内容区 */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {/* 页面标题 */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">法门课程</h1>
            <p className="text-gray-600">系统学习，精进修行</p>
          </div>

          {/* 课程类型切换 */}
          <div className="flex space-x-4 mb-6">
            <button onClick={() => setCourseType('all')} className={`px-4 py-2 rounded-lg font-medium transition-all ${courseType === 'all' ? 'bg-[#6C47FF] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
              全部课程
            </button>
            <button onClick={() => setCourseType('my')} className={`px-4 py-2 rounded-lg font-medium transition-all ${courseType === 'my' ? 'bg-[#6C47FF] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
              我的课程
            </button>
          </div>

          {/* 课程列表 */}
          <div className="grid gap-6">
            {courses.map(course => <Card key={course.id} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#F0E6FF] to-[#FFF0F5] rounded-xl flex items-center justify-center text-2xl">
                        {course.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                            {getLevelText(course.level)}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 mb-3">{course.instructor}</div>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{course.duration}课时</span>
                          </div>
                          <div>•</div>
                          <div>{course.period}</div>
                          <div>•</div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{course.participants}人参与</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-3">
                      {course.enrolled ? <>
                          <div className="text-right">
                            <div className="text-sm text-gray-600 mb-1">学习进度</div>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#6C47FF] rounded-full" style={{
                            width: `${course.progress}%`
                          }} />
                              </div>
                              <span className="text-sm font-medium text-[#6C47FF]">{course.progress}%</span>
                            </div>
                          </div>
                          <Button className="bg-[#6C47FF] hover:bg-[#5A3BE8]">
                            <Play className="w-4 h-4 mr-2" />
                            继续学习
                          </Button>
                        </> : <Button className="bg-[#6C47FF] hover:bg-[#5A3BE8]">
                          报名学习
                        </Button>}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* 学习档案推荐 */}
          <div className="mt-8 p-6 bg-gradient-to-r from-[#F0E6FF] to-[#FFF0F5] rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">完善您的学习档案</h3>
                <p className="text-sm text-gray-600">个性化推荐更适合您的课程</p>
              </div>
              <Button variant="outline">立即完善</Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}