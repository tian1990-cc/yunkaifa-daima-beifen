// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Play, BookOpen } from 'lucide-react';

import MobileHeader from '@/components/MobileHeader';
import MobileTabBar from '@/components/MobileTabBar';
import MobileCard from '@/components/MobileCard';
export default function MobileScriptures(props) {
  const [activeTab, setActiveTab] = useState('scriptures');
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = [{
    id: 'all',
    label: '全部'
  }, {
    id: 'prajna',
    label: '般若部'
  }, {
    id: 'fahua',
    label: '法华部'
  }, {
    id: 'huayan',
    label: '华严部'
  }];
  const scriptures = [{
    id: 1,
    title: '金刚经',
    category: '般若部',
    lastRead: '2026-01-13',
    progress: 65,
    totalChapters: 32,
    readChapters: 21,
    status: 'reading'
  }, {
    id: 2,
    title: '心经',
    category: '般若部',
    lastRead: '2026-01-14',
    progress: 100,
    totalChapters: 1,
    readChapters: 1,
    status: 'completed'
  }, {
    id: 3,
    title: '法华经',
    category: '法华部',
    lastRead: null,
    progress: 0,
    totalChapters: 28,
    readChapters: 0,
    status: 'not-started'
  }];
  const getStatusText = scripture => {
    if (scripture.status === 'completed') return '已完成';
    if (scripture.status === 'reading') return '继续诵读';
    return '开始诵读';
  };
  const getStatusColor = scripture => {
    if (scripture.status === 'completed') return 'bg-green-100 text-green-700';
    if (scripture.status === 'reading') return 'bg-blue-100 text-blue-700';
    return 'bg-gray-100 text-gray-700';
  };
  return <div className="min-h-screen bg-[#F5F0FA] pb-16">
      <MobileHeader title="佛经诵读" />
      
      <div className="p-4 space-y-4">
        {/* 统计概览 */}
        <div className="grid grid-cols-2 gap-3">
          <MobileCard className="text-center">
            <div className="text-2xl font-bold text-[#7B4AE2]">2</div>
            <div className="text-xs text-gray-600">正在诵读</div>
          </MobileCard>
          <MobileCard className="text-center">
            <div className="text-2xl font-bold text-[#7B4AE2]">1</div>
            <div className="text-xs text-gray-600">已完成</div>
          </MobileCard>
          <MobileCard className="text-center">
            <div className="text-2xl font-bold text-[#7B4AE2]">3</div>
            <div className="text-xs text-gray-600">总章节</div>
          </MobileCard>
          <MobileCard className="text-center">
            <div className="text-2xl font-bold text-[#7B4AE2]">22</div>
            <div className="text-xs text-gray-600">已读章节</div>
          </MobileCard>
        </div>

        {/* 筛选标签 */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeFilter === filter.id ? 'bg-[#7B4AE2] text-white' : 'bg-white text-gray-700 border border-gray-200'}`}>
              {filter.label}
            </button>)}
        </div>

        {/* 经文列表 */}
        <div className="space-y-3">
          {scriptures.map(scripture => <MobileCard key={scripture.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#7B4AE2] rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{scripture.title}</h3>
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                      <span>{scripture.category}</span>
                      {scripture.lastRead && <span>最近阅读: {scripture.lastRead}</span>}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {scripture.progress}%
                  </div>
                  <button className={`px-3 py-1 rounded-full text-xs ${getStatusColor(scripture)}`}>
                    {getStatusText(scripture)}
                  </button>
                </div>
              </div>
              
              {/* 进度条 */}
              <div className="mt-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>进度</span>
                  <span>{scripture.readChapters}/{scripture.totalChapters} 章节</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#7B4AE2] h-2 rounded-full" style={{
                width: `${scripture.progress}%`
              }}></div>
                </div>
              </div>
            </MobileCard>)}
        </div>

        {/* 每日一偈 */}
        <MobileCard>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-2">每日一偈</h3>
            <p className="text-sm text-gray-600">
              若人散乱心，入于塔庙中，一称南无佛，皆共成佛道。
            </p>
          </div>
        </MobileCard>
      </div>

      <MobileTabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>;
}