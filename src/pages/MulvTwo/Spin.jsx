import React, {useState} from 'react'
import { Spin, Space } from 'antd';
export default props => {
    return (
        <Space size="middle">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
        </Space>
    )
}