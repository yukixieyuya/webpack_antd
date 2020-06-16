import React, {useState} from 'react'
import { Result, Button  } from 'antd';
import {routes} from "./routes";
export default props => {
    return (
        <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
                <Button type="primary" key="console" onClick={() => props.history.push(routes.one.path)}>
                    Go Console
                </Button>,
                <Button key="buy" onClick={() => props.history.push(routes.anchor.path)}>Buy Again</Button>,
            ]}
        />
    )
}