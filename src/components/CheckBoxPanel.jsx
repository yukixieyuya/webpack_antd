import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from 'antd';
// import {formatMessage, injectIntl} from './intl';

class CheckBoxPanel extends PureComponent {
    constructor(props) {
        super(props);
        // 初始化 false 枚举对象
        const checkObj = this.props.options.map(c => ({
            [c.value]: false
        }));
        let falseObj = {};
        checkObj.forEach(c => {
            falseObj = Object.assign(falseObj, c);
        });
        // 初始化 true 枚举对象
        const checkObj2 = this.props.options.map(c => ({
            [c.value]: true
        }));
        let trueObj = {};
        checkObj2.forEach(c => {
            trueObj = Object.assign(trueObj, c);
        });
        // 初始化选中状态
        this.state = {
            indeterminate: false,
            allBtn: false,
            cancelBtn: false,
            isCheck: falseObj,
            value: [],
            trueObj,
            falseObj
        };
    }
    componentDidMount() {
        const value = this.props.value || this.state.value;
        // 深拷贝 false 枚举对象
        let isCheck = {};
        const falseObj = this.state.falseObj;
        const deepObj = JSON.parse(JSON.stringify(falseObj));
        if(value && value.length)
            value.forEach(a => {
                isCheck = Object.assign(deepObj, {[a]: true});
            });
        else
            isCheck = falseObj;
        // 比对选中状态
        this.isCheck(value, isCheck);
    }
    isCheck = (value, isCheck) => {
        if(value.length > 0)
            this.setState({
                indeterminate: true,
                allBtn: false,
                cancelBtn: false,
                isCheck: {...isCheck},
                value
            });
        if(value.length === this.props.options.length)
            this.setState({
                indeterminate: false,
                allBtn: true,
                cancelBtn: false,
                isCheck: {...isCheck},
                value
            });
        if(value.length === 0)
            this.setState({
                indeterminate: false,
                allBtn: false,
                cancelBtn: true,
                isCheck: {...isCheck},
                value
            });
    };
    onChangeAllCheck = e => {
        let newValue = [];
        const isCheck = e.target.checked ? this.state.trueObj : this.state.falseObj;
        if(e.target.checked)
            newValue = Object.keys(isCheck).map(c => c - 0);
        if(typeof this.props.onChange === 'function')
            this.props.onChange(newValue, this.props.id || this.props.name, e);
        this.isCheck(newValue, isCheck);
    };
    onChangeCancelCheck = e => {
        if(typeof this.props.onChange === 'function')
            this.props.onChange([], this.props.id || this.props.name, e);
        this.isCheck([], this.state.falseObj);
    };
    onChangeCheck = (e, value) => {
        let newValue = [];
        const propsValue = this.props.value || this.state.value;
        const isCheck = Object.assign(this.state.isCheck, {[value]: e.target.checked});
        if(e.target.checked)
            newValue = propsValue.concat([value]);
        else {
            const index = propsValue.findIndex(c => c === value);
            newValue = propsValue;
            newValue.splice(index, 1);
        }
        if(typeof this.props.onChange === 'function')
            this.props.onChange(newValue, this.props.id || this.props.name, e);
        this.isCheck(newValue, isCheck);
    };
    render() {
        const {options = []} = this.props;
        const {indeterminate, allBtn, cancelBtn, isCheck} = this.state;
        return (
            <div>
                <div style={{borderBottom: '1px solid #E9E9E9'}}>
                    <Checkbox
                        indeterminate={indeterminate}
                        onChange={this.onChangeAllCheck}
                        checked={allBtn}>
                        <b>
                            {this.props.allCheckText}
                        </b>
                    </Checkbox>
                    {
                        this.props.isCancel ? <Checkbox
                            onChange={this.onChangeCancelCheck}
                            checked={cancelBtn}>
                            <b>
                                {this.props.cancelCheckText}
                            </b>
                        </Checkbox> : null
                    }
                </div>
                {options.map(c => (<div key={c.value} >
                    <Checkbox onChange={e => this.onChangeCheck(e, c.value)} checked={isCheck[c.value]}>
                        {c.text}
                    </Checkbox>
                </div>))}
            </div>);
    }
}
CheckBoxPanel.defaultProps = {
    allCheckText: '全选',
    cancelCheckText: '取消',
    isCancel: false,
};
CheckBoxPanel.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.node,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })).isRequired,
    allCheckText: PropTypes.string,
    cancelCheckText: PropTypes.string,
    id: PropTypes.string,
    isCancel: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func
};

export default CheckBoxPanel;
