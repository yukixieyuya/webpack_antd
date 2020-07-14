import React, { useRef } from 'react'

import useScroll from '../../plugins/hooks/useScroll';
export default props => {
    const scrollRef = useRef(null)
    const [x, y] = useScroll(scrollRef)

    return <div>
        <div ref={scrollRef}>
            <div className="innerBox"></div>
        </div>
        <div>{ x }, { y }</div>
    </div>
}