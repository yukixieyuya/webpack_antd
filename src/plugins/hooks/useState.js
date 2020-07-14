import { useEffect, useRef, useState } from 'react'

export default (initState) => {
    const [state, setState] = useState(initState)
    let isUpdate = useRef();
    let prevState = useRef();
    const setXState = (state, callback) => {
        setState(prev => {
            isUpdate.current = callback;
            prevState.current = prev;
            return typeof state === 'function' ? state(prev) : state
        })
    }
    useEffect(() => {
        if(typeof isUpdate.current === 'function') {
            isUpdate.current(state, prevState.current)
        }
    }, [state])

    return [state, setXState]
}