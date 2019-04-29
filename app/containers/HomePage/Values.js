import React, { Component } from 'react'
import styled from 'styled-components'

import HSL from './HSL'
import HEX from './HEX'
import RGB from './RGB'
import SwitchButton from './SwitchButton'

const Wrapper = styled.div`
    width: 100%;
    height: 30%;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

class Values extends Component {


    choseType = () => {
        switch (this.props.valueType) {
            case 0:
                return (<RGB />)
            case 1:
                return (<HEX />)
            case 2:
                return (<HSL />)
        }
    }

    render() {
        return (
            <Wrapper>
                {this.choseType()}
                <SwitchButton handleChange={this.props.changeType}/>
            </Wrapper>
        );
    }
}

export default Values