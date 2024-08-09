import React, { useEffect } from 'react';

import styled from 'styled-components';

const Bg1 = () => {
  const height = window.innerHeight;

  useEffect(() => {
    const interBubble = document.querySelector<HTMLElement>('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble && (interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`);
      requestAnimationFrame(move);
    };
    const mouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', mouseMove);

    move();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <Container>
      <div className="gradient-bg" style={{ height }}>
        <svg viewBox="0 0 100vw 100vw" xmlns="http://www.w3.org/2000/svg" className="noiseBg">
          <filter id="noiseFilterBg">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
          </filter>

          <rect width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#noiseFilterBg)" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="svgBlur">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  --color-bg1: rgb(8, 10, 15);
  --color-bg2: rgb(0, 17, 32);
  --color1: 18, 113, 255;
  --color2: 107, 74, 255;
  --color3: 100, 100, 255;
  --color4: 50, 160, 220;
  --color5: 80, 47, 122;
  --color-interactive: 140, 100, 255;
  --circle-size: 80%;
  --blending: hard-light;

  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  @keyframes moveInCircle {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes moveVertical {
    0% {
      transform: translateY(-50%);
    }
    50% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  @keyframes moveHorizontal {
    0% {
      transform: translateX(-50%) translateY(-10%);
    }
    50% {
      transform: translateX(50%) translateY(10%);
    }
    100% {
      transform: translateX(-50%) translateY(-10%);
    }
  }

  .gradient-bg {
    width: 100vw;
    position: relative;
    background: linear-gradient(40deg, var(--color-bg1), var(--color-bg2));
    top: 0;
    left: 0;
    overflow: hidden;

    @media (max-width: 1024px) {
      height: 75vh;
      min-height: 560px;
    }
    .svgBlur {
      display: none;
    }

    .noiseBg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      mix-blend-mode: soft-light;
      opacity: 0.3;
    }
    .gradients-container {
      filter: url(#goo) blur(40px);
      width: 100%;
      height: 100%;
    }

    .g1 {
      position: absolute;
      background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0, rgba(var(--color1), 0) 50%) no-repeat;
      mix-blend-mode: var(--blending);

      width: var(--circle-size);
      height: var(--circle-size);
      top: calc(50% - var(--circle-size) / 2);
      left: calc(50% - var(--circle-size) / 2);

      transform-origin: center center;
      animation: moveVertical 60s ease infinite;

      opacity: 1;
    }

    .g2 {
      position: absolute;
      background: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;
      mix-blend-mode: var(--blending);

      width: var(--circle-size);
      height: var(--circle-size);
      top: calc(50% - var(--circle-size) / 2);
      left: calc(50% - var(--circle-size) / 2);

      transform-origin: calc(50% - 400px);
      animation: moveInCircle 40s reverse infinite;

      opacity: 1;
    }

    .g3 {
      position: absolute;
      background: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%) no-repeat;
      mix-blend-mode: var(--blending);

      width: var(--circle-size);
      height: var(--circle-size);
      top: calc(50% - var(--circle-size) / 2 + 200px);
      left: calc(50% - var(--circle-size) / 2 - 500px);

      transform-origin: calc(50% + 400px);
      animation: moveInCircle 80s linear infinite;

      opacity: 1;
    }

    .g4 {
      position: absolute;
      background: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%) no-repeat;
      mix-blend-mode: var(--blending);

      width: var(--circle-size);
      height: var(--circle-size);
      top: calc(50% - var(--circle-size) / 2);
      left: calc(50% - var(--circle-size) / 2);

      transform-origin: calc(50% - 200px);
      animation: moveHorizontal 80s ease infinite;

      opacity: 0.7;
    }

    .g5 {
      position: absolute;
      background: radial-gradient(circle at center, rgba(var(--color5), 0.8) 0, rgba(var(--color5), 0) 50%) no-repeat;
      mix-blend-mode: var(--blending);

      width: calc(var(--circle-size) * 2);
      height: calc(var(--circle-size) * 2);
      top: calc(50% - var(--circle-size));
      left: calc(50% - var(--circle-size));

      transform-origin: calc(50% - 800px) calc(50% + 200px);
      animation: moveInCircle 40s ease infinite;

      opacity: 1;
    }

    .interactive {
      position: absolute;
      background: radial-gradient(
          circle at center,
          rgba(var(--color-interactive), 0.8) 0,
          rgba(var(--color-interactive), 0) 50%
        )
        no-repeat;
      mix-blend-mode: var(--blending);

      width: 100%;
      height: 100%;
      top: -50%;
      left: -50%;

      opacity: 0.7;
    }
  }
`;

export default React.memo(Bg1);
