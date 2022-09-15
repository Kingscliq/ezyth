import React, { useCallback, useMemo } from 'react';
import { Container } from 'react-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { loadLinksPreset } from 'tsparticles-preset-links';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadLinksPreset(engine);
  }, []);

  // const particlesLoaded = useCallback(
  //   async (container: Container | undefined) => {
  //     await console.log(container);
  //   },
  //   []
  // );

  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 10,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 0.5,
        },
        collisions: {
          enable: true,
        },
        move: {
          directions: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 40,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };
  }, []);
  return (
    <div className="-z-50">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options as any}
      />
    </div>
  );
};

export default ParticlesBackground;
