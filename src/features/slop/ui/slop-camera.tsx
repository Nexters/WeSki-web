import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { toast } from 'sonner';
import type { Position, Webcam } from '@/entities/slop/model/model';
import ArrowRightIcon from '@/shared/icons/arrow-right';
import NeutralFace from '@/shared/icons/neutral-face';
import { cn } from '@/shared/lib';
import postAppMessage from '@/shared/lib/postAppMessage';
import CameraButton from '@/shared/ui/cam-button';
import { Tooltip } from '@/shared/ui/tooltip';
import useSlopStore from '../hooks/useSlopStore';
import calculateWebcamScaleRatio from '../lib/calculateWebcamScale';
import SlopVideo from './slop-video';

interface SlopWebcamProps {
  isWebview?: boolean;
  webcam: Webcam;
  webcamScale: number;
  isOpen: boolean;
  containerRef: React.RefObject<HTMLElement>;
  onCameraClick: ({ scale, id }: { scale: number; id: string }) => void;
  updateCameraPosition: (id: string, position: Position) => void;
}

const SlopCamera = ({
  isWebview = false,
  webcam: { scale, name, position, src, id },
  webcamScale,
  isOpen,
  containerRef,
  onCameraClick,
  updateCameraPosition,
}: SlopWebcamProps) => {
  const { setSelectedSlop, selectedCamera, setSelectedCamera, setOpenCamera, setCloseCamera } =
    useSlopStore();

  const cameraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cameraRef.current &&
      updateCameraPosition(id, {
        x: cameraRef.current.getBoundingClientRect().x,
        y: cameraRef.current.getBoundingClientRect().y,
      });
  }, [id, updateCameraPosition, cameraRef]);

  const openVideo = () => {
    setOpenCamera();

    if (!src) {
      postAppMessage('선택한 웹캠은 아직 준비중 이에요', isWebview, (message) =>
        toast(
          <>
            <NeutralFace /> {message}
          </>
        )
      );
    }
  };

  return (
    <>
      <div ref={cameraRef} className={cn('absolute z-10', position.top, position.left)}>
        <div className={cn('relative')}>
          <Tooltip
            trigger={
              <CameraButton
                className={cn('scale-[calc(var(--v-scale))]')}
                style={
                  { '--v-scale': calculateWebcamScaleRatio(webcamScale) } as React.CSSProperties
                }
                onClick={() => {
                  setSelectedSlop(null);
                  setSelectedCamera(id);
                  onCameraClick({ scale, id: id });
                }}
              />
            }
            isOpen={isOpen}
          >
            <div className={cn('flex cursor-pointer items-center')} onClick={openVideo}>
              <p className={cn('body3-medium')}>{name}</p>
              <ArrowRightIcon />
            </div>
          </Tooltip>
        </div>
      </div>
      {containerRef?.current &&
        selectedCamera.isOpen &&
        selectedCamera.id === id &&
        src &&
        createPortal(<SlopVideo src={src} closeVideo={setCloseCamera} />, containerRef.current)}
    </>
  );
};

export default SlopCamera;
