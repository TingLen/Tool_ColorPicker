import React, { Component } from 'react'
import styled from 'styled-components'
import Pointer from './Pointer'

const Wrapper = styled.div`
    width: 100%;
    height: 40%;
    border-radius: 2px 2px 0px 0px;
    overflow: hidden;
    position: relative;    
`

const Palette = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(0,0,255)
`


class Saturation extends Component {
    render() {
        return (
            <Wrapper>
                <Palette>
                    <Pointer />
                </Palette>
            </Wrapper>
        );
    }
}

export default Saturation