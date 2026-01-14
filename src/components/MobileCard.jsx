// @ts-ignore;
import React from 'react';

export default function MobileCard({
  children,
  className = ''
}) {
  return <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-4 ${className}`}>
      {children}
    </div>;
}