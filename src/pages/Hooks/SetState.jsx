import React, {useRef, } from 'react';
import useState from "../../plugins/hooks/useState";
export default () => {
    const [renderIndex, setRenderIndex] = useState(1);
    const add = () => {
        setRenderIndex(renderIndex + 1)
        setRenderIndex(renderIndex + 1)
    }
    const add2 = () => {
        setRenderIndex(pre => pre + 1)
        setRenderIndex(pre => pre + 1, (newState, preState) => console.log(newState, preState))
        console.log(renderIndex)
    }
    return (
        <>
            <p> renderIndex: {renderIndex}</p>

            <button onClick={add}>
                第一个加
            </button>
            <button onClick={add2}>
                第二个加
            </button>
        </>
    )
}