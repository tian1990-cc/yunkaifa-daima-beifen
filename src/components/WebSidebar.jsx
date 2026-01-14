// @ts-ignore;
import React, { useState, useRef } from 'react';
// @ts-ignore;
import { Brain, BookOpen, GraduationCap, User, ChevronLeft, ChevronRight } from 'lucide-react';

export default function WebSidebar(props) {
  const {
    activeTab,
    onTabChange,
    width,
    isCollapsed,
    onResize,
    onToggle
  } = props;
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef(null);
  const navItems = [{
    id: 'meditation',
    icon: Brain,
    label: '禅定',
    color: '#6C47FF'
  }, {
    id: 'scriptures',
    icon: BookOpen,
    label: '经文',
    color: '#4CAF50'
  }, {
    id: 'courses',
    icon: GraduationCap,
    label: '课程',
    color: '#2196F3'
  }, {
    id: 'profile',
    icon: User,
    label: '我的',
    color: '#FFC107'
  }];

  // 拖拽调整宽度
  const handleMouseDown = e => {
    e.preventDefault();
    setIsResizing(true);
    const startX = e.clientX;
    const startWidth = width;
    const handleMouseMove = e => {
      const newWidth = startWidth + (e.clientX - startX);
      onResize(newWidth);
    };
    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  return <div ref={sidebarRef} className="bg-white h-screen shadow-lg flex flex-col transition-all duration-300 relative" style={{
    width: `${width}px`
  }}>
      {/* 调整宽度的拖拽条 */}
      <div className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize bg-transparent hover:bg-gray-200 transition-colors z-10" onMouseDown={handleMouseDown} />

      {/* Logo区域 */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-[#6C47FF] to-[#8B5CF6] rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          {!isCollapsed && <div>
              <h1 className="text-xl font-bold text-gray-800">禅心修行</h1>
              <p className="text-xs text-gray-500">静心修行，智慧生活</p>
            </div>}
        </div>
      </div>

      {/* 收缩/展开按钮 */}
      <button onClick={onToggle} className="absolute -right-3 top-20 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
        {isCollapsed ? <ChevronRight className="w-4 h-4 text-gray-600" /> : <ChevronLeft className="w-4 h-4 text-gray-600" />}
      </button>

      {/* 导航菜单 */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return <button key={item.id} onClick={() => onTabChange(item.id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-[#F0E6FF] border-l-4 border-[#6C47FF]' : 'hover:bg-gray-50'}`}>
              <Icon className={`w-5 h-5 ${isActive ? 'text-[#6C47FF]' : 'text-gray-600'}`} />
              {!isCollapsed && <span className={`font-medium ${isActive ? 'text-[#6C47FF]' : 'text-gray-700'}`}>
                  {item.label}
                </span>}
            </button>;
      })}
      </nav>

      {/* 底部信息 */}
      {!isCollapsed && <div className="p-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            专注修行，回归本真
          </p>
        </div>}
    </div>;
}