import React from 'react';
import type { Level } from '@/entities/slop/model/model';
import LevelChip from '@/entities/slop/ui/level-chip';
import CheckIcon from '@/shared/icons/check';
import CloseIcon from '@/shared/icons/close';
import { cn } from '@/shared/lib';
import useSlopStore from '../hooks/useSlopStore';

interface SlopStatusListProps {
  list: {
    id: string;
    name: string;
    level: Level;
    isDayOpen: boolean;
    isNightOpen: boolean;
    isLateNightOpen: boolean;
  }[];
}

const SlopStatusList = ({ list }: SlopStatusListProps) => {
  const { selectedSlop, setSelectedSlop } = useSlopStore();

  const handleSlopClick = ({ id }: { id: string }) => {
    setSelectedSlop(id);
  };
  return (
    <table className={cn('mt-[24px] w-full')}>
      <colgroup>
        <col className="w-[40%]" /> {/* 슬로프명 */}
        <col className="w-[20%]" /> {/* 난이도 */}
        <col className="w-[13.33%]" /> {/* 주간 */}
        <col className="w-[13.33%]" /> {/* 야간 */}
        <col className="w-[13.33%]" /> {/* 심야 */}
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
        {list.map((item, index) => (
          <tr
            key={index}
            className={cn(selectedSlop === item.id && 'bg-main-5')}
            onClick={() => handleSlopClick({ id: item.id })}
          >
            <td className={cn('body1-semibold py-[12px] pl-5 text-left text-gray-80')}>
              {item.name}
            </td>
            <td className={cn('text-center')}>
              <LevelChip level={item.level} className={cn('m-auto')} />
            </td>
            <td className={cn('text-center')}>
              <StatusIcon isOpen={item.isDayOpen} className={cn('m-auto')} />
            </td>
            <td className={cn('text-center')}>
              <StatusIcon isOpen={item.isNightOpen} className={cn('m-auto')} />
            </td>
            <td className={cn('pr-5 text-center')}>
              <StatusIcon isOpen={item.isLateNightOpen} className={cn('m-auto')} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SlopStatusList;

const StatusIcon = ({ isOpen, className }: { isOpen: boolean; className?: string }) =>
  isOpen ? (
    <CheckIcon className={cn('h-[24px] w-[24px] text-main-1', className)} />
  ) : (
    <CloseIcon className={cn('h-[24px] w-[24px] text-gray-40', className)} />
  );
