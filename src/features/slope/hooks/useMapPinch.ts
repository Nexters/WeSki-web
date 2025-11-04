import { useSpring } from '@react-spring/web';
import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react';
import { useRef, useState } from 'react';

import { getBoundedPositions } from '@/shared/lib';

const useGesture = createUseGesture([pinchAction, dragAction]);

const useMapPinch = () => {
  const [style, api] = useSpring(() => ({ scale: 1, x: 0, y: 0 }));
  const [scale, setScale] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGesture(
    {
      onPinch: ({ origin: [ox, oy], first, movement: [ms], offset: [s], memo }) => {
        if (first) {
          const { width, height, x, y } = ref.current!.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({ scale: s, x, y });
        setScale(s);
        return memo;
      },
      onPinchEnd: ({offset: [s]}) => {
        if (style.scale.get() < 1) {
          api.start({ scale: 1, x: 0, y: 0 });
          setScale(1);
          return;
        }
        setScale(s);
      },
      onDrag: ({ pinching, cancel, offset: [x, y] }) => {
        if (pinching) return cancel();

        const [{ min: minX, max: maxX }, { min: minY, max: maxY }] = getBoundedPositions(
          {
            x: style.x.get(),
            y: style.y.get(),
            scale: style.scale.get(),
          },
          {
            width: containerRef.current!.getBoundingClientRect().width,
            height: containerRef.current!.getBoundingClientRect().height,
          }
        );

        const boundedX = Math.min(Math.max(x, minX), maxX);
        const boundedY = Math.min(Math.max(y, minY), maxY);

        api.start({ x: boundedX, y: boundedY });
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 1, max: 2 }, rubberband: true },
    }
  );

  return { ref, style, api, containerRef, scale };
};

export default useMapPinch;
