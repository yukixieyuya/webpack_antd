import React, {useReducer, useContext} from 'react';
import {Card,Button} from "antd";
import { MyContext } from "./ReducerPanel";
export default props => {
    const { state, dispatch } = useContext(MyContext);
    console.log(state)
    return (
        <Card>
            <Button type={"primary"} onClick={() => {
                dispatch({
                    type: 'ttt',
                    payload: {count: state.count + 1, str: "wowowowo"}
                })
            }}>
                change reducer
            </Button>
        </Card>)
}