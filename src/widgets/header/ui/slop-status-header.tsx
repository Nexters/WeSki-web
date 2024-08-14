import React from 'react';
import { cn } from '@/shared/lib';

const SlopStatusHeader = () => {
  return (
    <div className={cn('mb-[26px] flex items-center justify-between px-[20px]')}>
      <h1 className={cn('title3-semibold')}>슬로프 운행 현황</h1>
      <p className={cn('body1-medium text-gray-50')}>10월 21일 23:00 업데이트</p>
    </div>
  );
};

export default SlopStatusHeader;
