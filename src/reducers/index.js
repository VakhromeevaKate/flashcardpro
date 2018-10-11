import { SET_STACK } from '../actions';
import {combineReducers} from 'redux';

function stack(state = {}, action) {
    switch (action.type) {
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
}

export default combineReducers({ stack });