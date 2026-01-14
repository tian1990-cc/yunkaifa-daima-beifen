// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Menu } from 'lucide-react';

export default function MobileHeader({
  title,
  onMenuClick
}) {
  return <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-[#7B4AE2] to-[#9B6DFF] rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-sm font-bold">禅</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">禅心修行</span>
        </div>
        
        <button onClick={onMenuClick} className="p-2 text-gray-600 hover:text-gray-900">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {title && <div className="mt-2">
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        </div>}
    </div>;
}