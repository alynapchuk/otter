import { combineReducers } from "redux";
import { user } from './user';
import { partner } from './partner';

const Reducers = combineReducers({
    userState: user,
    partnerState: partner,
})

export default Reducers