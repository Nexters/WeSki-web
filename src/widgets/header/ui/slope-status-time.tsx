import { cn } from '@/shared/lib';

type SlopeStatusTimeProps = {
  times: {
    day: {
      label: string;
      value?: string;
    };
    night: {
      label: string;
      value?: string;
    };
    lateNight: {
      label: string;
      value?: string;
    };
  };
};

const SlopeStatusTime = ({ times }: SlopeStatusTimeProps) => {
  return (
    <div
      className={cn(
        'mx-[20px] mt-[26px] flex h-[65px] items-center justify-around rounded-[3px] border border-black/5 bg-gray-20 px-5 py-2.5'
      )}
    >
      {Object.entries(times).map(([key, value]) => (
        <div key={key} className={cn('flex w-[90px] flex-col items-center gap-2')}>
          <span className={cn('body1-semibold text-gray-60')}>{value.label}</span>
          <span className={cn('body1')}>{value.value || '-'}</span>
        </div>
      ))}
    </div>
  );
};

export default SlopeStatusTime;
