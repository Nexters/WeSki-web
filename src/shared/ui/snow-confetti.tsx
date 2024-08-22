import { loadSnowPreset } from '@tsparticles/preset-snow';
import { loadImageShape } from '@tsparticles/shape-image';
import Particles, { initParticlesEngine } from '@tsparticles/react';
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
          className={cn('pointer-events-none fixed left-0 top-0 size-full')}
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
