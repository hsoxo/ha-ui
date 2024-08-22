import React, { useId, useMemo, useState } from 'react';

import { Modal } from '@hakit/components';
import { LightEntity, useHass, useIcon } from '@hakit/core';
import { motion } from 'framer-motion';

import { Lights, allLights } from '../../constants/lights';
import { RoomsMap } from '../../constants/rooms';
import Slider from '../Silder';

const OverallLights = () => {
  const _id = useId();

  const { getAllEntities } = useHass();
  const entities = getAllEntities();
  const lightOnIcon = useIcon('mdi-lightbulb-on');
  const lightOffIcon = useIcon('mdi:lightbulb-group-off');
  const [open, setOpen] = useState(false);

  const allLightsInfo: LightEntity[] = useMemo(
    () =>
      Object.entries(entities)
        .filter(([key, value]) => allLights.includes(key))
        .map(([key, value]) => value),
    [entities],
  );

  const onLights = allLightsInfo.filter(light => light.state === 'on');
  const onLightsByRoom = allLightsInfo.reduce(
    (acc, light) => {
      if (light.state === 'on') {
        const room = Object.values(RoomsMap).find(room => room.lights.includes(light.entity_id as Lights));
        if (room) {
          if (acc[room.name]) {
            acc[room.name].push(light);
          } else {
            acc[room.name] = [light];
          }
        } else {
          if (acc['Others']) {
            acc['Others'].push(light);
          } else {
            acc['Others'] = [light];
          }
        }
      }
      return acc;
    },
    {} as Record<string, LightEntity[]>,
  );

  if (!onLights.length) {
    return null;
  }
  return (
    <>
      <motion.div
        layoutId={_id}
        className="flex items-center justify-center gap-1 px-3 h-12 min-w-12 bg-slate-800/20 w-fit rounded-full"
        onClick={() => setOpen(true)}
      >
        {onLights.length ? lightOnIcon : null} {onLights.length ? onLights.length : null}
      </motion.div>

      <Modal
        id={_id}
        open={open}
        title={
          <div className="flex items-center">
            <div className="pr-4">On Lights</div>
            <div className="flex items-center justify-center gap-1 h-10 w-10 rounded-full cursor-pointer bg-red-500/80">
              {lightOffIcon}
            </div>
          </div>
        }
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="w-full">
          {Object.entries(onLightsByRoom).map(([roomName, lights]) => (
            <div key={roomName} className="pb-4">
              <div className="text-xl pb-2">{roomName}</div>
              <div className="w-full grid grid-cols-2 gap-4">
                {lights.map(light => (
                  <Slider entityId={light.entity_id as Lights} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default OverallLights;
