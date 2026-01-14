// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';
// @ts-ignore;
import { useToast } from '@/components/ui';

import MobileHeader from '@/components/MobileHeader';
import MobileTabBar from '@/components/MobileTabBar';
import MobileCard from '@/components/MobileCard';
export default function MobileMeditation(props) {
  const [activeTab, setActiveTab] = useState('meditation');
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10分钟
  const [selectedDuration, setSelectedDuration] = useState(600);
  const [selectedSound, setSelectedSound] = useState('silent');
  const {
    toast
  } = useToast();
  const durations = [{
    value: 300,
    label: '5分钟'
  }, {
    value: 600,
    label: '10分钟'
  }, {
    value: 900,
    label: '15分钟'
  }, {
    value: 1200,
    label: '20分钟'
  }, {
    value: 1800,
    label: '30分钟'
  }];
  const sounds = [{
    id: 'silent',
    label: '静音',
    icon: '🔇'
  }, {
    id: 'rain',
    label: '雨声',
    icon: '🌧️'
  }, {
    id: 'waves',
    label: '海浪',
    icon: '🌊'
  }, {
    id: 'forest',
    label: '森林',
    icon: '🌲'
  }, {
    id: 'bell',
    label: '钟声',
    icon: '🔔'
  }];
  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      toast({
        title: '冥想完成',
        description: '您已完成本次冥想练习'
      });
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, toast]);
  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const handleStart = () => {
    setIsPlaying(true);
  };
  const handlePause = () => {
    setIsPlaying(false);
  };
  const handleReset = () => {
    setIsPlaying(false);
    setTimeLeft(selectedDuration);
  };
  const handleDurationChange = duration => {
    setSelectedDuration(duration);
    setTimeLeft(duration);
    setIsPlaying(false);
  };
  return <div className="min-h-screen bg-[#F5F0FA] pb-16">
      <MobileHeader title="禅定冥想" />
      
      <div className="p-4 space-y-4">
        {/* 今日法语 */}
        <MobileCard>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">2026年1月14日</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              一切有为法，如梦幻泡影
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              世间一切因缘和合的事物，都如同梦境、幻象、水泡、影子一样虚幻不实
            </p>
            <div className="flex justify-center space-x-4">
              <button className="text-sm text-[#7B4AE2] hover:text-[#6A3BC9]">收藏</button>
              <button className="text-sm text-[#7B4AE2] hover:text-[#6A3BC9]">下载</button>
              <button className="text-sm text-[#7B4AE2] hover:text-[#6A3BC9]">分享</button>
            </div>
          </div>
        </MobileCard>

        {/* 冥想计时器 */}
        <MobileCard>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-4">
              {formatTime(timeLeft)}
            </div>
            <div className="text-sm text-gray-500 mb-6">准备开始</div>
            
            <div className="flex justify-center space-x-4 mb-6">
              <button onClick={isPlaying ? handlePause : handleStart} className="w-16 h-16 bg-[#7B4AE2] rounded-full flex items-center justify-center text-white hover:bg-[#6A3BC9]">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              <button onClick={handleReset} className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {/* 时长选择 */}
            <div className="mb-6">
              <div className="text-sm font-medium text-gray-900 mb-3">时长选择</div>
              <div className="flex flex-wrap justify-center gap-2">
                {durations.map(duration => <button key={duration.value} onClick={() => handleDurationChange(duration.value)} className={`px-3 py-2 rounded-lg text-sm ${selectedDuration === duration.value ? 'bg-[#7B4AE2] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {duration.label}
                  </button>)}
              </div>
            </div>

            {/* 环境音效 */}
            <div>
              <div className="text-sm font-medium text-gray-900 mb-3">环境音效</div>
              <div className="flex justify-center gap-3">
                {sounds.map(sound => <button key={sound.id} onClick={() => setSelectedSound(sound.id)} className={`flex flex-col items-center p-2 rounded-lg ${selectedSound === sound.id ? 'bg-[#7B4AE2] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    <span className="text-lg">{sound.icon}</span>
                    <span className="text-xs mt-1">{sound.label}</span>
                  </button>)}
              </div>
            </div>
          </div>
        </MobileCard>

        {/* 数据统计 */}
        <div className="grid grid-cols-3 gap-3">
          <MobileCard className="text-center">
            <div className="text-2xl font-bold text-[#7B4AE2]">7</div>
            <div className="text-xs text-gray-600">连续天数</div>
          </MobileCard>
          <MobileCard className="text-center">
            <div className="text-2xl font-bold text-[#7B4AE2]">21</div>
            <div className="text-xs text-gray-600">总次数</div>
          </MobileCard>
          <MobileCard className="text-center">
            <div className="text-2xl font-bold text-[#7B4AE2]">210</div>
            <div className="text-xs text-gray-600">总分钟</div>
          </MobileCard>
        </div>
      </div>

      <MobileTabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>;
}