// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';

export default function MeditationTimer({
  onComplete
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10分钟
  const [selectedDuration, setSelectedDuration] = useState(10);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedSound, setSelectedSound] = useState('rain');
  const durations = [5, 10, 15, 20, 30];
  const sounds = [{
    id: 'silent',
    label: '静音',
    icon: VolumeX
  }, {
    id: 'rain',
    label: '雨声',
    icon: Volume2
  }, {
    id: 'ocean',
    label: '海浪',
    icon: Volume2
  }, {
    id: 'forest',
    label: '森林',
    icon: Volume2
  }, {
    id: 'bell',
    label: '钟声',
    icon: Volume2
  }];
  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsPlaying(false);
            onComplete?.(selectedDuration);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, selectedDuration, onComplete]);
  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const progress = (selectedDuration * 60 - timeLeft) / (selectedDuration * 60) * 100;
  const handleDurationSelect = duration => {
    setSelectedDuration(duration);
    setTimeLeft(duration * 60);
    setIsPlaying(false);
  };
  const handleReset = () => {
    setTimeLeft(selectedDuration * 60);
    setIsPlaying(false);
  };
  return <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">冥想计时器</h3>
      
      {/* 时长选择 */}
      <div className="flex space-x-2 mb-6">
        {durations.map(duration => <button key={duration} onClick={() => handleDurationSelect(duration)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedDuration === duration ? 'bg-[#6C47FF] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {duration}分钟
          </button>)}
      </div>

      {/* 圆形进度条 */}
      <div className="flex justify-center mb-6">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* 背景圆 */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#F0E6FF" strokeWidth="8" />
            {/* 进度圆 */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#6C47FF" strokeWidth="8" strokeLinecap="round" strokeDasharray="283" strokeDashoffset={283 - progress * 283 / 100} transform="rotate(-90 50 50)" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-gray-800">
              {formatTime(timeLeft)}
            </div>
            <div className="text-sm text-gray-500">
              {isPlaying ? '冥想中...' : '准备开始'}
            </div>
          </div>
        </div>
      </div>

      {/* 控制按钮 */}
      <div className="flex justify-center space-x-4 mb-6">
        <button onClick={() => setIsPlaying(!isPlaying)} className="w-12 h-12 bg-[#6C47FF] rounded-full flex items-center justify-center text-white hover:bg-[#5A3BE8] transition-colors">
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
        <button onClick={handleReset} className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* 音效选择 */}
      <div className="flex justify-center space-x-2">
        {sounds.map(sound => {
        const Icon = sound.icon;
        return <button key={sound.id} onClick={() => setSelectedSound(sound.id)} className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm transition-all ${selectedSound === sound.id ? 'bg-[#F0E6FF] border border-[#6C47FF] text-[#6C47FF]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              <Icon className="w-4 h-4" />
              <span>{sound.label}</span>
            </button>;
      })}
      </div>
    </div>;
}