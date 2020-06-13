// import {UPDATE_GOODS} from './types';
import * as types from "./types";

export default (state, action)=> {
    let {type, payload} = action;
    switch (type) {
        case types.GETID:
            return {...state, song: payload};
        case types.GETPLAYLIST:
            return {...state, playList: payload};
        default:
            return state;
    }
}