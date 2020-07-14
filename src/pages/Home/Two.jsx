import React, {useState} from 'react'
import {Button, Slider, Switch} from 'antd';
import {routes} from "./routes";
export default props => {
    const [disabled, setDisabled] = useState(false);
    return (
        <div>
            <Slider defaultValue={30} disabled={disabled} />
            <Slider range defaultValue={[20, 50]} disabled={disabled} />
            Disabled: <Switch size="small" checked={disabled} onChange={disabled  => setDisabled(disabled)} />
            <Button onClick={() => props.history.push(routes.ck.path)}>子页面二</Button>
        </div>
    )
}