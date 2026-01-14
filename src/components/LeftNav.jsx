// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Brain, BookOpen, GraduationCap, User } from 'lucide-react';

export default function LeftNav({
  activeTab,
  onTabChange
}) {
  const navItems = [{
    id: 'meditation',
    icon: Brain,
    label: '禅定',
    color: '#6C47FF'
  }, {
    id: 'scripture',
    icon: BookOpen,
    label: '经文',
    color: '#4CAF50'
  }, {
    id: 'course',
    icon: GraduationCap,
    label: '课程',
    color: '#2196F3'
  }, {
    id: 'profile',
    icon: User,
    label: '我的',
    color: '#FFC107'
  }];
  return <div className="w-64 bg-white h-screen shadow-lg flex flex-col">
      {/* Logo区域 */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#6C47FF] to-[#8B5CF6] rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">禅心修行</h1>
            <p className="text-xs text-gray-500">Mindful Journey</p>
          </div>
        </div>
      </div>

      {/* 导航菜单 */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return <button key={item.id} onClick={() => onTabChange(item.id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-[#F0E6FF] border-l-4 border-[#6C47FF]' : 'hover:bg-gray-50'}`}>
              <Icon className={`w-5 h-5 ${isActive ? 'text-[#6C47FF]' : 'text-gray-500'}`} />
              <span className={`font-medium ${isActive ? 'text-[#6C47FF]' : 'text-gray-700'}`}>
                {item.label}
              </span>
            </button>;
      })}
      </nav>

      {/* 底部信息 */}
      <div className="p-4 border-t border-gray-100">
        <div className="text-center text-xs text-gray-500">
          <p>静心修行，智慧生活</p>
        </div>
      </div>
    </div>;
}