import { USER_STATE_CHANGE, USER_PEBBLE_STATE_CHANGE } from "../constants"

const initialState = { // SET BLANK STATE FOR EACH OBJECT
    currentUser: null,
    pebbles: []
}

export const user = (state = initialState, action) => { // UPDATE initialState WHEN ACTION RECEIVED
    switch (action.type) {
        case USER_STATE_CHANGE:  // APPLIES fetchUser ACTION TO currentUser STATE
            return {
                ...state,
                currentUser: action.currentUser
            }
        case USER_PEBBLE_STATE_CHANGE: // APPLIES someMessagingFunctionExample TO pebbles STATE
            return {
                ...state,
                pebbles: action.pebbles
            }
        default:
            return state;
    }
}