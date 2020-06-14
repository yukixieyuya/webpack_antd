import React from "react";
import { Route, Redirect, Switch, withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {GETID} from "../store/actions";
import {menus} from '../plugins/menuItem';
import selectedIcon from "../utils/selectedIcon";
import { Layout, Menu } from 'antd';
import Pages from "../pages/App";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
const keys = menus.map(c => ({
    key: c.key
}));
class App extends React.Component {
    constructor(props) {
        super(props);
        const subKeys = JSON.parse(window.localStorage.getItem('subKeys')) || [];
        if(this.props.location.pathname !== '/') {
            const key = this.updateDefaultSelectedKeys(this.props.location.pathname) || '';
            this.state = {
                collapsed: false,
                selectedKey: key,
                subKeys
            }
        } else {
            this.state = {
                collapsed: false,
                selectedKey: '',
                subKeys: []
            }
        }
    }
    updateDefaultSelectedKeys = (path) => {
        const newPath =`/${path.split('/')[1]}`;
        const keyPathLast = window.localStorage.getItem('keyPath');
        const subMenu = menus.find(c => keyPathLast === c.key);
        const meunPath = subMenu.items.find(c => newPath === c.url);
        switch (newPath) {
            case meunPath.url:
                return meunPath.key;
            default:
                return ''
        }
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    onSelectedKey = options => {
        const keyPath = options.keyPath[options.keyPath.length - 1];
        window.localStorage.setItem('keyPath', keyPath);
        this.setState({
            selectedKey: options.key
        });
        const subMenu = menus.find(c => keyPath === c.key);
        const meunPath = subMenu.items.find(c => options.key === c.key);
        switch (options.key) {
            case meunPath.key:
                return this.props.history.push(meunPath.url);
            default:
                return ''
        }
    };
    // getSnapshotBeforeUpdate(prevProps){//props改变时
    //     if(prevProps.location.pathname !== this.props.location.pathname){//当前地址不等于目标地址
    //         window.scrollTo(0,0);//滚动到顶部
    //     }
    //     return null
    // };
    onOpenChange = key => {
        window.localStorage.setItem('subKeys', JSON.stringify(key));
        this.setState({
            subKeys: key
        })
    };
    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={"dm1"} onClick={this.onSelectedKey} defaultOpenKeys={this.state.subKeys} onOpenChange={this.onOpenChange} selectedKeys={this.state.selectedKey}>
                        {
                            menus.map(c => (
                                <SubMenu key={c.key} icon={selectedIcon(c.icon)} title={c.title}>
                                    {
                                        c.items.map(m => (
                                            <Menu.Item key={m.key}>
                                                {m.title}
                                            </Menu.Item>
                                        ))
                                    }
                                </SubMenu>
                            ))
                        }
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Pages/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
// const mapState = (state) => {
//     return {
//         song: state.song,
//         list: state.playList.tracks
//     }
// };
//
// const mapDispatch = (dispatch) => {
//     return {
//         plays: (s) => {
//             let id = s.id;
//             GETID(dispatch,id)
//         },
//     }
// };
export default withRouter (connect(null,null)(App))