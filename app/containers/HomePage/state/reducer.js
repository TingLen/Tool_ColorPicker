import produce from 'immer'
import {
    UPDATE_HUE_OFFSETX,
    UPDATE_OPACITY_OFFSETX,
    CHANGE_VALUES_TYPE,
    UPDATE_SATURATION_POSITION} from './constants'

export const initialState = {
    hueSlider: {
        offsetX: -6
    },
    opacitySlider: {
        offsetX: -6
    },
    value: {
        type: 0,
    },
    saturation:{
        position: {
            offsetX: 0,
            offsetY: 0,
        }
        
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
            case CHANGE_VALUES_TYPE:
                draftState.value.type = action.typeValue
                break;
            case UPDATE_SATURATION_POSITION: 
                draftState.saturation.position = action.position
        }
    })

export default reducer