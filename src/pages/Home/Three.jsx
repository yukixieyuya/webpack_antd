import React, {useState} from 'react'
import { Space, Transfer, Switch } from 'antd';
const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
    });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
export default () => {
    const [targetKeys, setTargetKeys] = useState(oriTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const handleChange = (nextTargetKeys, direction, moveKeys) => {
        setTargetKeys(nextTargetKeys);
    };
    const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };
    const handleDisable = disabled => {
        setDisabled(disabled)
    };
    const handleScroll = (direction, e) => {
    };
    return (
        <div>
            <Transfer
                dataSource={mockData}
                titles={['Source', 'Target']}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={handleChange}
                onSelectChange={handleSelectChange}
                onScroll={handleScroll}
                render={item => item.title}
                disabled={disabled}
            />
            <Space style={{ marginTop: 16 }}>
                <Switch
                    unCheckedChildren="disabled"
                    checkedChildren="disabled"
                    checked={disabled}
                    onChange={handleDisable}
                />
            </Space>
        </div>
    )
}