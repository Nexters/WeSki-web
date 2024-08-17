import React from 'react';
import CircleInfo from '@/shared/icons/circle-info';
import { cn } from '@/shared/lib';
import { Tooltip } from '@/shared/ui/tooltip';

const SlopStatusHeader = () => {
  return (
    <div className={cn('mb-[26px] flex items-center justify-between px-[20px]')}>
      <div className={cn('flex items-center gap-[4px]')}>
        <h1 className={cn('title3-semibold')}>슬로프 운행 현황</h1>
        <Tooltip
          trigger={
            <button>
              <CircleInfo />
            </button>
          }
          align="start"
        >
          <p className={cn('body3-medium')}>매일 스키장 홈페이지에 고지된 정보를 가져와요.</p>
        </Tooltip>
      </div>
      <p className={cn('body1-medium text-gray-50')}>10월 21일 23:00 업데이트</p>
    </div>
  );
};

export default SlopStatusHeader;
