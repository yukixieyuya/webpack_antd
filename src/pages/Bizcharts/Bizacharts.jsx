import React, {useState} from 'react'
import {Button, Row, Col} from 'antd';
import {routes} from "./routes";
// import styles from 'style.css'
export default props => {
    return (
        <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1}}>
                <Button type="primary" onClick={() => props.history.push(routes.labelline.path)}>基础饼图</Button>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                <Button type="primary" onClick={() => props.history.push(routes.grouped.path)}>极坐标分组柱状图</Button>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                <Button type="primary" onClick={() => props.history.push(routes.point.path)}>点图</Button>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                <Button type="primary" onClick={() => props.history.push(routes.arc.path)}>弧形链接图</Button>
                <Button onClick={() => props.history.push(routes.arc1.path)}>下一个</Button>
            </Col>
        </Row>
    )
}