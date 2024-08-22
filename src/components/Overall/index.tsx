import React from 'react';

import Garage from './Garage';
import OverallLights from './Lights';

const Overall = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-2 gap-4">
        <Garage />
      </div>
      <OverallLights />
    </div>
  );
};

export default Overall;
