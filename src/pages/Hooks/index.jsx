import React, {useState} from 'react';
import {Button} from 'antd';
export default props => {
    const [state, setState] = useState({
        loading: false,
        name: 'xieyu',
        data: {
            name: 'wanglulu',
            age: '18',
            sex: 'women'
        }
    })
    const useForm = (value, name) => {

    }
    const onClick = (e) => {
        console.log(e.target.name, e.target.value)
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <p>{state.name}</p>
            <p>{state.data.age}</p>
            <input value={state.name} name="name" onChange={onClick}/>
        </div>
    )
}