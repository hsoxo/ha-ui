import React from 'react';

import styled from 'styled-components';

import Bg1 from '../components/Backgrounds/Bg1';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Silder';

const Home = () => {
  return (
    <Wrapper>
      <Bg1 />

      <Sidebar />
      <Slider entityId="light.ke_ting_dian_shi_qiang" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Home;
