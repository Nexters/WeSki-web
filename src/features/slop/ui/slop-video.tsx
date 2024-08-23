import Hls from 'hls.js';
import React, { useEffect } from 'react';
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
  const { isRunning, startTimer, timeLeft } = useTimer(30, () => {
    handleVideoClose();
  });

  const handleVideoClose = () => {
    closeVideo();
  };

  useEffect(() => {
    const video = playerRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.FRAG_BUFFERED, () => {
        startTimer();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('canplay', () => {
        startTimer;
      });
    }
  }, [src, startTimer]);

  return (
    <div
      className={cn('absolute top-0 z-50 flex h-full w-full items-center justify-center bg-black')}
    >
      <Loading />

      <video
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
