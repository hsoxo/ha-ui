import React from 'react';

import { useEntity, useIcon } from '@hakit/core';

import { Doors } from '../../constants/doors';

const Garage = () => {
  const door = useEntity(Doors.GarageDoor);
  const isOpen = door.state === 'open';

  const garageDoorOpenIcon = useIcon('mdi:garage-open-variant', {
    color: '#9f1821',
  });
  const garageDoorCloseIcon = useIcon('mdi:garage-variant', {
    color: '#148103',
  });

  return (
    <div
      className={`flex items-center justify-center gap-1 h-10 rounded-full cursor-pointer ${isOpen ? 'bg-danger' : 'bg-success'} `}
    >
      <div>{isOpen ? garageDoorOpenIcon : garageDoorCloseIcon}</div>
      <div className="flex flex-col">
        <span className={`leading-none ${isOpen ? 'text-danger' : 'text-success'}`}>Garage</span>
        <span className={`leading-none text-xs ${isOpen ? 'text-danger/70' : 'text-success/70'}`}>
          {isOpen ? 'Open' : 'Closed'}
        </span>
      </div>
    </div>
  );
};

export default Garage;
