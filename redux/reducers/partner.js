import { PARTNER_STATE_CHANGE, PARTNER_PEBBLE_STATE_CHANGE, PARTNER_PARTNER_STATE_CHANGE } from "../constants"

const initialState = {
    currentPartner: '',
    pebbles: '',
    partnerID: '',
}

console.log(initialState)

export const partner = (state = initialState, action) => {
    switch (action.type) {
        case PARTNER_STATE_CHANGE:
            return {
                ...state,
                currentPartner: action.currentPartner
            }
        case PARTNER_PEBBLE_STATE_CHANGE:
            return {
                ...state,
                pebbles: action.pebbles
            }
        case PARTNER_PARTNER_STATE_CHANGE:
            return {
                ...state,
                partnerID: action.partnerID
            }
        default:
            return state;
    }
}