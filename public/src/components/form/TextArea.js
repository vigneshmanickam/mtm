import React from 'react'

function Textarea(props) {
    return (
        <div style={{width: "250px", margin: "10px"}}>
            <span>{props.title}</span>
            <textarea style={{width: "100%", height: "80px"}} onInput={props.onInput}>
            </textarea>
        </div>
    );
}

export default Textarea;
