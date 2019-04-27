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
            <Wrapper></Wrapper>
        );
    }
}

export default Pointer;