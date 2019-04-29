import React, { Component } from 'react'
import styled from 'styled-components'
import EditInput from './EditInput'
import {connect} from 'react-redux'
import {
    makeColorRgb,
    makeOpacityValue} from './state/selectors'
import {createStructuredSelector} from 'reselect'

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
                <EditInput value={this.props.rgb[0]} name='r'/>
                <EditInput value={this.props.rgb[1]} name='g'/>
                <EditInput value={this.props.rgb[2]} name='b'/>
                <EditInput value={this.props.opacity} name='a'/>
            </Wrapper>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    rgb: makeColorRgb(),
    opacity: makeOpacityValue()
})

export default connect(
    mapStateToProps
)(RGB)