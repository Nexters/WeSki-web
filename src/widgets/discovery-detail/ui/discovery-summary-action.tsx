import SnowIcon from '@/shared/icons/snow';
import { cn } from '@/shared/lib';

interface DiscoverySummaryActionProps {
  name: string;
  title: string;
  onClick: () => void;
}

const DiscoverySummaryAction = ({ name, title, onClick }: DiscoverySummaryActionProps) => {
  return (
    <div
      key={name}
      className={cn('flex cursor-pointer flex-col items-center gap-[7px]')}
      onClick={onClick}
    >
      <SnowIcon />
      <p className={cn('body1-semibold text-gray-60')}>{title}</p>
    </div>
  );
};

export default DiscoverySummaryAction;
