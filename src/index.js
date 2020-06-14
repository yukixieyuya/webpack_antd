import React from "react";
import ReactDom from "react-dom";
import App from "./layout/App";
import "./assets/css/newBase.css";
import store from "./plugins/redux";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from 'react-router-dom'
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd'
ReactDom.render(
    <Provider store={store}>
        <HashRouter>
            <ConfigProvider locale={zhCN}>
                <App/>
            </ConfigProvider>
        </HashRouter>
    </Provider>
    ,
    document.getElementById("root")
)