import React from "react";
import routes from "./routes";
import Index from '../../components'
export default props => {
    return (
        <Index routes={routes} location={props.location}/>
    );
}