// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Heart, Share2, Download } from 'lucide-react';

export default function DailyWisdom() {
  const wisdom = {
    text: "心如工画师，能画诸世间。五蕴悉从生，无法而不造。",
    meaning: "我们的心就像一位技艺高超的画师，能够描绘出世间的一切景象。所有的物质和精神现象（五蕴）都从心中产生，没有什么是心不能创造的。",
    source: "《华严经》"
  };
  return <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">今日法语</h3>
        <span className="text-xs text-gray-500">{new Date().toLocaleDateString('zh-CN')}</span>
      </div>
      
      <div className="space-y-4">
        <div className="text-lg text-gray-800 leading-relaxed italic">
          {wisdom.text}
        </div>
        
        <div className="text-sm text-gray-600 leading-relaxed">
          {wisdom.meaning}
        </div>
        
        <div className="text-xs text-gray-500 text-right">
          —— {wisdom.source}
        </div>
      </div>
      
      <div className="flex items-center justify-end space-x-3 mt-4 pt-4 border-t border-gray-100">
        <button className="flex items-center space-x-1 text-gray-500 hover:text-[#6C47FF] transition-colors">
          <Heart className="w-4 h-4" />
          <span className="text-xs">收藏</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-500 hover:text-[#6C47FF] transition-colors">
          <Download className="w-4 h-4" />
          <span className="text-xs">保存</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-500 hover:text-[#6C47FF] transition-colors">
          <Share2 className="w-4 h-4" />
          <span className="text-xs">分享</span>
        </button>
      </div>
    </div>;
}