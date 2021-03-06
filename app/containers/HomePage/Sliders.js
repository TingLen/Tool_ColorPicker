import React, { Component } from 'react'
import styled from 'styled-components'

import CurrentCricle from './CurrentCricle'
import Slider from './Slider'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30%;
    padding: 16px;
`

const RightContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

class Sliders extends Component {

    render() {
        return (
            <Wrapper>
                <CurrentCricle />
                <RightContent>
                    <Slider type='hue'/>
                    <Slider type='opacity'/>
                </RightContent>
            </Wrapper>
        );
    }
}

export default Sliders