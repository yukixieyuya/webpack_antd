import React from 'react';
import {routes} from "./routes";
import {Button} from "antd";
export default props => {
    return (
        <div>
            123456
            <Button onClick={() => props.history.push(routes.arc2.path)}>下一个</Button>
        </div>
    )
}