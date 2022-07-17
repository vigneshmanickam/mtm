import React from 'react'
import TextArea from "./TextArea";
import {FORM_ACTION_TYPE} from "../../store/actions/form";
import {useDispatch} from "react-redux";

function SolutionText() {
    const storeDispatch = useDispatch();
    const handleOnInput = (e) => {
        storeDispatch({type: FORM_ACTION_TYPE.SET_SOLUTION, payload: e.target.value});
    }
    return (
        <TextArea title="Suggested Solution" onInput={handleOnInput}/>
    );
}

export default SolutionText;
