import BatteryIcon from '@/shared/icons/battery';
import WifiIcon from '@/shared/icons/wifi';
import { cn } from '@/shared/lib/cn';

const StatusBar = () => {
  return (
    <div className={cn('flex h-11 w-full items-center justify-between pl-6 pr-4')}>
      <p className={cn('font-bold')}>12:22</p>
      <div className={cn('flex items-center gap-2')}>
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
};

export default StatusBar;
