import React from 'react'
import {Button, Slider, Switch} from 'antd';
import {routes} from "./routes";
import useState from '../../plugins/hooks/useState';
export default props => {
    const [disabled, setDisabled] = useState(false);
    const onchange = disabled  => setDisabled(disabled)
    // console.log(disabled)
    const [state, setState] = useState({
        a: 1,
        b: 2
    });
    const onA = () => {
        setState({
            ...state,
            a: state.a - 0 +1
        }, (newState, prevState) => {
            console.log(newState, prevState)
        })

    }
    const useForm = (value, name) => {
        setState({
            ...state,
            [name]: value
        }, (newState, prevState) => {
            console.log(newState, prevState)
        })
    }
    const onChange = e => {
        useForm(e.target.value, e.target.name)
    }
    return (
        <div>
            <Slider defaultValue={30} disabled={disabled} />
            <Slider range defaultValue={[20, 50]} disabled={disabled} />
            Disabled: <Switch size="small" checked={disabled} onChange={onchange} />
            <button onClick={onA}>a</button>
            <input name="a" onChange={onChange}/>
            <button onClick={() => props.history.push(routes.useRef.path)}>useRef</button>
            <button onClick={() => props.history.push(routes.setState.path)}>setState</button>
            <button onClick={() => props.history.push(routes.debounce.path)}>debounce</button>
            <button onClick={() => props.history.push(routes.throttle.path)}>throttle</button>
            <button onClick={() => props.history.push(routes.update.path)}>update</button>
            <button onClick={() => props.history.push(routes.scroll.path)}>scroll</button>
            <p>{state.a}</p>
        </div>
    )
}