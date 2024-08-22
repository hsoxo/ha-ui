import React from 'react';

import Floor1 from './Floor1';
import Floor2 from './Floor2';
import Floor0 from './Floor3';

const FloorPlans = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Floor0 />
      <Floor1 />
      <Floor2 />
    </div>
  );
};

export default FloorPlans;
