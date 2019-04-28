import {createSelector} from 'reselect'
import {initialState} from './reducer'

const selectHueSlider = state => state.colorPicker.hueSlider || initialState.hueSlider

const selectOpacitySlider = state => state.colorPicker.opacitySlider || initialState.opacitySlider

const makeHueOffsetX = () => createSelector(
    selectHueSlider,
    hueSlider => hueSlider.offsetX
)

const makeOpacityOffsetX = () => createSelector(
    selectOpacitySlider,
    opacitySlider => opacitySlider.offsetX
)

export {
    makeHueOffsetX,
    makeOpacityOffsetX
}