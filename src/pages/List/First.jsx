import React, {useState} from 'react'
import {Button, DatePicker, Divider, Slider, Switch} from 'antd';
import {routes} from "./routes";
export default props => {
    const [data, setData] = useState('');
    const onChange = (date, dateString) => {
        // setData(dateString)
    }
    return (
        <div>
            <DatePicker onChange={onChange} />
            <br />
            <DatePicker onChange={onChange} picker="week" />
            <br />
            <DatePicker onChange={onChange} picker="month" />
            <br />
            <DatePicker onChange={onChange} picker="quarter" />
            <br />
            <DatePicker onChange={onChange} picker="year" />
            <Divider />
            <Button type="primary" onClick={() => props.history.push(routes.check.path)}>子页面一</Button>
            <Button onClick={() => props.history.push(routes.test.path)}>子页面二</Button>
            <Button onClick={() => props.history.push(routes.table.path)}>子页面三</Button>
        </div>
    )
}