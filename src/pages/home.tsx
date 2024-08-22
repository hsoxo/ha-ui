import React from 'react';

import styled from '@emotion/styled';
import { useHass } from '@hakit/core';

import Bg1 from '../components/Backgrounds/Bg1';
import HomePage from '../components/HomePage';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Silder';

const Home = () => {
  const { getAllEntities } = useHass();
  const entities = getAllEntities();
  console.log(entities);
  return (
    <Wrapper>
      <Bg1 />
      <div className="flex">
        <Sidebar />
        <HomePage />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Home;
