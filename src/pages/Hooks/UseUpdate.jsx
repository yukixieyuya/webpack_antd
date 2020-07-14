import React from 'react';
import useUpdate from '../../plugins/hooks/useUpdate'
export default props => {
    const update = useUpdate()
    return <div>
        {Date.now()}
        <div><button onClick={update}>update</button></div>
    </div>
}