import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
    background: rgb(165, 65, 66);
`


class CurrentCricle extends Component {
    render() {
        return (
            <Wrapper />
        );
    }
}

export default CurrentCricle;