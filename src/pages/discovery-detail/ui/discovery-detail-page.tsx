'use client';

import { useState } from 'react';
import { useCallback } from 'react';
import { DiscoveryContentTabList } from '@/widgets/discovery-detail/model/constants';
import DiscoverySummary from '@/widgets/discovery-detail/ui/discovery-summary';
import { Header } from '@/widgets/header/ui';
import { WebcamMap, WebcamSlopList } from '@/widgets/webcam/ui';
import useMapPinch from '@/features/slop/hooks/useMapPinch';
import calculateWebcamPosition from '@/features/slop/lib/calculateWebcamPosition';
import { DiscoveryData } from '@/entities/discovery';
import { JISAN } from '@/entities/slop/model';
import type { Position } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';

const DUMMY2 = JISAN;

const DiscoveryDetailPage = ({ params }: { params: { resortId: number } }) => {
  const discovery = DiscoveryData.find((discovery) => discovery.id === +params?.resortId);
  const [selectedTab, setSelectedTab] = useState('webcam');

  const [cameraPositions, setCameraPositions] = useState<{
    [key: string]: Position;
  }>({});
  const { ref, style, api, containerRef } = useMapPinch();

  const updateCameraPosition = useCallback((id: string, position: Position) => {
    setCameraPositions((prev) => ({ ...prev, [id]: position }));
  }, []);

  const handleFocusSlopCamClick = ({ id, scale }: { id: string; scale: number }) => {
    const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
    const { boundedX, boundedY } = calculateWebcamPosition({
      containerPosition: { left, top, width, height },
      position: {
        x: cameraPositions[id].x,
        y: cameraPositions[id].y,
      },
      scale: scale,
    });
    api.start({ scale: scale, x: boundedX, y: boundedY });
  };

  if (!discovery) return;

  return (
    <div className={cn('size-full')}>
      <Header hasBackButton hasShareButton />
      <DiscoverySummary {...discovery} />
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
            containerRef={containerRef}
            style={style}
            ref={ref}
            updateCameraPosition={updateCameraPosition}
            onCameraClick={handleFocusSlopCamClick}
          />
          <WebcamSlopList
            className={cn('bg-white')}
            list={DUMMY2.slops.map((item) => ({
              ...item,
              isWebcam: !!item.webcam,
            }))}
            onItemClick={handleFocusSlopCamClick}
          />
        </>
      )}
      {selectedTab === 'weather' && <div>날씨</div>}
      {selectedTab === 'slop' && <div>슬로프</div>}
    </div>
  );
};

export default DiscoveryDetailPage;
