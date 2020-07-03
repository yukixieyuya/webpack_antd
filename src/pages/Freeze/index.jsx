import React, {useState, useEffect} from 'react';
import {Button} from 'antd';
import request from '../../plugins/Fetch';
export default props => {
    const obj2 = {
        internal: {}
    };
    const [state, setState] = useState({
        a: 1878,
        b: 2
    })
    let deep = null;
    useEffect(() => {
        deep = _.cloneDeep(state);
        request.get('/weiyinfu?tab=repositories').then(res => {
            console.log(res)
        })
        console.log(deep, 'deep')
    }, [])

    console.log(state, 'state')
    // console.log(deep == state);
    // 深冻结函数.
    function deepFreeze(obj) {

        // 取回定义在obj上的属性名
        var propNames = Object.getOwnPropertyNames(obj);

        // 在冻结自身之前冻结属性
        propNames.forEach(function(name) {
            var prop = obj[name];

            // 如果prop是个对象，冻结它
            if (typeof prop == 'object' && prop !== null)
                deepFreeze(prop);
        });

        // 冻结自身(no-op if already frozen)
        return Object.freeze(obj);
    }


    // deepFreeze(obj2);
    obj2.internal.a = 'anotherValue';
    console.log(obj2)
    const onClick = () => {
        setState({
            c: 11
        })
    }
    return (
        <div>
            <Button onClick={onClick}>1234</Button>
        </div>
    )
}