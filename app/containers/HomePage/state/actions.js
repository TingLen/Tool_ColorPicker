import {
    UPDATE_HUE_OFFSETX,
    UPDATE_OPACITY_OFFSETX} from './constants'

export const updateHueOffsetX = (offsetX) => ({
    type: UPDATE_HUE_OFFSETX,
    offsetX
})

export const updateOpacityOffsetX = (offsetX) => ({
    type: UPDATE_OPACITY_OFFSETX,
    offsetX
})