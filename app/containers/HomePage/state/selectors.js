import {createSelector} from 'reselect'
import {initialState} from './reducer'

const selectHueSlider = state => state.colorPicker.hueSlider || initialState.hueSlider

const selectOpacitySlider = state => state.colorPicker.opacitySlider || initialState.opacitySlider

const selectValues = state => state.colorPicker.value || initialState.value

const selectSaturation = state => state.colorPicker.saturation || initialState.saturation

const selectSlider = state => state.colorPicker.slider || initialState.slider

const selectColor = state => state.colorPicker.color || initialState.color

const makeHueOffsetX = () => createSelector(
    selectHueSlider,
    hueSlider => hueSlider.offsetX
)

const makeHueRgb = () => createSelector(
    selectHueSlider,
    hueSlider => hueSlider.rgb
)

const makeOpacityOffsetX = () => createSelector(
    selectOpacitySlider,
    opacitySlider => opacitySlider.offsetX
)

const makeOpacityValue = () => createSelector(
    selectOpacitySlider,
    opacitySlider => opacitySlider.opacity
)

const makeValueType = () => createSelector(
    selectValues,
    value => value.type
)

const makeSaturantionPosition = () => createSelector(
    selectSaturation,
    saturation => saturation.position
)

const makeSaturantionHSV = () => createSelector(
    selectSaturation,
    saturation => saturation.HSV
)

const makeSliderWidth = () => createSelector(
    selectSlider,
    slider => slider.width
)

const makeColorRgb = () =>  createSelector(
    selectColor,
    color => color.RGB
)

const makeColorHsl = () => createSelector(
    selectColor,
    color => color.HSL
)

const makeColorHex = () => createSelector(
    selectColor,
    color => color.HEX
)


export {
    makeHueOffsetX,
    makeHueRgb,
    makeOpacityOffsetX,
    makeOpacityValue,
    makeValueType,
    makeSaturantionPosition,
    makeSaturantionHSV,
    makeSliderWidth,
    makeColorRgb,
    makeColorHsl,
    makeColorHex
}