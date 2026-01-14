// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { useToast, Card, CardContent } from '@/components/ui';

// @ts-ignore;
import LeftNav from '@/components/LeftNav';
// @ts-ignore;
import DailyWisdom from '@/components/DailyWisdom';
// @ts-ignore;
import MeditationTimer from '@/components/MeditationTimer';
export default function Meditation(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [activeTab, setActiveTab] = useState('meditation');
  const handleMeditationComplete = duration => {
    toast({
      title: '冥想完成',
      description: `您已完成${duration}分钟的冥想修行`
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
            <h1 className="text-2xl font-bold text-gray-800 mb-2">禅定冥想</h1>
            <p className="text-gray-600">静心冥想，放松身心</p>
          </div>

          {/* 今日法语 */}
          <DailyWisdom />

          {/* 冥想计时器 */}
          <MeditationTimer onComplete={handleMeditationComplete} />

          {/* 数据统计 */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">7</div>
                <div className="text-sm text-gray-600">连续天数</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">24</div>
                <div className="text-sm text-gray-600">总次数</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">180</div>
                <div className="text-sm text-gray-600">总分钟数</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
}