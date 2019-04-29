import React, { Component } from 'react'
import throttle from 'loadsh/throttle'
import styled from 'styled-components'
import Pointer from './Pointer'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {changeSaturationPosition} from './state/actions'
import {makeSaturantionPosition} from './state/selectors'

const Wrapper = styled.div`
    width: 100%;
    height: 40%;
    border-radius: 2px 2px 0px 0px;
    overflow: hidden;
    position: relative;    
`

const Palette = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(0,0,255);
`


class Saturation extends Component {

    constructor(){
        super()
        this.throttle = throttle((fn,e) => {
            fn(e)
        },50)
    }

    handleMouseDown = (e) => {
        this.handleChange(e.nativeEvent)
        window.addEventListener('mousemove', this.handleChange)
        window.addEventListener('mouseup', this.handleMouseUp)
    }

    handleMouseUp = (e) => {
        window.removeEventListener('mousemove', this.handleChange)
        window.removeEventListener('mouseup', this.handleMouseUp)
    }

    onChangle = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(e.target === this.node){
            const position = {
                offsetX: e.offsetX,
                offsetY: e.offsetY
            }
            this.props.changePosition(position)
        }
    }

    handleChange = (e) => {
        this.throttle(this.onChangle,e)
    }


    render() {
        return (
            <Wrapper>
                <Palette
                 ref={node => this.node=node}
                 onMouseDown={(e) => this.handleMouseDown(e)}>
                    <Pointer position={this.props.position} />
                </Palette>
            </Wrapper>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    position: makeSaturantionPosition()
})

const mapDispatchToProps = dispatch => ({
    changePosition: position => dispatch(changeSaturationPosition(position))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Saturation)