import React, {useState} from 'react'
import { Collapse  } from 'antd';
const { Panel } = Collapse;
export default () => {
    const [activeKey, setActiveKey] = useState(false);
    const [text, setText] = useState('123');
    const callback = key => {
        setActiveKey(key)
    };
    return (
        <Collapse defaultActiveKey={['1']} onChange={callback} activeKey={activeKey}>
            <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3" disabled>
                <p>{text}</p>
            </Panel>
        </Collapse>
    )
}