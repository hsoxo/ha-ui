import React from 'react';

import { useIcon } from '@hakit/core';

import { Rooms, RoomsMap } from '../../constants/rooms';

const Room = ({ id }: { id: Rooms }) => {
  const roomInfo = RoomsMap[id];

  const icon = useIcon(roomInfo.icon);
  return (
    <div className="p-2 flex flex-col gap-6 bg-slate-800/20 backdrop-blur rounded-3xl">
      <div>
        {icon}
        {roomInfo.name}
      </div>
    </div>
  );
};

export default Room;
