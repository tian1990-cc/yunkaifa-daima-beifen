// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Brain, BookOpen, GraduationCap, User } from 'lucide-react';

export default function MobileBottomNav(props) {
  const {
    activeTab,
    onTabChange
  } = props;
  const navItems = [{
    id: 'meditation',
    icon: Brain,
    label: '禅定'
  }, {
    id: 'scriptures',
    icon: BookOpen,
    label: '经文'
  }, {
    id: 'courses',
    icon: GraduationCap,
    label: '课程'
  }, {
    id: 'profile',
    icon: User,
    label: '我的'
  }];
  return <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return <button key={item.id} onClick={() => onTabChange(item.id)} className="flex flex-col items-center space-y-1 px-3 py-2">
              <Icon className={`w-6 h-6 transition-colors ${isActive ? 'text-[#6C47FF]' : 'text-gray-500'}`} />
              <span className={`text-xs transition-colors ${isActive ? 'text-[#6C47FF] font-medium' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </button>;
      })}
      </div>
    </div>;
}