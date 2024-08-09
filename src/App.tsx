import React from 'react';

import { HassConnect } from '@hakit/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { config } from './config';
import Home from './pages/home';

const queryClient = new QueryClient();

const App = () => {
  return (
    <HassConnect hassUrl={config.host}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </HassConnect>
  );
};

export default App;
