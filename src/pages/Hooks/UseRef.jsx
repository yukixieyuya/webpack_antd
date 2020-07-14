import React, {useRef, useState} from 'react';
// import useState from "../../plugins/useState";
export default () => {
    const [renderIndex, setRenderIndex] = useState(1);
    const refFromUseRef = useRef();
    const refFromUseCreateRef = React.createRef();
    if(!refFromUseRef.current) {
        refFromUseRef.current = renderIndex
    }
    if(!refFromUseCreateRef.current) {
        refFromUseCreateRef.current = renderIndex
    }
    return (
        <>
            <p> renderIndex: {renderIndex}</p>
            <p>
                <b>refFromUseRef</b> value: {refFromUseRef.current}
            </p>
            <p>
                <b>refFromUseCreateRef</b> value: {refFromUseCreateRef.current}
            </p>
            <button onClick={() => setRenderIndex(prev => prev+1)}>
                ++++
            </button>
        </>
    )
}