import produce from 'immer'
import {
    UPDATE_HUE_OFFSETX,
    UPDATE_HUE_RGB,
    UPDATE_OPACITY_OFFSETX,
    UPDATE_OPACITY_VALUE,
    CHANGE_VALUES_TYPE,
    UPDATE_SATURATION_POSITION,
    UPDATE_SATURATION_HSV,
    UPDATE_SLIDER_WIDTH,
    CACULATE_HEX,
    CACULATE_RGB,
    CACULATE_HSL,} from './constants'

export const initialState = {
    slider:{
        width: 240
    },
    hueSlider: {
        offsetX: 240,
        rgb: [255,0,0]
    },
    opacitySlider: {
        offsetX: 240,
        opacity: 1
    },
    value: {
        type: 0,
    },
    saturation:{
        position: {
            offsetX: 0,
            offsetY: 0,
        },
        HSV:{
            H: 0,
            S: 0,
            V: 1,
        }
        
    },
    color: {
        RGB: [255,0,0],
        HSL: [0,1,0.5],
        HEX: '#FF0000',
    }
}

const reducer = (baseState = initialState, action) => 
    produce(baseState, draftState => {
        switch (action.type) {
            case UPDATE_HUE_OFFSETX:
                draftState.hueSlider.offsetX = action.offsetX
                break;
            case UPDATE_HUE_RGB:
                draftState.hueSlider.rgb = action.rgb
                break;
            case UPDATE_OPACITY_OFFSETX:
                draftState.opacitySlider.offsetX = action.offsetX
                break;
            case UPDATE_OPACITY_VALUE:
                draftState.opacitySlider.opacity = action.opacity
                break;
            case CHANGE_VALUES_TYPE:
                draftState.value.type = action.typeValue
                break;
            case UPDATE_SATURATION_POSITION: 
                draftState.saturation.position = action.position
                break;
            case UPDATE_SATURATION_HSV:
                draftState.saturation.HSV = action.HSV
                break;
            case UPDATE_SLIDER_WIDTH: 
                draftState.slider.width = action.width
                break;
            case CACULATE_HEX:
                draftState.color.HEX = action.hex
                break;
            case CACULATE_HSL:
                draftState.color.HSL = action.hsl
                break;
            case CACULATE_RGB:
                draftState.color.RGB = action.rgb
                break;
        }
    })

export default reducer