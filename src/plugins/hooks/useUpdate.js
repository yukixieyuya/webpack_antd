import {useState} from 'react'

const useUpdate = () => {
    const [, setFlag] = useState()
    return () => {
        setFlag(Date.now())
    }
}

export default useUpdate