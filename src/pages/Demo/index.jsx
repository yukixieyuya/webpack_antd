import {ReducerPanel} from "../../components/ReducerPanel";
import {Card} from "antd";

const React = require('react');
class Demo extends React.Component{
    render () {
        return (
            <div>
                <Card>
                    <ReducerPanel/>
                </Card>
            </div>
        )
    }
}
export default Demo;