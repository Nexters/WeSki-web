import { animated } from '@react-spring/web';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/shared/lib';

const WebcamMap = () => {
  return (
    <section className={cn('aspect-[25/14]')}>
      <animated.div
        style={{
          touchAction: 'none',
          display: 'inline-block',
        }}
      >
        <Image src={'https://via.placeholder.com/750x420'} alt="이미지" width={420} height={750} />
        {/* 지도 영역 */}
      </animated.div>
    </section>
  );
};

export default WebcamMap;
