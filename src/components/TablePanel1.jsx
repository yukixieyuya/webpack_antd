
import React, { useState } from 'react';
import { Table, Radio, Divider, Input  } from 'antd';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        render: (text, record) => {
            return (
                <Input placeholder="Basic usage" />
            )
        }
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: '你是',
        dataIndex: 'aaa'
    }
];
const data = [
    {
        id: '111',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        aaa: '123'
    },
    {
        id: '222',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        id: '333',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        id: '444',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    },
];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
export default () => {
    return (
        <div>
            <Table
                rowSelection={{
                    ...rowSelection,
                }}
                rowKey='id'
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}