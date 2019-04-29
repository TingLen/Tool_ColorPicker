import React, { Component } from 'react'
import styled from 'styled-components'
import EditInput from './EditInput'

import {connect} from 'react-redux'
import {
    makeColorHsl,
    makeOpacityValue} from './state/selectors'
import {createStructuredSelector} from 'reselect'

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
               <EditInput value={this.props.hsl[0]} name='h'/>
               <EditInput value={this.props.hsl[1]} name='s'/>
               <EditInput value={this.props.hsl[2]} name='l'/>
               <EditInput  value={this.props.opacity} name='a'/>
            </Wrapper>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    hsl: makeColorHsl(),
    opacity: makeOpacityValue()
})

export default connect(
    mapStateToProps
)(HSL)