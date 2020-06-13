import React from "react";
import { Route, Redirect, Switch, withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import routes from "../plugins/router";
import Home from "./Home";
import List from "./List";
import Test from "./Test"
class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={routes.query.url()} component={Home}></Route>
                    <Route path={routes.test.url()} component={Test}></Route>
                    <Route path={routes.date.url()} component={List}></Route>
                </Switch>
            </div>
            )
    }
}
export default withRouter (connect(null,null)(App))
