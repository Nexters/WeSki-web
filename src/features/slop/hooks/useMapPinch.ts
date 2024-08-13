import { useSpring } from '@react-spring/web';
import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react';
import type { RefObject } from 'react';
import { useRef } from 'react';
import { getBoundedPositions } from '@/shared/lib';

const useGesture = createUseGesture([pinchAction, dragAction]);

const useMapPinch = (containerRef: RefObject<HTMLElement>) => {
  const [style, api] = useSpring(() => ({ scale: 1, x: 0, y: 0 }));
  const ref = useRef<HTMLDivElement>(null);

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
        return memo;
      },
      onPinchEnd: () => {
        if (style.scale.get() < 1) {
          api.start({ scale: 1, x: 0, y: 0 });
        }
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

        if (x < minX) x = minX;
        if (x > maxX) x = maxX;
        if (y < minY) y = minY;
        if (y > maxY) y = maxY;

        api.start({ x, y });
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 1, max: 2 }, rubberband: true },
    }
  );

  return { ref, style, api };
};

export default useMapPinch;
