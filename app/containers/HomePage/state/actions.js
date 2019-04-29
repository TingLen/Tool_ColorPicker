import {
    UPDATE_HUE_OFFSETX,
    UPDATE_OPACITY_OFFSETX,
    CHANGE_VALUES_TYPE,
    UPDATE_SATURATION_POSITION} from './constants'

export const updateHueOffsetX = (offsetX) => ({
    type: UPDATE_HUE_OFFSETX,
    offsetX
})

export const updateOpacityOffsetX = (offsetX) => ({
    type: UPDATE_OPACITY_OFFSETX,
    offsetX
})

export const changeValueType = (typeValue) => ({
    type: CHANGE_VALUES_TYPE,
    typeValue
})

export const changeSaturationPosition = position => ({
    type: UPDATE_SATURATION_POSITION,
    position
})