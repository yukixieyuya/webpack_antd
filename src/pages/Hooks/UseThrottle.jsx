import React from 'react';
import useThrottle from '../../plugins/hooks/useThrottle'
import useState from '../../plugins/hooks/useState'
import useTitle from '../../plugins/hooks/useTitle'
export default (props) => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    useTitle('趣谈前端')
    const [cancel] = useThrottle(() => {
        setB(a)
    }, 2000, [a])

    const changeIpt = (e) => {
        setA(e.target.value)
    }
    return <div>
        <input type="text" onChange={changeIpt}/>
        {b} {a}
    </div>
}