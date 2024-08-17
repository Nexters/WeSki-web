'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCallback } from 'react';
import blind1 from '@public/blind_01.png';
import { DiscoveryContentTabList } from '@/widgets/discovery-detail/model/constants';
import AppDownloadDialog from '@/widgets/discovery-detail/ui/app-download-dialog';
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
  const [showAppDownloadDialog, setShowAppDownloadDialog] = useState(true);

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
            onClick={() => {
              setSelectedTab(tab.name);
              setShowAppDownloadDialog(true);
            }}
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
      {selectedTab === 'weather' && (
        <div className={cn('relative bg-white pb-10')}>
          <p className={cn('title3-semibold mb-6 pl-6 pt-8 xs:pl-10 xs:pt-10')}>실시간 날씨</p>
          <div className={cn('relative h-[337px] xs:ml-4')}>
            <Image src={blind1} alt="blind1" fill className={cn('object-cover object-left')} />
          </div>
          <div className={cn('mt-10 h-[6px] w-full bg-gray-20')} />
          <p className={cn('title3-semibold mb-6 pl-6 pt-8 xs:pl-10')}>주간 예보</p>
          <div
            className={cn(
              'h-[372px] bg-[url("/blind_02-1.png")] bg-contain bg-no-repeat',
              'xs:h-[180px] xs:bg-[url("/blind_02.png")]'
            )}
          />
          {showAppDownloadDialog && (
            <AppDownloadDialog
              className={cn('absolute left-1/2 top-[87px] -translate-x-1/2')}
              onClose={() => {
                setShowAppDownloadDialog(false);
              }}
            />
          )}
        </div>
      )}
      {selectedTab === 'slop' && (
        <div className={cn('relative bg-white pb-4')}>
          <p className={cn('title3-semibold mb-6 pl-6 pt-8 xs:pl-10 xs:pt-10')}>인기 시간대</p>
          <div
            className={cn(
              'aspect-[2.86] w-full bg-[url("/blind_03-1.png")] bg-cover',
              'xs:aspect-[2.62] xs:bg-[url("/blind_03.png")]'
            )}
          />
          <div className={cn('mt-10 h-[6px] w-full bg-gray-20')} />
          <p className={cn('title3-semibold mb-6 pl-6 pt-8 xs:pl-10')}>슬로프 운행 현황</p>
          <div
            className={cn(
              'aspect-[0.71] w-full bg-[url("/blind_04-1.png")] bg-cover',
              'aspect-[0.88] xs:bg-[url("/blind_04.png")]'
            )}
          />
          {showAppDownloadDialog && (
            <AppDownloadDialog
              className={cn('absolute left-1/2 top-[87px] -translate-x-1/2')}
              onClose={() => {
                setShowAppDownloadDialog(false);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DiscoveryDetailPage;
