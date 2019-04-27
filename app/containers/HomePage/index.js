/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react'
import Saturation from './Saturation'
import Sliders from './Sliders'
import Values from './Values'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 4px 8px;
  box-sizing: initial;
  background: rgb(255, 255, 255);
`

export default function HomePage() {
  return (
    <Wrapper>
      <Saturation />
      <Sliders />
      <Values />
    </Wrapper>
  );
}
