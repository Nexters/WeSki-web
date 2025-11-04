import React from 'react';

import type { Slope } from '@/entities/slope';
import LevelChip from '@/entities/slope/ui/level-chip';
import CheckIcon from '@/shared/icons/check';
import CloseIcon from '@/shared/icons/close';
import { cn } from '@/shared/lib';

import useSlopeStore from '../hooks/useSlopeStore';


interface SlopeStatusListProps {
  resortId: number;
  slopes?: Slope[];
}

const SlopeStatusList = ({ resortId, slopes }: SlopeStatusListProps) => {
  const { selectedSlope, setSelectedSlope } = useSlopeStore();

  const handleSlopClick = ({ id }: { id: number }) => {
    gtag('event', 'details_slope_slope_click', { detail_type: resortId, slope_type: id });
    setSelectedSlope(id);
  };
  return (
    <table className={cn('mt-[24px] w-full')}>
      <colgroup>
        <col className="w-[40%]" />
        {/* 슬로프명 */}
        <col className="w-[20%]" />
        {/* 난이도 */}
        <col className="w-[13.33%]" />
        {/* 주간 */}
        <col className="w-[13.33%]" />
        {/* 야간 */}
        <col className="w-[13.33%]" />
        {/* 심야 */}
      </colgroup>
      <thead>
        <tr>
          <th className={cn('body1-semibold pl-5 text-left text-gray-60')}>슬로프명</th>
          <th className={cn('body1-semibold text-center text-gray-60')}>난이도</th>
          <th className={cn('body1-semibold text-center text-gray-60')}>주간</th>
          <th className={cn('body1-semibold text-center text-gray-60')}>야간</th>
          <th className={cn('body1-semibold pr-5 text-center text-gray-60')}>심야</th>
        </tr>
      </thead>
      <tbody>
        {slopes?.map((slope) => (
          <tr
            key={slope.name}
            className={cn(selectedSlope === slope.slopeId && 'bg-main-5')}
            onClick={() => handleSlopClick({ id: slope.slopeId })}
          >
            <td className={cn('body1-semibold py-[12px] pl-5 text-left text-gray-80')}>
              {slope.name}
            </td>
            <td className={cn('text-center')}>
              <LevelChip level={slope.difficulty} className={cn('m-auto')} />
            </td>
            <td className={cn('text-center')}>
              <StatusIcon isOpen={slope.isDayOperating} className={cn('m-auto')} />
            </td>
            <td className={cn('text-center')}>
              <StatusIcon isOpen={slope.isNightOperating} className={cn('m-auto')} />
            </td>
            <td className={cn('pr-5 text-center')}>
              <StatusIcon isOpen={slope.isLateNightOperating} className={cn('m-auto')} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SlopeStatusList;

const StatusIcon = ({ isOpen, className }: { isOpen: boolean; className?: string }) =>
  isOpen ? (
    <CheckIcon className={cn('h-[24px] w-[24px] text-main-1', className)} />
  ) : (
    <CloseIcon className={cn('h-[24px] w-[24px] text-gray-40', className)} />
  );
