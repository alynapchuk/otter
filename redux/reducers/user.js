const initialState = {
    currentUser: null
}

// UPDATE STATE WHEN ACTION RECEIVED

export const user = (state = initialState, action) => {
    return {
        ...state,
        currentUser: action.currentUser
    }
}