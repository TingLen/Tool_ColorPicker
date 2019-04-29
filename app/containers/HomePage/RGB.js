import React, { Component } from 'react'
import styled from 'styled-components'
import EditInput from './EditInput'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

class RGB extends Component {
    render() {
        return (
            <Wrapper>
                <EditInput name='r'/>
                <EditInput name='g'/>
                <EditInput name='b'/>
                <EditInput name='a'/>
            </Wrapper>
        )
    }
}

export default RGB;