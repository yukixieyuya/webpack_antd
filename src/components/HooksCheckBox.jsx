import React, {useState, useEffect} from 'react';
import {Checkbox} from 'antd';
export const HooksCheckBox = props => {
    const checkObj = props.options.map(c => ({
        [c.value]: false
    }));
    let oldFalseObj = {};
    checkObj.forEach(c => {
        oldFalseObj = Object.assign(oldFalseObj, c);
    });
    // 初始化 true 枚举对象
    const checkObj2 = props.options.map(c => ({
        [c.value]: true
    }));
    let oldTrueObj = {};
    checkObj2.forEach(c => {
        oldTrueObj = Object.assign(oldTrueObj, c);
    });

    // const [indeterminate, setIndeterminate] = useState(false);
    // const [allBtn, setAllBtn] = useState(false);
    // const [cancelBtn, setCancelBtn] = useState(false);
    // const [isCheck, setIsCheck] = useState(oldFalseObj);
    // const [value, setValue] = useState([]);
    // const [trueObj] = useState(oldTrueObj);
    // const [falseObj] = useState(oldFalseObj);
    const [state, setState] = useState({
        indeterminate: false,
        allBtn: false,
        cancelBtn: false,
        isCheck: oldFalseObj,
        value: [],
        trueObj: oldTrueObj,
        falseObj: oldFalseObj
    })
    const changeCheck = (value, check) => {
        if(value.length > 0) {
            // setIndeterminate(true);
            // setAllBtn(false);
            // setCancelBtn(false);
            // setIsCheck({...check});
            // setValue(value)
            setState({
                ...state,
                indeterminate: true,
                allBtn: false,
                cancelBtn: false,
                isCheck: {...check},
                value: value,
            })
        }
        if(value.length === props.options.length) {
            // setIndeterminate(false);
            // setAllBtn(true);
            // setCancelBtn(false);
            // setIsCheck({...check});
            // setValue(value)
            setState({
                ...state,
                indeterminate: false,
                allBtn: true,
                cancelBtn: false,
                isCheck: {...check},
                value: value,
            })
        }
        if(value.length === 0) {
            // setIndeterminate(false);
            // setAllBtn(false);
            // setCancelBtn(true);
            // setIsCheck({...check});
            // setValue(value)
            setState({
                ...state,
                indeterminate: false,
                allBtn: false,
                cancelBtn: true,
                isCheck: {...check},
                value: value,
            })
        }
    };
    const onChangeAllCheck = e => {
        let newValue = [];
        const isCheck = e.target.checked ? state.trueObj : state.falseObj; //
        if(e.target.checked)
            newValue = Object.keys(isCheck).map(c => c - 0);
        if(typeof props.onChange === 'function')
            props.onChange(newValue, props.id || props.name, e);
        changeCheck(newValue, isCheck);
    };
    const onChangeCancelCheck = e => {
        if(typeof props.onChange === 'function')
            props.onChange([], props.id || props.name, e);
        changeCheck([], state.falseObj); //
    };
    const onChangeCheck = (e, v) => {
        let newValue = [];
        const propsValue = props.value || value;
        const check = Object.assign(state.isCheck, {[v]: e.target.checked}); //
        if(e.target.checked)
            newValue = propsValue.concat([v]);
        else {
            const index = propsValue.findIndex(c => c === v);
            newValue = propsValue;
            newValue.splice(index, 1);
        }
        if(typeof props.onChange === 'function')
            props.onChange(newValue, props.id || props.name, e);
        changeCheck(newValue, check);
    };
    useEffect(() => {
        const value = props.value || state.value; //

        // 深拷贝 false 枚举对象
        let isCheck = {};
        const deepObj = JSON.parse(JSON.stringify(state.falseObj)); //
        if(value && value.length)
            value.forEach(a => {
                isCheck = Object.assign(deepObj, {[a]: true});
            });
        else
            isCheck = state.falseObj; //
        // 比对选中状态
        changeCheck(value, isCheck);
    }, []);
    const {options = []} = props;
    return (
            <div>
                1234
                <div style={{borderBottom: '1px solid #E9E9E9'}}>
                    <Checkbox
                        indeterminate={state.indeterminate} //
                        onChange={onChangeAllCheck}
                        checked={state.allBtn}> //
                        <b>
                            {props.allCheckText}
                        </b>
                    </Checkbox>
                    {
                        props.isCancel ? <Checkbox
                            onChange={onChangeCancelCheck}
                            checked={state.cancelBtn}> //
                            <b>
                                {props.cancelCheckText}
                            </b>
                        </Checkbox> : null
                    }
                </div>
                {options.map(c => (<div key={c.value} >
                    <Checkbox onChange={e => onChangeCheck(e, c.value)} checked={state.isCheck[c.value]}> //
                        {c.text}
                    </Checkbox>
                </div>))}
            </div>);
};
