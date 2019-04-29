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

class HSL extends Component {
    render() {
        return (
            <Wrapper>
               <EditInput name='h'/>
               <EditInput name='s'/>
               <EditInput name='l'/>
               <EditInput name='a'/>
            </Wrapper>
        )
    }
}

export default HSL