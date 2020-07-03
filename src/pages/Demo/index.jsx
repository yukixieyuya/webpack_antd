import {ReducerPanel} from "../../components/ReducerPanel";
import {Card} from "antd";
import TablePanel from "../../components/TablePanel1";
const React = require('react');
class Demo extends React.Component{
    render () {
        return (
            <div>
                <Card>
                    <ReducerPanel/>
                </Card>
                <Card>
                    <TablePanel/>
                </Card>
            </div>
        )
    }
}
export default Demo;