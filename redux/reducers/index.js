import { combineReducers } from "redux";
import { user } from './user';

// STORE STATE OF USER

const Reducers = combineReducers({
    userState: user
})

export default Reducers