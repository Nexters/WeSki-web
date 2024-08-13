import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { cn } from '@/shared/lib';
import CloseButton from '@/shared/ui/close-button';

interface SlopVideoProps {
  src: string;
  closeVideo: () => void;
}

const SlopVideo = ({ src, closeVideo }: SlopVideoProps) => {
  const playerRef = React.useRef<HTMLVideoElement>(null);

  return (
    <>
      <ReactHlsPlayer
        className={cn('absolute top-0 z-30 h-full w-full')}
        playerRef={playerRef}
        src={src}
        autoPlay={true}
        controls={true}
      ></ReactHlsPlayer>
      <CloseButton className="absolute right-4 top-4 z-[33]" onClick={closeVideo} />
    </>
  );
};

export default SlopVideo;
