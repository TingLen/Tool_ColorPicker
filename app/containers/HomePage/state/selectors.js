import {createSelector} from 'reselect'
import {initialState} from './reducer'

const selectHueSlider = state => state.colorPicker.hueSlider || initialState.hueSlider

const selectOpacitySlider = state => state.colorPicker.opacitySlider || initialState.opacitySlider

const selectValues = state => state.colorPicker.value || initialState.value

const selectSaturation = state => state.colorPicker.saturation || initialState.saturation

const makeHueOffsetX = () => createSelector(
    selectHueSlider,
    hueSlider => hueSlider.offsetX
)

const makeOpacityOffsetX = () => createSelector(
    selectOpacitySlider,
    opacitySlider => opacitySlider.offsetX
)

const makeValueType = () => createSelector(
    selectValues,
    value => value.type
)

const makeSaturantionPosition = () => createSelector(
    selectSaturation,
    saturation => saturation.position
)

export {
    makeHueOffsetX,
    makeOpacityOffsetX,
    makeValueType,
    makeSaturantionPosition
}