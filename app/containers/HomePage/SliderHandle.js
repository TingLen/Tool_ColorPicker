import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: rgb(248, 248, 248);
    box-shadow: rgba(0, 0, 0, 0.37) 0px 1px 4px 0px;
    transform: translate(-6px,-1px);
`

class SliderHandle extends Component {
    render() {
        return (
            <Wrapper />
        )
    }
}

export default SliderHandle