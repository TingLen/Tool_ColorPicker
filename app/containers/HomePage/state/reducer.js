import produce from 'immer'
import {
    UPDATE_HUE_OFFSETX,
    UPDATE_OPACITY_OFFSETX} from './constants'

export const initialState = {
    hueSlider:{
        offsetX: -6
    },
    opacitySlider:{
        offsetX: -6
    }
}

const reducer = (baseState = initialState, action) => 
    produce(baseState, draftState => {
        switch (action.type) {
            case UPDATE_HUE_OFFSETX:
                draftState.hueSlider.offsetX = action.offsetX
                break;
        case UPDATE_OPACITY_OFFSETX:
                draftState.opacitySlider.offsetX = action.offsetX
                break;
        }
    })

export default reducer