import React from "react";
import { Route, Redirect, Switch, withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import routes from "../plugins/router";
class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    {
                        routes.map((c, key) => {
                            if(c.exact)
                                return <Route path={c.node} exact key={key}
                                    render={props => {
                                    const Component =c.component();
                                    return (
                                        <Component {...props}/>
                                    )}
                                    }/>;
                            else
                                return <Route path={c.node} key={key}
                                              render={props => {
                                                  const Component =c.component();
                                                  return (
                                                      <Component {...props}/>
                                                  )}
                                              }/>;
                        })
                    }
                </Switch>
            </div>
            )
    }
}
export default withRouter (connect(null,null)(App))
