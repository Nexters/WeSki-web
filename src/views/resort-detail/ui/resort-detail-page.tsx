'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

import blind1 from '@public/blinds/blind_01.png';
import { type ResortInfo, resortApi, ResortData } from '@/entities/resort';
import { usePostVote } from '@/entities/resort/api/use-post-vote';
import { slopeApi } from '@/entities/slope';
import { RESORT_DOMAIN } from '@/entities/slope/model';
import type { Position, Slope, Webcam } from '@/entities/slope/model';
import { formatDate } from '@/features/resort-detail/lib/formatDate';
import { canVote, getVoteData, saveVoteData } from '@/features/resort-detail/lib/vote';
import AppDownloadDialog from '@/features/resort-detail/ui/app-download-dialog';
import useMapPinch from '@/features/slope/hooks/useMapPinch';
import calculateWebcamPosition from '@/features/slope/lib/calculateWebcamPosition';
import CheckIcon from '@/shared/icons/check';
import { cn } from '@/shared/lib';
import { Header } from '@/widgets/header/ui';
import { ResortContentTabList } from '@/widgets/resort-detail/model/constants';
import ResortSummary from '@/widgets/resort-detail/ui/resort-summary';
import { WebcamMap, WebcamSlopeList } from '@/widgets/webcam/ui';

const ResortDetailPage = ({ params }: { params: { resortId: string } }) => {
  const resortInfo = ResortData.find((resort) => resort.id === +params?.resortId) as ResortInfo;
  const { data: resortsData } = useQuery(resortApi.resortQueries.list());
  const resort = resortsData?.find((resort) => resort.resortId === +params?.resortId);
  const { data: voteData } = useQuery(resortApi.resortQueries.vote(+params?.resortId));
  const data = RESORT_DOMAIN[resortInfo?.map as keyof typeof RESORT_DOMAIN];
  const { data: slopeRawData } = useQuery(slopeApi.slopeQueries.slope(+params?.resortId));
  const key = ResortData.find((resort) => resort.id === +params?.resortId)
    ?.map as keyof typeof RESORT_DOMAIN;
  const slopes = slopeRawData?.slopes
    .filter((slope) =>
      RESORT_DOMAIN[key].slopes.find((slopeConstant) => slopeConstant.id === slope.slopeId)
    )
    .map((slope) => ({
      ...slope,
      ...RESORT_DOMAIN[key].slopes.find((slopeConstant) => slopeConstant.id === slope.slopeId),
    })) as Slope[];
  const webcams = slopeRawData?.webcams
    .filter((webcam) =>
      RESORT_DOMAIN[key].webcams.find((webcamConstant) => webcamConstant.id === webcam.number)
    )
    .map((webcam) => ({
      ...webcam,
      ...RESORT_DOMAIN[key].webcams.find((webcamConstant) => webcamConstant.id === webcam.number),
    })) as Webcam[];
  const [selectedTab, setSelectedTab] = useState('webcam');
  const [showAppDownloadDialog, setShowAppDownloadDialog] = useState(true);
  const { mutateAsync } = usePostVote(+params?.resortId);

  const [isPositive, setIsPositive] = useState<boolean>(true);
  const [cameraPositions, setCameraPositions] = useState<{
    [key: number]: Position;
  }>({});
  const { ref, style, api, containerRef } = useMapPinch();

  const updateCameraPosition = useCallback((id: number, position: Position) => {
    setCameraPositions((prev) => ({ ...prev, [id]: position }));
  }, []);

  const handleFocusSlopCamClick = ({ id }: { id: number }) => {
    const { width, height } = containerRef.current!.getBoundingClientRect();
    const { boundedX, boundedY } = calculateWebcamPosition({
      containerPosition: { left: 0, top: 0, width, height },
      position: {
        x: cameraPositions[id].x,
        y: cameraPositions[id].y,
      },
      scale: 1,
    });
    api.start({ scale: 1, x: boundedX, y: boundedY });
  };

  const handleVote = useCallback(async () => {
    if (!canVote(params?.resortId)) {
      toast.error('하루에 한 번만 투표할 수 있어요');
      return;
    }
    try {
      await mutateAsync({ isPositive });
    } catch (error) {
      console.log(error);
    } finally {
      const voteData = getVoteData();
      voteData[params?.resortId] = formatDate(new Date());
      saveVoteData(voteData);
      toast.success('고마워요! 투표의 결과가 반영되었어요');
    }
  }, [isPositive, mutateAsync, params?.resortId]);

  useEffect(() => {
    gtag('event', 'page_view_details', { detail_type: params?.resortId });
  }, []);

  if (!resortInfo || !resort || !slopes || !webcams) return;

  return (
    <div className={cn('size-full')}>
      <Header resortId={resort.resortId} resortName={resort.name} hasBackButton hasShareButton />
      <ResortSummary {...resort} {...resortInfo.url} />
      <ul className={cn('relative z-10 flex size-full h-[53px] bg-white')}>
        {ResortContentTabList.map((tab) => (
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
            ref={ref}
            style={style}
            containerRef={containerRef}
            slopes={slopes}
            webcams={webcams}
            MapComponent={data.MapComponent}
            onCameraClick={handleFocusSlopCamClick}
            updateCameraPosition={updateCameraPosition}
          />
          <WebcamSlopeList
            className={cn('relative z-10 bg-white')}
            webcams={webcams}
            slopes={slopes}
            onItemClick={handleFocusSlopCamClick}
          />
          <div className={cn('h-[6px] w-full bg-gray-20 md:hidden')} />
          <div className={cn('relative z-10 flex flex-col gap-5 bg-white px-6 py-8 md:hidden')}>
            <div className={cn('flex flex-col gap-6')}>
              <p className={cn('title3-semibold')}>오늘의 설질</p>
              <div className={cn('flex flex-col gap-1')}>
                <p className={cn('h3-semibold')}>{voteData?.status}</p>
                <p className={cn('body1-semibold text-gray-60')}>
                  {voteData?.totalVotes}명 중{' '}
                  <span className={cn('body1-bold text-main-1')}>{voteData?.positiveVotes}</span>
                  명이 긍정적으로 투표했어요.
                </p>
              </div>
            </div>
            <p className={cn('title3-semibold')}>오늘의 현장은 설질 괜찮을까요?</p>
            <div className={cn('flex flex-col gap-5')}>
              <div className={cn('flex flex-col gap-3')}>
                <button
                  className={cn(
                    'flex h-10 w-full items-center justify-between rounded-[8px] border border-main-1 pl-4 pr-3',
                    !isPositive && 'border-gray-30'
                  )}
                  onClick={() => setIsPositive(true)}
                >
                  <p className={cn('body1-regular text-gray-60')}>괜찮을 것 같아요</p>
                  {isPositive && <CheckIcon className={cn('text-main-1')} />}
                </button>
                <button
                  className={cn(
                    'flex h-10 items-center justify-between rounded-[8px] border border-main-1 pl-4 pr-3',
                    isPositive && 'border-gray-30'
                  )}
                  onClick={() => setIsPositive(false)}
                >
                  <p className={cn('body1-regular text-gray-60')}>별로일 것 같아요</p>
                  {!isPositive && <CheckIcon className={cn('text-main-1')} />}
                </button>
              </div>
              <button
                className={cn(
                  'title3-semibold flex h-[52px] items-center justify-center rounded-[8px] bg-main-1 text-gray-10'
                )}
                onClick={handleVote}
              >
                투표하기
              </button>
            </div>
          </div>
        </>
      )}
      {selectedTab === 'weather' && (
        <div className={cn('relative bg-white pb-10')}>
          <p className={cn('title3-semibold mb-6 pl-6 pt-8 md:pl-10 md:pt-10')}>실시간 날씨</p>
          <div className={cn('relative h-[337px] md:ml-4')}>
            <Image src={blind1} alt="blind1" fill className={cn('object-cover object-left')} />
          </div>
          <div className={cn('mt-10 h-[6px] w-full bg-gray-20')} />
          <p className={cn('title3-semibold mb-6 pl-6 pt-8 md:pl-10')}>주간 예보</p>
          <div
            className={cn(
              'h-[372px] bg-[url("/blinds/blind_02-1.png")] bg-contain bg-no-repeat',
              'md:h-[180px] md:bg-[url("/blinds/blind_02.png")]'
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
          <p className={cn('title3-semibold mb-6 pl-6 pt-8 md:pl-10 md:pt-10')}>인기 시간대</p>
          <div
            className={cn(
              'aspect-[2.86] w-full bg-[url("/blinds/blind_03-1.png")] bg-cover',
              'md:aspect-[2.62] md:bg-[url("/blinds/blind_03.png")]'
            )}
          />
          <div className={cn('mt-10 h-[6px] w-full bg-gray-20')} />
          <p className={cn('title3-semibold mb-6 pl-6 pt-8 md:pl-10')}>슬로프 운행 현황</p>
          <div
            className={cn(
              'aspect-[0.71] w-full bg-[url("/blinds/blind_04-1.png")] bg-cover',
              'aspect-[0.88] md:bg-[url("/blinds/blind_04.png")]'
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

export default ResortDetailPage;
