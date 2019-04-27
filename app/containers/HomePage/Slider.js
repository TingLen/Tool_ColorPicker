import React, { Component } from 'react'
import styled from 'styled-components'

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
    render() {
        return (
            <Wrapper>
                <SliderColor />
                <SliderHandle />
            </Wrapper>
        );
    }
}

export default Slider