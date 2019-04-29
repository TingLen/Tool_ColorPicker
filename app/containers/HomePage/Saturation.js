import React, { Component } from 'react'
import throttle from 'loadsh/throttle'
import styled from 'styled-components'
import Pointer from './Pointer'

import { 
    caculateHex,
    caculateHsl,
    caculateRgb } from './state/actions'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {
    changeSaturationPosition,
    changeSaturationHSV,} from './state/actions'
import {
    makeSaturantionPosition,
    makeHueRgb,
    makeSaturantionHSV} from './state/selectors'

import {
    changeRgb,
    changeHex,
    changeHsl} from '../../utils/caculateColor'

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
`

const WhiteCover = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background:  linear-gradient(to right, #fff, rgba(255,255,255,0));
`

const BlackCover = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(to top, #000, rgba(0,0,0,0));
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

            let S = e.offsetX / this.node.offsetWidth 
            let V = 1 - e.offsetY / this.node.offsetHeight 
            let HSV = Object.assign({},this.props.HSV,{S: Math.floor(S * 100)/100,V: Math.floor(V * 100) /100 })
            this.props.changeHSV(HSV)

            let rgb = changeRgb(HSV)
            this.props.caculateRgb(rgb)
            let hsl = changeHsl(rgb)
            this.props.caculateHsl(hsl)
            let hex = changeHex(rgb)
            this.props.caculateHex(hex)
            
        }
    }

    handleChange = (e) => {
        this.throttle(this.onChangle,e)
    }



    render() {
        return (
            <Wrapper>
                <Palette
                 style={{background: `rgb(${this.props.rgb[0]},${this.props.rgb[1]},${this.props.rgb[2]})`}}
                 >
                    <Pointer position={this.props.position} />
                    <WhiteCover />
                    <BlackCover
                        ref={node => this.node=node}
                        onMouseDown={(e) => this.handleMouseDown(e)}/>
                </Palette>
            </Wrapper>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    position: makeSaturantionPosition(),
    rgb: makeHueRgb(),
    HSV: makeSaturantionHSV()
})

const mapDispatchToProps = dispatch => ({
    changePosition: position => dispatch(changeSaturationPosition(position)),
    changeHSV: HSV => dispatch(changeSaturationHSV(HSV)),
    caculateHex: hex => dispatch(caculateHex(hex)),
    caculateHsl: hsl => dispatch(caculateHsl(hsl)),
    caculateRgb: rgb => dispatch(caculateRgb(rgb))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Saturation)