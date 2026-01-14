// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { useToast, Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Play, RotateCcw, Clock } from 'lucide-react';

// @ts-ignore;
import LeftNav from '@/components/LeftNav';
export default function Scriptures(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [activeTab, setActiveTab] = useState('scripture');
  const scriptures = [{
    id: 1,
    title: '心经',
    category: '般若部',
    lastRead: '2024-01-13',
    progress: 100,
    totalChapters: 1,
    readChapters: 1,
    icon: '💖'
  }, {
    id: 2,
    title: '金刚经',
    category: '般若部',
    lastRead: '2024-01-12',
    progress: 67,
    totalChapters: 32,
    readChapters: 21,
    icon: '💎'
  }, {
    id: 3,
    title: '法华经',
    category: '法华部',
    lastRead: '2024-01-10',
    progress: 25,
    totalChapters: 28,
    readChapters: 7,
    icon: '🌸'
  }];
  const stats = {
    reading: 1,
    completed: 2,
    total: 15,
    readChapters: 29
  };
  return <div className="min-h-screen bg-[#F5F7FA] flex">
      {/* 左侧导航 */}
      <LeftNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* 主内容区 */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {/* 页面标题 */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">佛经诵读</h1>
            <p className="text-gray-600">诵读经典，增长智慧</p>
          </div>

          {/* 统计概览 */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">{stats.reading}</div>
                <div className="text-sm text-gray-600">正在诵读</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">{stats.completed}</div>
                <div className="text-sm text-gray-600">已完成</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">{stats.total}</div>
                <div className="text-sm text-gray-600">总章节</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#6C47FF] mb-1">{stats.readChapters}</div>
                <div className="text-sm text-gray-600">已读章节</div>
              </CardContent>
            </Card>
          </div>

          {/* 经文列表 */}
          <div className="grid gap-4">
            {scriptures.map(scripture => <Card key={scripture.id} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F0E6FF] to-[#FFF0F5] rounded-xl flex items-center justify-center text-xl">
                        {scripture.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{scripture.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{scripture.category}</span>
                          <span>•</span>
                          <span>最近阅读：{scripture.lastRead}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm text-gray-600 mb-1">当前进度</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#6C47FF] rounded-full" style={{
                          width: `${scripture.progress}%`
                        }} />
                          </div>
                          <span className="text-sm font-medium text-[#6C47FF]">{scripture.progress}%</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        {scripture.progress === 100 ? <Button variant="outline" size="sm">
                            <RotateCcw className="w-4 h-4 mr-2" />
                            从头开始
                          </Button> : scripture.progress > 0 ? <Button size="sm" className="bg-[#6C47FF] hover:bg-[#5A3BE8]">
                            <Play className="w-4 h-4 mr-2" />
                            继续诵读
                          </Button> : <Button size="sm" className="bg-[#6C47FF] hover:bg-[#5A3BE8]">
                            开始诵读
                          </Button>}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* 每日一偈 */}
          <div className="mt-8 p-6 bg-gradient-to-r from-[#F0E6FF] to-[#FFF0F5] rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">每日一偈</h3>
              <Clock className="w-5 h-5 text-gray-500" />
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-800 italic mb-2">
                "一切有为法，如梦幻泡影，如露亦如电，应作如是观。"
              </p>
              <p className="text-sm text-gray-600">——《金刚经》</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}