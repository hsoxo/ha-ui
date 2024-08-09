import { useCallback, useMemo } from 'react';

import { useEntity, useHass, useSubscribeEntity } from '@hakit/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { EntityName, FilterByDomain, LightAction, LightEntity, LightOptions } from '../../types';
import instance from '../../utils/requests';
import { throttle } from '../../utils/throttle';

interface MutateProps {
  service: LightAction;
  options?: Partial<LightOptions>;
}

const MAX_BRIGHTNESS = 255;

export const useLight = (entityId: FilterByDomain<EntityName, 'light'>) => {
  const getEntity = useSubscribeEntity(entityId);
  const entity = getEntity() as LightEntity | null;
  const { callService } = useHass();
  const a = useEntity(entityId);

  console.log(a);
  const turnOn = useCallback(
    (brightness: number = MAX_BRIGHTNESS) => {
      a.service.turnOn({
        brightness,
      });
    },
    [callService],
  );

  const throttledTurnOn = useMemo(() => {
    return throttle((brightness: number = MAX_BRIGHTNESS) => {
      turnOn(brightness);
    }, 500);
  }, [turnOn]);

  const turnOff = useCallback(() => {
    callService({
      domain: 'light',
      service: 'turn_off',
      target: {
        entity_id: entityId,
      },
    });
  }, [callService]);

  return { entity, turnOn, turnOff, throttledTurnOn };
};
