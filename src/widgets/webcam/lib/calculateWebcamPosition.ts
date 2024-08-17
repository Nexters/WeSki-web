import { getBoundedPositions } from '@/shared/lib';
import React from 'react';

interface calculateWebcamPositionProps {
  containerPosition: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
  scale: number;
}

const calculateWebcamPosition = ({
  position,
  scale,
  containerPosition,
}: calculateWebcamPositionProps) => {
  const { left, top, width, height } = containerPosition;
  const clickX = position.x - left;
  const clickY = position.y - top;

  const x = (width / 2 - clickX) * scale;
  const y = (height / 2 - clickY) * scale;

  const [{ min: minX, max: maxX }, { min: minY, max: maxY }] = getBoundedPositions(
    { x, y, scale: scale },
    {
      width,
      height,
    }
  );

  const boundedX = Math.min(Math.max(x, minX), maxX);
  const boundedY = Math.min(Math.max(y, minY), maxY);

  return { boundedX, boundedY };
};

export default calculateWebcamPosition;
