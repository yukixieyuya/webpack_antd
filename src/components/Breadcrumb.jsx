import {Breadcrumb} from "antd";
import React from "react";
import {menus} from '../plugins/menuItem'
import { Link } from 'react-router-dom'
export default props => {
    const {location, routes} = props;
    const pathArr = location.pathname.split('/');
    const breadcrumbs = [];
    const path = `/${pathArr[1]}`;

    const renderBreadcrumb = () => {
        breadcrumbs.push(<Breadcrumb.Item key={'home'}><a href={'/'}>首页</a></Breadcrumb.Item>);
        menus.forEach(c => {
            const bread = c.items && c.items.find(d => d.url === path);
            if(bread) {
                breadcrumbs.push(<Breadcrumb.Item key={'home'}>{c.title}</Breadcrumb.Item>);
                breadcrumbs.push(<Breadcrumb.Item key={'home'}><Link to={bread.url}>{bread.title}</Link></Breadcrumb.Item>)
            }
        });
        const itemBread = routes.find(c => c.path === location.pathname);
        if(itemBread) {
            if(itemBread.title)
                breadcrumbs.push(<Breadcrumb.Item key={'home'}>{itemBread.title}</Breadcrumb.Item>)
        }
        return breadcrumbs
    }
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {renderBreadcrumb()}
        </Breadcrumb>
    )
}