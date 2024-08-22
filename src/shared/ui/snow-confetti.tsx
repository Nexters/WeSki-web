import { loadSnowPreset } from '@tsparticles/preset-snow';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadImageShape } from '@tsparticles/shape-image';
import { useEffect, useState } from 'react';
import { cn } from '../lib';

export const SnowConfetti = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSnowPreset(engine);
      await loadImageShape(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          className={cn(
            'pointer-events-none fixed left-1/2 top-0 size-full max-w-[670px] -translate-x-1/2'
          )}
          id="tsparticles"
          options={{
            particles: {
              shape: {
                type: 'image',
                options: {
                  image: {
                    src: '/assets/snow-particle.svg',
                  },
                },
              },
            },
            preset: 'snow',
            fullScreen: false,
            background: { opacity: 0 },
          }}
        />
      )}
    </>
  );
};
