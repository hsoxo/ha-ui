import React from 'react';

import { useHass } from '@hakit/core';
import styled from 'styled-components';

import Bg1 from '../components/Backgrounds/Bg1';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Silder';

const Home = () => {
  const { getAllEntities } = useHass();
  const entities = getAllEntities();
  console.log(entities);
  return (
    <Wrapper>
      <Bg1 />
      <Sidebar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Home;
