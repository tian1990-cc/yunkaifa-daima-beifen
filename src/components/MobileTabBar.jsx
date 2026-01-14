// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Clock, BookOpen, GraduationCap, User } from 'lucide-react';

export default function MobileTabBar({
  activeTab,
  onTabChange
}) {
  const tabs = [{
    id: 'meditation',
    label: '禅定',
    icon: Clock
  }, {
    id: 'scriptures',
    label: '经文',
    icon: BookOpen
  }, {
    id: 'courses',
    label: '课程',
    icon: GraduationCap
  }, {
    id: 'profile',
    label: '我的',
    icon: User
  }];
  return <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-2">
        {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return <button key={tab.id} onClick={() => onTabChange(tab.id)} className={`flex flex-col items-center px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-[#7B4AE2]' : 'text-gray-500'}`}>
              <Icon className={`w-6 h-6 ${isActive ? 'text-[#7B4AE2]' : 'text-gray-400'}`} />
              <span className={`text-xs mt-1 ${isActive ? 'font-medium' : 'font-normal'}`}>
                {tab.label}
              </span>
            </button>;
      })}
      </div>
    </div>;
}