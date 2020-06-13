import React from "react";
import ReactDom from "react-dom";
import App from "./layout/App";
import "./assets/css/newBase.css";
import store from "./plugins/redux";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from 'react-router-dom'
ReactDom.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
    ,
    document.getElementById("root")
)