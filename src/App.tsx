import React from 'react';

import { ThemeProvider } from '@hakit/components';
import { HassConnect } from '@hakit/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './base.css';
import { config } from './config';
import Home from './pages/home';

const queryClient = new QueryClient();

const App = () => {
  return (
    <HassConnect hassUrl={config.host} hassToken={config.token}>
      <ThemeProvider includeThemeControls>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </ThemeProvider>
    </HassConnect>
  );
};

export default App;
