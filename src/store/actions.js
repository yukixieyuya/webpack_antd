import * as types from './types';
import request from "../plugins/Fetch";
// [types.GETID]
const GETID = (dispatch, id)=>{
    dispatch({type:types.GETID,payload: id})
};
const GETPLAYLIST = (dispatch, id)=>{
    return request.get('http://localhost:10000/playlist/detail?id=' + id).then(
        (data)=>{
            dispatch({type:types.GETPLAYLIST, payload: data.playlist})
            return { err: 0}
        }
    );
}