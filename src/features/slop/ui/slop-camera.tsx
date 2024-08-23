import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { toast } from 'sonner';
import type { Position, Webcam } from '@/entities/slop/model/model';
import ArrowRightIcon from '@/shared/icons/arrow-right';
import NeutralFace from '@/shared/icons/neutral-face';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';
import { Tooltip } from '@/shared/ui/tooltip';
import useSlopStore from '../hooks/useSlopStore';
import SlopVideo from './slop-video';

interface SlopWebcamProps {
  webcam: Webcam;
  isOpen: boolean;
  containerRef: React.RefObject<HTMLElement>;
  onCameraClick: ({ scale, id }: { scale: number; id: string }) => void;
  updateCameraPosition: (id: string, position: Position) => void;
}

const SlopCamera = ({
  webcam: { scale, name, position, src, id },
  isOpen,
  containerRef,
  onCameraClick,
  updateCameraPosition,
}: SlopWebcamProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const cameraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cameraRef.current &&
      updateCameraPosition(id, {
        x: cameraRef.current.getBoundingClientRect().x,
        y: cameraRef.current.getBoundingClientRect().y,
      });
  }, [id, updateCameraPosition, cameraRef]);

  const toggleVideo = () => {
    setIsVideoOpen((pre) => !pre);

    if (!src) {
      toast(
        <>
          <NeutralFace /> 선택한 웹캠은 아직 준비중 이에요
        </>
      );
    }
  };

  const { setSelectedSlop } = useSlopStore();

  return (
    <>
      <div
        ref={cameraRef}
        className={cn('absolute z-10', position.top, position.left)}
        onClick={() => {
          setSelectedSlop(null);
          onCameraClick({ scale, id: id });
        }}
      >
        <div className={cn('relative')}>
          <Tooltip trigger={<CameraButton />} isOpen={isOpen}>
            <div className={cn('flex items-center')}>
              <p className={cn('body3-medium')} onClick={toggleVideo}>
                {name}
              </p>
              <ArrowRightIcon />
            </div>
          </Tooltip>
        </div>
      </div>
      {containerRef?.current &&
        isVideoOpen &&
        src &&
        createPortal(<SlopVideo src={src} closeVideo={toggleVideo} />, containerRef.current)}
    </>
  );
};

export default SlopCamera;
