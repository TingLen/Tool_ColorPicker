import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px inset;
`

class Pointer extends Component {
    render() {
        return (
            <Wrapper style={{transform: `translate(${this.props.position.offsetX - 6}px,${this.props.position.offsetY - 6}px)`}}></Wrapper>
        );
    }
}

export default Pointer;