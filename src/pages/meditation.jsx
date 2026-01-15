// @ts-ignore;
import React, { useState, useEffect } from 'react';
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
  const [meditationStats, setMeditationStats] = useState({
    consecutiveDays: 0,
    totalSessions: 0,
    totalMinutes: 0
  });
  const [loading, setLoading] = useState(true);

  // 获取冥想统计数据
  const fetchMeditationStats = async () => {
    try {
      const result = await $w.cloud.callFunction({
        name: 'getMeditationStats',
        data: {
          userId: $w.auth.currentUser?.userId
        }
      });
      setMeditationStats(result.data);
    } catch (error) {
      toast({
        title: '数据加载失败',
        description: '无法获取冥想统计数据',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };
  const handleMeditationComplete = async duration => {
    try {
      // 保存冥想记录
      await $w.cloud.callFunction({
        name: 'saveMeditationRecord',
        data: {
          userId: $w.auth.currentUser?.userId,
          duration: duration,
          date: new Date().toISOString().split('T')[0],
          soundType: 'silence',
          completed: true
        }
      });

      // 刷新统计数据
      await fetchMeditationStats();
      toast({
        title: '冥想完成',
        description: `您已完成${duration}分钟的冥想修行`
      });
    } catch (error) {
      toast({
        title: '保存失败',
        description: '无法保存冥想记录',
        variant: 'destructive'
      });
    }
  };
  useEffect(() => {
    if ($w.auth.currentUser) {
      fetchMeditationStats();
    }
  }, [$w.auth.currentUser]);
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
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">
                  {loading ? '-' : meditationStats.consecutiveDays}
                </div>
                <div className="text-sm text-gray-600">连续天数</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">
                  {loading ? '-' : meditationStats.totalSessions}
                </div>
                <div className="text-sm text-gray-600">总次数</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">
                  {loading ? '-' : meditationStats.totalMinutes}
                </div>
                <div className="text-sm text-gray-600">总分钟数</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
}