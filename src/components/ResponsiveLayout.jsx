// @ts-ignore;
import React, { useState, useEffect } from 'react';

// @ts-ignore;
import WebSidebar from '@/components/WebSidebar';
// @ts-ignore;
import MobileBottomNav from '@/components/MobileBottomNav';
export default function ResponsiveLayout(props) {
  const {
    children,
    activeTab,
    onTabChange
  } = props;
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 检测设备类型
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Web端导航栏宽度调整
  const handleResize = newWidth => {
    setSidebarWidth(Math.max(200, Math.min(400, newWidth)));
  };

  // 导航栏收缩/展开
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  if (isMobile) {
    // 移动端布局
    return <div className="min-h-screen bg-[#F5F7FA] flex flex-col">
        {/* 移动端顶部导航 */}
        <div className="bg-white shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#6C47FF] to-[#8B5CF6] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">禅</span>
              </div>
              <h1 className="text-lg font-bold text-gray-800">禅心修行</h1>
            </div>
            <button className="text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* 主内容区 */}
        <main className="flex-1 overflow-auto pb-16">
          {children}
        </main>

        {/* 移动端底部导航 */}
        <MobileBottomNav activeTab={activeTab} onTabChange={onTabChange} />
      </div>;
  }

  // Web端布局
  return <div className="min-h-screen bg-[#F5F7FA] flex">
      {/* Web侧边栏 */}
      <WebSidebar activeTab={activeTab} onTabChange={onTabChange} width={isCollapsed ? 80 : sidebarWidth} isCollapsed={isCollapsed} onResize={handleResize} onToggle={toggleSidebar} />

      {/* 主内容区 */}
      <main className="flex-1 overflow-auto transition-all duration-300" style={{
      marginLeft: isCollapsed ? '80px' : `${sidebarWidth}px`
    }}>
        {children}
      </main>
    </div>;
}