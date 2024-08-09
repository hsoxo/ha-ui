import React from 'react';

import styled from 'styled-components';

import WeatherCard from '../WeatherCard';

const Sidebar = () => {
  return (
    <Wrapper>
      <WeatherCard />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 280px;
  height: 100vh;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: rgba(33, 33, 33, 0.2);
  backdrop-filter: blur(8px);
`;

export default Sidebar;
