import React, { Component } from 'react'
import styled from 'styled-components'
import switchIcon from 'images/switch.svg'


const Wrapper = styled.div`
    border-radius: 20px;
    &:hover {
        background-color: #C9C4C4;
        cursor: pointer;
    }
`

class SwitchButton extends Component {
    render() {
        return (
            <Wrapper>
                <svg width='40px' height='40px'>
                    <image xlinkHref={switchIcon} width='40px' height='40px' />
                </svg>
            </Wrapper>            
        )
    }
}

export default SwitchButton