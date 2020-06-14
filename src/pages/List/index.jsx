import React from "react";
import { DatePicker } from 'antd';


class List extends React.Component{
    onChange = (date, dateString) => {
    };
    render() {
        return (
            <div>
                <DatePicker onChange={this.onChange} />
                <br />
                <DatePicker onChange={this.onChange} picker="week" />
                <br />
                <DatePicker onChange={this.onChange} picker="month" />
                <br />
                <DatePicker onChange={this.onChange} picker="quarter" />
                <br />
                <DatePicker onChange={this.onChange} picker="year" />
            </div>
        );
    }
}
export default List