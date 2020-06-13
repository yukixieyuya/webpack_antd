import React from "react";
import { Button} from 'antd';
import routes from "../../plugins/router";
import Home from "../Home";
import List from "../List";
import { Route, Redirect, Switch, withRouter} from 'react-router-dom'
class Index extends React.Component{
    Primary = () => {
        console.log(routes.test)
        // this.props.history.push()
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path={routes.query.url()} component={Home}></Route>
                    {/*<Route path={routes.test.url()} component={Test}></Route>*/}
                    <Route path={routes.date.url()} component={List}></Route>
                </Switch>
                <Button type="primary" onClick={this.Primary}>Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Button type="primary">12345</Button>
            </div>
        );
    }
}
export default Index