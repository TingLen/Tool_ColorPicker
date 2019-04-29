import {
    UPDATE_HUE_OFFSETX,
    UPDATE_HUE_RGB,
    UPDATE_OPACITY_OFFSETX,
    UPDATE_OPACITY_VALUE,
    CHANGE_VALUES_TYPE,
    UPDATE_SATURATION_POSITION,
    UPDATE_SLIDER_WIDTH,
    UPDATE_SATURATION_HSV,
    CACULATE_HEX,
    CACULATE_RGB,
    CACULATE_HSL,} from './constants'

export const updateHueOffsetX = (offsetX) => ({
    type: UPDATE_HUE_OFFSETX,
    offsetX
})

export const updateHueRgb = rgb => ({
    type: UPDATE_HUE_RGB,
    rgb
})

export const updateOpacityOffsetX = (offsetX) => ({
    type: UPDATE_OPACITY_OFFSETX,
    offsetX
})

export const updateOpacityValue = opacity => ({
    type: UPDATE_OPACITY_VALUE,
    opacity
})

export const changeValueType = (typeValue) => ({
    type: CHANGE_VALUES_TYPE,
    typeValue
})

export const changeSaturationPosition = position => ({
    type: UPDATE_SATURATION_POSITION,
    position
})

export const changeSaturationHSV = HSV => ({
    type: UPDATE_SATURATION_HSV,
    HSV
})

export const updateSliderWidth = width => ({
    type: UPDATE_SLIDER_WIDTH,
    width
})

export const caculateRgb = rgb => ({
    type: CACULATE_RGB,
    rgb
})

export const caculateHsl = hsl => ({
    type: CACULATE_HSL,
    hsl
})

export const caculateHex = hex => ({
    type: CACULATE_HEX,
    hex
})