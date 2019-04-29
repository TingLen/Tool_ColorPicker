import React, { Component } from 'react'
import throttle from 'loadsh/throttle'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { 
    makeHueOffsetX,
    makeOpacityOffsetX,
    makeSaturantionHSV} from './state/selectors'
import {
    updateHueOffsetX,
    updateHueRgb,
    updateOpacityOffsetX,
    updateOpacityValue,
    updateSliderWidth,
    changeSaturationHSV,
    caculateRgb,
    caculateHex,
    caculateHsl} from './state/actions'

import { 
    changeRgb,
    changeHex,
    changeHsl } from '../../utils/caculateColor'

import SliderHandle from './SliderHandle'

const Wrapper = styled.div`
    position:relative;
    width: 240px;
    height: 10px;
    margin: 16px 0px;
`

const SliderColor = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    
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
            let totalWidth = this.node.offsetWidth
            let proportion = offsetX/totalWidth
            if(this.props.type === 'hue') {
                this.props.changeHueOffsetX(offsetX)
                let base = 0.17
                let rgb = this.calulateRgb(proportion,base)
                this.props.changeHueRgb(rgb)

                let H = this.props.hueOffsetX / this.node.offsetWidth
                let HSV = Object.assign({},this.props.HSV,{H:Math.floor(H * 100)/100})
                this.props.changeSaturationHSV(HSV)
                let _rgb = changeRgb(HSV)
                this.props.updateRgb(_rgb)
                let _hsl = changeHsl(_rgb)
                this.props.updateHsl(_hsl)
                let _hex = changeHex(_rgb)
                this.props.updateHex(_hex)
            }
            if(this.props.type === 'opacity') {
                this.props.changeOpactityOffsetX(offsetX)
                let opactiy = Math.floor(proportion * 100) /100
                this.props.changeOpacityValue(opactiy)
            }
        }
        
    }

    calulateRgb = (proportion,base) => {
        let rgb = []
            if(proportion <= 0.17) rgb = [255,Math.round(255 - ((1 * base - proportion) / base * 255)),0]
            if(proportion > 0.17 && proportion <= 0.33) rgb = [Math.round((2 * base - proportion) / base * 255),255,0]
            if(proportion > 0.33 && proportion <= 0.5) rgb = [0,255,Math.round(255 - ((3 * base - proportion) / base * 255))]
            if(proportion > 0.5 && proportion <= 0.67) rgb = [0,Math.round((4 * base - proportion) / base * 255),255]
            if(proportion > 0.67 && proportion <= 0.83) rgb = [Math.round(255 - ((5 * base - proportion) / base * 255)),0,255]
            if(proportion > 0.83 && proportion <= 1) rgb = [255,0,Math.round((6 * base - proportion) / base * 255)]

            return rgb
    }


    handleChange = (e) => {
        this.throttle(this.onChange,e)
    }

    handleMouseUp = (e) => {
        window.removeEventListener('mousemove',this.handleChange)
        window.removeEventListener('mouseup',this.handleMouseUp)
    }


    render() {
        let hueWapperStyle = {
            background: `linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)`
        }

        let opacityWrapperStyle = {
            background: `linear-gradient(to right, rgba(165, 65, 66, 0) 0%, rgb(165, 65, 66) 100%)`
        }

        let sliderColorStyle = {
            background: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==") left center`
        }

        return (
            <Wrapper style={this.props.type === 'hue' ? hueWapperStyle : opacityWrapperStyle  }>
                <SliderColor
                 style={this.props.type === 'opacity' ? sliderColorStyle : {}}
                 onMouseDown={(e) => this.handleMouseDown(e)}
                 ref={node => this.node = node} />
                <SliderHandle handleX={this.props.type === 'hue' ? this.props.hueOffsetX : this.props.opacityOffsetX}/>
            </Wrapper>
        );
    }

    componentDidMount() {
        this.props.updateSliderWidth(this.node.offsetWidth)
    }
}

const mapStateToProps = createStructuredSelector({
    hueOffsetX: makeHueOffsetX(),
    opacityOffsetX: makeOpacityOffsetX(),
    HSV: makeSaturantionHSV(),
    
})

const mapDispatchToProps = dispatch => ({
    changeHueOffsetX: offsetX => dispatch(updateHueOffsetX(offsetX)),
    changeHueRgb: rgb => dispatch(updateHueRgb(rgb)),
    changeOpactityOffsetX: offsetX => dispatch(updateOpacityOffsetX(offsetX)),
    changeOpacityValue: opacity => dispatch(updateOpacityValue(opacity)),
    updateSliderWidth: width => dispatch(updateSliderWidth(width)),
    changeSaturationHSV: HSV => dispatch(changeSaturationHSV(HSV)),
    updateRgb: rgb => dispatch(caculateRgb(rgb)),
    updateHex: hex => dispatch(caculateHex(hex)),
    updateHsl: hsl => dispatch(caculateHsl(hsl))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Slider)