import React from 'react';

import Overall from '../Overall';
import WeatherCard from '../WeatherCard';

const Sidebar = () => {
  return (
    <div className="w-72 min-w-72 h-screen p-2 flex flex-col gap-6 bg-slate-800/20 backdrop-blur rounded-r-3xl">
      <WeatherCard />
      <Overall />
    </div>
  );
};

export default Sidebar;
