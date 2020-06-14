import React from "react";
import { Checkbox, Card, Divider} from 'antd';
import CheckBoxPanel from "../../components/CheckBoxPanel";
import { Route, Redirect, Switch, withRouter, Link} from 'react-router-dom'
// import routes from "../../plugins/router";
import routes from "./routes";
import Demo from '../Demo'

class Index extends React.Component{

    render() {
        return (
            <div>
                <Switch>
                    {
                        routes.map((c, key) => {
                            if(c.exact)
                                return <Route exact path={c.node} key={key}
                                              render={props => {
                                                  const Component =c.component();
                                                  return (
                                                      <Component {...props} />
                                                  )}
                                              }/>;
                            else
                                return <Route path={c.node} key={key}
                                              render={props => {
                                                  console.log(c)
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