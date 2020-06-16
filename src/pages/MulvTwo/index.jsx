import React from "react";
import { Route, Redirect, Switch, withRouter, Link} from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb';
import routes from "./routes";

class List extends React.Component{
    render() {
        return (
            <div>
                <Breadcrumb location={this.props.location} routes={routes}/>
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
export default List