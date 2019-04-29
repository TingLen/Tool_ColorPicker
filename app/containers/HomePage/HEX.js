import React, { Component } from 'react'
import styled from 'styled-components'
import EditInput from './EditInput'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

class HEX extends Component {
    render() {
        return (
            <Wrapper>
                <EditInput name='hex'/>
            </Wrapper>
        )
    }
}

export default HEX