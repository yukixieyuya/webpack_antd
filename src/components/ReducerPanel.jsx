import React, {useReducer, createContext} from 'react';
import {reducer} from '../pages/reducer';
import {Button} from "antd";
import initState from '../pages/state';
import UseContextPanel from "./UseContextPanel";
export const MyContext = createContext();
export const ReducerPanel = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <MyContext.Provider value={{ state, dispatch }}>
            <Button type="primary" onClick={() => dispatch({type: 'increment', payload: 123})}>Primary Button</Button>
            <br />
            <br />
            <Button onClick={() => dispatch({type: 'decrement', payload: '哇哇哇'})}>Default Button</Button>
            <br />
            <br />
            <Button type="primary" onClick={() => dispatch({type: 'reset', payload: initState})}>Primary Button</Button>
            <br />
            <br />
            {state.count}
            <br />
            <br />
            <UseContextPanel/>
            {state.str}
        </MyContext.Provider>
    )
};