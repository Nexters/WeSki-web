import { useState } from 'react';
// eslint-disable-next-line boundaries/element-types
import { WebcamMap, WebcamSlopList } from '@/widgets/webcam/ui';
import { JISAN } from '@/entities/slop/model';
import { cn } from '@/shared/lib';
import { DiscoveryContentTabList } from '../model/constants';

const DUMMY2 = JISAN;

const DiscoveryContent = () => {
  const [selectedTab, setSelectedTab] = useState('webcam');
  const [selectedSlop, setSelectedSlop] = useState<string | null>(null);

  return (
    <>
      <ul className={cn('flex size-full h-[53px] bg-white')}>
        {DiscoveryContentTabList.map((tab) => (
          <li
            key={tab.name}
            className={cn(
              'title3-semibold flex h-[51px] flex-1 cursor-pointer items-center justify-center text-gray-90',
              selectedTab === tab.name ? 'box-content border-b-2 border-gray-90' : 'text-gray-40'
            )}
            onClick={() => setSelectedTab(tab.name)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      {selectedTab === 'webcam' && (
        <>
          <WebcamMap
            slops={DUMMY2.slops}
            MapComponent={DUMMY2.MapComponent}
            selectedSlop={selectedSlop}
            setSelectedSlop={setSelectedSlop}
          />
          <WebcamSlopList
            className={cn('bg-white')}
            type="website"
            list={DUMMY2.slops.map((item) => ({
              ...item,
              isWebcam: !!item.webcam,
            }))}
            selectedSlop={selectedSlop}
            setSelectedSlop={setSelectedSlop}
          />
        </>
      )}
      {selectedTab === 'weather' && <div>날씨</div>}
      {selectedTab === 'slop' && <div>슬로프</div>}
    </>
  );
};

export default DiscoveryContent;
