import { combineReducers } from "redux";
import { user } from './user';

// REDUCERS HANDLE ACTIONS (CHANGES/EVENTS)

const Reducers = combineReducers({
    userState: user
})

export default Reducers