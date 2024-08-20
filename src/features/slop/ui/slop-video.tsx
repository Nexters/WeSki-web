import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { cn } from '@/shared/lib';
import CloseButton from '@/shared/ui/close-button';

const ReactHlsPlayer = dynamic(() => import('react-hls-player'), { ssr: false });

interface SlopVideoProps {
  src: string;
  closeVideo: () => void;
}

const SlopVideo = ({ src, closeVideo }: SlopVideoProps) => {
  const playerRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = playerRef.current;

    function fireOnVideoStart() {
      document.body.classList.add('video-active');
      player?.focus();
    }

    player?.addEventListener('play', fireOnVideoStart);

    return () => {
      player?.removeEventListener('play', fireOnVideoStart);
      document.body.classList.remove('video-active');
    };
  }, [playerRef]);

  return (
    <div className={cn('absolute top-0 z-50 h-full w-full bg-black')}>
      <ReactHlsPlayer
        className={cn('absolute top-0 z-50 h-full w-full')}
        playerRef={playerRef}
        src={src}
        autoPlay={true}
        controls={false}
      />
      <CloseButton className="video-close absolute right-4 top-4 z-[51]" onClick={closeVideo} />
    </div>
  );
};

export default SlopVideo;
