import Hls from 'hls.js';
import React, { useEffect, useRef } from 'react';
import { cn } from '@/shared/lib';
import CloseButton from '@/shared/ui/close-button';
import Loading from '@/shared/ui/loading';
import useTimer from '../hooks/useTimer';

interface SlopVideoProps {
  src: string;
  closeVideo: () => void;
}

const SlopVideo = ({ src, closeVideo }: SlopVideoProps) => {
  const playerRef = React.useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  const { isRunning, startTimer, timeLeft } = useTimer(30, () => {
    handleVideoClose();
  });

  const handleVideoClose = () => {
    closeVideo();
  };

  useEffect(() => {
    const video = playerRef.current;
    if (!video) return;

    const handleStart = () => {
      startTimer();
    };

    if (Hls.isSupported()) {
      const hls = new Hls();
      hlsRef.current = hls;

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.FRAG_BUFFERED, handleStart);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('canplay', handleStart);
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
      if (video) {
        video.removeEventListener('canplay', handleStart);
        video.pause();
        video.src = '';
        video.load();
      }
    };
  }, [src, startTimer]);

  return (
    <div
      className={cn('absolute top-0 z-50 flex h-full w-full items-center justify-center bg-black')}
    >
      <div className={cn('absolute flex h-[110px] flex-col items-center justify-between')}>
        <Loading />
        <p className={cn('body1-medium text-white')}>웹캠을 불러오고 있어요</p>
      </div>

      <video
        playsInline
        className={cn('absolute top-0 z-50 h-full w-full')}
        ref={playerRef}
        autoPlay={true}
        controls={false}
      />
      {isRunning && (
        <div className="absolute bottom-0 z-[51] flex w-full justify-center bg-gray-100 bg-opacity-50 py-[9px] text-center">
          <p className={cn('body1-medium text-white')}>
            웹캠 화면은 {timeLeft}초 후 자동으로 닫힙니다.
          </p>
        </div>
      )}
      <CloseButton
        className="video-close absolute right-4 top-4 z-[51]"
        onClick={handleVideoClose}
      />
    </div>
  );
};

export default SlopVideo;
