import React, { Component } from 'react'
import throttle from 'loadsh/throttle'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { 
    makeHueOffsetX,
    makeOpacityOffsetX} from './state/selectors'
import {
    updateHueOffsetX,
    updateOpacityOffsetX} from './state/actions'

import SliderHandle from './SliderHandle'

const Wrapper = styled.div`
    position:relative;
    width: 240px;
    height: 10px;
    background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    /* background: linear-gradient(to right, rgba(165, 65, 66, 0) 0%, rgb(165, 65, 66) 100%); */
    margin: 16px 0px;
`

const SliderColor = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==") left center;
`

class Slider extends Component {
    constructor(){
        super()
        this.throttle = throttle((fn,e) => {
            fn(e)
        },10)
    }

    handleMouseDown = (e) => {
        this.handleChange(e.nativeEvent) 
        window.addEventListener('mousemove',this.handleChange)
        window.addEventListener('mouseup',this.handleMouseUp)
    }

    handleMouseMove = e => {
        this.handleChange(e)
    }

    onChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(this.node === e.target){
            let offsetX = e.offsetX
            if(this.props.type === 'hue') this.props.changeHueValue(offsetX - 6)
            if(this.props.type === 'opacity') this.props.changeOpactityValue(offsetX - 6)
        }
        
    }

    handleChange = (e) => {
        this.throttle(this.onChange,e)
    }

    handleMouseUp = (e) => {
        window.removeEventListener('mousemove',this.handleChange)
        window.removeEventListener('mouseup',this.handleMouseUp)
    }

    render() {
        return (
            <Wrapper>
                <SliderColor
                 onMouseDown={(e) => this.handleMouseDown(e)}
                 ref={node => this.node = node} />
                <SliderHandle handleX={this.props.type === 'hue' ? this.props.hueOffsetX : this.props.opacityOffsetX}/>
            </Wrapper>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    hueOffsetX: makeHueOffsetX(),
    opacityOffsetX: makeOpacityOffsetX()
})

const mapDispatchToProps = dispatch => ({
    changeHueValue: offsetX => dispatch(updateHueOffsetX(offsetX)),
    changeOpactityValue: offsetX => dispatch(updateOpacityOffsetX(offsetX)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Slider)