import Image from 'next/image';

import { cn } from '@/shared/lib';

const CongestionPage = () => {
  return (
    <div className={cn('h-[calc(100%-154px)] overflow-scroll scrollbar-hide')}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Image
          key={index}
          src={`/congestion/mock${(index % 3) + 1}.png`}
          alt={`${index}`}
          width={376}
          height={461}
        />
      ))}
    </div>
  );
};

export default CongestionPage;
