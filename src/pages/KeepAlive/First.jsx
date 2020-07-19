import React, {useEffect} from 'react';
import KeepAlive, {AliveScope} from 'react-activation';
import useState from "../../plugins/hooks/useState";
// import axios from "axios";
const Test = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            count: {count}
            <button onClick={() => setCount(count => count + 1)}>add</button>
        </div>
    )
}
export default props => {
    const [show, setShow] = useState(true)
    useEffect(() => {
        // axios.get('/api/yuki/forCurrentUser').then(res => console.log(res))
        // axios.post('/webpackmocker').then(res => console.log(res.data))
        // axios.get('/api/yuki/goods').then(res => console.log(res))
        // axios.get('/api/yuki/aaa').then(res => console.log(res))
        // axios.get('/api/yuki/uuu').then(res => console.log(res))
        // axios.get('/api/aaa/goods').then(res => console.log(res))
        // axios.get('/api/aaa/aaa').then(res => console.log(res))
        // axios.get('/api/aaa/uuu').then(res => console.log(res))
        axios.post('/api/home').then(res => console.log(res))
    })
    return (
        <AliveScope>
            <button onClick={() => setShow(show => !show)}>change</button>
            <div>无keepAlive功能</div>
            {show && <Test/>}
            <div>有keepAlive功能</div>
            {show &&
            <KeepAlive>
                <Test/>
            </KeepAlive>}
        </AliveScope>
    )
}