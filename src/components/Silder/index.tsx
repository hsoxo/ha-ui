import React, { useEffect, useState } from 'react';

import { isDoWhileStatement } from '@babel/types';
import { useIcon } from '@hakit/core';
import styled from 'styled-components';

import { useLight } from '../../hooks/entities/useLight';
import { EntityName, FilterByDomain } from '../../types';

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
  const lightIcon = useIcon(entity?.attributes.icon ?? 'mdi-lightbulb');
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [transform, setTransform] = useState<string>('translateX(-100%)');
  const isSwitch = entityId.startsWith('switch');

  useEffect(() => {
    if (isSwitch) {
      setTransform(entity?.state === 'on' ? 'translateX(0)' : 'translateX(-100%)');
    } else {
      setTransform(calculateTransform(entity?.attributes.brightness ?? 0));
    }
  }, [isSwitch, entity]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    if (isSwitch) {
      handleToggle(e);
    } else {
      turnOn(percentageToBrightness(percentage));
      setTransform(calculateTransform(percentageToBrightness(percentage)));
    }
  };

  const handleMouseDown = () => {
    if (isSwitch) return;
    setMouseDown(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isSwitch) return;
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
    if (entity?.state === 'on') {
      turnOff();
      setTransform('translateX(-100%)');
    } else {
      turnOn();
      setTransform('translateX(0)');
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false);
    addEventListener('mouseup', handleMouseUp);
    return () => removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div
      className={`relative w-full h-12 rounded-3xl overflow-hidden ${isSwitch ? 'cursor-pointer' : 'cursor-ew-resize'}`}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute w-full h-12 bg-amber-600 duration-300" style={{ transform }} />
      <div className="absolute w-full p-1 flex items-center gap-2 bg-slate-800/40">
        <div
          className="min-h-10 min-w-10 flex items-center justify-center bg-slate-800/40 rounded-full cursor-pointer"
          onClick={handleToggle}
        >
          {lightIcon}
        </div>
        <div className="text-nowrap">{entity?.attributes.friendly_name}</div>
      </div>
    </div>
  );
};

export default styled(Slider)`
  > * {
    user-select: none;
  }
`;
