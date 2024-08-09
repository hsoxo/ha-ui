import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useLight } from '../../hooks/entities/useLight';
import { EntityName, FilterByDomain, LightAction } from '../../types';

const MAX_BRIGHTNESS = 255;

const calculateTransform = (brightness: number) => {
  return `translateX(-${(1 - brightness / MAX_BRIGHTNESS) * 100}%)`;
};

const percentageToBrightness = (percentage: number) => {
  const brightness = Math.min(MAX_BRIGHTNESS, Math.ceil(MAX_BRIGHTNESS * percentage));
  return brightness < 1 ? 0 : brightness;
};

const Slider = ({ entityId }: { entityId: FilterByDomain<EntityName, 'light'> }) => {
  const { entity, turnOn, turnOff, throttledTurnOn } = useLight(entityId);

  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [transform, setTransform] = useState<string>('translateX(-100%)');

  useEffect(() => {
    setTransform(calculateTransform(entity?.attributes.brightness ?? 0));
  }, [entity]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    turnOn(percentageToBrightness(percentage));
    setTransform(calculateTransform(percentageToBrightness(percentage)));
  };

  const handleMouseDown = () => setMouseDown(true);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseDown && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      throttledTurnOn(percentageToBrightness(percentage));
      setTransform(calculateTransform(percentageToBrightness(percentage)));
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    entity?.state === 'on' ? turnOff() : turnOn();
  };

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false);
    addEventListener('mouseup', handleMouseUp);
    return () => removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <Container onClick={handleClick} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}>
      <div className="slider" style={{ transform }} />
      <div className="box">
        <div className="icon" onClick={handleToggle}>
          123
        </div>
        <div className="name">1232</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  cursor: ew-resize;
  .box {
    position: absolute;
    width: 100%;
    height: 38px;
    padding: 6px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 8px;
    > * {
      user-select: none;
    }
    .icon {
      width: 38px;
      height: 38px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      top: 6px;
      left: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  .slider {
    position: absolute;
    width: 100%;
    height: 50px;
    background: rgb(255, 220, 200);
    transition: transform 0.3s;
  }
`;

export default Slider;
