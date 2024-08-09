import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import OrbitControls from '/components/Three/OrbitControls';
import Stars from '/components/Three/Stars';
import { theme } from 'theme';

export default function StarrySkies() {
  return (
      <Container>
      <StyledCanvas
       shadows={true}
       camera={{
        fov: 75,
        aspect: 2,
        near: 1.5,
        far: 5,
        position: [0, 0, 2],
        }}>
          <directionalLight color={'white'} intensity={1} />
          <Stars />
          <Stars count={350} size={0.075} map={'https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp2.png'}/>
          <OrbitControls />
      </StyledCanvas>
      </Container>
  )
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100vw;
  position: absolute;
  z-index: -1000;
`;

const StyledCanvas = styled(Canvas)`
  background: ${theme.COLOR.SKY_GRADIENT};
  height: 100vh;
  width: 100vw;
  display: block;
  position: relative;
  z-index: -9999;
`;
