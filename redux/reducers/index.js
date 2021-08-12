import { combineReducers } from "redux"; // ALLOWS MANIPULATION OF STATE OF DIFFERENT OBJECTS
import { user } from './user';

// REDUCERS HANDLE ACTIONS (CHANGES/EVENTS)

const Reducers = combineReducers({
    userState: user
})

export default Reducers