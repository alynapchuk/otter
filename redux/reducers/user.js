import { USER_STATE_CHANGE, USER_PEBBLE_STATE_CHANGE } from "../constants"

const initialState = {
    currentUser: '',
    pebbles: '',
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case USER_PEBBLE_STATE_CHANGE:
            return {
                ...state,
                pebbles: action.pebbles
            }
        default:
            return state;
    }
}