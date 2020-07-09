import React from "react";
import Breadcrumb from './Breadcrumb';
import { Route, Redirect, Switch, withRouter, Link} from 'react-router-dom'

export default props => {
        return (
            <div>
                <Breadcrumb location={props.location} routes={props.routes}/>
                <Switch>
                    {
                        props.routes.map((c, key) => {
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