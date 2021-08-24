import { USER_STATE_CHANGE, USER_PEBBLE_STATE_CHANGE, USER_PARTNER_STATE_CHANGE, USER_EVENTS_STATE_CHANGE } from "../constants"

const initialState = {
    currentUser: '',
    pebbles: '',
    partnerID: '',
    events: '',
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
        case USER_PARTNER_STATE_CHANGE:
            return {
                ...state,
                partnerID: action.partnerID
            }
        case USER_EVENTS_STATE_CHANGE:
            return {
                ...state,
                events: action.events
            }
        default:
            return state;
    }
}