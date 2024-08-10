import { useCallback, useMemo } from 'react';

import { useEntity, useSubscribeEntity } from '@hakit/core';

import { EntityName, FilterByDomain, LightEntity } from '../../types';
import { throttle } from '../../utils/throttle';

const MAX_BRIGHTNESS = 255;

export const useLight = (entityId: FilterByDomain<EntityName, 'light'>) => {
  const getEntity = useSubscribeEntity(entityId);
  const entity = getEntity() as LightEntity | null;
  const light = useEntity(entityId);

  const turnOn = useCallback(
    (brightness: number = MAX_BRIGHTNESS) => {
      const options = entityId.startsWith('switch') ? {} : { brightness };
      light.service.turnOn(options);
    },
    [light.service],
  );

  const throttledTurnOn = useMemo(() => {
    return throttle((brightness: number = MAX_BRIGHTNESS) => {
      turnOn(brightness);
    }, 500);
  }, [turnOn]);

  const turnOff = useCallback(() => {
    light.service.turnOff();
  }, [light.service.turnOff]);

  return { entity, turnOn, turnOff, throttledTurnOn };
};
