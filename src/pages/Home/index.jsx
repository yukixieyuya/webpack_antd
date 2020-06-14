import React from "react";
import {Breadcrumb} from 'antd';
import CheckBoxPanel from "../../components/CheckBoxPanel";
import { Route, Redirect, Switch, withRouter, Link} from 'react-router-dom'
// import routes from "../../plugins/router";
import routes from "./routes";
import Demo from '../Demo'

class Index extends React.Component{
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>submenu1</Breadcrumb.Item>
                    <Breadcrumb.Item>demo1</Breadcrumb.Item>
                </Breadcrumb>
                <Switch>
                    {
                        routes.map((c, key) => {
                            if(c.exact)
                                return <Route exact path={c.path} key={key}
                                              render={props => {
                                                  const Component =c.component();
                                                  return (
                                                      <Component {...props} />
                                                  )}
                                              }/>;
                            else
                                return <Route path={c.path} key={key}
                                              render={props => {
                                                  const Component =c.component();
                                                  return (
                                                      <Component {...props} />
                                                  )}
                                              }/>;
                        })
                    }
                </Switch>
            </div>
        );
    }
}
export default Index