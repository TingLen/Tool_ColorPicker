import React, { Component } from 'react'
import styled from 'styled-components'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {
    makeColorRgb,
    makeOpacityValue
} from './state/selectors'

const Wrapper = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
`


class CurrentCricle extends Component {

    render() {
        let background = {
            background: `rgb(${this.props.RGB[0]},${this.props.RGB[1]},${this.props.RGB[2]})`,
            opacity: this.props.opacity
        }
        return (
            <Wrapper style={background}/>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    RGB: makeColorRgb(),
    opacity: makeOpacityValue()
})


export default connect(
    mapStateToProps
)(CurrentCricle)