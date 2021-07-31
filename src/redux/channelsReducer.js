import { ADD_CHANNELS, HIDE_LOADER, SHOW_LOADER } from "./constants";

const initialState = {
    loading: false,
    channels: []
}

function channelsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHANNELS:
            return {
                ...state,
                channels: action.payload,
            }
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADER:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default channelsReducer;