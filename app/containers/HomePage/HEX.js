import React, { Component } from 'react'
import styled from 'styled-components'
import EditInput from './EditInput'

import {connect} from 'react-redux'
import {
    makeColorHex,
    makeOpacityValue} from './state/selectors'
import {createStructuredSelector} from 'reselect'

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
                <EditInput value={this.props.hex} name='hex'/>
            </Wrapper>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    hex: makeColorHex()
})

export default connect(
    mapStateToProps
)(HEX)